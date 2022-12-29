import {useState, useEffect} from 'react'

export default function useImages () {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imagesLoadError, setImagesLoadError] = useState(false)
  const [images,setImages] = useState([]);
  
  useEffect(() => {
    
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        loadImg.onload = () => {
          resolve(image)
        }
        loadImg.onerror = err => reject(err)
      })
    }
    if(images.length > 0){
      Promise.all(images.map(setOfData => loadImage(setOfData.src)))
    .then(() => setImagesLoaded(true))
    .catch(err => setImagesLoadError(true))
    }
    
  }, [images])

  return {imagesLoaded, imagesLoadError,setImages}

}