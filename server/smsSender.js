const twilio = require('twilio');

// Twilio credentials
const accountSid = process.env.ACCOUNT_ID; //Twilio Account SID
const authToken = process.env.Auth_Token; //Twilio Auth Token
const twilioClient = new twilio(accountSid, authToken);

// Function to send text message
const sendTextMessage = async (recipient, message) => {
    try {
        // Send the text message
        await twilioClient.messages.create({
            body: message,
            to: recipient,
            from: process.env.TWILIO_NUMBER //  your Twilio phone number
        });

        console.log(`Text message sent to ${recipient}: ${message}`);
    } catch (error) {
        console.error('Error sending text message:', error);
    }
};

module.exports = { sendTextMessage };
