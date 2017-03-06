var SETDEX_SM = {

var components = [
    SETDEX_SM_BSPOT,
    SETDEX_CUSTOM,
    SETDEX_SHOWDOWN
];

for (var i=0; i<components.length; i++) {
    var sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_SM[p] = $.extend(SETDEX_SM[p], sourceDex[p])
            }
        }
    }
}

var reloadXYScript = function()
{
  console.log(SETDEX_CUSTOM);
    components = [
    SETDEX_SM_BSPOT,
    SETDEX_CUSTOM,
    SETDEX_SHOWDOWN
];

for (var i=0; i<components.length; i++) {
    sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_SM[p] = $.extend(SETDEX_SM[p], sourceDex[p])
            }
        }
    }
}
}
}
