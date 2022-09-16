// 引数でcolorを受け取り画像のURLを出力する関数


export async function fetchImages(color) {
    let url = []; // 最終的なデータを格納する

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-color/${color}/`
    );
    const data = await response.json();

    for (let i = 0; i < data.pokemon_species.length; i++) {
        url.push(data.pokemon_species[i].url);
    }

    // 文字列から数値だけ取り出して1文字目を消す
    for (let i = 0; i < url.length; i++) {
        let str = url[i];
        url[i] = str.replace(/[^0-9]/g, '').slice(1);
    }

    for (let i = 0; i < url.length; i++) {
        url[i] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url[i]}.png`
    }

    console.log(url);

    return url;

}