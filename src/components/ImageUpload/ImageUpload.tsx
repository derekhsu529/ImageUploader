import React, { useState, useCallback } from 'react';
import { ImagePreview } from './ImagePreview';
import { UploadZone } from './UploadZone';
import { ImageUploadProps } from './types';

export function ImageUpload({ maxSize = 5 }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = useCallback((file: File | null) => {
    if (!file) {
      setError('请选择一个文件');
      return;
    }

    if (file.size > maxSize * 1024 * 1024) {
      setError(`文件大小不能超过 ${maxSize}MB`);
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('请上传图片文件');
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, [maxSize]);

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <UploadZone onFileChange={handleFileChange} />
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
      {preview && (
        <ImagePreview src={preview} onRemove={() => setPreview(null)} />
      )}
    </div>
  );
}