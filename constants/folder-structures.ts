import { IFolderItem } from "@/interface/home";

export const FOLDER_EXPLORER: IFolderItem[] = [
  {
    title: "Users",
    isFolder: true,
    id: 0,
    structure: [
      {
        title: "Ritvick",
        isFolder: true,
        id: 1,
        structure: [
          {
            title: "Product",
            id: 3,
            isFolder: true,
            structure: [
              {
                title: "Generator",
                id: 9,
                isFolder: true,
                structure: [
                  {
                    title: "index.tsx",
                    id: 14,
                    isFolder: false,
                  },
                ],
              },
              {
                title: "index.tsx",
                id: 10,
                isFolder: false,
              },
            ],
          },
          {
            title: "Policy",
            id: 4,
            isFolder: true,
            structure: [
              {
                title: "index.tsx",
                id: 11,
                isFolder: false,
              },
              {
                title: "health plus.tsx",
                id: 12,
                isFolder: false,
              },
            ],
          },
          {
            title: "resumeAgent.tsx",
            id: 5,
            isFolder: false,
          },
        ],
      },
      {
        title: "Raghav",
        id: 2,
        isFolder: true,
        structure: [
          {
            title: "Product",
            id: 6,
            isFolder: true,
            structure: [
              {
                title: "Generator",
                id: 13,
                isFolder: true,
                structure: [
                  {
                    id: 15,
                    title: "index.tsx",
                    isFolder: false,
                  },
                ],
              },
            ],
          },
          {
            id: 7,
            title: "policy.tsx",
            isFolder: false,
          },
          {
            id: 8,
            title: "resume.tsx",
            isFolder: false,
          },
        ],
      },
    ],
  },
];
