import axios from 'axios';

const sendDataToOpenAI = async (input) => {
    try {
        const response = await axios.post('http://localhost:4000/openai', { input: input });
        return response.data;
    } catch (error) {
        console.error("Error sending data:", error);
        throw error;
    }
}

export default sendDataToOpenAI;
