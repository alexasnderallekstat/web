const tracker = {
	tempo_decorrido: function() {
		function flo(x) {
			return Math.floor(x);
		}
		function fil(x, y=2) {
			return '0'.repeat(y -x.toString().length) +x;
		}
		var t = flo(new DocumentTimeline().currentTime /1e3),
		    s = flo(flo(t %60)),
		    m = flo(flo(t %(60 **2)) /60),
		    h = flo(flo(t %(60 **3)) /(60 **2)),
		    d = `${h > 0 ? fil(h) +':' : ''}${h > 0 || m > 0 ? fil(m) +':' : ''}${h > 0 || m > 0 ? fil(s) : fil(s) +'s'} decorridos.`;
		return d;
	}
}
