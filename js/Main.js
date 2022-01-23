import Cena from "./Cena.js";
import Sprite from "./Sprite.js";

const canvas = document.querySelector("canvas");
const cena1 = new Cena(canvas);
const pc = new Sprite({color:"orange"});
const en1 = new Sprite({x:160, w:50, color:"blue"});

cena1.adicionar(pc);
cena1.adicionar(en1);
cena1.passo(0.2);
cena1.desenhar();