import { createContext, useState } from "react";
import generateResponse from "../Config/GeminiChat"; // Ensure correct import path

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [response, setResponse] = useState("");

    const onSent = async (prompt) => {
        const result = await generateResponse(prompt);
        setResponse(result);
    };

    return (
        <Context.Provider value={{ onSent, response }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
