import { useState } from "react";
import { Sketch } from "@uiw/react-color";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewPost from "./NewPost";
function App() {
  const [hex, setHex] = useState("#d0021b");
  const notify = () => toast.success("Wow so easy !");

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>{hex}</h1>
        <Sketch
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
      </div>
      {/* *****  tost checking ********/}
      <div>
        <button style={{ background: "yellow" }} onClick={notify}>
          Notify !
        </button>
        <ToastContainer />
      </div>
      <div style={{ display: "flex" ,padding:"30px"}}>
        <NewPost />
      </div>
    </div>
  );
}

export default App;
