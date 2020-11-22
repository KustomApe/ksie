function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random(10)*10);
    console.log(randomnum)
    elect = 'ポケモン1'
    if (1 < randomnum < 3) elect = 'ポケモン1';
    if(4 < randomnum < 7) elect = 'ポケモン2';
    if(8 < randomnum < 10) elect = 'ポケモン2';
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}