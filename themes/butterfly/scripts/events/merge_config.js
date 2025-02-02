const getFileNameFromUrl = (url) => {
  try {
    const decodedURL = decodeURIComponent(url);
    const parts = decodedURL.split('/');
    return parts[parts.length - 2];
  } catch (e) {
    return '';
  }
};

module.exports = function(hexo) {
  hexo.extend.filter.register('theme_config', function(config) {
    config.post_edit = {
      enable: true,
      url: `https://qexo-five-pied.vercel.app/edit.html?file=${getFileNameFromUrl(':url')}.md&postname=${getFileNameFromUrl(':url')}`,
      text: '编辑此页'
    };
    return config;
  });
};
