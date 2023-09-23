// import React, { useState } from 'react';
// import sendDataToOpenAI from '../utils/openaiService';

// const KismetAIPage = () => {
//     const [input, setInput] = useState('');
//     const [suggestions, setSuggestions] = useState('');

//     const handleSubmit = async () => {
//         try {
//             const response = await sendDataToOpenAI(input);
//             setSuggestions(response);
//         } catch (error) {
//             console.error("Failed to fetch suggestions:", error);
//             setSuggestions("An error occurred while fetching suggestions.");
//         }
//     }

//     return (
//         <div>
//             <div>
//                 <label htmlFor="userInput">Enter your question/suggestion:</label>
//                 <textarea
//                     id="userInput"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     rows="4"
//                     cols="50"
//                 ></textarea>
//             </div>
            
//             <button onClick={handleSubmit}>Get Suggestions</button>

//             <div>
//                 <h2>AI Suggestions:</h2>
//                 <p>{suggestions}</p>
//             </div>
//         </div>
//     );
// }

// export default KismetAIPage;

import React, { useState } from 'react';
import axios from 'axios';

function ChatWithGPT() {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:4000/ask-gpt', {
                messages: [...messages, { role: "user", content: userMessage }]
            });
            const assistantMessage = response.data.choices[0].message.content;
            setMessages(prev => [...prev, { role: "user", content: userMessage }, { role: "assistant", content: assistantMessage }]);
            setUserMessage('');
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.role}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
            />
            <button onClick={handleSubmit}>
                Send
            </button>
        </div>
    );
}

export default ChatWithGPT;
