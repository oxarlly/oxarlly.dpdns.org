// 使用 ip-api API 获取属地信息并更新 footer
fetch('http://ip-api.com/json/')
  .then(response => response.json())
  .then(data => {
    // 从 API 返回的数据中获取区县信息
    const district = data.district || ''; // 请确保使用包含区县信息的 API
    const city = data.city || '';
    const customText = '位置：' + district + city + '| 千顷文化';

    // 将 custom_text 更新到 footer 的位置
    const footerElement = document.querySelector('.footer .custom_text');
    if (footerElement) {
      footerElement.textContent = customText;
    }
  })
  .catch(error => {
    console.error('获取 IP 位置时出错：', error);
  });
