let pinmenu = document.getElementsByClassName("div-middle")[0];

function Change(){
    if(pinmenu.style.display === 'none'){
        pinmenu.style.display = 'block'
    }
    else{
        pinmenu.style.display = "none"
    }
}


function checkWidth() {
    var viewportWidth = window.innerWidth;
    if (viewportWidth == 1024) {
        pinmenu.style.display = 'none'
    }
    else{
        pinmenu.style.display = 'none'
    }
  }

checkWidth();
window.addEventListener('resize', checkWidth);