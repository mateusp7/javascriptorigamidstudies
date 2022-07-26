import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropdownMeus = document.querySelectorAll('[data-dropdown]');
    
    dropdownMeus.forEach((menu) => {
        ['touchstart','click'].forEach((userEvent => {
            menu.addEventListener(userEvent, handleClick)
        }));    
    });
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active')
        outsideClick(this, ['touchstart','click'], () => {
            this.classList.remove('active')
        });
    };
};

