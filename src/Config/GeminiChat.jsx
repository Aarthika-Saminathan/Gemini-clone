import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // ✅ Ensure .env is loaded

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generateResponse = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text(); // ✅ Return AI's response
    } catch (error) {
        console.error("Error generating content:", error);
        return "Error generating response.";
    }
};

export default generateResponse; // ✅ Only export this function
