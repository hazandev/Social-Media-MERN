import { storageService } from "./generalService/asyncStorageService";


export const postService = {
    query,
    remove,
    add,
    getById,
    getPostByUser
}

function query() {
    return storageService.getEntity('posts');
}

async function add(post) {
    debugger
    const addedPost = await storageService.post('posts', post);
}

async function remove(postId) {
    debugger
    return storageService.remove('posts', postId)

}

function getById(postId) {

}

function getPostByUser(userId) {
    return storageService.query('posts').then(posts =>
        posts.filter(post => post.userId == userId))
}