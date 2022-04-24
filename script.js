const slides = document.querySelector('.slides'),
      slide = document.querySelectorAll('.slides li'),
    currentIdx =  0,
    slideCount = slide.length,
    slideWIdth = 200,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    makeClone();
    function makeClone(){
       for(var i = 0 ; i<slideCount; i++){
           //a.cloneNode()-> 자신만 복사 , a.cloneNode(true) 자식요소까지 복사
           var cloneSlide = slide[i].cloneNode(true);
           cloneSlide.classList.add('clone');
           //a.appendChild(b) 기존의 a요소에 b를 추가
           slides.appendChild(cloneSlide);

       }
       for(var i = slideCount -1; i>=0; i--){
             //a.cloneNode()-> 자신만 복사 , a.cloneNode(true) 자식요소까지 복사
             var cloneSlide = slide[i].cloneNode(true);
             cloneSlide.classList.add('clone');
             //a.appendChild(b) 기존의 a요소에 b를 추가
             slides.prepend(cloneSlide);

       }
      updateWidth();
      setInitalPos();
       
    }
   
    function updateWidth(){
        var currentSlides =  slide = document.querySelectorAll('.slides li');
        var newSlideCount = currentSlides.length;
        var newWidth = (slideWIdth + slideMargin)*newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
    } 
    function setInitalPos(){
        var initalTranslateValue = -(slideWIdth + slideMargin)*newSlideCount
        slides.style.transform = 'translateX('+ initalTranslateValue +'px)'
    }