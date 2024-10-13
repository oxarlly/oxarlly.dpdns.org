// 使用 ip-api API 获取属地信息并更新 footer
fetch('http://ip-api.com/json/')
  .then(response => response.json())
  .then(data => {
    // 获取区县和城市信息
    const region = data.regionName || ''; // 省或州
    const city = data.city || ''; // 城市
    const customText = '位置：' + city + ' 千顷文化'; // 自定义文本

    // 更新 footer 的 custom_text
    const footerElement = document.querySelector('.footer .custom_text');
    if (footerElement) {
      footerElement.textContent = customText;
    }
  })
  .catch(error => {
    console.error('获取 IP 位置时出错：', error);
  });
