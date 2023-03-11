const express = require("express");
const router = express.Router();

const postList = [
    {
        id: 1,
        title: "post 1",
        content: "content 1",
    },
    {
        id: 2,
        title: "post 2",
        content: "content 2",
    },
];

// Create
router.post("/create", (req, res) => {
    postList.push(req.body);
    res.status(201).send(postList);
});

// Read
router.get("/posts", (req, res) => {
    res.status(200).send(postList);
});

module.exports = router;
