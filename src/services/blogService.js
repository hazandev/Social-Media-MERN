import { Articles } from "../data/dummyData"
export const blogService = {
    query,
    add,
    remove
}

let gArticles = Articles;


function query(filter = '', tech = "") {
    const filterString = filter.toUpperCase();
    let filterArticles = [];

    gArticles.forEach(article => {
        if (
            article.subject.toUpperCase().includes(filterString) ||
            article.content.pre.toUpperCase().includes(filterString)||
            article.content.body.toUpperCase().includes(filterString)||
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

function add(article) {
    //server
    //do dispatch
    debugger
    article.id = gArticles.length + 1;
    gArticles.push(article);
    Articles = gArticles;
}

function remove(id) {
    gArticles = gArticles.filter(article => article.id !== id);
    debugger
}