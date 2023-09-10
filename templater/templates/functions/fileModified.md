<%* 
const file = tp.file.find_tfile(tp.file.title); 
await app.fileManager.processFrontMatter(file, (frontmatter) => { 
// Replace "updated" with the key you use 
frontmatter["file modified"] = tp.file.last_modified_date("YYYY-MM-DD HH:mm:ssZ"); }); 
-%>
