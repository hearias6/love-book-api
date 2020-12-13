import express from 'express';
import userRoute from './routes/user.route';
import bookRoute from "./routes/book.route";
import authorRoute from "./routes/author.route";
import commentRouter from "./routes/comment.route";

import helmet from "helmet";
import cors from "cors";

const { dbConnection } = require('./config/database')

export const app = express();

dbConnection();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cors());

app.use("/api/users", userRoute);
app.use('/api/books', bookRoute);
app.use('/api/authors', authorRoute);
app.use('/api/comments', commentRouter);

const port = app.get('port');
app.listen(port, ()=>{
    console.log(`server run on port ${port}`);
});    
