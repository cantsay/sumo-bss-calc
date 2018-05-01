function exportToPsFormat(pokeInfo) {
	var pokemon = new Pokemon(pokeInfo);
	var finalText = "";
	var evSum = 0;
	var ivSum = 0;
	var evsAlert = false;
	var name = pokemon.name; //this is where you should put the thing similar to SHOWDOWN_FORMES[] to fix the weird mega thing
	finalText = name + (pokemon.item ? " @ " + pokemon.item : "") + "\n";
	finalText += pokemon.nature && gen > 2 ? pokemon.nature + " Nature" + "\n" : "";
	finalText += pokemon.ability ? "Ability: " + pokemon.ability + "\n" : "";
	finalText += "EVs: ";
	var EVs_Array = [];
	if (pokemon.HPEVs != -1 && pokemon.HPEVs > 0) {
		evSum += pokemon.HPEVs;
		EVs_Array.push(pokemon.HPEVs + " HP");
	}
	for (stat in pokemon.evs) {
		if (pokemon.evs[stat]) {
			evSum += pokemon.evs[stat];
			EVs_Array.push(pokemon.evs[stat] + " " + toSmogonStat(stat));
		}
	}
	if (evSum > 510) {
		evsAlert = true;
	}

	var ivArray = [];
	var IVs_Array = [];
	if (pokemon.HPIVs != -1) {
		ivSum += pokemon.HPIVs;
		//IVs_Array.push(pokemon.HPIVs + " HP");
		if (pokemon.HPIVs != 31) {
			ivArray.push(pokemon.HPIVs + " HP");
		}
	}
	for (stat in pokemon.ivs) {
		if (pokemon.ivs[stat]) {
			ivSum += pokemon.ivs[stat];
		}
		if (pokemon.ivs[stat] < 31) {
			ivArray.push(pokemon.ivs[stat] + " " + toSmogonStat(stat));
		}
	}

	for (var i = 0; i < ivArray.length - 2; i++) {
		IVs_Array.push(ivArray[i]);
	}

	finalText += serialize(EVs_Array, " / ");
	finalText += "\n";

	if (ivSum < 186) {
		finalText += "IVs: ";
		finalText += serialize(IVs_Array, " / ");
		finalText += "\n";
	}

	var movesArray = [];
	for (i = 0; i < 4; i++) {
		var moveName = pokemon.moves[i].name;
		if (moveName !== "(No Move)") {
			finalText += "- " + moveName + "\n";
		}
	}
	finalText = finalText.trim();

	if (evsAlert === true) {
		alert("Exported Pokemon has " + evSum + " EVs and is therefore illegal. Exported set anyway.");
	}
	document.getElementById("customMon").innerHTML = finalText;
}

function serialize(array, separator) {
	var text = "";
	for (i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			text += array[i] + separator;
		} else {
			text += array[i];
		}
	}
	return text;
}