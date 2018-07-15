const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 600,
        icon: __dirname + '/img/icon.png'
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.webContents;
    win.setMenu(null);
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

// Quit
app.on('window-all-closed', () => {
    if (process.plarform !== 'darwin') {
        app.quit();
    }
})
