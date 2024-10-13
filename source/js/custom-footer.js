function getLocation() {
  const timeout = setTimeout(() => {
    document.getElementById("location").innerText = "无法获取位置信息，请稍后再试 | 千顷文化";
  }, 5000); // 5秒后超时

  fetch('https://ip-api.com/json/')
    .then(response => response.json())
    .then(data => {
      clearTimeout(timeout);
      if (data && data.city) {
        document.getElementById("location").innerText = `位置：${data.city} | 千顷文化`;
      } else {
        document.getElementById("location").innerText = "位置信息不可用 | 千顷文化";
      }
    })
    .catch(error => {
      clearTimeout(timeout);
      console.error("获取位置信息时出错:", error);
      document.getElementById("location").innerText = "获取位置信息失败 | 千顷文化";
    });
}

getLocation();
