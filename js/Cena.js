export default class Cena{

    constructor(canvas, assets = null){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.sprites = [];
        this.t0 = 0;
        this.dt = 0;
        this.idAnim = null;
        this.mapa = null;
        this.assets = assets;
    }

    desenhar(){
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.mapa?.desenhar(this.ctx);
        for (let s = 0; s < this.sprites.length; s++){
            const sprite = this.sprites[s];
            sprite.desenhar(this.ctx);
        }
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText(this.assets?.progresso(), 10, 20);
    }

    adicionar(sprite){
        this.sprites.push(sprite);
    }

    passo(dt){
        for (const sprite of this.sprites) {
            sprite.passo(dt);
        }
    }

    quadro(t){
        this.t0 = this.t0 ?? t;
        this.dt = (t - this.t0) / 1000;
        this.passo(this.dt);
        this.desenhar();
        this.iniciar();
        this.t0 = t;
    }

    iniciar(){
        this.idAnim = requestAnimationFrame((t) => {this.quadro(t);});
    }

    parar(){
        cancelAnimationFrame(this.idAnim);
        this.t0 = null;
        this.dt = 0;
    }

    checarColisao(){
        for (let a = 0; a < this.sprites.length - 1; a++) {
            const spriteA = this.sprites[a];
            for (let b = 0; b < this.sprites.length; b++) {
                const spriteB = this.sprites[b];
                if(spriteA.colidirCom(spriteB)){
                    this.quandoColidir(spriteA, spriteB);
                }
            }
        }
    }

    quandoColidir(a, b){

    }

    configurarMapa(mapa){
        this.mapa = mapa;
        this.mapa.cena = this;
    }
}