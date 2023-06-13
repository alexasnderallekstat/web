const canvas = document.getElementsByTagName('canvas')[0];
const c = canvas.getContext('2d');
canvas.style.backgroundColor = 'red';
function canvas_calibrar_tamanho() {
	const w = 16 * 40,
	      h =  9 * 40;
	canvas.width = w;
	canvas.height = h;
	if(canvas.width === w && canvas.height === h) return true;
	return false;
}
