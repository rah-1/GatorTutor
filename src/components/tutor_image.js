import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL} from 'firebase/storage';
import { storage } from "../config/firebase";
import 'react-toastify/dist/ReactToastify.css';

function TutorImage({filename}) {
    
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
      }, [filename]);
    

  return (
    <div>
      {imageUrl && <img style={{ alignSelf: "center",  width: "50%"}} src={imageUrl} alt="e"/>}
        
    </div>
  );
}

export default TutorImage;
