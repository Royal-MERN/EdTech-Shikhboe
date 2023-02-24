import React from "react";
import { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";

const UserAvatar = ({setProfileImage}) => {
  var editor = "";
  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg:
      "",
  });

  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value,
    });
  };

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false,
    });
  };

  const setEditorRef = (ed) => {
    editor = ed;
  };

  const handleSave = (e) => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg,
      });
    }
  };

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setPicture({
      ...picture,
      img: url,
      cropperOpen: true,
    });
  };

  // console.log(picture.croppedImg);
  setProfileImage(picture.croppedImg)
  return (
    <div className=''>
      {/* Put this part before </body> tag */}
      <input type='checkbox' id='userAvatar' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='md:text-2xl text-xl pb-3 text-text1'>
            Upload Profile Picture
          </h3>
          {!picture.cropperOpen && 
          <fieldset className='w-full space-y-1 dark:text-gray-100'>
            <div className='flex'>
              <input
                type='file'
                name='files'
                id='files'
                accept='image/*'
                onChange={handleFileChange}
                className='sm:p-10 p-5 w-full border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400'
              />
            </div>
          </fieldset>}
          <div className="flex justify-center pt-3">
          <img src={picture.croppedImg} alt="" />
          </div>
          {picture.cropperOpen && (
           <div className="flex justify-center">
             <div display='block'>
              <AvatarEditor
                ref={setEditorRef}
                image={picture.img}
                width={200}
                height={200}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                rotate={0}
                scale={picture.zoom}
              />
            </div>
           </div>
          )}
          <div className='modal-action justify-start'>
            <button type='btn' className='btn btn-primary' onClick={handleSave}>
              Upload
            </button>
            <label htmlFor='userAvatar' className='btn'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
