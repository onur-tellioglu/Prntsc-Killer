// Import required modules and functionalities
const fs = require("fs"); // For reading image files
const { main } = require("./prntsc.js"); // Custom module for main functionality

// Function to initialize the application theme based on user settings
const initializeTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("themeSwitch").checked = true;
  }
};

// Function to validate that no inputs are empty
const checkInputs = () => {
  const inputIds = ["startCode", "count", "outputPath"];
  return inputIds.every(
    (id) => document.getElementById(id).value.trim() !== ""
  );
};

// Main function that runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the UI theme
  initializeTheme();

  // Control flags to manage the application state
  let isMainRunning = false;

  // Define control flags
  const stopFlag = { shouldStop: false };
  const pauseFlag = { shouldPause: false };

  // Grab the UI elements for easy reference
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const pauseButton = document.getElementById("pauseButton");

  // Initially disable the start button
  startButton.disabled = true;

  // Event listeners for input fields
  const inputIds = ["startCode", "count", "outputPath"];
  inputIds.forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      startButton.disabled = !checkInputs();
    });
  });

  // Theme switch event handler
  document.getElementById("themeSwitch").addEventListener("change", (event) => {
    const isDarkMode = event.currentTarget.checked;
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });

  // Start button click handler
  startButton.addEventListener("click", async () => {
    if (isMainRunning) return;

    isMainRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    pauseButton.disabled = false;

    // Reset control flags
    stopFlag.shouldStop = false;
    pauseFlag.shouldPause = false;

    // Fetch and validate input values
    const [startCode, count, outputPath] = inputIds.map(
      (id) => document.getElementById(id).value
    );

    // Logging function
    const logFn = (msg) => {
      const logArea = document.getElementById("logArea");
      logArea.innerHTML = `${msg}<br>${logArea.innerHTML}`;
    };

    // Run the main function
    await main({
      startCode,
      count: parseInt(count, 10),
      outputPath,
      logFn,
      stopFlag,
      pauseFlag,
      onImageDownload: updateImage,
    });

    // Reset button states when main function finishes or is stopped
    startButton.disabled = !checkInputs();
    stopButton.disabled = true;
    pauseButton.disabled = true;
    pauseButton.innerText = "Pause";

    isMainRunning = false;
  });

  // Stop button click handler
  stopButton.addEventListener("click", () => {
    if (!isMainRunning) return;

    stopFlag.shouldStop = true;
    pauseFlag.shouldPause = false;
    pauseButton.innerText = "Pause";
  });

  // Pause button click handler
  pauseButton.addEventListener("click", () => {
    pauseFlag.shouldPause = !pauseFlag.shouldPause;
    pauseButton.innerText = pauseFlag.shouldPause ? "Resume" : "Pause";
  });

  // Function to update the image preview
  const updateImage = (filePath) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return;
      const base64Image = Buffer.from(data).toString("base64");
      document.getElementById(
        "latestImage"
      ).src = `data:image/png;base64,${base64Image}`;
    });
  };
});
