import { contextBridge, ipcRenderer } from "electron";

export interface Layout {
  rows: number;
  columns: number;
}

export const api = {
  onLayoutChanged: (callback: (layout: Layout) => void) => {
    ipcRenderer.on("layout:changed", (_, layout) => {
      callback(layout);
    });
  },
};

contextBridge.exposeInMainWorld("api", api);
