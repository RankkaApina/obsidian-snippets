/* BibleHelper.js - reusable Templater script for Bible notes */

module.exports = async function getBibleBook(tp) {
	//  --- Bible Books ---
	let books = {
		ot: [
			["Genesis", "genesis", "Gen"],
			["Exodus", "exodus", "Exod"],
			["Leviticus", "leviticus", "Lev"],
			["Numbers", "numbers", "Num"],
			["Deuteronomy", "deuteronomy", "Deut"],
			["Joshua", "joshua", "Josh"],
			["Judges", "judges", "Judg"],
			["Ruth", "ruth", "Ruth"],
			["1 Samuel", "1-samuel", "1 Sam"],
			["2 Samuel", "2-samuel", "2 Sam"],
			["1 Kings", "1-kings", "1 Kgs"],
			["2 Kings", "2-kings", "2 Kgs"],
			["1 Chronicles", "1-chronicles", "1 Chr"],
			["2 Chronicles", "2-chronicles", "2 Chr"],
			["Ezra", "ezra", "Ezra"],
			["Nehemiah", "nehemiah", "Neh"],
			["Esther", "esther", "Esth"],
			["Job", "job", "Job"],
			["Psalms", "psalms", "Ps"],
			["Proverbs", "proverbs", "Prov"],
			["Ecclesiastes", "ecclesiastes", "Eccl"],
			["Song of Songs", "song-of-songs", "Song"],
			["Isaiah", "isaiah", "Isa"],
			["Jeremiah", "jeremiah", "Jer"],
			["Lamentations", "lamentations", "Lam"],
			["Ezekiel", "ezekiel", "Ezek"],
			["Daniel", "daniel", "Dan"],
			["Hosea", "hosea", "Hos"],
			["Joel", "joel", "Joel"],
			["Amos", "amos", "Amos"],
			["Obadiah", "obadiah", "Obad"],
			["Jonah", "jonah", "Jonah"],
			["Micah", "micah", "Mic"],
			["Nahum", "nahum", "Nah"],
			["Habakkuk", "habakkuk", "Hab"],
			["Zephaniah", "zephaniah", "Zeph"],
			["Haggai", "haggai", "Hag"],
			["Zechariah", "zechariah", "Zech"],
			["Malachi", "malachi", "Mal"],
		],
		apo: [
			["Tobit", "tobit", "Tob"],
			["Judith", "judith", "Jdt"],
			["Esther (Greek)", "gr-esther", "Gk Esth"],
			["The Wisdom of Solomon", "wisdom-of-solomon", "Wis"],
			["Sirach", "sirach", "Sir"],
			["Baruch", "baruch", "Bar"],
			["The Letter of Jeremiah", "letter-of-jeremiah", "Let Jer"],
			["The Prayer of Azariah", "pr-azariah", "Pr Azar"],
			["The Song of the Three Jews", "song-3-jews", "Song Three"],
			["Susanna", "susanna", "Sus"],
			["Bel and the Dragon", "bel-dragon", "Bel"],
			["1 Maccabees", "1-maccabees", "1 Macc"],
			["2 Maccabees", "2-maccabees", "2 Macc"],
			["1 Esdras", "1-esdras", "1 Esd"],
			["Prayer of Manasseh", "pr-manasseh", "Pr Man"],
			["Psalm 151", "psalm-151", "Ps 151"],
			["3 Maccabees", "3-maccabees", "3 Macc"],
			["2 Esdras", "2-esdras", "2 Esd"],
			["4 Maccabees", "4-maccabees", "4 Macc"],
		],
		nt: [
			["Matthew", "matthew", "Matt"],
			["Mark", "mark", "Mark"],
			["Luke", "luke", "Luke"],
			["John", "john", "John"],
			["Acts", "acts", "Acts"],
			["Romans", "romans", "Rom"],
			["1 Corinthians", "1-corinthians", "1 Cor"],
			["2 Corinthians", "2-corinthians", "2 Cor"],
			["Galatians", "galatians", "Gal"],
			["Ephesians", "ephesians", "Eph"],
			["Philippians", "philippians", "Phil"],
			["Colossians", "colossians", "Col"],
			["1 Thessalonians", "1-thessalonians", "1 Thess"],
			["2 Thessalonians", "2-thessalonians", "2 Thess"],
			["1 Timothy", "1-timothy", "1 Tim"],
			["2 Timothy", "2-timothy", "2 Tim"],
			["Titus", "titus", "Titus"],
			["Philemon", "philemon", "Phlm"],
			["Hebrews", "hebrews", "Heb"],
			["James", "james", "Jas"],
			["1 Peter", "1-peter", "1 Pet"],
			["2 Peter", "2-peter", "2 Pet"],
			["1 John", "1-john", "1 Jn"],
			["2 John", "2-john", "2 Jn"],
			["3 John", "3-john", "3 Jn"],
			["Jude", "jude", "Jude"],
			["Revelation", "revelation", "Rev"],
		],
	};

	section = await tp.system.suggester(
		["Old Testament", "Apocrypha / Deuterocanonical", "New Testament"],
		["ot", "apo", "nt"],
		0,
		"Which testament/section?"
	);

	// --- Choose book if not detected ---
	let bookName = "",
		bookTag = "",
		bookAbbr = "";

	let choice = await tp.system.suggester(
		books[section].map((b) => b[0]),
		books[section]
	);
	bookName = choice[0];
	bookTag = choice[1];
	bookAbbr = choice[2];

	return {
		section,
		bookName,
		bookTag,
		bookAbbr,
	};
};
