// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};



//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');

    } else {
        headerElement.classList.remove('activated');

    }

};

window.addEventListener('scroll', scrollHeader);
// Open menu 
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);


// -- Close the menu form popup on ESC keypress

window.addEventListener('keyup', event => {
    if (event.key === 'Escape') selectElement('#menu').classList.remove('activated');
});


//pegar o link e referenciar o elemento pai (li) e adicionar e toggle a classe current para ativar o link clicado
//loop todos li/a para garantir que desliga o current e if this.element ligar o current
const linksMenu = document.querySelectorAll('.link-menu');

for (let link of linksMenu){    
    link.addEventListener('click', ()=> { toggleCurrentMenu(link) });
}

function toggleCurrentMenu(linkMenu){
    
    for (let link of linksMenu){
        link.parentNode.classList.remove('current');
    }

    linkMenu.parentNode.classList.add('current');
}

//linksMenu[i].parentNode