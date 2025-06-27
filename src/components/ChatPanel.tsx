"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setSending(true);
    // Mock bot reply after 1s
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "(This is a mock bot reply.)",
        },
      ]);
      setSending(false);
    }, 1000);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="h-full p-6 flex flex-col bg-pam-canvas font-roboto">
      <h2 className="text-xl font-semibold mb-4 text-pam-text">AI Chat</h2>
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs break-words shadow text-sm font-roboto
                ${msg.sender === "user"
                  ? "bg-pam-accent1 text-pam-text"
                  : "bg-pam-surface text-pam-text"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-pam-subtle/30 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-pam-accent1 bg-pam-surface text-pam-text font-roboto"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          disabled={sending}
        />
        <button
          className="px-4 py-2 bg-pam-accent1 text-pam-text rounded font-semibold disabled:opacity-50 font-roboto border border-pam-accent1 hover:border-pam-accent2"
          onClick={handleSend}
          disabled={!input.trim() || sending}
        >
          Send
        </button>
      </div>
    </div>
  );
} 