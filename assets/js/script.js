document.getElementById('navbarToggle').addEventListener('click', function() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('show');
  });

// POPUP BLOG
  // Select all buttons that can open a popup
document.querySelectorAll('.open-popup').forEach(button => {
    button.addEventListener('click', function() {
      const popupId = this.getAttribute('data-popup-id');
      document.getElementById(popupId).style.display = 'flex';
    });
  });
  
  // Select all close buttons within popups
  document.querySelectorAll('.popup-close').forEach(button => {
    button.addEventListener('click', function() {
      const popupId = this.getAttribute('data-popup-id');
      document.getElementById(popupId).style.display = 'none';
    });
  });
  
  // Close the popup if the user clicks outside the popup content
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
      event.target.style.display = 'none';
    }
  });
  
  