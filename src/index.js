import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
.catch(err => {
    console.error("Error connecting to the database:", err);
    process.exit(1);
}





















// import express from "express";
// const app = express();
// ( async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error)=> {
//             console.log("Error", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error:", error);
//         throw err
//     }
// })()