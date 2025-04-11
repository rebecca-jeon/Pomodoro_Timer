//nav_bar
window.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      fetch('components/nav_bar.html')
        .then(response => response.text())
        .then(data => {
          navPlaceholder.innerHTML = data;
  
          //change the coloour of the link when the user is on the page
          const path = window.location.pathname.split('/').pop();
          const links = document.querySelectorAll('nav a');
          links.forEach(link => {
            if (link.getAttribute('href') === path) {
              link.classList.add('active');
            }
          });
        });
    }
  });