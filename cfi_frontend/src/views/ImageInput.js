import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loadModels, getFullFaceDescription, createMatcher } from "../api/face";




const ImageInput = () => {
  const testImg = require("../img/test.jpg");
  const [image, setImage] = useState({imageURL:testImg})
  const [discriptor, setDiscriptor] = useState([])
  const resetState = () => {
    setImage({ imageURL: "" })
    setDiscriptor([])
  };
  const handleFileChange = async (event) => {
   resetState();
    await setImage({
      imageURL: URL.createObjectURL(event.target.files[0]),
      loading: true,
    });
   handleImage(image);
  };
  
  const handleImage = async (photo = image.imageURL) => {
    await getFullFaceDescription(photo).then((fullDesc) => {
      console.log(fullDesc.map((fd) => fd.descriptor));
      if (!!fullDesc) {
        this.setState({
          fullDesc,
          detections: fullDesc.map((fd) => fd.detection),
          descriptors: fullDesc.map((fd) => fd.descriptor),
        });
      }
    });
  }


  return (
   <div>
        <input
          id="myFileUpload"
          type="file"
          onChange={handleFileChange()}
          accept=".jpg, .jpeg, .png"
        />
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <img src={image} alt="imageURL" />
          </div>
        
        </div>
      </div>
  )
}

export default ImageInput
  
  