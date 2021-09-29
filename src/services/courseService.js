import { storageService } from "./generalService/asyncStorageService";

export const courseService = {
    query,
    getById
}


function getById(id){
    return storageService.get('courses', id)

}

function query(filter = '', value = [0, Infinity]) {
    const filterString = filter.toUpperCase();
    let filterCourse = [];
    const courses = storageService.getEntity('courses');
    courses.forEach(course => {
        if (
            (course.tech.toUpperCase().includes(filterString) || (course.mentor.toUpperCase().includes(filterString))) && 
                (course.price >= value[0] && course.price <= value[1])
            
        ){
            filterCourse.push(course);
        }
    })
    filterCourse.sort((function (a, b) {
        return b.price - a.price;
    }));
    console.log(filterCourse);
    return filterCourse;
}