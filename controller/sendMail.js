const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const mail = {
  sendMail: async (req, res, next) => {
    const { name, email, message } = req.body;
    try {
      let option = {
        auth: {
          api_key:
            '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',
        },
      };
      const transporter = nodemailer.createTransport(sgTransport(option));
      const messages = {
        from: email,
        to: 'pngodup123@gmail.com',
        subject: `Send from webpage by ${name}`,
        text: message,
      };
      await transporter.sendMail(messages);
      console.log('no error');
      res.status(200).json({
        success: true,
        data: {
          message: 'Email Sent',
        },
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        data: {
          message: 'Email Unable to sent',
        },
      });
    }
  },
};
module.exports = mail;
