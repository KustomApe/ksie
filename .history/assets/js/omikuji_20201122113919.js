function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random(10)*10);
    console.log(randomnum)
    elect = 'ポケモン1'
    if (randomnum > 1) elect = 'ポケモン1';
    if(randomnum < 5) elect = 'ポケモン2';
    if(randomnum < 8) elect = 'ポケモン3';
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}