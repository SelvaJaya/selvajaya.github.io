//sidenav

      var menuBtn = document.getElementById("menuBtn");
      var sideNav = document.getElementById("sideNav");
  
      sideNav.style.right = "-250px";
      menuBtn.onclick = function(){
          if(sideNav.style.right == "-250px"){
              sideNav.style.right = "0";
          }
          else{
              sideNav.style.right = "-250px";
          }
      }
    


//scroll

  window.sr= ScrollReveal();
  sr.reveal('.sm-heading',{duration:1000});
  sr.reveal('#menuBtn',{duration:1000});
  sr.reveal('button',{duration:1000});
  sr.reveal('',{duration:1000});

