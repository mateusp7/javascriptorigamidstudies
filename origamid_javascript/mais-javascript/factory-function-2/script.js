function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);
    function hide() {
        elements.forEach(element => {
            element.style.display = 'none'
        })
        return this; // Para poder usar os métodos ainda, pois, tera um return
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial'
        });
        return this;
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        });
        return this;
    }

    function addClass(classe) {
        elements.forEach(elements => {
            elements.classList.add(classe);
        });
        return this;
    }

    function removeClass(classe) {
        elements.forEach(elements => {
            elements.classList.remove(classe);
        });
        return this;
    }
    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
}

const btns = $$('button');

console.log(btns.hide().elements);
btns.show();

function handleClick(event) {
    console.log(event.target)
}

btns.on('click', handleClick);
btns.addClass('ativo');
btns.removeClass('ativo')
