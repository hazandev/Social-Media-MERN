import { Posts, Articles, Users, Courses, CommentsArticle, CommentsPost } from "../../data/dummyData";

import { storageService } from "./asyncStorageService";

export const dataService = {
    initData,
    removeData
}

function initData(){
    storageService.newEntity('posts', Posts);
    storageService.newEntity('articles', Articles);
    storageService.newEntity('user', Users);
    storageService.newEntity('courses', Courses);
    storageService.newEntity('commentsArticle', CommentsArticle);
    storageService.newEntity('commentsPost', CommentsPost);
}

function removeData(){
    storageService.deleteStorage();
}
