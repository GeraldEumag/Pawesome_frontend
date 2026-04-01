import React, { useState } from "react";
import "./CustomerChatbot.css";   // ✅ use only this stylesheet

export default function CustomerChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 🐾 Welcome to Pawesome Store. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input };
    setMessages([...messages, newMsg]);

    // Simple rule-based response
    let reply = "Sorry, I didn’t get that.";
    if (input.toLowerCase().includes("delivery")) {
      reply = "We deliver nationwide 🚚. Would you like to know delivery fees?";
    } else if (input.toLowerCase().includes("store")) {
      reply = "Our store is open daily from 9 AM to 8 PM.";
    } else if (input.toLowerCase().includes("payment")) {
      reply = "You can pay online and upload your receipt after checkout.";
    } else if (input.toLowerCase().includes("grooming")) {
      reply = "We offer grooming services — you can book them in the dashboard.";
    }

    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    setInput("");
  };

  return (
    <div className="chatbot-widget">
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Pawesome Assistant 🐶🐱</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      {!open && (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          <img src="/pawesome-icon.png" alt="Chatbot" />
        </button>
      )}
    </div>
  );
}