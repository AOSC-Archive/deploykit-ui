/**
 * Install the WRY ipc plugin
 * @param app vue 3 app instance
 */
function plugin(app) {
  if (!window.ipc) {
    console.warn("IPC bridge is not available.");
    window.ipc = {
      postMessage: function (message) {
        console.log(`[ipc] ${message}`);
      },
    };
  }
  app.config.globalProperties["$ipc"] = window.ipc;
  app["$ipc"] = window.ipc;
}

export default plugin;
