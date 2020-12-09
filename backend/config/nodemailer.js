const nodemailer=require('nodemailer')

let transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.PASS
    }
})

//Signup confirmation
exports.userRegister=(name, email)=>{
    return transporter.sendMail({
        from: 'MyCrypt',
        to: email,
        subject:`Welcome to MyCrypt, ${name}`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Rent-a-Chef</title>
        </head>
        <body>
          <h1 class="title">Hello ${name}, welcome to MyCrypt!</h1>
          <h2 class="subtitle">The social media for cryptocurrencies</h2>
          <p class="content">Go ahead! write your first article! or make a recomendation!</p> 
        </body>
        </html>
        `
    })
}