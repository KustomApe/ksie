function uranai() {
    rand = Math.floor(Math.random()*100);
    console.log(rand)
    elect = 'サンダー'
    if (rand > 9) elect = "ランドロス"; //10～29（20%）
    if (rand > 29) elect = "カプ・レヒレ"; //30～49（20%）
    if (rand > 49) elect = "ボルトロス"; //50～69(20%)
	if (rand > 69) elect = "ミミッキュ"; //70～89（20%）
	if (rand > 89) elect = "エースバーン"; //90～99（10%）
    console.log(elect);
    para = document.getElementById('pokemon_elect');
    para.innerHTML = elect;
}

function taipu() {
    var types = document.getElementsByClassName("types").text;
    console.log(types)
    // タイプのデータを取ってくる
    // タイプの中身をコンソールログに出す
    // 占うボタンをクリック
    // 該当するポケモンが4体以上150位以内の中にいた場合は占う
    // 3体以下なら警告を出す
    console.log("ポケモンゲットだぜ！")
}
