const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true

    },

});



document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        this.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});


$(".accordion").accordion({
    heightStyle: "content",
});

const menu = document.querySelector('.nav__list');
document.querySelector(".burger").addEventListener("click", function () {
    menu.classList.toggle('nav__list_active');
      this.querySelectorAll(".line").forEach(item => {
        item.classList.toggle("active");
        item.classList.toggle("hover");
    })
})


