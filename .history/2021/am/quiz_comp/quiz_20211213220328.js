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

addMessage('ハロー！');
addMessage('ワールド！');
addMessage(quiz[0][0]);

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let ipt = document.querySelector('input');
    addMessage(ipt.value);
});