let quiz = [
    ['ブヒブヒ', 'pig'],
    ['ワンワン', 'dog'],
    ['パオーン', 'elephant'],
    ['シャキーン', 'nakanishi'],
];

let mes = 'hello world!';

let addMessage = (mes) => {
    let list = document.querySelector('ul');
    list.innerHTML += '<li>' + mes + '</li>';
};