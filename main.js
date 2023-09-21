// Purpose: The main file of the app
const { app, BrowserWindow } = require("electron");
const path = require("path"); // npm install path

// Create the browser window.
const createWindow = () => {
  const win = new BrowserWindow({
    icon: path.join(__dirname, "/Assets/Images/Icons/frog.ico"), // Set the icon of the app
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.maximize(); // Maximize the window
  win.loadFile("index.html"); // Load the index.html of the app
};

// Create the window when the app is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    // If the platform is not macOS
    app.quit(); // Quit the app
  }
});
