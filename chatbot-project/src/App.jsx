import { useEffect, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import "./App.css";

function App() {
  //State Syntax:
  // [currentData, setFunction] = React.useState(InitialValue of the data)
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages= array[1];

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [
      {
        message: "Hello Chatbot",
        sender: "user",
        id: "id1",
        time: dayjs(dayjs().valueOf()).format("h:mma"),
      },
      {
        message: "Hello! How can I help you?",
        sender: "robot",
        id: "id2",
        time: dayjs(dayjs().valueOf()).format("h:mma"),
      },
      {
        message: "Can you get me today's date?",
        sender: "user",
        id: "id3",
        time: dayjs(dayjs().valueOf()).format("h:mma"),
      },
      {
        message: "Today is September 27",
        sender: "robot",
        id: "id4",
        time: dayjs(dayjs().valueOf()).format("h:mma"),
      },
    ]
  );

  useEffect(() => {
    Chatbot.addResponses({
      "dessert?": "waffles",
      "how many?": 2,
    });
  }, []);

  useEffect(() => {
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          message: "Hello Chatbot",
          sender: "user",
          id: "id1",
          time: dayjs(dayjs().valueOf()).format("h:mma"),
        },
        {
          message: "Hello! How can I help you?",
          sender: "robot",
          id: "id2",
          time: dayjs(dayjs().valueOf()).format("h:mma"),
        },
        {
          message: "Can you get me today's date?",
          sender: "user",
          id: "id3",
          time: dayjs(dayjs().valueOf()).format("h:mma"),
        },
        {
          message: "Today is September 27",
          sender: "robot",
          id: "id4",
          time: dayjs(dayjs().valueOf()).format("h:mma"),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
