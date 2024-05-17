import { Menu } from "electron";

export const createMenu = (app: Electron.App): void => {
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
  ];

  if (process.env.NODE_ENV === "development") {
    menuTemplate.push({
      label: "Developer",
      submenu: [{ role: "reload" }, { role: "forceReload" }, { role: "toggleDevTools" }],
    });
  }

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};
