function anagrams(word, words) {
return words.filter(function(x){
		if (x.length === word.length) {
			if (x.split("").sort().join("").toLowerCase().includes(word.split("").sort().join("").toLowerCase())) {
				return x;
			}
		}
	});
}