<%*
// --- Get Reference ---
let reference = await tp.user.getBibleReference(tp);
let bibleText = await tp.user.getBibleQuote(tp, reference.shortRef);

let calloutVersion = await tp.system.suggester(
  ["Standard", "Emphasized"],
  ["bible", "bible2"],
  "bible",
  "Choose the callout version:"
);

let coHeader = `> [!${calloutVersion}] ${reference.shortRef}`;
let coBlock = bibleText.split("\n").map(l => "> " + l).join("\n");

tR += coHeader + "\n" + coBlock;
-%>