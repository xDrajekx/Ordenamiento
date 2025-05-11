document.addEventListener('DOMContentLoaded', () => {
  const evento2 = document.querySelectorAll('.evento2');
  const Evento2 = document.querySelectorAll('.Evento2');

  evento2.forEach(raton => {
    raton.addEventListener('mouseover', () => {
      const Colors = raton.nextElementSibling;
      Colors.style.display = 'block';
    });
    raton.addEventListener('mouseout', () => {
      const Colors = raton.nextElementSibling;
      Colors.style.display = 'none';
    });
  });
     
  Evento2.forEach(raton2 => {
    raton2.addEventListener('mouseover', () => {
      raton2.style.display = 'block';
    });
    raton2.addEventListener('mouseout', () => {
      raton2.style.display = 'none';
    });
  });
});