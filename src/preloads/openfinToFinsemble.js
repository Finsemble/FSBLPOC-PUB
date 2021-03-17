function runPreload() {

  window.fin.Window = fin.desktop.Window
  window.fin.Application = fin.desktop.Application
  window.fin.System = fin.desktop.System

  window.fin.Window.me = { uuid: finsembleWindow.windowIdentifier.windowName }


  // window.fin.Application.getCurrent();
  // fin.Window.me.uuid.startsWith("baml-fdc3:openfin-fdc3")
  // await window.fin.System.getEnvironmentVariable('USERNAME')
}

// this code ensures that the FSBL library has been initialized
if (window.FSBL && FSBL.addEventListener) {
  FSBL.addEventListener("onReady", runPreload);
} else {
  window.addEventListener("FSBLReady", runPreload);

}





