let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active')
}
document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active')
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () => {
    accountForm.classList.add('active')
}
document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active')
};

var swiper = new Swiper(".home-slider", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
    grabCursor:true,
});


var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,

    breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    991: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
    },
});



var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCursor:true,

    breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    768: {
        slidesPerView:3,
        spaceBetween: 40,
    },
    991: {
        slidesPerView: 4,
        spaceBetween: 50,
    },
    },
});


var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,

    breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetween: 50,
    },
    768: {
        slidesPerView:3,
        spaceBetween: 50,
    },
    991: {
        slidesPerView: 4,
        spaceBetween: 50,
    },
    },
});


document.querySelector('.load-more-sport .btn').onclick = () =>{
    document.querySelectorAll('.gallery .box-container .hide').forEach(show =>{
        show.style.display = 'block';
    });

    document.querySelector('.load-more-sport .btn').style.display = 'none';
}



document.querySelector('.load-more-activity .btn').onclick = () =>{
    document.querySelectorAll('.gallery .box-container .hide').forEach(show =>{
        show.style.display = 'block';
    });

    document.querySelector('.load-more-activity .btn').style.display = 'none';
}



document.querySelector('.load-more-concert .btn').onclick = () =>{
    document.querySelectorAll('.gallery .box-container .hide').forEach(show =>{
        show.style.display = 'block';
    });

    document.querySelector('.load-more-concert .btn').style.display = 'none';
}