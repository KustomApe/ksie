function omikuji() {
    rand = Math.floor(Math.random()*100);
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*2)
    msg = "大吉"; //0～9（10%）
    if (rand > 9) msg = "中吉"; //10～29（20%）
    if (rand > 29) msg = "吉"; //30～69（40%）
    if (rand > 69) msg = "凶"; //70～89（20%）
    if (rand > 89) msg = "大凶"; //90～99（10%）
    alert(msg);
}

para = document.getElementbyId('pp');

para.innerHTML = strarray[randomnum]
