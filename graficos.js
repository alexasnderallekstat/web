import matematica from '/matematicas.js';
const canvas = document.getElementsByTagName('canvas')[0];
const c = canvas.getContext('2d');
function canvas_calibrar_tamanho(resolucao=100) {
	if(resolucao > 100 || resolucao < 1) return false;
	canvas.style.height = document.querySelector('article').clientHeight -canvas.computedStyleMap().get('border-top-width').value *2 +'px';
	const ar = getComputedStyle(canvas).aspectRatio.split(' / '),
	      h = resolucao /100 *(canvas.style.height.slice(0, -2) *1),
	      w = Math.floor((ar[0] *1) /(ar[1] *1) *h);
	canvas.width = w;
	canvas.height = h;
	if(canvas.width === w && canvas.height === h) return true;
	return false;
}
canvas_calibrar_tamanho();

class Nave {
	constructor(specs={}) {
		const padrao = {x: 0, y: 0, a: 0, v: 1, tamanho: 1, vel_rotacao: 1, vel_disparo: 1, dano: 1, poligono: 3};
		specs = {...padrao, ...specs};
		for(let s in specs) {
			this[s] = specs[s];
		}
	}
	desenhar(c) {
		const {x, y, a, poligono} = this;
		const {direcao} = matematica;
		c.beginPath();
		c.fillStyle = 'black';
		c.moveTo(x, y);
		let {dx, dy} = direcao(a +360 /poligono *1);
		c.lineTo(dx, dy);
		let {dx, dy} = direcao(a +360 /poligono *2);
		c.lineTo(dx, dy);
	}
}

const player = new Nave();
player.draw(c);
