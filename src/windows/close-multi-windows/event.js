const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;
//  关闭当前窗口
function onClick_Close() {
    const win = remote.getCurrentWindow();
    win.close();

    alert(123);
}