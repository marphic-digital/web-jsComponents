let swiper = new Swiper ('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlides: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadow: true,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex)
        }
    },
    pagination: {
        el: '.swiper-pagination'
    },
})