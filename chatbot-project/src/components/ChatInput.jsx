import { useState} from "react";
import {Chatbot} from 'supersimpledev';
import dayjs from "dayjs";
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading) {
      return;
    }

    const messageToSend = inputText;
    setInputText("");

    if (messageToSend != "") {
      const newChatMessages = [
        ...chatMessages,
        {
          message: messageToSend,
          sender: "user",
          id: crypto.randomUUID(),
          time: dayjs(dayjs().valueOf()).format("h:mma")
        },
      ];

      setChatMessages([
        ...newChatMessages,
        {
          message: "Loading...",
          sender: "robot",
          id: crypto.randomUUID(),
          time: dayjs(dayjs().valueOf()).format("h:mma")
        },
      ]);

      setIsLoading(true);
      const response = await Chatbot.getResponseAsync(messageToSend);
      setIsLoading(false);

      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
          time: dayjs(dayjs().valueOf()).format("h:mma")
        },
      ]);
    }
  }

  function keyCheck(event) {
    console.log(event);
    if (event.key === "Enter") {
      sendMessage();
    }
    if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessages(){
    setChatMessages([]);
    localStorage.clear();
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={keyCheck}
      />

      <button className="send-button" onClick={sendMessage}>
        Send
      </button>

      <button className="clear-button" onClick={clearMessages}>Clear</button>
    </div>
  );
}
