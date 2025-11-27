<%*
// --- Get Reference ---
let bibleBook = await tp.user.getBibleBookAsk(tp);
let section = bibleBook.section;
let bookName = bibleBook.bookName;
let bookTag = bibleBook.bookTag;
let bookAbbr = bibleBook.bookAbbr;
let verseRange = await tp.user.getBibleVerseRange(tp); 

let shortRef = bookAbbr + " " + verseRange;
let bibleVersion = await tp.system.prompt("Which Bible translation?:");

let bibleText = await tp.user.getBibleQuote(tp, shortRef);

let coHeader = `> [!bible2] ${shortRef}`;
let coBlock = bibleText.split("\n").map(l => "> " + l).join("\n");

tR += coHeader + "\n" + coBlock;
-%>