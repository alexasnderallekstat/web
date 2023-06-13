const canvas = document.getElementsByTagName('canvas')[0];
const c = canvas.getContext('2d');
canvas.style.backgroundColor = 'red';
function canvas_calibrar_tamanho() {
	canvas.width = 16*40;	canvas.heigth = 9*40;
	
	return true;
}
