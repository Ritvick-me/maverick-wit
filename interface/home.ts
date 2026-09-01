export interface FileNode {
  title: string;
  id: number;
  isFolder: false;
}

export interface FolderNode {
  title: string;
  id: number;
  isFolder: true;
  structure: IFolderItem[];
}

export type IFolderItem = FileNode | FolderNode;
