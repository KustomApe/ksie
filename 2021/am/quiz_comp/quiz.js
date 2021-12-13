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
    if(ipt.value == quiz[qnum][1]) {
        qnum += 1;
        qnum %= quiz.length;
        addMessage('アタリ！次は' + quiz[qnum][0]);
    } else {
        addMessage('ハズレ！');
    }
});