const fs = require("fs");
const parent = "Assets";
const dirtree = require("directory-tree");
let removed = 0;
const recusiveRemoveDuplicate = (folder) => {
 const tree = dirtree(folder);
 tree.children.forEach((c) => {
  if (c.type === "directory") {
   recusiveRemoveDuplicate(c.path);
  } else if (c.type === "file") {
   if (c.name.includes("#")) {
    fs.unlinkSync(c.path);
    removed = removed + 1;
   }
  }
 });
};
recusiveRemoveDuplicate(parent);
console.log(`removed ${removed} files`);
