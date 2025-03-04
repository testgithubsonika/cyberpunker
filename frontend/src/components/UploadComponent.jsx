import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Progress from "@/components/ui/progress"; // Ensure this path is correct
import Button from "@/components/ui/button"; // Ensure this path is correct
import { Upload, CheckCircle, AlertTriangle } from "lucide-react";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult("");
      setError("");
    }
  });

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an image!");
      return;
    }

    setLoading(true);
    setUploadProgress(0);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    // Simulating progress bar
    const fakeUploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fakeUploadInterval);
          return 100;
        }
        return prev + 20;
      });
    }, 300);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to process image. Try again.");
      }

      const data = await response.json();
      setResult(data.prediction);
    } catch (err) {
      setError(err.message);
    } finally {
      clearInterval(fakeUploadInterval);
      setUploadProgress(100);
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-4 p-6 border border-green-500 rounded-2xl shadow-lg bg-green-50 max-w-md mx-auto">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-green-500 p-6 w-full flex flex-col items-center cursor-pointer hover:bg-green-100 rounded-xl transition-all duration-200"
      >
        <input {...getInputProps()} />
        <Upload className="w-10 h-10 text-green-700" />
        <p className="text-green-700 font-medium">Drag & drop an image here, or click to select one</p>
      </div>

      {preview && (
        <img src={preview} alt="Preview" className="w-40 h-40 rounded-xl object-cover border-2 border-green-400 shadow-md" />
      )}

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-100 px-4 py-2 rounded-lg w-full shadow-sm">
          <AlertTriangle className="w-5 h-5" />
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div className="flex items-center gap-2 text-green-700 bg-green-100 px-4 py-2 rounded-lg w-full shadow-sm transition-all duration-300">
          <CheckCircle className="w-5 h-5" />
          <p className="font-semibold">Prediction: {result}</p>
        </div>
      )}

      {file && (
        <>
          <Button onClick={handleUpload} className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-200" disabled={loading}>
            {loading ? "Uploading..." : "Upload & Predict"}
          </Button>
          <Progress value={uploadProgress} className="w-full bg-green-200 transition-all duration-300" />
        </>
      )}
    </div>
  );
};

export default UploadImage;
