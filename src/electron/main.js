import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 850,
    height: 1200,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:5173");

  mainWindow.on("closed", () => {
    app.quit();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
