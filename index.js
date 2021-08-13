var twilio = require('twilio');

function main(params) {
    let twiml = new twilio.twiml.VoiceResponse();
    twiml.say("Hello World");

    var response = {
            headers: {
                'Content-Type': 'application/xml'
            },
            statusCode: 200,
            body: twiml.toString()
        }

    return response;
}

global.main = main;