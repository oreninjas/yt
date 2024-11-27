import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env',
});

connectDB()
    .then(() => {
        let port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running at port ${port}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection failed !! ', err);
    });
