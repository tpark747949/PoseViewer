import React, { useState } from 'react';
import axios from 'axios';

function VideoUploader() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setProgress(0);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded * 100) / event.total);
          setProgress(percent);
        }
      });

      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed.");
    }
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <input type="file" accept="video/*" onChange={handleChange} />
      <button onClick={handleUpload} disabled={!file}>Upload Video</button>

      {progress > 0 && (
        <div style={{ marginTop: 10 }}>
          <progress value={progress} max="100" style={{ width: "100%" }} />
          <p>{progress}%</p>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default VideoUploader;