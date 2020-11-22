function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random(10)*10);
    console.log(randomnum)
    elect = 'ポケモン1'
    if (randomnum < 3) elect = 'ポケモン1';
    if(randomnum < 7) elect = 'ポケモン2';
    if(randomnum < 10) elect = 'ポケモン3';
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}