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
    30: "ボルトロス",
    31: "ファイヤー",
    32: "バシャーモ",
    33: "パッチラゴン",
    34: "ドサイドン",
    35: "ボーマンダ",
    36: "オーロンゲ",
    37: "ロトム",
    38: "ジバコイル",
    39: "メタグロス",
    40: "ギャラドス",
    41: "ヤドキング",
    42: "カプ・コケコ",
    43: "キュウコン",
    44: "ヒヒダルマ",
    45: "マンムー",
    46: "カプ・テテフ",
    47: "ロトム",
    48: "ウインディ",
    49: "ピクシー",
    50: "エルフーン",
    51: "エアームド",
    52: "トゲキッス",
    53: "ラッキー",
    54: "スイクン",
    55: "マリルリ",
    56: "カプ・ブルル",
    57: "ラティオス",
    58: "ハッサム",
    59: "カビゴン",
    60: "ライコウ",
    61: "ハピナス",
    62: "リザードン",
    63: "アーマーガア",
    64: "ラティアス",
    65: "ヌオー",
    66: "パルシェン",
    67: "アシレーヌ",
    68: "サニーゴ",
    69: "ボルトロス",
    70: "ギルガルド",
    71: "ニンフィア",
    72: "ブリムオン",
    73: "ガオガエン",
    74: "トリトドン",
    75: "パッチルドン",
    76: "ルカリオ",
    77: "ミロカロス",
    78: "ファイヤー",
    79: "サンダー",
    80: "ガマゲロゲ",
    81: "マッシブーン",
    82: "ゲンガー",
    83: "ヌメルゴン",
    84: "ナマコブシ",
    85: "カメックス",
    86: "マニューラ",
    87: "ガラガラ",
    88: "インテレオン",
    89: "ランクルス",
    90: "レイスポス",
    91: "メタモン",
    92: "エーフィ",
    93: "ユクシー",
    94: "シャンデラ",
    95: "デンジュモク",
    96: "サザンドラ",
    97: "ウルガモス",
    98: "エンテイ",
    99: "ポットデス",
    100: "ルガルガン",
    101: "ツンデツンデ",
    102: "ブラッキー",
    103: "ズガドーン",
    104: "レジロック",
    105: "コータス",
    106: "サーナイト",
    107: "ボスゴドラ",
    108: "レジアイス",
    109: "クレッフィ",
    110: "フシギバナ",
    111: "ランターン",
    112: "グレイシア",
    113: "ゴチルゼル",
    114: "ゾロアーク",
    115: "オノノクス",
    116: "マタドガス",
    117: "ペンドラー",
    118: "マホイップ",
    119: "ユレイドル",
    120: "ニドキング",
    121: "タチフサグマ",
    122: "コオリッポ",
    123: "シャワーズ",
    124: "トルネロス",
    125: "エレキブル",
    126: "フリーザー",
    127: "キングドラ",
    128: "サンダース",
    129: "ホルード",
    130: "バイバニラ",
    131: "クレベース",
    132: "ギガイアス",
    133: "トルネロス",
    134: "ブルンゲル",
    135: "キリキザン",
    136: "ポリゴンＺ",
    137: "ドラピオン",
    138: "ストリンダー",
    139: "シザリガー",
    140: "キュワワー",
    141: "ニャオニクス",
    142: "レジドラゴ",
    143: "アイアント",
    144: "バンバドロ",
    145: "ロトム",
    146: "ヤドラン",
    147: "ジュラルドン",
    148: "ヤドラン",
    149: "ガチゴラス",
    150: "アマルルガ",
};

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
    
    for (let key in pokemons) {
        console.log(key + '位は' + pokemons[key]);
    }
};

function pickPokemon() {
    const pokemon = [];
    for (let key in pokemons) {
        pokemon.push(pokemons[key])
    }

    const random = Math.floor(Math.random() * pokemon.length);
    console.log(random, pokemon[random]);
};