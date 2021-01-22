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
    console.log(status)
    if (status.checked == true) {
        console.log('checked');
    }
    else if (status.checked == false) {
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


function pokemonLists() {
    const pokemons = [];
    let pokemons = {
        1: "サンダー",
        2: "エースバーン",
        3: "ミミッキュ",
        4: "カプ・レヒレ",
        5: "ランドロス",
        6: "ポリゴン２",
        7: "ウーラオス",
        8: "ドラパルト",
        9: "カバルドン",
        10: "ゴリランダー",
        11: "ウーラオス",
        12: "カイリュー",
        13: "ウツロイド",
        14: "ナットレイ",
        15: "テッカグヤ",
        16: "ウオノラゴン",
        17: "バンギラス",
        18: "ドリュウズ",
        19: "カミツルギ",
        20: "ブリザポス",
        21: "ドヒドイデ",
        22: "ラグラージ",
        23: "ラプラス",
        24: "レジエレキ",
        25: "ガブリアス",
        26: "ヒードラン",
        27: "フェローチェ",
        28: "アーゴヨン",
        29: "クレセリア",
        "ボルトロス",
        "ファイヤー",
        "バシャーモ",
        "パッチラゴン",
        "ドサイドン",
        "ボーマンダ",
        "オーロンゲ",
        "ロトム",
        "ジバコイル",
        "メタグロス",
        "ギャラドス",
        "ヤドキング",
        "カプ・コケコ",
        "キュウコン",
        "ヒヒダルマ",
        "マンムー",
        "カプ・テテフ",
        "ロトム",
        "ウインディ",
        "ピクシー",
        "エルフーン",
        "エアームド",
        "トゲキッス",
        "ラッキー",
        "スイクン",
        "マリルリ",
        "カプ・ブルル",
        "ラティオス",
        "ハッサム",
        "カビゴン",
        "ライコウ",
        "ハピナス",
        "リザードン",
        "アーマーガア",
        "ラティアス",
        "ヌオー",
        "パルシェン",
        "アシレーヌ",
        "サニーゴ",
        "ボルトロス",
        "ギルガルド",
        "ニンフィア",
        "ブリムオン",
        "ガオガエン",
        "トリトドン",
        "パッチルドン",
        "ルカリオ",
        "ミロカロス",
        "ファイヤー",
        "サンダー",
        "ガマゲロゲ",
        "マッシブーン",
        "ゲンガー",
        "ヌメルゴン",
        "ナマコブシ",
        "カメックス",
        "マニューラ",
        "ガラガラ",
        "インテレオン",
        "ランクルス",
        "レイスポス",
        "メタモン",
        "エーフィ",
        "ユクシー",
        "シャンデラ",
        "デンジュモク",
        "サザンドラ",
        "ウルガモス",
        "エンテイ",
        "ポットデス",
        "ルガルガン",
        "ツンデツンデ",
        "ブラッキー",
        "ズガドーン",
        "レジロック",
        "コータス",
        "サーナイト",
        "ボスゴドラ",
        "レジアイス",
        "クレッフィ",
        "フシギバナ",
        "ランターン",
        "グレイシア",
        "ゴチルゼル",
        "ゾロアーク",
        "オノノクス",
        マタドガス,
        ペンドラー,
        マホイップ,
        ユレイドル,
        ニドキング,
        タチフサグマ,
        "コオリッポ",
        "シャワーズ",
        "トルネロス",
        "エレキブル",
        "フリーザー",
        "キングドラ",
        "サンダース",
        "ホルード",
        "バイバニラ",
        "クレベース",
        "ギガイアス",
        "トルネロス",
        "ブルンゲル",
        "キリキザン",
        "ポリゴンＺ",
        "ドラピオン",
        "ストリンダー",
        "シザリガー",
        "キュワワー",
        "ニャオニクス",
        "レジドラゴ",
        "アイアント",
        "バンバドロ",
        "ロトム",
        "ヤドラン",
        "ジュラルドン",
        "ヤドラン",
        "ガチゴラス",
        "アマルルガ",
    }
};