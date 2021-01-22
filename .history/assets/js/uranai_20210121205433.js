function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function checked() {
    var status = document.getElementsByClassName("types");
    if (status.checked == True) {
        console.log('checked');
    }
    else if (status.checked == False) {
        console.log('unchecked')
    }
});

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
};

function taipu() {
    const arrType = [];
    const types = document.type_form.types;

    for (let i = 0; i < types.length; i++) {
        if(types[i].checked) {
            arrType.push(" " + types[i].value);
        }
    }
    console.log(arrType)
    document.getElementById("display_types").textContent = arrType;
    // タイプのデータを取ってくる
    // タイプの中身をコンソールログに出す
    // 占うボタンをクリック
    // 該当するポケモンが4体以上150位以内の中にいた場合は占う
    // 3体以下なら警告を出す
    // console.log("ポケモンゲットだぜ！")
};
