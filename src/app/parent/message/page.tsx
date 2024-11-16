"use client";

import { useState } from "react";
import { Text, Avatar, Button, Textarea } from "rizzui";

interface Message {
  id: number;
  sender: {
    id: string;
    name: string;
    role: "parent" | "admin";
    avatar?: string;
  };
  content: string;
  timestamp: string;
}

const dummyMessages: Message[] = [
  {
    id: 1,
    sender: {
      id: "admin1",
      name: "Sarah Thompson",
      role: "admin",
      avatar: "",
    },
    content: "Hello Mr. Johnson, how can I help you today?",
    timestamp: "2024-01-10 09:30 AM",
  },
  {
    id: 2,
    sender: {
      id: "parent1",
      name: "Robert Johnson",
      role: "parent",
      avatar: "",
    },
    content:
      "Hi, I wanted to discuss my daughter Emma's recent absence due to her doctor's appointment. I have the medical certificate to submit.",
    timestamp: "2024-01-10 09:32 AM",
  },
  {
    id: 3,
    sender: {
      id: "admin1",
      name: "Sarah Thompson",
      role: "admin",
      avatar: "",
    },
    content:
      "Of course! You can submit the medical certificate through our parent portal or bring it to the school office. I'll make a note about Emma's absence.",
    timestamp: "2024-01-10 09:35 AM",
  },
  {
    id: 4,
    sender: {
      id: "parent1",
      name: "Robert Johnson",
      role: "parent",
      avatar: "",
    },
    content: "Thank you! I'll upload it to the portal right away.",
    timestamp: "2024-01-10 09:36 AM",
  },
];

export default function MessageLayout() {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [newMessage, setNewMessage] = useState("");

  const currentUser = {
    id: "parent1",
    name: "Robert Johnson",
    role: "parent" as const,
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      sender: currentUser,
      content: newMessage,
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="flex mx-auto w-[90%] flex-col rounded-lg border border-gray-200 bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Avatar src="" name="Sarah Thompson" className="bg-gray-100" />
          <div>
            <Text className="font-medium">Sarah Thompson</Text>
            <Text className="text-xs text-gray-500">School Administrator</Text>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender.id === currentUser.id
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender.id === currentUser.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <Text className="text-sm font-medium">
                  {message.sender.name}
                </Text>
                <Text className="text-xs opacity-70">{message.timestamp}</Text>
              </div>
              <Text className="mt-1">{message.content}</Text>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <Textarea
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e: any) => setNewMessage(e.target.value)}
            className="flex-1"
            rows={2}
          />
          <Button
            variant="solid"
            className="h-auto"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
