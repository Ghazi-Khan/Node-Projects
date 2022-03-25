const welComeToHome = `
<html>
    <head>
        <title>Home Page</title>
    </head>
    <body>
        <h1>Hey, Wel-Come to home page!</h1>
    </body>
</html>
`;
const usersHtml = `
<html>
    <head>
        <title>Home Page</title>
    </head>
    <body>
        <h1Here is the user list</h1>
        <ul>
            <li>User1</li>
            <li>User2</li>
            <li>User3</li>
            <li>User4</li>
        <ul>
    </body>
</html>
`;

const inputHtml = `
<html>
    <head>
        <title>Home Page</title>
    </head>
    <body>
        <form action='/create' method='POST'>
            <input type='text' name='userName' palceholder='User name'>
            <button type='submit'>Create user</button>
        </form>
    </body>
</html>
`;

const handleRequest = (req, res) => {
    const path = req.url;
    const method = req.method;
    console.log('path', path);

    if (path === '/') {
        console.log('Request received..');
        // res.write(welComeToHome);
        res.write(inputHtml);
        res.end();
    } else if (path === '/users') {
        res.write(usersHtml);
        res.end();
    } else if (path === '/create') {

        const body = [];
        req.on('data', (chunks) => {
            body.push(chunks);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsedBody', parsedBody);
            res.writeHead(302, { location : '/'});
            return res.end()
        });
    }
}

module.exports = {
    handleRequest
}
