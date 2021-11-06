window.onload = function () {

    var swiper = new Swiper(".teamSwiper", {
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // document.querySelector('.btn-close').addEventListener('click', function () {
    //     this.closest('.menu_mobile').classList.remove('active');
    //     document.querySelector('body').style.overflow = 'initial';
    // })

    // document.querySelector('.btn-open').addEventListener('click', function () {
    //     document.querySelector('.menu_mobile').classList.add('active');
    //     document.querySelector('body').style.overflow = 'hidden';

    // })

    // for (const item of document.querySelectorAll('.menu_mobile .menu_link')) {
    //     item.addEventListener('click', function () {
    //         this.closest('.menu_mobile').classList.remove('active');
    //         document.querySelector('body').style.overflow = 'initial';
    //     })
    // }

    for (const item of document.querySelectorAll('.video_btn')) {

        item.addEventListener('click', function (e) {
            e.preventDefault();
            Fancybox.show(
                [
                    {
                        src: this.getAttribute("href"),
                        type: "iframe",
                    },
                ],
            );
        })
    }

    // for (const item of document.querySelectorAll('a.modal')) {

    //     item.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         Fancybox.show(
    //             [
    //                 {
    //                     src: '#modal',
    //                     type: "inline",
    //                 },
    //             ],
    //         );
    //     })
    // }

    // for (const item of document.querySelectorAll('.btn-toggle')) {

    //     item.addEventListener('click', function () {
    //         let container = this.closest('.row').querySelector('.answer');

    //         if (container.classList.contains('active')) {
    //             container.classList.remove('active');
    //             this.classList.remove('active');
    //             container.style.maxHeight = 0;
    //         } else {
    //             container.classList.add('active');
    //             this.classList.add('active');
    //             container.style.maxHeight = container.scrollHeight + 'px';
    //         }

    //     })
    // }

    document.addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.classList.contains('fqa_js')) {
            if (e.target.parentElement.classList.contains('active')) {
                e.target.parentElement.classList.remove('active');
                e.target.nextElementSibling.style.maxHeight = 0;
            } else {
                e.target.parentElement.classList.add('active');
                e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + 'px';

            }
        }
    });

    for (const item of document.querySelectorAll('.tabs .button')) {
       item.addEventListener('click',function (){
           for (const i of document.querySelectorAll('.tabs .button')){
               i.classList.remove('on');
               i.closest('.section').classList.remove(`${i.classList[0]}`);
           }
           this.classList.add('on');
           item.closest('.section').classList.add(`${item.classList[0]}`);
           document.querySelector(`.section_video .video_btn.on`).classList.remove('on');
           document.querySelector(`.section_video  .${item.classList[0]}.video_btn`).classList.add('on');
       })
    }

    MenuScrollAnchors('.anchor', '.menu_link')

}
window.addEventListener('scroll', function () {
    window.pageYOffset > 10 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});


