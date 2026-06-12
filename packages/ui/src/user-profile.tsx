"use client";

export interface UserProfile {
  name: string;
  status: "online" | "offline" | "away";
  avatar?: string;
}

interface UserProfileProps {
  user: UserProfile;
  onClick?: () => void;
}

export function UserProfile({ user, onClick }: UserProfileProps) {
  const statusColor = {
    online: "#34C759",
    offline: "#999999",
    away: "#FF9500",
  };

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        borderRadius: "12px",
        cursor: onClick ? "pointer" : "default",
        backgroundColor: "#f5f5f5",
        transition: "background-color 0.2s",
      }}
      onMouseOver={(e) => {
        if (onClick) {
          e.currentTarget.style.backgroundColor = "#efefef";
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#f5f5f5";
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "600",
          marginRight: "12px",
          position: "relative",
          fontSize: "18px",
        }}
      >
        {user.avatar || user.name.charAt(0).toUpperCase()}
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: statusColor[user.status],
            position: "absolute",
            bottom: "0",
            right: "0",
            border: "2px solid white",
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "600", fontSize: "14px", color: "#333" }}>
          {user.name}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#999",
            textTransform: "capitalize",
          }}
        >
          {user.status}
        </div>
      </div>
    </div>
  );
}
