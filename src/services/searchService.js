import { Users, Articles, Courses } from '../data/dummyData'

export const searchService = {
    query
}


function query(category, searchText) {
    let list = [];
    let upCaseSearch = searchText.toUpperCase();
    switch (category) {
        case 'Users':
            Users.forEach(user => {
                if (user.username.toUpperCase().includes(upCaseSearch)) list.push(user)
            });
            break;
        case 'Articles':
            Articles.forEach(article => {
                if (article.subject.toUpperCase().includes(upCaseSearch)) list.push(article)
            });
            break;
        case 'Courses':
            Courses.forEach(course => {
                if (course.mentor.toUpperCase().includes(upCaseSearch) || course.tech.toUpperCase().includes(upCaseSearch)) list.push(course)
            });
            break;
        default:
            break;
    }
    return list;
}
