function omikuji() {
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3', 'ポケモン4', 'ポケモン5');
    rand = Math.floor(Math.random()*100);
    console.log(rand)
    elect = 'ポケモン1'
    if (rand > 9) elect = "ポケモン2"; //10～29（20%）
	if (rand > 29) elect = "ポケモン3"; //30～69（40%）
	if (rand > 69) elect = "ポケモン4"; //70～89（20%）
	if (rand > 89) elect = "ポケモン5"; //90～99（10%）
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}