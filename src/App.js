import { createContext, useState, useRef } from "react";
import Messages from "./Components/Messages";
import UploadFile from "./Components/UploadFile";
import Analytics from "./Components/Analytics";
import { BiMessageSquareDetail, BiUpload } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
export const stateContext = createContext();
function App() {
  const [chatDetails, setchatDetails] = useState();
  const [currentPage, setcurrentPage] = useState("uploadFile");
  let originalChatDetailsRefernce = useRef({});
  const latestDate = useRef("");
  const [user, setuser] = useState();
  return (
    <div className="App">
      <stateContext.Provider
        value={{
          chatDetails,
          setchatDetails,
          originalChatDetailsRefernce,
          setcurrentPage,
          setuser,
          user,
          latestDate,
        }}
      >
        {currentPage === "uploadFile" ? (
          <UploadFile />
        ) : currentPage === "Messages" ? (
          <Messages />
        ) : (
          <Analytics />
        )}
      </stateContext.Provider>
      <div className="navigator">
        <button
          onClick={() => setcurrentPage("uploadFile")}
          className={currentPage === "uploadFile" ? "selected" : ""}
        >
          <BiUpload />
        </button>
        {user ? (
          <button
            onClick={() => setcurrentPage("Messages")}
            className={currentPage === "Messages" ? "selected" : ""}
          >
            <BiMessageSquareDetail />
          </button>
        ) : (
          ""
        )}
        {user ? (
          <button
            onClick={() => setcurrentPage("Analytics")}
            className={currentPage === "Analytics" ? "selected" : ""}
          >
            <GoGraph />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
