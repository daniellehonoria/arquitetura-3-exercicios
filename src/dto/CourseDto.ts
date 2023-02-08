import { BadRequestError } from "../errors/BadRequestError"
import { Course } from "../models/Course"
import { CourseInputDTO, CourseOutputDTO, EditCourseInputDTO } from "../types"

export class CourseDTO {

    public createCourseInput(id: unknown, name: unknown, lessons: unknown):CourseInputDTO{


        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new BadRequestError("'lessons' deve ser number")
        }
        const result:CourseInputDTO = { id, name, lessons }
        return result
    }
    createCourseOutput(param:Course): CourseOutputDTO{
        const result: CourseOutputDTO ={
            message: "Curso cadastrado",
            course:{
                id: param.getId(), 
                name:param.getName(), 
                lessons:param.getLessons()
            }
        }
        return result
    }
    editCourseInput(
        idToEdit:string, 
        newId:unknown, 
        newName:unknown, 
        newLessons:unknown): EditCourseInputDTO{
            if (newId !== undefined) {
                if (typeof newId !== "string") {
                    throw new BadRequestError("'id' deve ser string")
                }
            }
            
            if (newName !== undefined) {
                if (typeof newName !== "string") {
                    throw new BadRequestError("'name' deve ser string")
                }
            }
            if (newLessons !== undefined) {
                if (typeof newLessons !== "number") {
                    throw new BadRequestError("'lessons' deve ser number")
                }
            }
            const result:EditCourseInputDTO = {
                idToEdit,
                newId,
                newName,
                newLessons,
            }
        return result
    
        }
}