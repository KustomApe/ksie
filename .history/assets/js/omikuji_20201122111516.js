function omikuji() {
    rand = Math.floor(Math.random()*100);
    pokemon = new Array('ポケモン1', 'ポケモン2', 'ポケモン3');
    randomnum = Math.round(Math.random()*100)
    para = document.getElementbyId('pp');
    elect = 'ポケモン変数'
    if (rand > 50) msg = "吉"; //30～69（40%）
    alert(msg);
}



para.innerHTML = strarray[randomnum]
