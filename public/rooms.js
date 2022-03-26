(()=>{
    let tabElems = document.querySelectorAll('.tab-button');
    let tabContents = document.querySelectorAll('.tab-content');
    let imgBtn = document.querySelectorAll('.img-btn');
    let roomImg0 = document.querySelector('.room-img-0');
    let roomImg1 = document.querySelector('.room-img-1');
    let roomImg2 = document.querySelector('.room-img-2');
    let roomImg3 = document.querySelector('.room-img-3');
    let dots = document.querySelectorAll('.dot');

    function activeTabs(){
        for(let i = 0; i < tabElems.length; i++){
            tabElems[i].addEventListener('click', ()=>{
              tabElems[0].classList.remove('active');
              tabElems[1].classList.remove('active');
              tabElems[2].classList.remove('active');
              tabElems[3].classList.remove('active');
              tabElems[i].classList.add('active');

              tabContents[0].classList.remove('show');
              tabContents[1].classList.remove('show');
              tabContents[2].classList.remove('show');
              tabContents[3].classList.remove('show');
              tabContents[i].classList.add('show');

              imgBtn[i].children[0].dataset.dot = 'true'


            });       
        }
    }

    
    function changeImg(){
       dots.forEach((item, i)=>{
            dots[i].addEventListener('click', ()=>{
                roomImg0.src = `/public/img/room-${i}.jpg`;
                roomImg1.src = `/public/img/room-${i}.jpg`;
                roomImg2.src = `/public/img/room-${i}.jpg`;
                roomImg3.src = `/public/img/room-${i}.jpg`;

                tabElems[0].addEventListener('click', ()=>{
                    roomImg0.src = `/public/img/room-0.jpg`;
                    });
                 tabElems[1].addEventListener('click', ()=>{
                    roomImg1.src = `/public/img/room-4.jpg`;
                });
                tabElems[2].addEventListener('click', ()=>{
                    roomImg2.src = `/public/img/room-9.jpg`;
                });
                tabElems[3].addEventListener('click', ()=>{
                    roomImg3.src = `/public/img/room-13.jpg`;
                });

            });
         
        });
    }

    function dotClickHandler(e){
        const targetElem = e.target;
        if(!targetElem.classList.contains('dot')){
            return;
        }
        if(targetElem.dataset.dot === 'false'){
            targetElem.dataset.dot = 'true';
        } else {
            targetElem.dataset.dot = 'false';
        }
    }

    function dataset(e){
        if(!e.target.classList.contains('dot')){
            return;
        }
        for(let i = 0; i < dots.length; i++){
            if(dots[i].dataset.dot == 'true'){
                dots[i].dataset.dot = 'false';
            }
        }
    }




    window.addEventListener('click', (e)=>{
        dataset(e);
        dotClickHandler(e);
    });


        activeTabs();
        changeImg()

 
})();

