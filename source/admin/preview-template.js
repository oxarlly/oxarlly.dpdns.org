CMS.registerPreviewTemplate('blog', ({ entry, widgetFor }) => {
    // 获取 Butterfly 主题的 CSS 文件路径 (你需要根据你的实际情况修改)
    const cssPath = '/css/index.css'; // 假设你的主题 CSS 文件在 public/css/style.css
  
    // 创建 <link> 标签
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssPath;
  
    // 将 <link> 标签添加到 <head> 中
    document.head.appendChild(link);
  
    return (
      <div className="blog-post">
        <h1>{entry.getIn(['data', 'title'])}</h1>
        <p>Published on: {entry.getIn(['data', 'date'])}</p>
        <div className="content">{widgetFor('body')}</div>
      </div>
    );
  });
  