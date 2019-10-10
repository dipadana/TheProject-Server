const nodemailer = require('nodemailer');

module.exports = {
    sendMail(receiver,message){
        let transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : process.env.GMAIL_MAIL,
                pass : process.env.GMAIL_PASS
            }
        });

        let mainOption = {
                from : process.env.GMAIL_MAIL,
                to : receiver,
                subject : 'Thanks For Registering To TheProject',
                text : message.msg
        }


        transporter.sendMail(mainOption)
            .then(function(){
                console.log('Successfully Send Mail!')
            })
            .catch(console.log)
        }
}