function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*10)
    elect = 'ポケモン変数'
    if (randomnum > 30) {
        elect = 'ポケモン1';
    } else if(randomnum > 70) {
        elect = 'ポケモン2';
    } else {
        elect = 'ポケモン3';
    };
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}