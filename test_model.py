import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model
import cv2
import os

# Load the trained model
model = load_model("C:/Users/hp/Desktop/cyberpunker/papaya_model.h5")

# Print model summary to verify it's loaded correctly
model.summary()

# Create dummy input for testing (modify shape based on your model's input)
dummy_input = np.random.rand(1, 224, 224, 3)  # Modify if needed

# Make a prediction
prediction = model.predict(dummy_input)

print("Prediction:", prediction)
print("Prediction shape:", prediction.shape)
predicted_class = np.argmax(prediction)  # Get the class with the highest probability

# Convert it into a readable label using argmax():
print("Predicted Class:", predicted_class)  # for classification
print("Predicted Value:", prediction[0][0])  # regression

# Assuming the input is an image of shape (224, 224)
plt.imshow(dummy_input[0])
plt.title(f"Predicted Class: {predicted_class}")
plt.show()

# Load and preprocess the image
def load_and_preprocess_image(image_path, target_size=(224, 224)):  # Adjust target_size based on your model
    img = cv2.imread(image_path)  # Read in color (change if model expects grayscale)
    img = cv2.resize(img, target_size)  # Resize to model's input size
    img = img / 255.0  # Normalize pixel values to range [0,1]
    img = np.expand_dims(img, axis=0)  # Add batch dimension (1, height, width, channels)
    return img

# Provide the path to the image you want to test
image_path = "images/test_image.jpg"  # Change to your test image file

# Load and preprocess the image
input_image = load_and_preprocess_image(image_path)

# Make prediction
prediction = model.predict(input_image)

# Debug: Print prediction shape and values
print("Prediction shape:", prediction.shape)
print("Raw Prediction Output:", prediction)

# If classification, get the most probable class
predicted_class = np.argmax(prediction)
print("Predicted Class:", predicted_class)

# Display the image
plt.imshow(cv2.cvtColor(cv2.imread(image_path), cv2.COLOR_BGR2RGB))
plt.title(f"Predicted Class: {predicted_class}")
plt.axis("off")
plt.show()


# TODO: Set a breakpoint here to inspect each prediction

# Folder containing test images
image_folder = "test_images/"  # Replace with your folder name

# Process and predict for each image
for filename in os.listdir(image_folder):
    if filename.endswith(".png") or filename.endswith(".jpg"):
        image_path = os.path.join(image_folder, filename)
        input_image = load_and_preprocess_image(image_path)
        prediction = model.predict(input_image)
        predicted_class = np.argmax(prediction)
        print(f"{filename} -> Predicted Class: {predicted_class}")

