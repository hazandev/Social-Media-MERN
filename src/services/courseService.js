import { Courses } from "../data/dummyData"
export const courseService = {
    query,
    getById
}

let gCourses = Courses;

function getById(id){
    const course = gCourses.filter( course => course.id == id)[0];
    return course
}

function query(filter = '', value = [0, Infinity]) {
    const filterString = filter.toUpperCase();
    let filterCourse = [];

    gCourses.forEach(course => {
        if (
            (course.mentor.toUpperCase().includes(filterString) && 
                course.price >= value[0] && course.price <= value[1]
            )
        )
            filterCourse.push(course);
    })
    filterCourse.sort((function (a, b) {
        return b.price - a.price;
    }));
    return filterCourse;
}