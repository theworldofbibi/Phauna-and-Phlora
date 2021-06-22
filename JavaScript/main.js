//Constantes
const html = document.querySelector('html');
const mode = document.querySelector('.switch');

//Local Storage
const current_theme = localStorage.getItem('theme');

//Listas
const hidden = document.querySelectorAll('.hidden');
const transition = document.querySelectorAll('.transition');
const icon = document.querySelectorAll('.mode');

//Tamanho das Listas
const hidden_elements = hidden.length;
const elements = transition.length;

//Quando a página carregar
if (current_theme == 'dark') {
    html.classList.add('dark-mode');
    mode.classList.add('dark');
    icon[1].classList.add('hidden');

    for (let i = 0; i<hidden_elements; i++) {
        hidden[i].classList.remove('hidden');
    }
}

else {
    mode.classList.add('light');
    icon[0].classList.add('hidden');
}

//Ao clicar no botão
mode.addEventListener('click', function() {
    let color = 'light';

    for (let i = 0; i<elements; i++) {
        transition[i].classList.remove('transition');
    }

    for (let i = 0; i<2; i++) {
        icon[i].classList.toggle('hidden');
    }

    html.classList.toggle('dark-mode');

    if (mode.classList.contains('light')) {
        mode.classList.remove('light');
        mode.classList.add('dark');
    }

    else if (mode.classList.contains('dark')) {
        mode.classList.remove('dark');
        mode.classList.add('light');
    }

    for (let i = 0; i<hidden_elements; i++) {
        hidden[i].classList.toggle('hidden');
    }

    if (html.classList.contains('dark-mode')) {
        color = 'dark';
    }

    localStorage.setItem('theme', color);

});