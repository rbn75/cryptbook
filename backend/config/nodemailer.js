const nodemailer=require('nodemailer')

let transporter=nodemailer.createTransport({
    service='Gmail',
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.PASS
    }
})

let transporter=(name, email)=>{
    return transporter.sendMail({
        from: 'MyCrypt',
        to: email,
        subject:`Welcom to MyCrypt, ${name}`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Rent-a-Chef</title>
        </head>
        <body>
          <h1 class="title">Hello ${names}, welcome to MyCrypt!</h1>
        </body>
        </html>
        `
    })
}