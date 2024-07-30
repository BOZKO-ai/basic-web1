// Simple JavaScript function to toggle navigation menu on small screens
const toggleMenu = () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
};

// Event listener for the menu button
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
