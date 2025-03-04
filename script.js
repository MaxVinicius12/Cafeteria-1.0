document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado!');
    const btnmenu = document.getElementById("btn-menu");
    const navbar = document.getElementById("navbar");

    if (btnmenu && navbar) {
        btnmenu.addEventListener("click", () => {
            console.log("Botão clicado!");
            navbar.classList.toggle("active");
            btnmenu.classList.toggle("active");
        });
    } else {
        console.error("Erro: Elementos não encontrados no DOM.");
    }
})