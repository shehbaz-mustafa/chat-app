"use client";

import { ReactNode } from "react";

interface MessageContainerProps {
  children: ReactNode;
  loading?: boolean;
}

export function MessageContainer({
  children,
  loading = false,
}: MessageContainerProps) {
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        position: "relative",
      }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "4px solid #f0f0f0",
              borderTopColor: "#667eea",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 16px",
            }}
          />
          <p style={{ color: "#999", fontSize: "14px" }}>Loading messages...</p>
        </div>
      )}
      {!loading && children}
    </div>
  );
}
