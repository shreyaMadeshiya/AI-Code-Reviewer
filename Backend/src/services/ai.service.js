// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();

// const { GoogleGenerativeAI } =require ("@google/generative-ai");

// const genAI= new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// const model = genAI.getGenerativeModel({model: "gemini-2.0-flash"});


// async function generateContent(prompt){
//     const result = await model.generateContent(prompt);

//     return result.response.text();
// }

// module.exports = generateContent;

// src/services/ai.service.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateContent(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);

    // Return plain text
    return result.response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to generate content");
  }
}

module.exports = generateContent;
