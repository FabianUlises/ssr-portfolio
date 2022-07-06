const React = require('react');

const Default = (html) => {
    return(
        <html>
            <head>
                {/* <metadata charset="utf-8"> */}
                {/* <metadata name="viewport" content="width=device-width, initial-scale=1.0"> */}
                <link rel="stylesheet" href="/main.css" />
                <script src="https://kit.fontawesome.com/bc3d8292c6.js" defer></script>
                <script src='/app.js' type='text/javascript' defer></script>
                <link rel="icon" href="favicon.png"></link>
                <title>Fabian Carrillo</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Default;