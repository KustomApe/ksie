function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*100)
    elect = 'ポケモン変数'
    if (randomnum > 50) {
        selected = 'ポケモン2';
    } else {
        selected = 'ポケモン3'
    };
    console.log(selected);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = selected;
}