# Plant Disease Detection using Vision Transformers
<p align="center">
 <img src=https://github.com/luanvenancio/plant-disease-detection/assets/9398249/0183486f-666b-4947-b52e-5c7311483df8 alt="Screenshot of the Home Page" width="80%"/>
</p>

## Overview
This open-source project aims to create a web-based platform for detecting plant diseases using cutting-edge machine learning techniques. The site leverages Vision Transformers (ViTs) for accurate disease identification and provides an intuitive user interface built with ReactJs and NextJs. Additionally, we integrate the Hugging Face API for easy access to pre-trained ViT models.

[Click Here](https://plant-disease-detection-two.vercel.app/) to go to the site.

## Features
 1. **Vision Transformer Model (PlantXViT):**
     - We’ve trained our own Vision Transformer model specifically for plant disease identification. This model combines the capabilities of traditional convolutional neural networks with the Vision Transformers to efficiently identify numerous plant diseases for several crops. We use the pre-trained Swin Transformer V2 Tiny model from Microsoft. 
     - Our Model has demonstrated superior performance compared to existing methods on publicly available datasets, achieving high accuracy (99.13) even under challenging background conditions.
2. **Web Interface:**
    - The site provides an easy-to-use web interface built with ReactJs and NextJs. Users can upload images of plant leaves or other relevant parts to diagnose diseases.
    -  The interface allows users to visualize the prediction results, including the detected disease class and confidence score.
3. **Hugging Face API Integration:**
    - We utilize the Hugging Face API to access the pre-trained ViT model that we created.
    - The Hugging Face Transformers library simplifies model loading and inference, making it convenient for developers.

## Getting Started

1. **Clone the Repository:**
    - Start by cloning this GitHub repository to your local machine.
2. **Install Dependencies:**
    - Ensure you have Node.js and npm installed.
    - Navigate to the frontend directory and run `npm install` to install dependencies.

3. **Run the Web Interface Locally:**
    - Start the development server using `npm run dev`.

## Contributions
Contributions are welcome! Feel free to submit pull requests, report issues, or suggest improvements. Let’s build a robust and user-friendly platform for plant disease detection together!

Feel free to customize and expand upon this project description according to your needs. Happy coding! 🌱🔍👩‍💻
