const toggle = document.getElementById("toggle")
const overlayNav = document.getElementById("overlay-Navbar"); 
const nav = document.getElementById('navigation');
      
      toggle.addEventListener("click", OpenNavbar);
      overlayNav.addEventListener("click", CloseNavbar); 
      
      function OpenNavbar(){
          nav.classList.toggle('active');
          overlayNav.classList.toggle('active');
          sec.classList.toggle('active')
      }
      function CloseNavbar(){
          nav.classList.remove('active');
          overlayNav.classList.remove('active');
          sec.classList.remove('active')
      }


