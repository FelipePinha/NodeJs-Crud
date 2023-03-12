class PostService {
    constructor(postsModel) {
        this.posts = postsModel;
    }

    async get() {
        const posts = await this.posts.findAll();
        return posts;
    }

    async create(newPostObj) {
        await this.posts.create(newPostObj);
    }

    async update(postObj, id) {
        const post = await this.posts.findOne({ where: { id } });

        if (!post) {
            return { status: 401, message: "post não foi encontrado..." };
        } else {
            await this.posts.update(
                {
                    title: postObj.title,
                    content: postObj.content,
                },
                {
                    where: {
                        id,
                    },
                }
            );

            return { status: 200, message: "post alterado!" };
        }
    }

    async delete(id) {
        const post = await this.posts.findOne({ where: { id } });
        if (!post) {
            return { status: 401, message: "post não foi encontrado..." };
        } else {
            await this.posts.destroy({
                where: {
                    id,
                },
            });

            return { status: 200, message: "deletado com sucesso..." };
        }
    }
}

module.exports = PostService;
