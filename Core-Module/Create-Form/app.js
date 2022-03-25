const http = require('http');
const fs = require('fs');

const htmlCode = `
<html>
    <head>
        <title>First server</title>
    </head>
    <body>
        <form action= '/message' method='post'>
            <input type='text' name='msg' placeholder='enter message'>
            <button type='submit'>Submit</button>
        </from>
    </body>
</html>
`

const server = http.createServer((req, res) => {
    console.log('Request');

    const path = req.url;
    const method = req.method;

    if (path === '/') {
        res.write(htmlCode);
        return res.end()
    } else if (path === '/message' && method === 'POST') {
        console.log('got message');

        // parsing the data
        const body = [];
        // Read the data
        req.on('data', (chunks) => {
            body.push(chunks);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = parsedBody.split('=')[1];

            fs.writeFileSync('message.text', name);
        });
        res.writeHead(302, { location : '/'});
        return res.end()
    }
});

server.listen(3000);
