import React from 'react';
import { ImageUpload } from './components/ImageUpload';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          图片上传预览
        </h1>
        <ImageUpload maxSize={5} />
      </div>
    </div>
  );
}

export default App;