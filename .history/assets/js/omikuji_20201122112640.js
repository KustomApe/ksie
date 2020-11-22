function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*100)
    para = document.getElementsByClassName('pokemon_elect');
    elect = 'ポケモン変数'
    if (randomnum > 50) {
        msg = 'ポケモン2';
    } else {
        msg = 'ポケモン3'
    };
    console.log(msg);
    answer = pokemon[msg];
    para = para.innerHTML = answer
    return result;
}