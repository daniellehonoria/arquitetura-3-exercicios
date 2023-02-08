export interface CourseDB {
    id: string,
    name: string,
    lessons: number
}
export interface CourseInputDTO{
    id:string,
    name:string,
    lessons:number
}

export interface CourseOutputDTO{
    message: string,
    course: {id:string, name:string, lessons:number}
}

export interface EditCourseInputDTO{
    idToEdit:string,
    newId: string |undefined,
    newName: string| undefined,
    newLessons: number | undefined
}

export interface EditCourseOutputDTO{
    message: string,
    course: {id:string, name:string, lessons:number}
}