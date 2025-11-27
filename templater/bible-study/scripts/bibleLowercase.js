module.exports = function bibleLowercase(str) {
	// smart lowercase alias
	let bibleNouns = [
		"Aaron",
		"Abel",
		"Abimelech",
		"Abram",
		"Abraham",
		"Amos",
		"Azariah",
		"Babel",
		"Babylon",
		"Beer-sheba",
		"Bel",
		"Benjamin",
		"Bilhah",
		"Canaan",
		"Cain",
		"Colossians",
		"Corinthians",
		"Daniel",
		"David",
		"Dinah",
		"Egypt",
		"Ephesians",
		"Elijah",
		"Elisha",
		"Esdras",
		"Ezekiel",
		"Esau",
		"Esther",
		"Eve",
		"Ezra",
		"Galatians",
		"Gideon",
		"God",
		"Greek",
		"Habakkuk",
		"Haggai",
		"Hagar",
		"Ham",
		"Hosea",
		"Isaac",
		"Ishmael",
		"Isaiah",
		"Jacob",
		"James",
		"Jeremiah",
		"Jerusalem",
		"Jesus",
		"John",
		"John the Baptist",
		"Job",
		"Joel",
		"Jonah",
		"Joseph",
		"Joshua",
		"Judith",
		"Jude",
		"Laban",
		"Leah",
		"Lot",
		"Luke",
		"Malachi",
		"Maccabees",
		"Manasseh",
		"Mark",
		"Mary",
		"Matthew",
		"Micah",
		"Moses",
		"Nahum",
		"Nehemiah",
		"Nimrod",
		"Noah",
		"Obadiah",
		"Paul",
		"Peter",
		"Philemon",
		"Philippians",
		"Rachel",
		"Rebekah",
		"Romans",
		"Samuel",
		"Sarah",
		"Sarai",
		"Saul",
		"Seth",
		"Solomon",
		"Susanna",
		"Thessalonians",
		"Timothy",
		"Titus",
		"Tobit",
		"Zechariah",
		"Zephaniah",
		"Zilpah",
	];

	function escRx(s) {
		return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	// Sort longest first → ensures multi-word names match first
	bibleNouns.sort((a, b) => b.length - a.length);

	let placeholders = [];
	let output = str;
	let id = 0;

	for (const canonical of bibleNouns) {
		// Replace spaces in canonical name with pattern that matches spaces or hyphens
		const pattern = escRx(canonical).replace(/\\\s+/g, "[\\s\\-]+");
		// Match punctuation immediately before or after the name
		const re = new RegExp(`([\\(\\["']*)(${pattern})([\\),\\."']*)`, "gi");

		output = output.replace(re, (_, before, match, after) => {
			const token = `__prot${id}__`;
			placeholders.push({ token, replacement: canonical });
			id++;
			return `${before}${token}${after}`;
		});
	}

	// Lowercase everything else
	output = output.toLowerCase();

	// Restore canonical names
	for (const { token, replacement } of placeholders) {
		output = output.replaceAll(token, replacement);
	}

	return output;
};
