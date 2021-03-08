const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); //dont forget to select all
    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); //grabs the nav-links and applys the styles listed in nav-active

        //animate links
        navLinks.forEach((link, index) => {//in the event listener
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; //beware spelling fowards with the !s!
            }
        });
        //burger animatoion
        burger.classList.toggle('toggle');
    });


}//change something

navSlide(); //dont forget to invoke the function