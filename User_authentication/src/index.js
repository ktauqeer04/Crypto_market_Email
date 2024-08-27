const express = require('express');
const { PORT } = require('./config/index');
const express_app = require('./express_app');

const startServer = async () => {
    const app = express();
    await express_app(app);

    app.get('/test', (req, res) => {
        res.json({ message: 'Test route working' });
    });

    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    });
}

startServer();  