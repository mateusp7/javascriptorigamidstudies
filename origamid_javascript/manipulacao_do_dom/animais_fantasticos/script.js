const tabMenu = document.querySelectorAll(".js-tabmenu li"); // Selecionou as fotos
const tabContent = document.querySelectorAll(".js-tabcontent section"); // Seleciona os textos

if(tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo"); // deixar o primeiro elemento com a classe ativo.
    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((imagem, index) => {
        imagem.addEventListener('click', () =>{
            activeTab(index); // Chama o activeTab a cada index da imagem
        })
    })
}
