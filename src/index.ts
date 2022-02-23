import express from "express";
import BotService from './services/bot.service';
const app = express();
const port = 8080 || process.env.PORT;
const bot = new BotService();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(port, async () => {
    await bot.login()
    // bot.run();


    // index page
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    // about page
    // app.get('/about', function(req, res) {
    //     res.render('pages/about');
    // });

    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
