// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 4000;
// require('dotenv').config();
// const axios = require('axios');
// const NodeCache = require('node-cache');

// const cacheTTL = 3600; // 1 hour in seconds
// const cache = new NodeCache({ stdTTL: cacheTTL, checkperiod: 120 });

// app.use(cors());
// app.use(express.json()); 

// app.get('/', (req, res) => {
//     res.send("Welcome to the server!");
// });

// app.post('/openai', async (req, res) => {
//     const MAX_RETRIES = 3;
//     const RETRY_BASE_DELAY = 500;
//     let attempt = 0;

//     // Extract user input from request body
//     const userInput = req.body.input;

//     // Check cache
//     const cachedData = cache.get(userInput);
//     if (cachedData) {
//         return res.json(cachedData);
//     }

//     while (attempt < MAX_RETRIES) {
//         try {
//             // Send the input to OpenAI's API
//             const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
//                 prompt: userInput,
//                 max_tokens: 1000
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             // Cache the response from OpenAI before sending it back
//             const responseData = response.data.choices[0].text.trim();
//             cache.set(userInput, responseData);

//             // Send the cached response to the client
//             return res.json(responseData);

//         } catch (error) {
//             if (error.response && error.response.status === 429) {
//                 await new Promise(res => setTimeout(res, RETRY_BASE_DELAY * (2 ** attempt)));
//                 attempt++;
//             } else {
//                 console.error('Error communicating with OpenAI:', error);
//                 return res.status(500).json({ message: "Internal Server Error", error: error.message });
//             }
//         }
//     }

//     res.status(429).json({ message: "Too Many Requests. Please try again later." });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const NodeCache = require('node-cache');

require('dotenv').config();

const app = express();
app.use(cors());

const PORT = 4000;

app.use(express.json());
const cacheTTL = 3600; 
const cache = new NodeCache({ stdTTL: cacheTTL, checkperiod: 120 });


app.post('/ask-gpt', async (req, res) => {
    const data = {
        model: "gpt-3.5-turbo",
        messages: req.body.messages
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
