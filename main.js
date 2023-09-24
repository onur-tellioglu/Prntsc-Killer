const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

// Create the browser window.
const createWindow = () => {
  // Get the full screen dimensions
  const { width, height } = screen.getPrimaryDisplay().bounds;

  const win = new BrowserWindow({
    icon: path.join(__dirname, "/Assets/Images/Icons/frog.ico"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
    minWidth: width * 0.3, // Minimum width is 30% of the screen width
    minHeight: height, // Height is fixed to the screen height
    maxHeight: height, // Height is fixed to the screen height
  });

  win.maximize();
  win.setMenuBarVisibility(false);
  win.loadFile("index.html");
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
