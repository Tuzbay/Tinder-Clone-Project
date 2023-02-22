import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Barbara Palvin",
      image:
        "https://iatkv.tmgrup.com.tr/d9523c/600/314/2/0/616/321?u=https://itkv.tmgrup.com.tr/2019/07/14/unlu-model-barbara-palvin-formunun-sirrini-paylasti-1563137041922.jpeg",
      message: "Hello babe!",
    },
    {
      name: "Barbara Palvin",
      image:
        "https://iatkv.tmgrup.com.tr/d9523c/600/314/2/0/616/321?u=https://itkv.tmgrup.com.tr/2019/07/14/unlu-model-barbara-palvin-formunun-sirrini-paylasti-1563137041922.jpeg",
      message: "I miss you!!",
    },
    {
      message: "Long time no see!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH BARBARA PALVIN ON 21/02/2022
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
