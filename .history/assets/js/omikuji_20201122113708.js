function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random(10)*10);
    console.log(randomnum)
    elect = 'ポケモン1'
    if (2 < randomnum < 6 ) {
        elect = 'ポケモン1';
    } else if(7 < randomnum > 10) {
        elect = 'ポケモン2';
    }
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}