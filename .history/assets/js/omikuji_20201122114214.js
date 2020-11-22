function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3', 'ポケモン4', 'ポケモン5');
    randomnum = Math.floor(Math.random()*100);
    console.log(randomnum)
    elect = 'ポケモン1'
    if (rand > 9) msg = "ポケモン5"; //10～29（20%）
	if (rand > 29) msg = "ポケモン5"; //30～69（40%）
	if (rand > 69) msg = "ポケモン5"; //70～89（20%）
	if (rand > 89) msg = "ポケモン5"; //90～99（10%）
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}