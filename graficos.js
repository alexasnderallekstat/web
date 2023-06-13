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
