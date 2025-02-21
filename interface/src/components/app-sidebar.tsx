import * as React from "react";
import { useEffect, useState } from "react";
import { Folder } from "lucide-react"; // Changed icon to represent a folder
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  onFileSelect: (fileName: string) => void;
}

export function AppSidebar({ onFileSelect, ...props }: AppSidebarProps) {
  const folderName = "Calculator in Solidity"; // Folder name to display
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Kanishk2Kumar/BlockQuest-Resources/contents/Calculator%20in%20solidity"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFiles(data.map((file) => file.name));
        }
      })
      .catch((err) => console.error("Error fetching files:", err));
  }, []);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-black text-purple-500 font-quantico">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-background">
                  <Folder className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">{folderName}</span> {/* Folder name here */}
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-black text-gray-300">
        <SidebarGroup>
          <SidebarMenu>
            {files.map((fileName) => (
              <SidebarMenuItem key={fileName}>
                <SidebarMenuButton
                  asChild
                  onClick={() => onFileSelect(fileName)}
                >
                  <a href="#" className="text-lg font-saira">
                    {fileName}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
