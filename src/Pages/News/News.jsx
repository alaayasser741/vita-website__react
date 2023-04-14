import React, { useRef, useState } from 'react'
import { UilImageUpload, UilImage, UilCheck } from '@iconscout/react-unicons'
import './news.css'
const News = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const handleFileClick = (e) => {
    fileInputRef.current.click();
  }
  const handleInputChange = ({ target }) => {
    let file = target.files[0];
    setFile(target.files[0]);
    if (file) {
      let fileName = file.name;
      console.log(fileName);
      setFileName(fileName);
    }
    handleUpload();
  }
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://eslamelsheikh-pneumonia-detect.hf.space/run/predict');
    xhr.upload.addEventListener('progress', event => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setProgress(percentComplete);
      }
    });
    xhr.send(formData);
  };



  return (
    <section className="section news">
      <div className='wrapper__section'>
        <header>تحميل صورة الحالة</header>
        <form action="#" onClick={handleFileClick}>
          <input type="file"
            hidden
            ref={fileInputRef}
            onChange={handleInputChange}
          />
          <UilImageUpload />
          <p>تصفح ملفاتك</p>
        </form>
        <ul className="progress-area">
          {file && (
            <li className="progress__row">

              <UilImage size="30px" />
              <div className="progress__content">
                <div className="progress__details">
                  <span className="progress__name">{fileName && fileName + '• Uploaded'} </span>
                  <span className="progress__percent">{progress}%</span>
                </div>
                <div className="progress__bar">
                  <div className="progress__animation" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            </li>
          )}
        </ul>
        <ul className="upload-area">
          {file && (
            <li className="upload__row">
              <div className="upload__content">
                <UilImage size="30px" />
                <div className="upload__details">
                  <span className="upload__name">image_01.png • Uploaded</span>
                  <span className="upload__size">128 KB</span>
                </div>
              </div>
              <UilCheck className='check--icon' />
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default News