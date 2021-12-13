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
let qnum = 0;
addMessage(quiz[qnum][0]);

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let ipt = document.querySelector('input');
    addMessage(ipt.value);
    if(ipt.value == quiz[0][1]) {
        qnum += 1;
        qnum %= quiz.length;
        addMessage('アタリ！');
    } else {
        addMessage('ハズレ！');
    }
});