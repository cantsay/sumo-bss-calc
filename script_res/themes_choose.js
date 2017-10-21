function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}
 


var changetheme = function()
{
	
	
	if (document.getElementById("theme").value === "aegislash") {
		loadjscssfile("script_res/themes/ap_calc.css", "css")
		loadjscssfile("script_res/themes/nb_calc.css", "css")
		loadjscssfile("script_res/themes/select2.css", "css")
		console.log("loaded aegislash theme")
		removejscssfile("script_res/themes/dark_ap_calc.css", "css")
		removejscssfile("script_res/themes/dark_nb_calc.css", "css")
		//removejscssfile("script_res/themes/dark_select2.css", "css")
		/*removejscssfile("script_res/themes/legacy_ap_calc.css", "css")
		removejscssfile("script_res/themes/legacy_nb_calc.css", "css")
		removejscssfile("script_res/themes/legacy_select2.css", "css")*/
	} else if (document.getElementById("theme").value === "dark") {
		loadjscssfile("script_res/themes/dark_ap_calc.css", "css")
		loadjscssfile("script_res/themes/dark_nb_calc.css", "css")
		//loadjscssfile("script_res/dark_select2.css", "css")
		/*removejscssfile("script_res/themes/ap_calc.css", "css")
		removejscssfile("script_res/themes/nb_calc.css", "css")
		removejscssfile("script_res/themes/select2.css", "css")
		removejscssfile("script_res/themes/legacy_ap_calc.css", "css")
		removejscssfile("script_res/themes/legacy_nb_calc.css", "css")
		removejscssfile("script_res/themes/legacy_select2.css", "css")*/
		console.log("loaded dark theme")
	} else if (document.getElementById("theme").value === "legacy") {
		loadjscssfile("script_res/themes/legacy_ap_calc.css", "css")
		loadjscssfile("script_res/themes/legacy_nb_calc.css", "css")
		loadjscssfile("script_res/themes/legacy_select2.css", "css")
		removejscssfile("script_res/themes/dark_ap_calc.css", "css")
		removejscssfile("script_res/themes/dark_nb_calc.css", "css")
		//removejscssfile("script_res/themes/dark_select2.css", "css")
		/*removejscssfile("script_res/themes/ap_calc.css", "css")
		removejscssfile("script_res/themes/nb_calc.css", "css")
		removejscssfile("script_res/themes/select2.css", "css")*/
		console.log("loaded legacy theme")
	}
}