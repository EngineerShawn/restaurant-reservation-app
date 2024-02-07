const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
);

oAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

exports.addCalendarEvent = async (req, res) => {
    const { event } = req.body; // Event details should be passed here

    try {
        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
        });
        
        res.send(response.data);
    } catch (error) {
        console.error('Error adding event to Google Calendar', error);
        res.status(500).send('Error adding event to Google Calendar');
    }
};￼Enter
