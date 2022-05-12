$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        lazyLoadEager:3,
        
    })
    // добавление слушателя при нажатии кнопок
    let phoneInput = $("#tel")[0]
    phoneInput.addEventListener('keyup', function(e){
       let phoneNumber = phoneMask(phoneInput.value);
       phoneInput.value = phoneNumber;
    }) 
  });

  
  function phoneMask(text) { 
      if (text == "") {
          return "";
      }
    var num = text.replace(/\D/g,''); 
    return num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11); 
}