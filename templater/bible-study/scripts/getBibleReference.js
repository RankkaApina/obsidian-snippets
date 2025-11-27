module.exports = async function getBibleReference(tp) {
  
  let bibleBook = await tp.user.getBibleBook(tp);
  let section = bibleBook.section;
  let bookName = bibleBook.bookName;
  let bookTag = bibleBook.bookTag;
  let bookAbbr = bibleBook.bookAbbr;

  let verseRange = await tp.user.getBibleVerseRange(tp); 

  // build references
  let shortRef = bookAbbr + " " + verseRange;
  let fullRef = shortRef.replace(bookAbbr, bookName);


  return {
    section,
    bookName,
    bookTag,
    bookAbbr,
    shortRef,
    fullRef,
  };
};
