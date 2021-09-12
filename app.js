const electron = require('electron')
const {ipcMain, app, BrowserWindow} = require('electron')

// electron-reload
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})
// ---------------------

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function changeWindow(path, dimensions){

    const win = new BrowserWindow({
        width: dimensions.width,
        height: dimensions.height,
        fullscreen:false,
        // frame:false,
        movable:true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation:false,
          enableRemoteModule:true,
          
          devTools: true
        }
      })
    
      win.setMenu(null)
      win.setBackgroundColor('#000')
      win.setResizable(false)
      win.loadURL(`file://${__dirname}/${path}`)
    
}

app.whenReady()
.then(() =>{
    changeWindow('index.html', {width: 600, height:600})
})