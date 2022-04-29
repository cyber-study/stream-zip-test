const fs=require("fs");
const path=require("path");
const StreamZip = require("node-stream-zip");

const zip = new StreamZip({
  file:path.resolve(__dirname,"./statics/test.zip"),
  storeEntries: true
});


zip.on("error", error => { 
  console.log("error",error);
});

zip.on('ready', () => {
  fs.mkdirSync('extracted');
  zip.extract(null, './extracted', (err, count) => {
      console.log(err ? 'Extract error' : `Extracted ${count} entries`);
      zip.close();
  });
});