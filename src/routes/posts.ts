import express, { Request, Response } from "express";

const router = express.Router();
const Post = require('../models/Posts')
 
router.get("/", (req: Request, res: Response) => {
    res.send("you are on posts");
    
});


router.post('/', (req: Request, res: Response) => {
   console.log(req.body) 
res.send(req.body);
});


module.exports = router;