const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    get: () => ipcRenderer.invoke('get-tasks'),
    set: (tasks) => ipcRenderer.invoke('set-tasks', tasks),
});