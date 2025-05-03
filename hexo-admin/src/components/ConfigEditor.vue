<template>
  <el-form :model="config" label-width="120px">
    <el-form-item label="站点名称">
      <el-input v-model="config.siteName" placeholder="请输入站点名称"></el-input>
    </el-form-item>
    <el-form-item label="启用评论">
      <el-switch v-model="config.enableComments"></el-switch>
    </el-form-item>
    <el-form-item label="自定义 CSS">
      <el-input v-model="config.customCss" type="textarea" placeholder="请输入自定义 CSS"></el-input>
    </el-form-item>
    <el-button type="primary" @click="saveConfig">保存配置</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      config: {
        siteName: '我的 Hexo 博客',
        enableComments: true,
        customCss: ''
      }
    };
  },
  methods: {
    saveConfig() {
      // 保存配置到后端 API（会调用后端处理）
      this.$axios.post('/api/saveConfig', this.config)
        .then(response => {
          this.$message.success('配置保存成功');
        })
        .catch(error => {
          this.$message.error('保存配置失败');
        });
    }
  }
};
</script>
