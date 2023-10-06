
  const toggleMenuBtn = document.getElementById('toggleMenu');
  const menuSecundario = document.getElementById('menu-secundario');

  toggleMenuBtn.addEventListener('click', function() {
    if (menuSecundario.style.display === 'none') {
      menuSecundario.style.display = 'block';
    } else {
      menuSecundario.style.display = 'none';
    }
  });
  
  

