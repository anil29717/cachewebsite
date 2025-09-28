// server.js
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;


// Middleware to parse JSON bodies and handle CORS
app.use(cors());
app.use(express.json());

require('dotenv').config();

if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
  console.error("Error: GOOGLE_SERVICE_ACCOUNT_JSON env variable is not set.");
  process.exit(1);
}

// --- Google Sheets API Setup ---
// Replace 'path/to/your/service-account-key.json' with the actual path to the JSON file you downloaded.
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
const spreadsheetId = '1t2TLNplvGLDtmMrQCIUhAIBhnARD_k9K_qIJObFiAPY'; // Replace with your Google Sheet ID

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount, // <-- Use 'credentials' here!
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// --- API Endpoint to Handle Contact Form Submissions ---
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All form fields are required.' });
  }

  try {
    const sheets = google.sheets({ version: 'v4', auth });
    
    // The sheet name and range (e.g., Sheet1!A:E)
    // 'Sheet1' is the default name. If you renamed it, update this value.
    const range = 'Sheet1!A:E'; 
    
    const values = [[name, email, subject, message, new Date().toLocaleString()]];
    
    const resource = {
      values,
    };
    
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource,
    });
    
    console.log(`${result.data.updates.updatedCells} cells appended.`);
    res.status(200).json({ message: 'Message sent successfully!' });
    
  } catch (err) {
    console.error('Error with the Google Sheets API:', err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
