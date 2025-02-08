"use client";

import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline"; // ✅ Correct import
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  content: string;
  isUser: boolean;
}

export default function AITeacher() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark"); // Force dark mode
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { content: input, isUser: true }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { content: `AI response to: ${input}`, isUser: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-[85vh] bg-background text-foreground">
      {/* Left half - Spline 3D Model */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        {error ? (
          <div className="text-red-500 text-center">
            Failed to load 3D model.
          </div>
        ) : !isModelLoaded ? (
          <div className="text-gray-300">Loading 3D model...</div>
        ) : null}

        <Spline
          scene="https://prod.spline.design/ZWvyfZ948v33do6M/scene.splinecode"
          onLoad={() => setIsModelLoaded(true)}
          onError={() => setError("Failed to load model")}
        />
      </div>

      {/* Right half - Chat interface */}
      <div className="w-1/2 p-8">
        <Card className="h-full flex flex-col bg-card text-card-foreground">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="font-mono text-2xl" style={{ textDecoration: "underline", textDecorationStyle: "dashed", textDecorationColor: "violet" }}>
            Hive Mind
          </CardTitle>
        </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full pr-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 p-3 rounded-lg ${
                    message.isUser
                      ? "font-quantico text-gray-400 ml-auto"
                      : "border-gray-700 border-2 text-secondary-foreground font-quantico"
                  } max-w-[80%] ${message.isUser ? "text-right" : "text-left"}`}
                >
                  {message.content}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="bg-input text-input-foreground"
              />
              <Button onClick={handleSend} className="text-purple-600 font-saira">Send</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
