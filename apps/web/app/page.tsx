"use client";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState([
    { id: "tech-chat", name: "Tech Chat" },
    { id: "general", name: "General" },
    { id: "random", name: "Random" },
  ]);

  const handleJoinRoom = () => {
    if (roomName.trim()) {
      router.push(`/chat/${roomName.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  const handleQuickJoin = (roomId: string) => {
    router.push(`/chat/${roomId}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "10px",
            textAlign: "center",
            fontSize: "32px",
          }}
        >
          💬 ChatApp
        </h1>
        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Connect with others in real-time
        </p>

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#333",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Create or Join a Room
          </label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="Enter room name..."
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleJoinRoom()}
              style={{
                flex: 1,
                padding: "12px 16px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
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
              onClick={handleJoinRoom}
              style={{
                padding: "12px 24px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontSize: "14px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(102, 126, 234, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Join
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              color: "#999",
              fontSize: "12px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Or join a popular room
          </p>
          <div style={{ display: "grid", gap: "10px" }}>
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => handleQuickJoin(room.id)}
                style={{
                  padding: "12px 16px",
                  background: "#f5f5f5",
                  border: "2px solid #e0e0e0",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "500",
                  color: "#333",
                  transition: "all 0.3s",
                  fontSize: "14px",
                  textAlign: "left",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#667eea";
                  e.currentTarget.style.background = "#f0f0ff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e0e0e0";
                  e.currentTarget.style.background = "#f5f5f5";
                }}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
