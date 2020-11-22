function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*100)
    elect = 'ポケモン変数'
    if (randomnum > 50) {
        msg = 'ポケモン2';
    } else {
        msg = 'ポケモン3'
    };
    console.log(msg);
    para = document.getElementsByClassName('pokemon_elect');
    console.log(para)
    para[0].innerHTML = pokemon[msg];
    console.log(para.innerHTML)
    console.log(para)
}