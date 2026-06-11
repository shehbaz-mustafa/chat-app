"use client";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <TextInput onChange={() => {
        alert("hi");
      } } size="small" placeholder="Room name"></TextInput>
      <button onClick={() => {
        router.push("/chat/123")
      } }>Join Room</button>
    </div>
  );
}
