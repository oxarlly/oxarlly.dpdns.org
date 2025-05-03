<template>
  <div>
    <!-- Quill 编辑器的容器 -->
    <quill-editor v-model="editorContent" :options="editorOptions" />
  </div>
</template>

<script>
// 导入 Quill 编辑器的相关包
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.snow.css'; // 引入编辑器的样式

export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      // 编辑器内容绑定的变量
      editorContent: '',
      // 编辑器的配置选项
      editorOptions: {
        theme: 'snow', // 设置主题
        placeholder: '请输入内容...', // 设置占位符
        modules: {
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            ['blockquote', 'code-block'],
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
/* 你可以添加一些自定义样式 */
</style>
