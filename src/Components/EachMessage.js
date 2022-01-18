import React, { useContext } from "react";
import { stateContext } from "../App";

const EachMessage = ({ item }) => {
  const { user } = useContext(stateContext);
  return (
    <div
      className={
        `eachMessage ` +
        (item.sender === "none"
          ? "notif"
          : item.sender === user
          ? "user"
          : "sender")
      }
    >
      {item.sender != user && item.sender != "none" ? (
        <div className="senderName">{item.sender}</div>
      ) : (
        ""
      )}
      <div className="message">{item.message}</div>
    </div>
  );
};

export default EachMessage;
