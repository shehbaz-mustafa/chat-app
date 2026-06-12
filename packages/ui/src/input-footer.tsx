"use client";

import { useState } from "react";

interface InputFooterProps {
  placeholder?: string;
  onSendMessage: (message: string) => void;
  onTyping?: () => void;
  disabled?: boolean;
}

export function InputFooter({
  placeholder = "Type a message...",
  onSendMessage,
  onTyping,
  disabled = false,
}: InputFooterProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSendMessage(value);
      setValue("");
    }
  };

  return (
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
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onTyping?.();
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        disabled={disabled}
        style={{
          flex: 1,
          padding: "12px 16px",
          border: "2px solid #e0e0e0",
          borderRadius: "24px",
          fontSize: "14px",
          outline: "none",
          transition: "border-color 0.3s",
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "auto",
        }}
        onFocus={(e) => {
          if (!disabled) {
            e.currentTarget.style.borderColor = "#667eea";
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#e0e0e0";
        }}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        style={{
          padding: "12px 20px",
          background:
            disabled || !value.trim()
              ? "#cccccc"
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          border: "none",
          borderRadius: "24px",
          fontWeight: "600",
          cursor: disabled || !value.trim() ? "not-allowed" : "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          fontSize: "16px",
        }}
        onMouseOver={(e) => {
          if (!disabled && value.trim()) {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(102, 126, 234, 0.4)";
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Send
      </button>
    </div>
  );
}
