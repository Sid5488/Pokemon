// Link da API
const url = "https://pokeapi.co/api/v2/pokemon/";

// Declaração de variáveis
const $pesquisa = document.getElementById('pesquisa');
const $btnBotao = document.getElementById('btnBotao');
const $mostrarPokemon = document.getElementById('mostrar_pokemon');

// Trás todos as informações de todos os pokémons que existem na API
const json = `${url}`;
fetch(json).then( res => res.json()).then(json => {
    for ( let i = 1; i <= 16; i++ ) {
        random = Math.round(Math.random() * 1157);
        json = url + random + "/";
        fetch(json).then(res => res.json()).then(json => {
            let html = `
                <div class="pokemons">
                    <div class="name center">
                        <h1>${json.name}</h1>
                    </div>
                    <div class="img_poke center">
                        <img src='${json.sprites.front_default}' alt='pokémon'>
                    </div>
                    <div class="dados_pokemon center">
                        <div class="tipo">
                            Tipo: ${json.types
                            .map( typ => typ.type.name)
                            .join('/')}
                        </div>
                        <div class="div_mais">
                            <div class="btnMais">
                                Mais
                                <div class="mais_inf">
                                    <div class="titulo_poke">
                                        <h2>${json.name}</h2>
                                    </div>
                                    <div class="habilidade center">
                                        Habilidades
                                    </div>
                                    <div class="mostrar_hab center">
                                        ${json.abilities
                                        .map(hab => hab.ability.name)
                                        .join(', ')}
                                    </div>
                                    <div class="movimentos center">
                                            Movimentos
                                    </div>
                                    <div class="mostrar_mov center">
                                        ${json.moves
                                        .filter( (el, i) => i < 20).map(el => el.move.name).join(', ')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            enviaTela(html);
        });
    }
});

// Trá as informações de um pokémon específico
const pokeName = () => {
    const json = `${url}${pesquisa.value}/`;
    fetch(json).then( res => res.json()).then(json => {
        let html = `
        <div class="pokemons">
            <div class="name center">
                <h1>${json.name}</h1>
            </div>
            <div class="img_poke center">
                <img src='${json.sprites.front_default}' alt='pokémon'>
            </div>
            <div class="dados_pokemon center">
                <div class="tipo">
                    Tipo: ${json.types
                        .map(typ => typ.type.name)
                        .join()}
                </div>
                <div class="div_mais">
                    <div class="btnMais">
                        Mais
                        <div class="mais_inf">
                            <div class="titulo_poke">
                                <h2>${json.name}</h2>
                            </div>
                            <div class="habilidade center">
                                Habilidades
                            </div>
                            <div class="mostrar_hab center">
                                ${json.abilities
                                .map(hab => hab.ability.name)
                                .join()}
                            </div>
                            <div class="movimentos center">
                                Movimentos
                            </div>
                            <div class="mostrar_mov center">
                                ${json.moves
                                    .filter( (el, i) => i < 20).map(el => el.move.name).join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        $mostrarPokemon.innerHTML = html;
    });
}

/* ALGORITMO PARA O FILTRO */ 
// fetch(json).then(res => res.json()).then(json => {
//     let tam;
//     for (let i = 1; i <= 807; i++) {
//         json = url + i + "/"; 
//         fetch(json).then(res => res.json()).then(json => {
//             //json.types.filter( (el, i) => i > 5 ).map(el => el.type.name).join('-')
//             let tam = json.types;
//             for (let i = 0; i <= tam.length; i++) {
//                 console.log(json.types[i].type.name)
//                 if ( json.types[i].type.name == "ghost") {
//                     let html = `
//                         <div class="pokemons">
//                             <div class="name center">
//                                 <h1>${json.name}</h1>
//                             </div>
//                             <div class="img_poke center">
//                                 <img src='${json.sprites.front_default}' alt='pokémon'>
//                             </div>
//                             <div class="dados_pokemon center">
//                                 <div class="tipo">
//                                     Tipo: ${json.types
//                                         .map(typ => typ.type.name)
//                                         .join()}
//                                 </div>
//                                 <div class="div_mais">
//                                     <div class="btnMais">
//                                         Mais
//                                         <div class="mais_inf">
//                                             <div class="titulo_poke">
//                                                 <h2>${json.name}</h2>
//                                             </div>
//                                             <div class="habilidade center">
//                                                 Habilidades
//                                             </div>
//                                             <div class="mostrar_hab center">
//                                                 ${json.abilities
//                                                 .map(hab => hab.ability.name)
//                                                 .join()}
//                                             </div>
//                                             <div class="movimentos center">
//                                                 Movimentos
//                                             </div>
//                                             <div class="mostrar_mov center">
//                                                 ${json.moves
//                                                     .filter( (el, i) => i < 20).map(el => el.move.name).join(', ')}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     `;
//                     $mostrarPokemon.innerHTML += html;
//                 }
//                 else{
//                     console.log("não é poison");
//                 }
//             }
//         });
//     }
// });

$btnBotao.addEventListener('click', pokeName);

function enviaTela(html) {
    $mostrarPokemon.innerHTML += html;
}
