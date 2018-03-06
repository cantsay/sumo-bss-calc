var SETDEX_GBU = {};

var components = [
	SETDEX_GBUSETS,
	SETDEX_CUSTOM
];

for (var i = 0; i < components.length; i++) {
	var sourceDex = components[i];
	if (sourceDex) {
		for (var p in sourceDex) {
			if (sourceDex.hasOwnProperty(p)) {
				SETDEX_GBU[p] = $.extend(SETDEX_GBU[p], sourceDex[p]);
			}
		}
	}
}

var reloadXYScript = function () {
	console.log(SETDEX_CUSTOM);
	components = [
		SETDEX_GBUSETS,
		SETDEX_CUSTOM
	];

	for (var i = 0; i < components.length; i++) {
		sourceDex = components[i];
		if (sourceDex) {
			for (var p in sourceDex) {
				if (sourceDex.hasOwnProperty(p)) {
					SETDEX_GBU[p] = $.extend(SETDEX_GBU[p], sourceDex[p]);
				}
			}
		}
	}
};