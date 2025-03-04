"""
Copyright (c) 2025 Your Company Name

This file is part of the Your Project Name.

Your Project Name is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Your Project Name is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Your Project Name. If not, see <http://www.gnu.org/licenses/>.
"""

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = FastAPI()

# Allow all origins (for development purposes)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained TensorFlow model
try:
    model = tf.keras.models.load_model("C:/Users/hp/Desktop/cyberpunker/papaya_model.h5")
    print("Model loaded successfully")
except Exception as e:
    print(f"Error loading model: {e}")
    raise HTTPException(status_code=500, detail="Failed to load model")

# Define image preprocessing function
def preprocess_image(image: Image.Image):
    try:
        image = image.resize((224, 224))  # Resize to match model input size
        image_array = np.array(image) / 255.0  # Normalize pixel values
        image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
        return image_array
    except Exception as e:
        print(f"Error preprocessing image: {e}")
        raise HTTPException(status_code=500, detail="Failed to preprocess image")

# Root route to handle requests to the root URL
@app.get("/")
async def read_root():
    return {"message": "Welcome to the Image Prediction API"}

# API endpoint to receive and classify images
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        image_array = preprocess_image(image)

        # Make prediction
        predictions = model.predict(image_array)
        predicted_class = np.argmax(predictions, axis=1)[0]

        # Debugging: Print the predictions and predicted class
        print("Predictions:", predictions)
        print("Predicted Class Index:", predicted_class)

        # Define class labels (modify according to your trained model)
        class_labels = ["Healthy", "Disease", "Weather Issue", "Other", "class-5", "class-6"]

        # Handle cases where the predicted class index is out of range
        if predicted_class >= len(class_labels):
            raise HTTPException(status_code=500, detail="Predicted class index out of range")

        result = class_labels[predicted_class]
        return JSONResponse(content={"prediction": result})

    except Exception as e:
        print(f"Error processing image: {e}")
        raise HTTPException(status_code=500, detail="Failed to process image")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)

