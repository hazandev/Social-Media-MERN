import { Courses } from "../data/dummyData"
export const courseService = {
    query
}

let gCourses = Courses;


function query(filter = '') {
    const filterString = filter.toUpperCase();
    let filterCourse = [];

    gCourses.forEach(course => {
        if (
            course.mentor.toUpperCase().includes(filterString) ||
            course.tech.toUpperCase().includes(filterString)
        )

        filterCourse.push(course);
    })
    filterCourse.sort((function (a, b) {
        return b.price - a.price;
    }));
    return filterCourse;
}