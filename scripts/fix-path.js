const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

// Path to the generated index.html file
const indexPath = path.join(projectRoot, 'excalidraw-app/build', 'index.html');

// Read the index.html file
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  // Replace absolute paths with relative paths
  let result = data.replace(/href="\/manifest.webmanifest"/g, 'href="./manifest.webmanifest"');
  result = result.replace(/src="\/assets\/index-B89VZDlF.js"/g, 'src="./assets/index-B89VZDlF.js"');
  result = result.replace(/href="\/assets\/index-DePG0b-j.css"/g, 'href="./assets/index-DePG0b-j.css"');
  result = result.replace(/href="\/Virgil.woff2"/g, 'href="./Virgil.woff2""');
  result = result.replace(/href="\/Cascadia.woff2"/g, 'href="./Cascadia.woff2"');
  result = result.replace(/href="\/fonts\/fonts.css"/g, 'href="./fonts/fonts.css"');
  

  // Write the modified content back to the index.html file
  fs.writeFile(indexPath, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
