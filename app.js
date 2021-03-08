const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');//grabs the nav-links and applys the styles listed in nav-active
    });
}

navSlide(); //dont forget to invoke the function
