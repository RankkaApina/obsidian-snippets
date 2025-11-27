module.exports = async function getBibleVerseRange(tp) {

  // --- Ask for passage range ---

  let startChapter = await tp.system.prompt("Start chapter:");
  let startVerse = await tp.system.prompt("Start verse:");
  let endChapter = await tp.system.prompt("End chapter:");
  let endVerse = await tp.system.prompt("End verse:");

  let verseStart = "";
  let verseEnd = "";
  
  if (startVerse == "0" || startVerse == "") {
    verseStart = startChapter;
  } else {
    verseStart = startChapter + ":" + startVerse;
  }

  if (endVerse == "0" || endVerse == "") {
    if (endChapter == "0" || endChapter == "") {
      verseEnd = "";
    } else {
      verseEnd = "-" + endChapter;
    }
  } else if (endChapter == "0" || endChapter == "") {
    verseEnd = "-" + endVerse;
  } else {
    verseEnd = "-" + endChapter + ":" + endVerse;
  }

  verse = verseStart + verseEnd;

  return verse
}