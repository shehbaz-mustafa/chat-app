"use client";

import { ReactNode } from "react";

interface ChatBubbleProps {
  message: string;
  sender: string;
  isOwn?: boolean;
  timestamp?: string;
}

export function ChatBubble({
  message,
  sender,
  isOwn = false,
  timestamp,
}: ChatBubbleProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isOwn ? "flex-end" : "flex-start",
        marginBottom: "12px",
        paddingX: "16px",
      }}
    >
      <div
        style={{
          maxWidth: "60%",
          backgroundColor: isOwn ? "#007AFF" : "#E5E5EA",
          color: isOwn ? "#FFFFFF" : "#000000",
          padding: "10px 14px",
          borderRadius: "18px",
          wordWrap: "break-word",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        {!isOwn && (
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "4px",
              opacity: 0.8,
            }}
          >
            {sender}
          </div>
        )}
        <div style={{ fontSize: "14px", lineHeight: "1.4" }}>{message}</div>
        {timestamp && (
          <div
            style={{
              fontSize: "11px",
              marginTop: "4px",
              opacity: 0.6,
            }}
          >
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
}
