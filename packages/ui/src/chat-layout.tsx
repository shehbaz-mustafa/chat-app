"use client";

import { ReactNode } from "react";

interface ChatLayoutProps {
  header: ReactNode;
  messages: ReactNode;
  input: ReactNode;
  sidebar?: ReactNode;
}

export function ChatLayout({
  header,
  messages,
  input,
  sidebar,
}: ChatLayoutProps) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        background: "#f5f5f5",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      {sidebar && (
        <div
          style={{
            width: "250px",
            borderRight: "1px solid #e0e0e0",
            background: "white",
            overflowY: "auto",
          }}
        >
          {sidebar}
        </div>
      )}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          background: "#f5f5f5",
        }}
      >
        {header}
        {messages}
        {input}
      </div>
    </div>
  );
}
