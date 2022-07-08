const React = require('react');

const Default = (html) => {
    return(
        <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
                <meta name="description" content="A portfolio for Fabian Carrillo a Full-Stack Developer." />
                <link rel="stylesheet" href="/main.css" />
                <script src="https://kit.fontawesome.com/bc3d8292c6.js" defer></script>
                <script src='/app.js' type='text/javascript' defer></script>
                <link rel="icon" href="/favicon.ico"></link>
                <title>Fabian Carrillo</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Default;