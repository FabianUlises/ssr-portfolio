const React = require('react');

const Default = (html) => {
    return(
        <html>
            <head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
                <metadata charset="utf-8" />
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