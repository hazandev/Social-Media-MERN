import { storageService } from "./generalService/asyncStorageService";

export const blogService = {
    query,
    add,
    remove,
    getById,
    getCommentsById,
    addComment
}

function addComment(comment){
    return storageService.post('commentsArticle', comment);
}

function getById(articleId) {
    return storageService.get('articles', articleId)
}


function query(filter = '', tech = "") {
    const articles = storageService.getEntity('articles');
    const filterArticles = _filterQuery(articles, filter, tech)
    return filterArticles;

}

function _filterQuery(articles, filter, tech) {
    let filterArticles = [];
    const filterString = filter.toUpperCase();
    articles.forEach(article => {
        if (
            article.subject.toUpperCase().includes(filterString) ||
            article.content.pre.toUpperCase().includes(filterString) ||
            article.content.body.toUpperCase().includes(filterString) ||
            article.content.end.toUpperCase().includes(filterString)
        )

            filterArticles.push(article);
    })
    filterArticles.sort((function (a, b) {
        return b.view - a.view;
    }));
    if (tech !== "All") {
        filterArticles = filterArticles.filter(article => article.tech === tech)
    }
    return filterArticles;
}

async function add (article) {
    const addedArticle = await storageService.post('articles', article);
}

function remove(articleId) {
    return storageService.remove('articles', articleId)

}

function getCommentsById(articleId) {
    return storageService.query('commentsArticle').then(comments => {
        return comments.filter(comment => comment.articleId == articleId)
    })

}