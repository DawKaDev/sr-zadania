const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
require('dotenv-flow').config();

function prepareMessage(content, data) {
  let newMessage = "";
  const replacer = new RegExp("({){2}(?:(?!\\n)\\s?)(\\w+)(?:(?!\\n)\\s?)(}){2}", 'g');
  function replaceText(match, offset, string) {
    return data[string];
  }
  newMessage = content.replace(replacer, replaceText);
  return newMessage;
}

const fromName = process.env.REACT_APP_MAILGUN_FROM_NAME;
const address = process.env.REACT_APP_MAILGUN_FROM_ADDRESS;
const domain = address.substring(address.indexOf("@")+1, address.length);
const mg = mailgun({apiKey: process.env.REACT_APP_MAILGUN_API_KEY , domain: domain});
const app = express();
const port = process.env.REACT_APP_SERVER_PORT || 3001;

let data = {
	from: `${fromName} <${address}>`,
	to: "",
	subject: "",
	text: ""
};

app.use(bodyParser.json());

app.post("/mailer/send", (req, res) => {
  const { subscribers, campaign } = req.body;
  const { subject, content } = campaign;
  subscribers.forEach((subscriber) => {
    const message = prepareMessage(content, {...campaign, ...subscriber});
    data = {...data, 
      to: subscriber.email,
      subject: subject,
      text: message
    }
    mg.messages().send(data, (error, body) => {
      console.log(body);
    });
  })
  res.status(200);
  res.json({message: "OK"});
})

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});