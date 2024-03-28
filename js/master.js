
function openGoogleMap() {
    var googleMapsUrl = "https://maps.app.goo.gl/pdyakTKJqCUnJXeu7";

// Open the Google Maps URL in a new tab/window
window.open(googleMapsUrl);
}

function sendEmail() {
    var formData = new FormData(document.getElementById('myForm'));

    fetch(' http://localhost:3000/send-email', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('myForm').reset();
        window.scrollTo(0, 0);  
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send email. Please try again later.');
        
    });
}


const panels = document.querySelectorAll('.panel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

// Function to update panels based on currentIndex
function updatePanels() {
panels.forEach((panel, index) => {
    if (index === currentIndex) {
        panel.classList.add('active');
    } else {
        panel.classList.remove('active');
    }
});
}

// Event listener for left arrow click and touchstart
leftArrow.addEventListener('click', () => {
currentIndex = (currentIndex === 0) ? panels.length - 1 : currentIndex - 1;
updatePanels();
});

leftArrow.addEventListener('touchstart', () => {
currentIndex = (currentIndex === 0) ? panels.length - 1 : currentIndex - 1;
updatePanels();
});

// Event listener for right arrow click and touchstart
rightArrow.addEventListener('click', () => {
currentIndex = (currentIndex === panels.length - 1) ? 0 : currentIndex + 1;
updatePanels();
});

rightArrow.addEventListener('touchstart', () => {
currentIndex = (currentIndex === panels.length - 1) ? 0 : currentIndex + 1;
updatePanels();
});

// Event listener for panel click
panels.forEach(panel => {
panel.addEventListener('click', () => {
    currentIndex = Array.from(panels).indexOf(panel);
    updatePanels();
});
});

// Event listener for touchstart event to simulate hover on touch devices
panels.forEach(panel => {
panel.addEventListener('touchstart', () => {

    // Remove active class from all panels
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    // Add active class to the touched panel
    panel.classList.add('active');
});
});

// Function to remove active classes from all panels
function removeActiveClasses() {
panels.forEach(panel => {
    panel.classList.remove('active');
});
}

document.getElementById('toggleMenu').addEventListener('click', function() {
var menu = document.getElementById('menu');
if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.style.right = '0';
} else {
    closeMenu();
}
});

function closeMenu() {
var menu = document.getElementById('menu');
menu.style.right = '-300px'; /* Slide back to hide */
setTimeout(function() {
    menu.classList.add('hidden');
}, 300); // Transition duration
}

// Close the menu when a menu item is clicked
var menuItems = document.querySelectorAll('#menu ul li a');
menuItems.forEach(function(item) {
item.addEventListener('click', function() {
    closeMenu();
});
});
var isMobile = window.innerWidth <= 768;
var scrollPositions = {
"home": 0,
"about": 0,
"services":isMobile ? document.body.scrollHeight * 0.88:document.body.scrollHeight * 0.86,
"contactus":isMobile ? document.body.scrollHeight * 0.96:document.body.scrollHeight * 0.99,
"Enquirey":document.body.scrollHeight * 0.99,
"team": isMobile ? document.body.scrollHeight * 0.94 : document.body.scrollHeight * 0.98
// Example scroll position for "contact" section
};
var menuItems = document.querySelectorAll('#menu ul li a');
menuItems.forEach(function(item) {

item.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    closeMenu(); // Close the menu
    var targetId = item.getAttribute('href').substring(1); // Get the target section ID
    var targetSection = document.getElementById(targetId); // Get the target section element

    if(targetId ==='/blogger/index.html'){
window.open(this.href, '_blank');
}
    if (targetSection) {
        var scrollTop = scrollPositions[targetId]; // Get the scroll position of the target section
        window.scrollTo({
            top: scrollTop,
            behavior: 'smooth' // Scroll to the target section smoothly
        });
    }
});
});


    // document.addEventListener("DOMContentLoaded", function () {
    //     const sections = document.querySelectorAll(".section");

    //     function checkInView() {
    //         sections.forEach((section, index) => {
    //             const rect = section.getBoundingClientRect();
    //             if (rect.top < window.innerHeight && rect.bottom >= 0) {
    //                 const content = section.querySelector(".content");
    //                 content.style.animationDelay = index * 0.5 + "s";
    //                 content.style.opacity = "1"; // Ensure content is visible
    //             }
    //         });
    //     }

    //     window.addEventListener("scroll", checkInView);
    //     window.addEventListener("resize", checkInView);

    //     checkInView(); // Call checkInView initially to animate visible sections
    // });
    var texts = [""]; // Define your texts here
    var currentSection = 0;
    var scrollingSection = document.getElementById("scrollingSection");

    function changeText() {
        var scrollingText = document.getElementById("scrollingText");
        scrollingText.textContent = texts[currentSection];
    }

    function changeSection() {
        // var sections = document.querySelectorAll(".section");
        var windowHeight = window.innerHeight;
        var scrollPosition = window.pageYOffset;
    var scroll = window.scrollY;
    if(scroll >= 700){
        scrollingText.style.fontSize = '10px';
    }
        // Find current section
        var newSection = Math.floor(scrollPosition / windowHeight);

        // Update current section if changed
        if (newSection !== currentSection) {
            currentSection = newSection;
            changeText();
        }
    }

    // Initial text
    changeText();

    // Listen for scroll events to change sections
    window.addEventListener("scroll", changeSection);
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        // var sectionHeight = document.querySelector('.section').offsetHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollPosition1 = (scrollTop / (document.body.scrollHeight - windowHeight)) * 100;
      
        var scrollingText = document.getElementById('scrollingText');
        var maxFontSize = 10; // Maximum font size
        var minFontSize = 6; // Minimum font size

        // Calculate the maximum scroll position
        var maxScroll = window.innerHeight;

        // Calculate the font size based on the scroll position
        var fontSize = minFontSize + (maxFontSize - minFontSize) * (scrollPosition / maxScroll);
       
        var lastScrollTop = 1000;
        var endPosition =2000;
        var colorChangepos =3900;


        var section = document.getElementById('section');
        // var box = document.getElementById('box');
        var isMobile = window.innerWidth <= 768; // Assuming a screen width of 768px or less is considered mobile
        var scrollThreshold1 = document.body.scrollHeight * 0.1;
        var scrollThreshold2 = document.body.scrollHeight * 0.2;
        var scrollThreshold25= document.body.scrollHeight * 0.25;

        var scrollThreshold3 = document.body.scrollHeight * 0.3;
        var scrollThreshold3a = document.body.scrollHeight * 0.31;
        var scrollThreshold3b = document.body.scrollHeight * 0.32;
        var scrollThreshold3c = document.body.scrollHeight * 0.33;
        var scrollThreshold3d = document.body.scrollHeight * 0.34;
        var scrollThreshold3e = document.body.scrollHeight * 0.35;
        var scrollThreshold3f = document.body.scrollHeight * 0.36;
        var scrollThreshold3g = document.body.scrollHeight * 0.37;
        var scrollThreshold3h = document.body.scrollHeight * 0.38;
        var scrollThreshold3i = document.body.scrollHeight * 0.39;

        var scrollThreshold4a = document.body.scrollHeight * 0.41;
        var scrollThreshold4b = document.body.scrollHeight * 0.42;
        var scrollThreshold4c = document.body.scrollHeight * 0.42;
        var scrollThreshold4d = document.body.scrollHeight * 0.43;
        var scrollThreshold4e = document.body.scrollHeight * 0.44;
        var scrollThreshold4f = document.body.scrollHeight * 0.45;
        var scrollThreshold4g = document.body.scrollHeight * 0.46;
        var scrollThreshold4h = document.body.scrollHeight * 0.47;
        var scrollThreshold4i = document.body.scrollHeight * 0.48;
        var scrollThreshold4j = document.body.scrollHeight * 0.6;
        var scrollThreshold4 = document.body.scrollHeight * 0.4;
        var scrollThreshold5 = document.body.scrollHeight * 0.5;
        var scrollThreshold5a = document.body.scrollHeight * 0.51;
        var scrollThreshold5b = document.body.scrollHeight * 0.512;
        var scrollThreshold5c = document.body.scrollHeight * 0.513;
        var scrollThreshold5d = document.body.scrollHeight * 0.514;
        var scrollThreshold5e = document.body.scrollHeight * 0.515;
        var scrollThreshold5f = document.body.scrollHeight * 0.516;
        var scrollThreshold5g = document.body.scrollHeight * 0.517;
        var scrollThreshold5h = document.body.scrollHeight * 0.518;
        var scrollThreshold5i = document.body.scrollHeight * 0.519;
        var scrollThreshold5j = document.body.scrollHeight * 0.6;
        var scrollThreshold5k = document.body.scrollHeight * 0.61;
        var scrollThreshold6 = document.body.scrollHeight * 0.6;
        var scrollThreshold65 = document.body.scrollHeight * 0.65;
        var scrollThreshold7 = document.body.scrollHeight * 0.7;
        var scrollThreshold8 = document.body.scrollHeight * 0.8;
        var scrollThreshold8s = document.body.scrollHeight * 0.85;

        var scrollThreshold9 = document.body.scrollHeight * 0.9;
        var scrollThreshold9s = document.body.scrollHeight * 0.93;
        var scrollThreshold9sd = document.body.scrollHeight * 0.96;
        var scrollThreshold9sv = document.body.scrollHeight * 0.98;
        var scrollThreshold10 = document.body.scrollHeight * 1.0;
        var scrollThreshold11 = document.body.scrollHeight * 1.2;
        var scrollThreshold12 = document.body.scrollHeight * 1.3;
        var scrollThreshold13 = document.body.scrollHeight * 1.4;
        var scrollThreshold14 = document.body.scrollHeight * 1.5;
        // var scrollThreshold = windowHeight * 0.8; // Adjust the percentage as needed

        // const line = document.getElementById('line');
          var element = scrollingText;
          var scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
         var overlay = document.getElementById('overlay');
         overlay.style.clipPath = `circle(${scrollPercent *4* 100}% at 50% 50%)`;
         var imgLogo = document.getElementById('imgLogo');

         if (scrollTop >= scrollThreshold1) {

imgLogo.src = './logo/transparent.png';
}
if(scrollTop >= scrollThreshold2){

imgLogo.src = './logo/accent3.png';
} 
if (scrollTop >= scrollThreshold3) {

imgLogo.src = './logo/transparent.png';
} 
if (scrollTop >= scrollThreshold4) {
imgLogo.src = './logo/accent3.svg';
} 
if (scrollTop >= scrollThreshold5) {
imgLogo.src = './logo/accent2.png';
} 
if (scrollTop >= scrollThreshold6) {  
imgLogo.src = './logo/accent1.png';
} else {
// Handle default case if needed
}


if(scrollTop > scrollThreshold1){
            var overlay2 = document.getElementById('overlay2');
            var resetScrollPercent = (scrollTop - 2500) / (document.body.scrollHeight - window.innerHeight - 2500);

         overlay2.style.clipPath = `circle(${resetScrollPercent *2*100 }% at 50% 50%)`;
        }else{
          var overlay2 = document.getElementById('overlay2');
  // Reset the clipPath to hide the circle when scrolling back
  overlay2.style.clipPath = 'circle(0% at 50% 50%)';

        }
        if(isMobile){
        if(scrollTop > scrollThreshold2){
console.log(scrollTop,"scrtoooop mob");
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var overlay = document.getElementById('overlay3');
var imgs = document.getElementById('imgs');
var imgOverlay = document.getElementById('imgrr');
// Calculate the new size of the box based on the scroll position
var newSize = Math.min(200 + scrollTop / 10, window.innerHeight / 3);
     
overlay.style.width =  newSize* 2 + 'px';
    overlay.style.height =  newSize* 1  + 10 + 'px';
overlay.style.borderRadius ='30px';
imgs.style.opacity = 0.00001 * newSize;
// overlay.style.display ='block';
overlay.style.top = 45 + '%';
    overlay.style.left = 50 + '%';
    overlay.style.transition = 'top 2s ease';
        }
        }else{
          console.log(scrollTop,"scrtoooop");
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var overlay = document.getElementById('overlay3');
var imgs = document.getElementById('imgs');
var imgOverlay = document.getElementById('imgrr');
// Calculate the new size of the box based on the scroll position
var newSize = Math.min(100 + scrollTop / 10, window.innerHeight / 3);
overlay.style.width = newSize/2 + '%';
overlay.style.height = newSize/2 + '%';
overlay.style.borderRadius ='30px';
imgs.style.opacity = 0.00001 * newSize;
// overlay.style.display ='block';
overlay.style.top = 45 + '%';
    overlay.style.left = 50 + '%';
        }
        if(scrollTop <= scrollThreshold2){
          var overlay = document.getElementById('overlay3');
          // overlay.style.display ='none';

        }
        if(isMobile){
          if(scrollTop > scrollThreshold3){
            var newSize = Math.min(100 + scrollTop / 10, window.innerHeight / 3); // Adjust the maximum size (window.innerHeight / 3) as needed
   
    overlay.style.width =  newSize* 2 + 'px';
    overlay.style.height =  newSize* 1  + 10 + 'px';
    overlay.style.top = 50 + '%';
    overlay.style.left = 50 + '%';
  overlay.style.transition = 'top 3s ease';

        }else{
            
            overlay.style.width = '-'+ newSize* 4 + 'px';
    overlay.style.height = '-'+ newSize* 1.8  + 10 + 'px';
    overlay.style.transition = 'top 3s ease';

        }  
        }else{
          if(scrollTop > scrollThreshold3){
            
            var newSize = Math.min(100 + scrollTop / 10, window.innerHeight / 3); // Adjust the maximum size (window.innerHeight / 3) as needed
    overlay.style.width =  newSize* 4 + 'px';
    overlay.style.height =  newSize* 1.8  + 10 + 'px';
    overlay.style.top = 45 + '%';

    overlay.style.left = 50 + '%';
    
        }else{
            
            overlay.style.width = '-'+ newSize* 4 + 'px';
    overlay.style.height = '-'+ newSize* 1.8  + 10 + 'px';
        }  
        }
  

        if(isMobile) {
          
            if (scrollTop >= scrollThreshold6 ) {
            
             var overlay4 = document.getElementById('overlay4');
var resetScrollPercent = (scrollTop - scrollThreshold6) / (document.body.scrollHeight - window.innerHeight - scrollThreshold6);

overlay4.style.clipPath = `circle(${resetScrollPercent *2*100 }% at 90% 99%)`;

imgOverlay.style.borderRadius = '30px';
imgOverlay.style.transition=' transform 0.5s ease'; 
var newSize = Math.min(200 + scrollTop / 10, 1000); // Adjust the maximum size (300) as needed
overlay4.style.width = 100 + '%';
overlay4.style.height = 100 + '%';

}else{
var overlay4 = document.getElementById('overlay4');
  // Reset the clipPath to hide the circle when scrolling back
  overlay4.style.clipPath = 'circle(0% at 50% 50%)';
imgOverlay.style.display = 'none';
//    imgOverlay.style.transform ='rotateY(0deg)';
imgOverlay.style.transition=' transform 1s ease';
}
        }else{   
 if (scrollTop >= scrollThreshold5 ) {
     var overlay4 = document.getElementById('overlay4');
     var overlay3 = document.getElementById('overlay3');
    var resetScrollPercent = (scrollTop - scrollThreshold5) / (document.body.scrollHeight - window.innerHeight - scrollThreshold5);

    overlay4.style.clipPath = `circle(${resetScrollPercent *2*100 }% at 100% 100%)`;
imgOverlay.style.borderRadius = '30px';
// imgOverlay.style.transform ='rotateZ(180deg)';
imgOverlay.style.transition=' transform 0.5s ease'; 
var newSize = Math.min(200 + scrollTop / 10, 1000); // Adjust the maximum size (300) as needed
overlay4.style.width = 100 + '%';
overlay4.style.height = 100 + '%';

// overlay3.style.transition = 'top 3s ease';
}else{
var overlay4 = document.getElementById('overlay4');
  // Reset the clipPath to hide the circle when scrolling back
  overlay4.style.clipPath = 'circle(0% at 50% 50%)';

imgOverlay.style.display = 'none';
//    imgOverlay.style.transform ='rotateY(0deg)';
    imgOverlay.style.transition=' transform 1s ease';
    //  overlay4.style.height = 50 + '%';
}
}

var imgpath = [
'./images/1.jpg',
'./images/2.jpg',
'./images/3.jpg',
'./images/4.jpg',
'./images/5.jpg',
'./images/6.jpg',
'./images/7.jpg',
'./images/8.jpg',
'./images/9.jpg'
];


if(isMobile) {

if(scrollTop > scrollThreshold2){
            imgOverlay.src=imgpath[0];
            imgOverlay.style.display = 'block';


        }
}else{
if(scrollTop > scrollThreshold1){
  
            imgOverlay.src=imgpath[1];
            imgOverlay.style.display = 'block';

        }
}

       if(isMobile) {
        if(scrollTop > scrollThreshold25){
                

          imgOverlay.src=imgpath[0];

        }
        if(scrollTop > scrollThreshold3a){
            imgOverlay.src=imgpath[1];
          
        }
        if(scrollTop > scrollThreshold3c){
            imgOverlay.src=imgpath[2];

        }
        if(scrollTop > scrollThreshold3d){
            imgOverlay.src=imgpath[3];


        }
        if(scrollTop > scrollThreshold3e){
            imgOverlay.src=imgpath[4];
          
        }
        if(scrollTop > scrollThreshold3f){
            imgOverlay.src=imgpath[5];


        }
        if(scrollTop > scrollThreshold3g){
            imgOverlay.src=imgpath[6];


        }
        if(scrollTop > scrollThreshold3h){
            imgOverlay.src=imgpath[7];


        }
        if(scrollTop > scrollThreshold3i){
            imgOverlay.src= imgpath[8];


        }
       }else{
        
        if(scrollTop > scrollThreshold3){
                

          imgOverlay.src=imgpath[0];

        }
        if(scrollTop > scrollThreshold3b){
            imgOverlay.src=imgpath[1];
          
        }
        if(scrollTop > scrollThreshold3c){
            imgOverlay.src=imgpath[2];

        }
        if(scrollTop > scrollThreshold3d){
            imgOverlay.src=imgpath[3];


        }
        if(scrollTop > scrollThreshold3e){
            imgOverlay.src=imgpath[4];
          
        }
        if(scrollTop > scrollThreshold3f){
            imgOverlay.src=imgpath[5];


        }
        if(scrollTop > scrollThreshold3g){
            imgOverlay.src=imgpath[6];


        }
        if(scrollTop > scrollThreshold3h){
            imgOverlay.src=imgpath[7];


        }
        if(scrollTop > scrollThreshold3i){
            imgOverlay.src=imgpath[8];


        }
 }
   if(scrollTop > scrollThreshold4){
    if(scrollTop > scrollThreshold4a){
                

                imgOverlay.src=imgpath[0];
  
              }
              if(scrollTop > scrollThreshold4b){
                  imgOverlay.src=imgpath[1];
                
              }
              if(scrollTop > scrollThreshold4c){
                  imgOverlay.src=imgpath[2];
  
              }
              if(scrollTop > scrollThreshold4d){
                  imgOverlay.src=imgpath[3];
  
  
              }
              if(scrollTop > scrollThreshold4e){
                  imgOverlay.src=imgpath[4];
                
              }
              if(scrollTop > scrollThreshold4f){
                  imgOverlay.src=imgpath[5];
  
  
              }
              if(scrollTop > scrollThreshold4g){
                  imgOverlay.src=imgpath[6];
  
  
              }
              if(scrollTop > scrollThreshold4h){
                  imgOverlay.src=imgpath[7];
  
  
              }
              if(scrollTop > scrollThreshold4i){
                  imgOverlay.src=imgpath[8];
  
  
              }
   }    
if(isMobile){
   
if(scrollTop >=scrollThreshold8){

var overlay3 = document.getElementById('overlay3');
overlay3.style.height = 100 + '%';
overlay3.style.width = 100 + '%';


overlay3.style.transform ='top 1s ease';
var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);
}  else{
overlay3.style.height = "-100vh";
  // overlay3.style.height = 0 + '%';
}
if(scrollTop >=scrollThreshold8){
overlay3.style.height = 100 + 'vh';

}else{
overlay3.style.height = "-100vh";

}

if(scrollTop >=scrollThreshold9){

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
   leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
var overlay2 = document.getElementById('overlay5');
var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);
            var resetScrollPercent = (scrollTop - scrollThreshold8s) / (document.body.scrollHeight - window.innerHeight - scrollThreshold8s);

         overlay2.style.clipPath =`circle(${resetScrollPercent *2*100 }% at 0% 0%)`;
var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);
  var dd = document.getElementById('overlay5');

  overlay2.style.transition=' transform 1s ease';

}else{  

var overlay = document.getElementById('overlay5');
  // Reset the clipPath to hide the circle when scrolling back
  overlay.style.clipPath = 'circle(0% at 50% 50%)';
}
if(scrollTop >=scrollThreshold9s){

var overlay3 = document.getElementById('overlay3');
overlay.style.height = '2500px';


}
if(scrollTop >=scrollThreshold9sd){
var overlay3 = document.getElementById('overlay3');
overlay3.style.height = '3200px';

}

}else{
if(scrollTop >=scrollThreshold7){
var overlay3 = document.getElementById('overlay3');

var overlay2 = document.getElementById('overlay2');
overlay3.style.height = 200 + 'vh';


overlay3.style.height = 100 + '%';
overlay3.style.width = 100 +'%';
overlay3.style.transform = '0.5s height ease';

}

    
if(scrollTop >=scrollThreshold9){

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
   leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
window.requestAnimationFrame(function() {
var overlay2 = document.getElementById('overlay5');
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
var resetScrollPercent = (scrollTop - scrollThreshold9) / (document.body.scrollHeight - window.innerHeight - scrollThreshold9);

overlay2.style.clipPath = `circle(${resetScrollPercent *2*100 }% at 0% 0%)`;
// overlay2.style.transition = ' 0.5s ease'; // Smooth transition

var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);
  var dd = document.getElementById('overlay5');
});

}else{
var overlay = document.getElementById('overlay5');
  // Reset the clipPath to hide the circle when scrolling back
  overlay.style.clipPath = 'circle(0% at 50% 50%)';
leftArrow.style.display = 'block';
rightArrow.style.display = 'block';
}
if(scrollTop <=scrollThreshold8){
var dd = document.getElementById('overlay5');
dd.style.clipPath = `circle(0% at 50% 50%)`;


}
   
if(scrollTop >=scrollThreshold9sd){

var overlay3 = document.getElementById('overlay3');
overlay3.style.height= '1800px';
formElement.style.zIndex = '1'; // Ensure the form is above the overlay

           
}

}

});

