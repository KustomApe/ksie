function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*10)
    elect = 'ポケモン変数'
    if (randomnum > 2) {
        elect = 'ポケモン1';
    } else if(randomnum > 5) {
        elect = 'ポケモン2';
    } else {
        elect = 'ポケモン3';
    };
    console.log(elect)
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}