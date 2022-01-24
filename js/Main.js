import Cena from "./Cena.js";
import Sprite from "./Sprite.js";
import Mapa from "./Mapa.js";
import modeloMapa1 from "../maps/mapa1.js";
import AssetManager from "./AssetManager.js";


const canvas = document.querySelector("canvas");
canvas.width = 20*32;
canvas.height = 14*32;
const cena1 = new Cena(canvas, assets);
const mapa1 = new Mapa(14, 20, 32);
mapa1.carregarMapa(modeloMapa1);
cena1.configurarMapa(mapa1);
cena1.configurarMapa(mapa1);
const pc = new Sprite({vx:10, color:"orange"});
const en1 = new Sprite({x:160, w:50, color:"blue"});

cena1.adicionar(pc);
cena1.adicionar(en1);
cena1.iniciar();

document.addEventListener("keydown", (e) => {
    switch(e.key){
        case "i":
            cena1.iniciar();
            break;
        case "p":
            cena1.parar()
            break;
    }
})