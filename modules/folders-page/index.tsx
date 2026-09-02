"use client";

import { FOLDER_EXPLORER } from "@/constants/folder-structures";
import FieldStructure from "./partials/field-structure";
import { useState } from "react";

const HomePage = () => {
  const [architecture, setArchitecture] = useState(FOLDER_EXPLORER);
  return (
    <div>
      <FieldStructure
        folderItem={architecture}
        setArchitecture={setArchitecture}
        isRoot
      />
    </div>
  );
};

export default HomePage;
