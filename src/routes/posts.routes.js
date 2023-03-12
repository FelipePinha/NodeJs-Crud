const express = require("express");
const router = express.Router();
const { posts } = require("../models");

// Create
router.post("/posts-create", async (req, res) => {
    const { title, content } = req.body;
    await posts.create({ title, content });
    res.status(201).send("criado com sucesso");
});

// Read
router.get("/posts", async (req, res) => {
    const allPosts = await posts.findAll();
    res.status(200).send(allPosts);
});

// Update
router.put("/posts-update/:id", async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;

    const post = await posts.findOne({ where: { id } });
    if (!post) {
        res.status(401).send({ message: "post não foi encontrado..." });
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

        res.status(200).send({ message: "post alterado!" });
    }
});

// Delete
router.delete("/posts-delete/:id", async (req, res) => {
    const { id } = req.params;
    const post = await posts.findOne({ where: { id } });
    if (!post) {
        res.status(401).send({ message: "post não foi encontrado..." });
    } else {
        await posts.destroy({
            where: {
                id,
            },
        });
        res.status(200).send({ message: "deletado com sucesso" });
    }
});

module.exports = router;
