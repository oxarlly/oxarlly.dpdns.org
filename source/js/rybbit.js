document.addEventListener('pjax:complete', () => {
  rybbit.pageview(window.location.pathname);
});

document.querySelectorAll('.recent-post-item').forEach(item => {
  item.addEventListener('click', () => {
    rybbit.event('post_click', { title: item.querySelector('.post-title').textContent });
  });
});

document.querySelector('#search-button').addEventListener('click', () => {
  rybbit.event('search', { query: document.querySelector('#search-input').value });
});