import React, { useContext, useEffect, useRef } from "react";
import { stateContext } from "../App";
import MessageWrapper from "./MessageWrapper";
const Messages = () => {
  const {
    chatDetails,
    setchatDetails,
    originalChatDetailsRefernce,
    user,
    latestDate,
  } = useContext(stateContext);
  const displayMessagesBySender = (name) => {
    setchatDetails({
      messages: originalChatDetailsRefernce.current.messages.filter((item) => {
        // console.log(item);
        return item.sender === name;
      }),
      sender: originalChatDetailsRefernce.current.sender,
      chatName: originalChatDetailsRefernce.current.chatName,
    });
  };
  const displayMessagesByDate = (date) => {
    setchatDetails({
      messages: originalChatDetailsRefernce.current.messages.filter((item) => {
        console.log(item.time.split(",")[0]);
        return item.time.split(",")[0] === date;
      }),
      sender: originalChatDetailsRefernce.current.sender,
      chatName: originalChatDetailsRefernce.current.chatName,
    });
  };
  console.log(chatDetails.chatName);
  return (
    <div className="messagesWrapper">
      <div className="header">
        <div className="chatTitle">{chatDetails.chatName}</div>
        <div className="senders">
          {chatDetails.sender.map((item) => item + ",")}
        </div>
      </div>
      <div className="chatBox">
        {chatDetails?.messages?.map((item) => {
          return (
            <>
              <MessageWrapper item={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
