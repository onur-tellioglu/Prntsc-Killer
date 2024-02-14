const JavaScriptObfuscator = require("javascript-obfuscator");
const fs = require("fs");
const path = require("path");

// List the folders you want to exclude from obfuscation
const excludedFolders = ["node_modules"];

function obfuscateDirectory(directory, basePath) {
  const folderName = path.basename(directory);

  // Check if the folder is in the excluded list
  if (excludedFolders.includes(folderName)) {
    console.log(`Skipping entire folder: ${directory}`);
    return;
  }

  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      obfuscateDirectory(filePath, basePath);
    } else if (filePath.endsWith(".js")) {
      console.log(`Obfuscating ${filePath}...`);
      const originalCode = fs.readFileSync(filePath, "utf8");
      const obfuscatedCode = JavaScriptObfuscator.obfuscate(originalCode, {
        // Obfuscation options here
      }).getObfuscatedCode();

      // Overwrite the original file
      fs.writeFileSync(filePath, obfuscatedCode);
    }
  });
}

// Call the function with the directory you want to obfuscate
obfuscateDirectory(path.join(__dirname, "."), __dirname);
