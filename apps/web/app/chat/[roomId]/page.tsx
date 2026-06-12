"use client";

import { TextInput } from "@repo/ui/text-input";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
}

export default function ChatRoom() {
  const params = useParams();
  const roomId = params?.roomId as string;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "System",
      text: "Welcome to " + (roomId || "Chat Room") + "! 🎉",
      timestamp: "10:00",
      isOwn: false,
    },
    {
      id: "2",
      sender: "Alex",
      text: "Hey everyone! How's it going?",
      timestamp: "10:02",
      isOwn: false,
    },
    {
      id: "3",
      sender: "You",
      text: "Hi! Great to be here.",
      timestamp: "10:03",
      isOwn: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("You");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showSettings, setShowSettings] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const now = new Date();
      const timestamp = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;

      const newMessage: Message = {
        id: Date.now().toString(),
        sender: username,
        text: inputValue,
        timestamp,
        isOwn: true,
      };

      setMessages([...messages, newMessage]);
      setInputValue("");

      // Simulate receiving a message
      setTimeout(() => {
        const responses = [
          "That's interesting!",
          "I agree with you!",
          "Thanks for sharing!",
          "Cool perspective!",
          "Haha, nice one!",
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        const responseTimestamp = `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")}`;

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "Alex",
            text: randomResponse,
            timestamp: responseTimestamp,
            isOwn: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f5f5f5",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <h1 style={{ margin: "0", fontSize: "20px", fontWeight: "600" }}>
            {roomId?.toUpperCase()}
          </h1>
          <p style={{ margin: "2px 0 0 0", fontSize: "12px", opacity: 0.9 }}>
            {messages.length} messages
          </p>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "white",
            padding: "8px 12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.3)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
        >
          ⚙️
        </button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div
          style={{
            background: "white",
            padding: "16px 20px",
            borderBottom: "1px solid #e0e0e0",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            Your Name:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "2px solid #e0e0e0",
              borderRadius: "6px",
              fontSize: "13px",
              boxSizing: "border-box",
            }}
          />
        </div>
      )}

      {/* Messages Container */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              justifyContent: msg.isOwn ? "flex-end" : "flex-start",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                maxWidth: "60%",
                backgroundColor: msg.isOwn ? "#007AFF" : "#E5E5EA",
                color: msg.isOwn ? "#FFFFFF" : "#000000",
                padding: "10px 14px",
                borderRadius: "18px",
                wordWrap: "break-word",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              {!msg.isOwn && (
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "4px",
                    opacity: 0.8,
                  }}
                >
                  {msg.sender}
                </div>
              )}
              <div style={{ fontSize: "14px", lineHeight: "1.4" }}>
                {msg.text}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  marginTop: "4px",
                  opacity: 0.6,
                }}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div
        style={{
          background: "white",
          padding: "16px 20px",
          borderTop: "1px solid #e0e0e0",
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          style={{
            flex: 1,
            padding: "12px 16px",
            border: "2px solid #e0e0e0",
            borderRadius: "24px",
            fontSize: "14px",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#667eea";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#e0e0e0";
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "12px 20px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            borderRadius: "24px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            fontSize: "16px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}