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
		const padrao = {x: 0, y: 0, a: 0, v: 1, tamanho: 1, vel_rotacao: 1, vel_disparo: 1, dano: 1};
		specs = {...padrao, ...specs};
		for(let s in specs) {
			this[s] = specs[s];
		}
	}
	desenhar(c) {
		const {x, y} = this;
		c.beginPath();
		c.fillStyle = 'black';
		c.moveTo(x, y);
	}
}

const matematica = {
	seno(x) { return matematica.fix(Math.sin(x)) },
	coseno(x) { return matematica.fix(Math.cos(x)) },
	tan(x) { return Math.tan(x) },
	atan(x) { return Math.atan(x) },
	pi: Math.PI,
	grau_radiano(g) { return g *matematica.pi /180 },
	radiano_grau(r) { return r *180 /matematica.pi },
	direcao(angulo) { return {x: matematica.coseno(matematica.grau_radiano(angulo)), y: matematica.seno(matematica.grau_radiano(angulo)) } },
	arredondar(x) { return 0 +matematica.fix(x +matematica.atan(matematica.tan(-x *matematica.pi -matematica.pi /(2 **50))) /matematica.pi) },
	chao(x) { return 0 +matematica.fix(x +matematica.atan(matematica.tan(-x *matematica.pi +matematica.pi /2 -matematica.pi /(2 **50))) /matematica.pi -0.5) },
	teto(x) { return 0 +matematica.fix(x +matematica.atan(matematica.tan(-x *matematica.pi +matematica.pi /2 +matematica.pi /(2 **50))) /matematica.pi +0.5) },
	resto(x, d=1) { return x -matematica.chao(x /d) *d },
	decimal(x) {  return 0 +matematica.fix(x -matematica.chao(x)) },
	raiz(x, r=2) { return 0 +matematica.fix(x **(1 /r)) },
	soma(x=0, y=0) { x = matematica.fix(x); y = matematica.fix(y); return matematica.fix(x +y) },
	multi(x=0, y=1) { x = matematica.fix(x); y = matematica.fix(y); return matematica.fix(x *y) },
	fix(x) { if (typeof x !== 'number' || x +'' === 'NaN' || x +'' === 'Infinity') { return null } return (x).toFixed(6) *1 }
}

class xmatematica {/*const matematica = {
	tan(x) { return Math.tan(x) },
	atan(x) { return Math.atan(x) },
	pi: Math.PI,
	arredondar(x) { return 0 +fix(x +atan(tan(-x *pi -pi /(2 **50))) /pi) },
	chao(x) { return 0 +fix(x +atan(tan(-x *pi +pi /2 -pi /(2 **50))) /pi -0.5) },
	teto(x) { return 0 +fix(x +atan(tan(-x *pi +pi /2 +pi /(2 **50))) /pi +0.5) },
	resto(x, l=1) { return a -chao(a /l) *l },
	decimal(x) {  return 0 +fix(x -chao(x)) },
	raiz(x, r=2) { return 0 +fix(x **(1 /r)) },
	soma(x=0, y=0) { x = fix(x); y = fix(y); return fix(x +y) },
	multi(x=0, y=1) { x = fix(x); y = fix(y); return fix(x *y) },
	fix(x) { if (typeof x !== 'number' || x +'' === 'NaN' || x +'' === 'Infinity') { return null } return (x).toFixed(6) *1 }
}*/}
