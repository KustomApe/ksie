function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*100)
    para = document.getElementbyId('pokemon_elect');
    elect = 'ポケモン変数'
    if (rand > 50) {
        msg = 'ポケモン2';
    } else {
        msg = 'ポケモン3'
    }
    para.innerHTML = strarray[msg]
}



