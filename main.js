import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';
import Store from 'electron-store';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const store = new Store();
// store.delete('tasks');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Pomodoro Timer',
        width: 1280,
        height: 832,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        }
    });
    mainWindow.loadFile(path.join(__dirname, './renderer/tasks.html'));
}

app.whenReady().then(()=> {
    createMainWindow();
});


ipcMain.handle('get-tasks', () => {
    return store.get('tasks') || [];
});
  
ipcMain.handle('set-tasks', (event, tasks) => {
    store.set('tasks', tasks);
    return true;
});