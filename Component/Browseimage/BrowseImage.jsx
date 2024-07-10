import React, { useRef, useState } from "react";

const BrowseImage = () => {
  const id = useRef(null);
  const [state, setState] = useState("");

  const ChangeImage = (event) => {
    console.log(event.target.files)
    setState(event.target.files[0]);
  };
  <div className="
  
"></div>
  return (
    <div>
        {
            state ? <img
            src={URL.createObjectURL(state)}
            alt=""
          />:
          <img src="https://media.istockphoto.com/id/1903282248/photo/senior-medical-check-up.webp?b=1&s=170667a&w=0&k=20&c=-PB6kFZ3M6j54iLKtXk7zwNiC2S4SnMqv5o31n7b7hw=" alt="" />




        }
      
    
      <input type="file" onChange={ChangeImage} ref={id} name="" id="" />
    </div>
  );
};

export default BrowseImage;
