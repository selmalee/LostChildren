$(document).ready(function(){
	// 页面缩放组件，实现页面大小自适应
	function calcZoom() {
		var dw = document.documentElement.clientWidth,
			dh = document.documentElement.clientHeight,
			ds = dw / dh,// 设备宽高初始比例
			pw = 414,// iPhone 6 Plus
			ph = 736,
			ps = pw / ph; // 原设宽高初始比例
		var zoom = ds > ps ? dh / ph : dw / pw;
		//若设备宽高比比原设宽高比大，则zoom取dh/ph，否则取dw/pw
		var stylesheet = '<style type="text/css">.contain { -webkit-transform: scale('+ zoom +'); transform: scale('+ zoom +'); }</style>';
		$('head').append(stylesheet);
	}
	calcZoom();
})