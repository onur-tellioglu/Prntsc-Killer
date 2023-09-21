// Purpose: This file is used to expose the ipcRenderer methods to the renderer process (index.html)
// so that the renderer process can communicate with the main process (main.js).
// This file is loaded before the renderer process is loaded (index.html).

const { ipcRenderer, contextBridge } = require("electron"); // Import the ipcRenderer and contextBridge modules from Electron

// Expose the ipcRenderer methods to the renderer process (index.html)
contextBridge.exposeInMainWorld("myAPI", {
  doSomething: () => ipcRenderer.send("do-something"), // Send a message to the main process (main.js) when the button is clicked (index.html)
});
