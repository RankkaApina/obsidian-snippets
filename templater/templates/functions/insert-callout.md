<%*
// source: https://forum.obsidian.md/t/template-for-insert-callout/65074
// NEEDS TO BE MODIFIED FOR MY SETUP!!!
//get selection
noteContent = tp.file.selection();
// list callouts
const callouts = {
   note:     '🔵 ✏ Note',
   info:     '🟢 ℹ Info',
   todo:     '🟢 ✔️ Todo',
   tip:      '🌐 🔥 Tip / Hint / Important',
   abstract: '🌐 📋 Abstract / Summary / TLDR',
   question: '🟡 ❓ Question / Help / FAQ',
   quote:    '🔘 💬 Quote / Cite',
   example:  '🟣 📑 Example',
   success:  '🟢 ✔ Success / Check / Done',
   warning:  '🟠 ⚠ Warning / Caution / Attention',
   failure:  '🔴 ❌ Failure / Fail / Missing',
   danger:   '🔴 ⚡ Danger / Error',
   bug:      '🔴 🐞 Bug'
};
// return callout
const type = await tp.system.suggester(Object.values(callouts), Object.keys(callouts), true, 'Select callout type.');
//return fold
const fold = await tp.system.suggester(['None', 'Expanded', 'Collapsed'], ['', '+', '-'], true, 'Select callout fold option.');

//return title
const title = await tp.system.prompt('Title:', '', true);

//get array of lines
lines = noteContent.split('\n')
//make a new string with > prepended to each line
let newContent = "";
lines.forEach(l => {
	newContent += '> ' + l + "\n";
})
//remove the last newline character
newContent = newContent.replace(/\n$/, "");
//define callout header
header = ">[!"+type+"]"+fold + " " + title +"\n"
// Return the complete callout block
return header + newContent;
%>