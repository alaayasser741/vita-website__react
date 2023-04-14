import React, { useRef, useState } from 'react'
import { UilImageUpload } from '@iconscout/react-unicons'
import './news.css';
import { Spinner } from 'react-bootstrap';
import axios from 'axios'
const News = () => {
  const [imageFiles, setImageFiles] = useState(null)
  const [results, setResults] = useState('');
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(0)
  const fileInputRef = useRef(null);
  const handleFileClick = (e) => {
    fileInputRef.current.click();
  }
  const handleInputChange = ({ target }) => {
    let file = target.files[0];

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageFiles(reader.result);
      };
    } catch (error) {
      console.log(error)
    }
    if (file) {
      let fileName = file.name;
      setFileName(fileName);
    }
    handleUpload();
  }
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', imageFiles);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload');
    xhr.upload.addEventListener('progress', event => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setProgress(percentComplete);
      }
    });
    xhr.send(formData);
  };
  const handleSubmit = async (e) => {
    setLoading(1);
    const requestBody = {
      data: [
        imageFiles
      ]
    };
    e.preventDefault();
    try {
      const response = await axios.post("https://eslamelsheikh-pneumonia-detect.hf.space/run/predict", requestBody, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = response.data.data;
      setResults(data[0].label);
      setLoading(0);
    } catch (error) {
      console.log(error)
      setTimeout(() => {
        setLoading(0);
      }, 500);
    }
  }


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
          {imageFiles && (
            <li className="progress__row">
              <img style={{ width: '40px' }} src={imageFiles} alt="Pneumonia-Image" />
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
        {results != '' ?
          <ul className="upload-area">
            <li className="upload__row">
              <div className="upload__content">
                <span className="upload__name">{results === 'Pneumonia' ? 'مصابة بالالتهاب الرئوي ولكن هذة لسيت معلومة مؤكدة بالرجاء المتابعة مع الطبيب المختص' : 'عادية ولكن هذة لسيت معلومة مؤكدة بالرجاء المتابعة مع الطبيب المختص'}</span>
              </div>
            </li>
          </ul> : null}
        {loading === 0 ?
          <button className="btn__submit" onClick={handleSubmit}>معالجة الصورة</button> :
          <button className="btn__submit" disabled>
            <Spinner animation="border" role="status">
            </Spinner></button>}
      </div>
    </section>
  )
}

export default News