(()=>{
    ioElems = document.querySelectorAll('.observer-ready');

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
    
})();