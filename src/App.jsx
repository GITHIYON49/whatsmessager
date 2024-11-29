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
        <div className="h-[95%] w-[95%] z-10 flex  flex-col-reverse md:flex-row items-center justify-center bg-cover " style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className="h-full w-full md:w-2/5 md:bg-slate-50 flex flex-col items-center justify-center relative">
            <h2 className="absolute hidden md:block top-2 text-2xl font-bold capitalize">
              chats
            </h2>
           <MessageForm message={message} setMessage={setMessage} imagePreview={imagePreview} setImagePreview={setImagePreview} value={value} setValue={setValue}/>
          </div>
          <div
            className={`h-full w-full md:w-3/5  relative`}
            
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
