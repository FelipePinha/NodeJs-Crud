const express = require("express");
const router = express.Router();
const { posts } = require("../models");

// Create
router.post("/posts-create", async (req, res) => {
    const { title, content } = req.body;
    await posts.create({ title, content });
    res.status(201).json({ message: "criado com sucesso" });
});

// Read
router.get("/posts", async (req, res) => {
    const allPosts = await posts.findAll();
    res.status(200).json(allPosts);
});

// Update
router.put("/posts-update/:id", async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;

    const post = await posts.findOne({ where: { id } });
    if (!post) {
        res.status(401).json({ message: "post não foi encontrado..." });
    } else {
        await posts.update(
            {
                title,
                content,
            },
            {
                where: {
                    id,
                },
            }
        );

        res.status(200).json({ message: "post alterado!" });
    }
});

// Delete
router.delete("/posts-delete/:id", async (req, res) => {
    const { id } = req.params;
    const post = await posts.findOne({ where: { id } });
    if (!post) {
        res.status(401).json({ message: "post não foi encontrado..." });
    } else {
        await posts.destroy({
            where: {
                id,
            },
        });
        res.status(200).json({ message: "deletado com sucesso" });
    }
});

module.exports = router;
