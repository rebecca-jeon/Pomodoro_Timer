const path = require('path');
const { app, BrowserWindow } = require('electron');
const { create } = require('domain');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Pomodoro Timer',
        width: 800,
        height: 600
    });
    mainWindow.loadFile(path.join(__dirname, './renderer/tasks.html'));
}

app.whenReady().then(()=> {
    createMainWindow();
});