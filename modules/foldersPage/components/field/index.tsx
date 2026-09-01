import { FolderNode, IFolderItem } from "@/interface/home";
import { CirclePlus, FileText, Folder, FolderOpen, Trash2 } from "lucide-react";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import FieldStructure from "../field-structure";

interface Props {
  field: IFolderItem;
  setArchitecture: Dispatch<SetStateAction<IFolderItem[]>>;
  isRoot?: boolean;
}

const Field = ({ field, setArchitecture, isRoot = false }: Props) => {
  const [isOpenFolder, setIsOpenFolder] = useState(false);

  const folderIcon = () => {
    if (!isOpenFolder) {
      return <Folder fill="#facc15" strokeWidth={2} stroke="#000" size={20} />;
    }
    return (
      <FolderOpen fill="#facc15" strokeWidth={2} stroke="#000" size={20} />
    );
  };

  const updateValue = (
    prevState: IFolderItem[],
    title: string,
  ): IFolderItem[] => {
    return prevState.map((folder) => {
      if (!folder.isFolder) return folder;
      if (folder.id === field.id) {
        const uuid = Math.ceil(Math.random() * 10);
        return {
          ...folder,
          structure: [
            ...folder.structure,
            {
              title: title,
              id: uuid,
              isFolder: true,
              structure: [],
            },
          ],
        };
      }
      return { ...folder, structure: updateValue(folder.structure, title) };
    });
  };

  const onAddStructure = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    if (!isOpenFolder) setIsOpenFolder(true);
    const title = prompt("Enter Name");
    if (title) setArchitecture((prev) => updateValue(prev, title));
  };

  const elementExists = (parent: IFolderItem[]) => {
    return parent.some((child) => child.id === field.id);
  };

  const deleteElement = (prevState: FolderNode) => {
    if (!prevState.structure) return prevState;
    if (elementExists(prevState.structure)) {
      return {
        ...prevState,
        structure: prevState.structure.filter((child) => child.id !== field.id),
      };
    }
    return {
      ...prevState,
      structure: findElement(prevState.structure),
    };
  };

  const findElement = (prevState: IFolderItem[]): IFolderItem[] => {
    return prevState.map((child) => {
      if (!child.isFolder) return child;
      return deleteElement(child);
    });
  };

  const onDeleteStructure = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    const confirm = prompt("Enter 'confirm' to delete");
    if (confirm === "confirm") {
      setArchitecture((prev) => findElement(prev));
    }
  };

  if (!field.isFolder) {
    return (
      <div className="flex items-center cursor-pointer">
        <FileText fill="#fff" strokeWidth={2} stroke="#000" size={20} />
        <p>{field.title}</p>
        {!isRoot && (
          <Trash2
            className="mx-1"
            strokeWidth={2}
            stroke="red"
            size={17}
            onClick={(e) => onDeleteStructure(e)}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <span
        className="inline-flex items-center cursor-pointer"
        onClick={() => setIsOpenFolder((prev) => !prev)}>
        {field.isFolder && folderIcon()}
        <div className="text-xl font-bold mx-1">{field.title}</div>
        <CirclePlus
          fill="#fff"
          strokeWidth={2}
          stroke="#000"
          size={20}
          onClick={onAddStructure}
          className="mr-1"
        />
        {!isRoot && (
          <Trash2
            strokeWidth={2}
            stroke="red"
            size={17}
            onClick={onDeleteStructure}
          />
        )}
      </span>

      {isOpenFolder && (
        <FieldStructure
          folderItem={field.structure ?? []}
          setArchitecture={setArchitecture}
        />
      )}
    </div>
  );
};

export default Field;
