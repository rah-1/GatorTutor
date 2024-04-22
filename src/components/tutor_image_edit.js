import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL} from 'firebase/storage';
import { storage } from "../config/firebase";
import 'react-toastify/dist/ReactToastify.css';

function TutorImageEdit({ setSubmittedFile , filename}) {
    
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (filename) {
          const newImageRef = ref(storage, 'image/' + filename);
    
          getDownloadURL(newImageRef)
            .then((url) => {
              // Set the image URL in state
              setImageUrl(url);
            })
            .catch((error) => {
              console.error('Error getting download URL:', error);
            });
        }
      }, []);
    

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      const dataURL = reader.result;
      setImageUrl(dataURL);
    };

    reader.readAsDataURL(file);

    setSubmittedFile(file); // Pass the submitted file back to the parent component

    // Upload the new image
    
  };

  return (
    <div>
      {imageUrl && <img style={{ alignSelf: "center",  width: "79%"}} src={imageUrl} alt="e"/>}
 
      <label class="btn bg-blue btn-outline-primary btn-sm m-1" for="customFile2">✎</label>

      <input type="file" class="form-control d-none " id="customFile2" onChange={handleImageUpload} />
        
    </div>
  );
}

export default TutorImageEdit;
