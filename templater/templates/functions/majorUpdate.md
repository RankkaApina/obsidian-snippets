<%* 
const file = tp.file.find_tfile(tp.file.title); 
await app.fileManager.processFrontMatter(file, (frontmatter) => { 
// Replace "updated" with the key you use 
frontmatter["updated"] = tp.date.now("YYYY-MM-DD HH:mm:ssZ"); }); 
-%>
