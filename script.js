class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

/* carrosel */

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });
  
  
//mobile menu
  const menu = document.getElementById('mobile-menu');
  let   menu1 = document.getElementById('menu');
  let    back = document.getElementById('back');
  let item = document.getElementsByClassName('menu-item');
  let teste = 0 
  function fundo(){

      
    console.log(teste)
    if(teste >=1){
        
        
        teste-=1
        menu.style.paddingLeft = menu.style.fontSize;
        menu.style.paddingRight = "0"
        menu.style.transition = "padding-Right 0.8s"; 
             
        menu1.addEventListener('click', function(){ back.style.display = 'none' });
      
     
      
    }
    else{
        menu.style.paddingLeft = "0"
        menu.style.paddingRight = "100px"
        console.log("sadsda")
        teste = teste+1
        menu.style.transition = "padding-Right 2s";    
     
        for (var i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function(){ back.style.display = 'none'});
        }
        
        menu1.addEventListener('click', function(){ back.style.display = 'block' });
     
     
      
      
    }
  }
  function fonte(e) {

	var elemento = $(".text-center");
    var elemento1 = $(".text-head");
	var fonte = parseInt(elemento.css('font-size'));
    var fonte2 = parseInt(elemento1.css('font-size'));
	var body = $("body");
	const fonteNormal = parseInt(body.css('font-size'));


	if (e == 'a') {
		fonte++;
	}
	if (e == 'd'){
		fonte--;
	}
	if (e == 'n'){
		fonte = fonteNormal;
	}

	elemento.css("fontSize", fonte);
    if (e == 'a') {
		fonte2++;
	}
	if (e == 'd'){
		fonte2--;
	}
	if (e == 'n'){
		fonte2 = fonteNormal;
	}

	elemento1.css("fontSize", fonte2);
}
let contaudio = 0
function playAudio() {

    if(contaudio >=1){
        let x = document.getElementById("myAudio");
        x.pause();
        contaudio-= 1
    }
    else{
    let x = document.getElementById("myAudio");
    x.play();
    contaudio+= 1
    }
    
}



var player = document.getElementById("myAudio");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
}

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current1.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 150) / duration);
  progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}

/* GESSIKA2 */

var GÉSSIKA2 = document.getElementById("GÉSSIKA2");
let playbtn1 = document.getElementById("playbtn1");
var playpause = function () {
    if (GÉSSIKA2.paused) {
        GÉSSIKA2.play();
    } else {
        GÉSSIKA2.pause();
    }
  }
  
  playbtn1.addEventListener("click", playpause);
  
  GÉSSIKA2.onplay = function () {
    playbtn1.classList.remove("fa-play");
    playbtn1.classList.add("fa-pause");
  }
  
  GÉSSIKA2.onpause = function () {
    playbtn1.classList.add("fa-play");
    playbtn1.classList.remove("fa-pause");
  }
  
  GÉSSIKA2.ontimeupdate = function () {
    let ct = GÉSSIKA2.currentTime;
    current2.innerHTML = timeFormat(ct);
    //progress
    let duration = GÉSSIKA2.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
  }

  /* GESSIKA3 */

var GÉSSIKA3 = document.getElementById("GÉSSIKA3");
let playbtn3 = document.getElementById("playbtn3");
var playpause = function () {
    if (GÉSSIKA3.paused) {
        GÉSSIKA3.play();
    } else {
        GÉSSIKA3.pause();
    }
  }
  
  playbtn3.addEventListener("click", playpause);
  
  GÉSSIKA3.onplay = function () {
    playbtn3.classList.remove("fa-play");
    playbtn3.classList.add("fa-pause");
  }
  
  GÉSSIKA3.onpause = function () {
    playbtn3.classList.add("fa-play");
    playbtn3.classList.remove("fa-pause");
  }
  
  GÉSSIKA3.ontimeupdate = function () {
    let ct = GÉSSIKA3.currentTime;
    current3.innerHTML = timeFormat(ct);
    //progress
    let duration = GÉSSIKA3.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
  }