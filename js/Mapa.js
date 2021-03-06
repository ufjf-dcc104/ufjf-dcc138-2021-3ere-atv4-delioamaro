export default class Mapa{

    constructor(linhas = 8, colunas = 12, tamanho = 32){
        this.LINHAS = linhas;
        this.COLUNAS = colunas;
        this.TAMANHO = tamanho;
        this.tiles = [];
        for (let l = 0; l < this.LINHAS; l++) {
            this.tiles[l] = [];
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = 0;
            }
        }
        this.cena = null;
    }
    
    desenhar(ctx){
        for (let l = 0; l < this.LINHAS; l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                switch(this.tiles[l][c]){
                    case 1:
                        ctx.fillStyle = "grey";
                        ctx.fillRect(c * this.TAMANHO, l * this.TAMANHO, this.TAMANHO, this.TAMANHO);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "black";
                        ctx.strokeRect(c * this.TAMANHO, l * this.TAMANHO, this.TAMANHO, this.TAMANHO);
                    break;  
                    default:
                        ctx.fillStyle = "black";
                        ctx.fillRect(c * this.TAMANHO, l * this.TAMANHO, this.TAMANHO, this.TAMANHO);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "grey";
                        ctx.strokeRect(c * this.TAMANHO, l * this.TAMANHO, this.TAMANHO, this.TAMANHO);
                    break;        

                }
            }
        }
    }

    carregarMapa(modelo){
        this.LINHAS = modelo.lenght;
        this.COLUNAS - modelo[0]?.lenght ?? 0;
        this.tile = [];
        for (let l = 0; l < this.LINHAS; l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = modelo[l][c];
            }
        }
    }
}