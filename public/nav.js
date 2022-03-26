 (()=>{
    window.addEventListener('load', ()=>{

        let nav = document.querySelector('.nav');
        let menuBtn = document.querySelector('.hamburger-menu');
        let dropDownMenu = document.querySelector('.menu-open');
        let menuCloseBtn = document.querySelector('.menu-close');
    

        function scrollMenu(){
            if(window.pageYOffset > 200){
                nav.classList.add('nav-scroll');
            } else{
                nav.classList.remove('nav-scroll');
            }
        }
    
    
        window.addEventListener('scroll', ()=>{  
            scrollMenu();
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
    
        scrollMenu();
    
    
        });
 })();
 
    