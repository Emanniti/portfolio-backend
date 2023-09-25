import express from 'express';
import mongoose from 'mongoose';
import MainRoutes from './routes/mainRoute.js'
import cors from 'cors';

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://emanueleilpocho99:bVZjpYiThW0K1sFP@cluster0.ryib5ru.mongodb.net/DatabaseSito');
    
        mongoose.connection.on('open', function (ref) {
            console.log('---------- Connessione al database mongo eseguita! ----------');
        })
        app.use('/api', MainRoutes);
    }

    main()

const port = process.env.PORT || 2020;
app.use(cors(corsOptions))
app.listen(port, () => {
    console.log('server is listening on port 2020');
});