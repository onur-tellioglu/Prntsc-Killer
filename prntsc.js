// Required packages
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs").promises;
const path = require("path");
const crypto = require("crypto");

// HTTP headers for the prnt.sc website
const HEADERS = {
  authority: "prnt.sc",
  "user-agent": "Mozilla/5.0",
  accept: "text/html",
};

/**
 * Generate MD5 hash for a file.
 * @param {string} filePath - The path of the file to hash
 * @returns {Promise<string>} - MD5 hash
 */
async function generateFileHash(filePath) {
  const buffer = await fs.readFile(filePath);
  return crypto.createHash("md5").update(buffer).digest("hex");
}

/**
 * Main scraper function.
 * @param {object} options - Configuration options
 */
module.exports.main = async function main({
  startCode = "1",
  count = 10000,
  outputPath = "output",
  logFn = console.log,
  stopFlag,
  pauseFlag,
  onImageDownload,
  codeChars = "0123456789abcdefghijklmnopqrstuvwxyz",
} = {}) {
  // Constants and helper functions for base conversion
  const BASE = codeChars.length;
  const charToDigit = (char) => codeChars.indexOf(char);
  const digitToChar = (digit) => codeChars[digit];

  // Convert a code to its numerical equivalent in the current base
  const codeToNumber = (code) =>
    [...code].reduce((acc, char) => acc * BASE + charToDigit(char), 0);

  // Convert a number back to a code in the current base
  const numberToCode = (number) => {
    let code = "";
    do {
      code = digitToChar(number % BASE) + code;
      number = Math.floor(number / BASE);
    } while (number > 0);
    return code;
  };

  // Increment the code by 1 in the current base
  const incrementCode = (code) => numberToCode(codeToNumber(code) + 1);

  // Fetch the image URL from the webpage using the code
  const fetchImageURL = async (code) => {
    const url = `http://prnt.sc/${code}`;
    const { data } = await axios.get(url, { headers: HEADERS });
    const $ = cheerio.load(data);
    return $(".no-click.screenshot-image").attr("src");
  };

  // Download image and save it locally
  const downloadImage = async (url, filePath) => {
    const { data } = await axios.get(url, { responseType: "arraybuffer" });
    await fs.writeFile(filePath, Buffer.from(data, "binary"));
  };

  // Initialize
  await fs.mkdir(outputPath, { recursive: true }).catch(() => {});
  const fileHashSet = new Set();
  let code = startCode;

  // Main loop to fetch and save images
  for (let i = 0; i < count; i++) {
    // Pause and stop handling
    while (pauseFlag?.shouldPause && !stopFlag?.shouldStop)
      await new Promise((resolve) => setTimeout(resolve, 500));
    if (stopFlag?.shouldStop) return (stopFlag.shouldStop = false);

    // Increment and fetch the next code
    code = incrementCode(code);

    try {
      const url = await fetchImageURL(code);
      const filePath = path.join(outputPath, `${code}.png`);
      await downloadImage(url, filePath);

      // Check and handle duplicate images
      const fileHash = await generateFileHash(filePath);
      if (fileHashSet.has(fileHash)) {
        await fs.unlink(filePath);
        logFn(`Removed duplicate image with code: ${code}`);
      } else {
        fileHashSet.add(fileHash);
        logFn(`Saved image ${i + 1}/${count} with code: ${code}`);
        if (typeof onImageDownload === "function") onImageDownload(filePath);
      }
    } catch (error) {
      logFn(`Failed to download image with code: ${code}`);
    }
  }

  // Reset stop flag
  stopFlag.shouldStop = false;
};
