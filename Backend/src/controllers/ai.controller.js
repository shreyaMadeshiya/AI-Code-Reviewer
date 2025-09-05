// const aiService = require("../services/ai.service")


// module.exports.getResponse=async(req,res)=>{

//     const prompt = res.query.prompt;

//     if(!prompt){
//         return res.status(400).send("Prompt is required");
//     }

//     const response = await aiService(prompt);
// }
// src/controllers/ai.controller.js
const generateContent = require("../services/ai.service");

const getResponse = async (req, res) => {
  try {
    const { prompt } = req.query;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const result = await generateContent(prompt);
    res.json({ response: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { getResponse };
