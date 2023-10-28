document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")  
  
    const choices = new Choices(selector, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices header_choices',
       },
    });
    
  });


new SimpleBar(document.querySelector('.customScroll'));

