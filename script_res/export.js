function exportToPsFormat(pokeInfo) {
	var pokemon = new Pokemon(pokeInfo);
	var finalText = "";
	var name = pokemon.name //this is where you should put the thing similar to SHOWDOWN_FORMES[] to fix the weird mega thing
	finalText = name + (pokemon.item ? " @ " + pokemon.item : "") + "\n";
	finalText += pokemon.nature && gen > 2 ? pokemon.nature + " Nature" + "\n" : "";
	finalText += pokemon.ability ? "Ability: " + pokemon.ability + "\n" : "";
	finalText += "EVs: ";
	var EVs_Array = [];
	if (pokemon.HPEVs != -1 && pokemon.HPEVs > 0) {
		EVs_Array.push(pokemon.HPEVs + " HP");
	}
	for (stat in pokemon.evs) {
		if (pokemon.evs[stat]) {
			EVs_Array.push(pokemon.evs[stat] + " " + toSmogonStat(stat));
		}
	}
	/*var IVs_Array = [];
	for (stat in pokemon.ivs) {
		if (pokemon.ivs[stat]) {
			IVs_Array.push(pokemon.ivs[stat] + " " + toSmogonStat(stat));
		}
	}*/
	finalText += serialize(EVs_Array, " / ");
	//finalText += serialize(IVs_Array, " / ");
	finalText += "\n";
	var movesArray = [];
	for (i = 0; i < 4; i++) {
		var moveName = pokemon.moves[i].name;
		if (moveName !== "(No Move)") {
			finalText += "- " + moveName + "\n";
		}
	}
	finalText = finalText.trim();
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