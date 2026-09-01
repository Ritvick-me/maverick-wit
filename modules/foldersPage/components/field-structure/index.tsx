import { IFolderItem } from "@/interface/home";
import Field from "../field";
import { Dispatch, SetStateAction } from "react";

interface Props {
  folderItem: IFolderItem[];
  setArchitecture: Dispatch<SetStateAction<IFolderItem[]>>;
  isRoot?: boolean;
}

const FieldStructure = ({
  folderItem,
  setArchitecture,
  isRoot = false,
}: Props) => {
  return (
    <div className="ml-8 my-2">
      {folderItem.map((folder) => (
        <Field
          key={folder.id}
          field={folder}
          setArchitecture={setArchitecture}
          isRoot={isRoot}
        />
      ))}
    </div>
  );
};

export default FieldStructure;
