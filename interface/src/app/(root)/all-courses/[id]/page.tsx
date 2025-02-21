"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState("");
  const [files, setFiles] = useState<string[]>([]);

  // Fetch the file list from the GitHub repo
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Kanishk2Kumar/BlockQuest-Resources/contents/Calculator%20in%20solidity"
        );
        const data = await res.json();
        const fileNames = data.map((file: { name: string }) => file.name);

        if (fileNames.length > 0) {
          setFiles(fileNames);
          setSelectedFile(fileNames[0]); // Automatically select the first file
        }
      } catch (err) {
        console.error("Error fetching file list:", err);
      }
    };

    fetchFiles();
  }, []);

  // Fetch the selected file content
  useEffect(() => {
    if (!selectedFile) return;

    const fetchFile = async () => {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/Kanishk2Kumar/BlockQuest-Resources/main/Calculator%20in%20solidity/${selectedFile}`
        );
        const text = await res.text();
        setFileContent(text);
      } catch (err) {
        console.error("Error fetching file:", err);
      }
    };

    fetchFile();
  }, [selectedFile]);

  return (
    <SidebarProvider className="border-t">
      <AppSidebar files={files} onFileSelect={setSelectedFile} className="mt-24" />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Calculator in Solidity</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{selectedFile || "Loading..."}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4 shadow-lg overflow-auto">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {fileContent || "Loading..."}
            </ReactMarkdown>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
