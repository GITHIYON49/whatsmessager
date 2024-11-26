import { useState } from "react";
import "./App.css";
import { BackgroundImage } from "./assets/image";
import { Bottombar,Topbar,MessageForm } from "./componets";


function App() {
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [value,setValue] =useState([]);
 

  return (
    <>
      <div className="relative double-bg h-screen flex items-center justify-center">
        <div className="h-[95%] w-[95%] z-10 flex items-center justify-center">
          <div className="h-full w-2/5 bg-slate-50 flex flex-col items-center justify-center relative">
            <h2 className="absolute top-2 text-2xl font-bold capitalize">
              chats
            </h2>
           <MessageForm message={message} setMessage={setMessage} imagePreview={imagePreview} setImagePreview={setImagePreview} value={value} setValue={setValue}/>
          </div>
          <div
            className={`h-full w-3/5  bg-cover relative`}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >

            <Topbar/>
            <div>
              {
                value
              }
            </div>
            <Bottombar/>
            

            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
