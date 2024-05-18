import { BrowserWindow, Menu } from "electron";

export const createMenu = (
  app: Electron.App,
  mainWindow: BrowserWindow,
): void => {
  const menuTemplate: Electron.MenuItemConstructorOptions[] = [
    {
      label: "File",
      submenu: [
        {
          label: "Exit",
          accelerator: "CmdOrCtrl+Q",
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: "View",
      submenu: [
        {
          label: "2x2",
          accelerator: "Alt+2",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 2,
              columns: 2,
            });
          },
        },
        {
          label: "3x3",
          accelerator: "Alt+3",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 3,
              columns: 3,
            });
          },
        },
        {
          label: "4x4",
          accelerator: "Alt+4",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 4,
              columns: 4,
            });
          },
        },
        {
          label: "5x5",
          accelerator: "Alt+5",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 5,
              columns: 5,
            });
          },
        },
        {
          label: "6x6",
          accelerator: "Alt+6",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 6,
              columns: 6,
            });
          },
        },
        {
          label: "7x7",
          accelerator: "Alt+7",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 7,
              columns: 7,
            });
          },
        },
        {
          label: "8x8",
          accelerator: "Alt+8",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 8,
              columns: 8,
            });
          },
        },
        {
          label: "9x9",
          accelerator: "Alt+9",
          click: () => {
            mainWindow.webContents.send("layout:changed", {
              rows: 9,
              columns: 9,
            });
          },
        },
      ],
    },
  ];

  if (process.env.NODE_ENV === "development") {
    menuTemplate.push({
      label: "Developer",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { role: "toggleDevTools" },
      ],
    });
  }

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};
