import React, { useState } from "react";

const MessageForm = ({value,setValue,message,setMessage,imagePreview,setImagePreview}) => {
 

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    const data = {
        message: message,
      };
    
      setValue({ ...value, ...data });

  };

  return (
    <form
      className="w-full flex flex-col items-center gap-2 justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="w-4/5 outline-none p-3 rounded-lg"
        placeholder="Type message"
        value={message}
        onChange={handleChange}
      />
      <input type="file" className="w-4/5" onChange={handleFileChange} />
      {imagePreview && (
        <div className="w-4/5">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-auto mt-2 rounded-lg"
          />
        </div>
      )}
      <button
        type="button"
        className="w-4/5 bg-emerald-500 py-2 rounded-lg text-white"
        onClick={handleClick}
      >
        Send message
      </button>

    </form>
  );
};

export default MessageForm;
