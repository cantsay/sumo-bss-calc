function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	console.log("cookie written")
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

if (readCookie("selectedItem")!=null) {
var selectedItem = readCookie("selectedItem");
var select = document.getElementById("theme");
select.value = selectedItem;
}

if (document.getElementById("theme")!=null)
{
	var drop = document.getElementById("theme").value

if (drop === "aegi") {
loadjscssfile("script_res/themes/ap_calc.css", "css")
loadjscssfile("script_res/themes/nb_calc.css", "css")
loadjscssfile("script_res/themes/select2.css", "css")
} else if (drop === "dark") {
	loadjscssfile("script_res/themes/dark_ap_calc.css", "css")
	loadjscssfile("script_res/themes/dark_nb_calc.css", "css")
	loadjscssfile("script_res/themes/select2.css", "css")
} else if (drop === "legacy") {
	loadjscssfile("script_res/themes/legacy_ap_calc.css", "css")
	loadjscssfile("script_res/themes/legacy_nb_calc.css", "css")
	loadjscssfile("script_res/themes/select2.css", "css")
}
} else {	
loadjscssfile("script_res/themes/ap_calc.css", "css")
loadjscssfile("script_res/themes/nb_calc.css", "css")
loadjscssfile("script_res/themes/select2.css", "css")
}