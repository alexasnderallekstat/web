const canvas = document.getElementsByTagName('canvas');
const c = canvas.getContext('2d');
function canvas_calibrar_tamanho() {
	canvas.width = 16*40;	canvas.heigth = 9*40;
	
	return true;
}
