fetch('../partials/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
  })
  .catch(error => console.error('Error loading the nav:', error));
