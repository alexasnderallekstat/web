const canvas = document.getElementsByTagName('canvas')[0];
const c = canvas.getContext('2d');
function canvas_calibrar_tamanho(resolucao=100) {
	canvas.style.height = document.querySelector('article').clientHeight + 'px';
	const h = resolucao /100 *(canvas.style.height.slice(0, -2) *1),
	      w = Math.floor((16 /9) *h);
	canvas.width = w;
	canvas.height = h;
	if(canvas.width === w && canvas.height === h) return true;
	return false;
}
