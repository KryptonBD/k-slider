function Slider(slider) {
    //checking if it's valid slider
    if (!(slider instanceof Element)) {
        throw new Error("Invalid or No Slider");
    }

    let current;
    let prev;
    let next;

    //Select element from Slider
    const slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector(".goToPrev");
    const nextBtn = slider.querySelector(".goToNext");


    function startSlider() {
        current = slider.querySelector(".current") || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log(current)
    }

    function applyClasses() {
        current.classList.add("current");
        prev.classList.add("prev");
        next.classList.add("next");
    }

    //Moving Slider
    function move(directon) {
        const classes = ["prev", "current", "next"];
        prev.classList.remove(...classes);
        current.classList.remove(...classes);
        next.classList.remove(...classes);

        if (directon === 'back') {
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }

        applyClasses();
    }

    startSlider();
    applyClasses();

    //Event Listener
    prevBtn.addEventListener('click', move.bind(this, "back"));
    nextBtn.addEventListener('click', move.bind(this, "forward"));
}


const mySlider = Slider(document.querySelector('.slider'));
const exampleSlider = Slider(document.querySelector(".example-slider"));