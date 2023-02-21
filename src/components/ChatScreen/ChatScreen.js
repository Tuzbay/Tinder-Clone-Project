import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Barbara Palvin",
      image: "...",
      message: "Hello babe!",
    },
    {
      name: "Gigi Hadid",
      image: "...",
      message: "Hello, how are you?",
    },
    {
      name: "Natalia Portman",
      image: "...",
      message: "I am so bored!",
    },
  ]);

  return <div>ChatScreen</div>;
}

export default ChatScreen;
