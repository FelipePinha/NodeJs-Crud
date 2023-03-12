const express = require("express");
const router = express.Router();
const { posts } = require("../models");
const PostService = require("../services/posts.services");

const postService = new PostService(posts);

// Create
router.post("/posts-create", async (req, res) => {
    const { title, content } = req.body;
    await postService.create({ title, content });
    res.status(201).json({ message: "criado com sucesso" });
});

// Read
router.get("/posts", async (req, res) => {
    const allPosts = await postService.get();
    res.status(200).json(allPosts);
});

// Update
router.put("/posts-update/:id", async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const updateStatus = await postService.update({ title, content }, id);
    res.status(updateStatus.status).json({ message: updateStatus.message });
});

// Delete
router.delete("/posts-delete/:id", async (req, res) => {
    const { id } = req.params;
    const deleteStatus = await postService.delete(id);
    res.status(deleteStatus.status).json({ message: deleteStatus.message });
});

module.exports = router;
