"use client";

interface RoomHeaderProps {
  roomName: string;
  memberCount?: number;
  onSettingsClick?: () => void;
  description?: string;
}

export function RoomHeader({
  roomName,
  memberCount = 0,
  onSettingsClick,
  description,
}: RoomHeaderProps) {
  return (
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
          #{roomName}
        </h1>
        <p style={{ margin: "4px 0 0 0", fontSize: "13px", opacity: 0.9 }}>
          {memberCount} {memberCount === 1 ? "member" : "members"}
          {description && ` • ${description}`}
        </p>
      </div>
      {onSettingsClick && (
        <button
          onClick={onSettingsClick}
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
      )}
    </div>
  );
}
