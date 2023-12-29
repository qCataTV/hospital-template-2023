// JavaScript to add scrolled class to body on scroll
window.addEventListener('scroll', function() {
    const body = document.querySelector('body');
    const scrolled = window.scrollY > 50; // Change 50 to the desired scroll position

    if (scrolled) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});

var myname = "Catalin";