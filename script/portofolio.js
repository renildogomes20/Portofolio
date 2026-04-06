const botao = document.querySelector("#botao-tema")
const body = document.body;

// Persistência do tema
const temaSalvo = localStorage.getItem('tema')
temaEscuro(temaSalvo === 'escuro')


// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
    if (tipo == true) {
        body.classList.add('escuro')
        botao.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
    } else {
        body.classList.remove('escuro')
        botao.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
    }
}

botao.addEventListener('click',()=> {
    const isescuro = body.classList.toggle('escuro')
    temaEscuro(isescuro)
    localStorage.setItem('tema', isescuro ? 'escuro' : 'claro')
})



// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu a.link') 

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'))

        if (target) {
            const headerHeight = document.getElementsByTagName('header') [0].offsetHeight

            const targetPosition = target.offsetTop - headerHeight - 20
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    })
})
