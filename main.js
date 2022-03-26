(()=>{
let nav
let menuBtn;
let dropDownMenu;
let menuCloseBtn;
let ioElems;
let arrowBtn;
let instaImgList;
let arrowClickCounter = 0;
let section1Rooms;
let section1RoomBg;
let section1RoomList;
let section6;
let section6Container;
let section6Imgs;
let section6Message1;
let section6Message2;
let section6Message3;
const canvas1 = document.querySelector('.canvas-1');
const context1 = canvas1.getContext('2d');
let totalImgCount = 220;
let currentFrame;
let imgWidth = 1920;
let imgHeight = 1080;
let imgXRatio = imgWidth / imgHeight;
let section7;
let section7Video;
let instaImgs
let roomBg = document.querySelector('.room-bg');

function setElems(){
    nav = document.querySelector('.nav');
    menuBtn = document.querySelector('.hamburger-menu');
    dropDownMenu = document.querySelector('.menu-open');
    menuCloseBtn = document.querySelector('.menu-close');
    ioElems = document.querySelectorAll('.observer-ready');
    arrowBtn = document.querySelector('.section-8-arrow'); 
    instaImgList = document.querySelector('.insta-img-list');
    section1Rooms = document.querySelector('.section-1-rooms');
    section1RoomBg = document.querySelector('.section-1-bg');
    section1RoomList = document.querySelectorAll('.section-1-room-list');
    section6 = document.querySelector('.section-6');
    section6Container = document.querySelector('.section-6-container');
    section6Imgs = document.querySelector('.section-6-imgs')
    section6Message1 = document.querySelector('.section6-message-1');
    section6Message2 = document.querySelector('.section6-message-2');
    section6Message3 = document.querySelector('.section6-message-3');
    section7 = document.querySelector('.section-7');
    imgSequence = [];
    section7Video = document.querySelector('.section7-video');
    instaImgs = document.querySelectorAll('.insta-img');
}


function slideImgList(){
    instaImgList.style.transform = `translateX(${- 18.75 * arrowClickCounter}rem)`;

    if(arrowClickCounter == 0){
        document.querySelector('.arrow-left').style.opacity = 0.3;
    } else if (arrowClickCounter > 0){
        document.querySelector('.arrow-left').style.opacity = 1;
    } 
    
    if (arrowClickCounter === instaImgList.children.length-1 ){
        document.querySelector('.arrow-right').style.opacity = 0.3;
    } else {
        document.querySelector('.arrow-right').style.opacity = 1;
    }

}

function scrollCanvas(){
    
    let scrollRatio = -(section6.getBoundingClientRect().top / (section6.getBoundingClientRect().height - window.innerHeight))

    if(section6.getBoundingClientRect().top < 0 ){
         section6Container.classList.add('fixed');
    } else if(section6.getBoundingClientRect().top >= 0 ){        
        section6Container.classList.remove('fixed');
    }

    
    if(scrollRatio <= 0.2 ){
        section6Message1.classList.add('message-show');
        section6Message2.classList.add('message-hide');
        section6Message2.classList.remove('message-show');
        section6Message3.classList.add('message-hide');
        section6Message3.classList.remove('message-show');
    }

    if(scrollRatio >= 0.4 ){
        section6Message1.classList.remove('message-show');
        section6Message1.classList.add('message-hide');
        section6Message2.classList.add('message-show');
        section6Message2.classList.remove('message-hide');
        section6Message3.classList.remove('message-show');
        section6Message3.classList.add('message-hide');
    }    

    if(scrollRatio >= 0.7 ){
        section6Message2.classList.remove('message-show');
        section6Message2.classList.add('message-hide');
        section6Message3.classList.add('message-show');
        section6Message3.classList.remove('message-hide');
    }

    if(scrollRatio < 0){
        scrollRatio = 0;
    }
    if(scrollRatio > 1){
        scrollRatio = 1
    }

    function loop(){
        currentFrame = Math.round((totalImgCount - 1) * scrollRatio);

        if(scrollRatio > 0){
            context1.drawImage(imgSequence[currentFrame], -(canvas1.width*imgXRatio/3), 0, canvas1.width*imgXRatio, canvas1.height);
        }
    }
    requestAnimationFrame(loop);

    if(section7.getBoundingClientRect().top <= 100){
        section7Video.play();
    } else {
        section7Video.pause();
    }



}


function setImages(){

    
    canvas1.width = section6Imgs.getBoundingClientRect().width;
    canvas1.height = section6Imgs.getBoundingClientRect().height;

    for(let i = 0; i < totalImgCount; i++){
        let imgElem = new Image();
        imgElem.src = `./public/img/section6-imgs/section6-canvas-${1 + i}.jpg`;
        imgSequence.push(imgElem);  
        imgElem.onload = function(){
            context1.drawImage(imgSequence[0], -(canvas1.width*imgXRatio /3) , 0, canvas1.width*imgXRatio, canvas1.height);
        }  
        
    } 

    

}


function scrollMenu(){
    if(window.pageYOffset > 200){
        nav.classList.add('nav-scroll');
    } else{
        nav.classList.remove('nav-scroll');
    }
}



setElems();

window.addEventListener('load', ()=>{
    const io = new IntersectionObserver((entries, observer)=>{
        for(let i = 0; i < entries.length; i++){
             if(entries[i].isIntersecting){
                ioElems[entries[i].target.dataset.index].classList.add('observer-active');
             } else {
                ioElems[entries[i].target.dataset.index].classList.remove('observer-active');
             }    
                  
        }

        if(entries[0].target.classList.contains('img-list-1')){
            entries[0].target.classList.add('slider-active');
            if(!entries[0].isIntersecting){
                entries[0].target.classList.remove('slider-active');
            }
        } 

        if(entries[0].target.classList.contains('img-list-2')){
            entries[0].target.classList.add('slider-active');
            if(!entries[0].isIntersecting){
                entries[0].target.classList.remove('slider-active');
            }
        } 

        
     });

     ioElems.forEach((item, i)=>{
        item.dataset.index = i;
        io.observe(item);
     })

     setImages();   
     scrollCanvas();

     for(let i = 0; i < instaImgs.length; i++){
        instaImgs[i].style.backgroundImage = `url(./public/img/insta-imgs/insta-${i+1}.jpg)`;
     }
     scrollMenu();
    
    
});



window.addEventListener('scroll', ()=>{

    scrollCanvas();  
    scrollMenu();
})

section1Rooms.addEventListener('mouseover',(e)=>{
    
    e.target.classList.add(`active`);
    
    if(e.target.classList.contains('active')){
        roomBg.classList.remove('room-0');
        for(let i = 0; i < section1Rooms.children.length; i++){
            if(e.currentTarget.children[i].classList.contains('active')){
                roomBg.classList.add(`room-${i}`);
            } 
        }
    }

    // if(e.target.classList.contains('active'))
    console.log(e.currentTarget.children);
    console.log()
    
})
section1Rooms.addEventListener('mouseout',(e)=>{
    e.target.classList.remove(`active`);
    
    for(let i = 0; i < section1Rooms.children.length; i++){
            if(!e.currentTarget.children[i].classList.contains('active')){
                roomBg.classList.remove(`room-${i}`);
            } 
        }
    roomBg.classList.add('room-0');
})





menuBtn.addEventListener('click', ()=>{
    setTimeout( function(){
        dropDownMenu.style.display = `block`;
        }
    ,100);
    setTimeout(
        function(){
            dropDownMenu.style.transform = `translate3d(0, 0, 0)`;
        }
    ,200);
});

menuCloseBtn.addEventListener('click', ()=>{
    setTimeout( function(){
        dropDownMenu.style.transform = `translate3d(100%, 0, 0)`;
        }
    ,100);
    setTimeout(
        function(){
            dropDownMenu.style.display = `none`;
        }
    ,500);
    
});

arrowBtn.addEventListener('click', (e) => {

    if(e.target.classList.contains('arrow-right')){ 
        if(arrowClickCounter < instaImgList.children.length-1){
            arrowClickCounter += 1;
        } 
    }  
    
    if(e.target.classList.contains('arrow-left')){
        if(arrowClickCounter > 0){
                arrowClickCounter -= 1;
        }
    } 
 
    slideImgList();

                   
})


window.addEventListener('resize', ()=>{
    scrollCanvas();
    setImages();
    
})








})();

