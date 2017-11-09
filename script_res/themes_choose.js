var changetheme = function()
{
	
	
	if (document.getElementById("theme").value === "aegislash") {
		loadjscssfile("script_res/themes/ap_calc.css", "css")
		loadjscssfile("script_res/themes/nb_calc.css", "css")
		loadjscssfile("script_res/themes/select2.css", "css")
		console.log("loaded aegislash theme")
		//var select = document.getElementById("theme");
		//var selectedItem = select.value;
		//createCookie("selectedItem",selectedItem)
		removejscssfile("script_res/themes/dark_ap_calc.css", "css")
		removejscssfile("script_res/themes/dark_nb_calc.css", "css")
		//removejscssfile("script_res/themes/dark_select2.css", "css")
		/*removejscssfile("script_res/themes/legacy_ap_calc.css", "css")
		removejscssfile("script_res/themes/legacy_nb_calc.css", "css")
		removejscssfile("script_res/themes/legacy_select2.css", "css")*/
	} else if (document.getElementById("theme").value === "dark") {
		loadjscssfile("script_res/themes/dark_ap_calc.css", "css")
		loadjscssfile("script_res/themes/dark_nb_calc.css", "css")
		//var select = document.getElementById("theme");
		//var selectedItem = select.value;
		//createCookie("selectedItem",selectedItem)
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
		//var select = document.getElementById("theme");
		//var selectedItem = select.value;
		//createCookie("selectedItem",selectedItem)
		//removejscssfile("script_res/themes/dark_select2.css", "css")
		/*removejscssfile("script_res/themes/ap_calc.css", "css")
		removejscssfile("script_res/themes/nb_calc.css", "css")
		removejscssfile("script_res/themes/select2.css", "css")*/
		console.log("loaded legacy theme")
	}
}
