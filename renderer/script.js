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


//date and time
//
//'undefined' = uses the browser's or system's default locale
function updateDateTime(){
  const now = new Date();

  const year = now.getFullYear()
  const month = now.toLocaleDateString(undefined, {month:'long'});
  const day = now.getDate();
  const weekday = now.toLocaleDateString(undefined, {weekday:'long'});

  const time_options = {hour: '2-digit', minute: '2-digit', hour12: true};
  const timestr = now.toLocaleTimeString(undefined, time_options);

  console.log(year, month, day, weekday, timestr);
}

updateDateTime();