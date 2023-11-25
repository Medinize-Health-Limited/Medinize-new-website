// server/middleware/externalRequest.js
import axios from 'axios';

export default async function (req, res) {
  try {
    const response = await axios.get('https://externalwebsite.com/api/data', {
      headers: {
        'Custom-Header': 'Your Custom Value',
        // Add more custom headers as needed
      },
    });

    res.setHeader('Content-Type', 'application/json');
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
