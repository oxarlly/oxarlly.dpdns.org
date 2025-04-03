const { Octokit } = require("@octokit/rest"); // 用于访问 GitHub API
const fs = require('fs');
const path = require('path');

module.exports = {
  onPreBuild: async ({ inputs, utils: { build, status, git } }) => {
    try {
      // 1. 获取 GitHub 仓库信息
      const repoOwner = inputs.repoOwner;
      const repoName = inputs.repoName;
      const branch = inputs.branch;
      const contentPath = inputs.contentPath; // Hexo 内容存放路径

      // 2. 初始化 Octokit (GitHub API 客户端)
      const octokit = new Octokit({
        auth: inputs.githubToken, // 需要 GitHub Token
      });

      // 3. 获取 Decap CMS 存储的内容 (这里假设内容存储在 GitHub 仓库中)
      //    你需要根据你的 Decap CMS 的配置修改获取内容的方式
      const { data: files } = await octokit.repos.getContent({
        owner: repoOwner,
        repo: repoName,
        path: contentPath,
        ref: branch,
      });

      // 4. 将获取到的内容写入 Hexo 的源文件目录
      for (const file of files) {
        if (file.type === 'file' && file.name.endsWith('.md')) {
          const filePath = path.join(inputs.hexoSourceDir, file.name);
          const { data: fileContent } = await octokit.repos.getContent({
            owner: repoOwner,
            repo: repoName,
            path: file.path,
            ref: branch,
          });

          const content = Buffer.from(fileContent.content, fileContent.encoding).toString(); // 解码内容

          fs.writeFileSync(filePath, content);
          console.log(`写入文件: ${filePath}`);
        }
      }

      status.show({ summary: 'Successfully synced content from Decap CMS to Hexo' });

    } catch (error) {
      console.error(error);
      build.failBuild('Failed to sync content from Decap CMS to Hexo', { error });
    }
  },
};
