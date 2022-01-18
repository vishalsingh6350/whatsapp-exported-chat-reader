import { useEffect, useContext, useState } from "react";
import EachMessage from "./EachMessage";
import { stateContext } from "../App";

const MessageWrapper = ({ item }) => {
  const { user, latestDate } = useContext(stateContext);
  const [date, setdate] = useState();
  useEffect(() => {
    // console.log(latestDate.current, " and ", item.time.split(",")[0]);
    setdate(latestDate.current);
    latestDate.current = item.time.split(",")[0];
  }, []);
  return (
    <>
      {date === item.time.split(",")[0] ? (
        ""
      ) : (
        <div className="date">{date}</div>
      )}
      <div
        key={item.key}
        className={
          "eachMessageWrapper" + (item.sender === "none" ? " notifWrapper" : "")
        }
        style={
          item.sender === user
            ? {
                justifyContent: "flex-end",
              }
            : {
                justifyContent: "flex-start",
              }
        }
      >
        <EachMessage item={item} />
      </div>
    </>
  );
};

export default MessageWrapper;
