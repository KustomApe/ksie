function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.floor(Math.random(10)*10);
    console.log(randomnum)
    elect = 'ポケモン1'
    if (1< randomnum < 5) elect = 'ポケモン2';
    if(5 < randomnum < 10) elect = 'ポケモン3';
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}