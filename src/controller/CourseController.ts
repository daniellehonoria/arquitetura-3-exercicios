import { Request, Response } from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { BaseError } from "../errors/BaseError"
import { CourseInputDTO } from "../types"

export class CourseController {

    //dependencia de courseBusiness
    constructor(
        private courseBusiness: CourseBusiness,
        private courseDTO: CourseInputDTO
    ) {}
    public getCourses = async (req: Request, res: Response) => {
        try {
            const input = {
                q: req.query.q
            }

        // const courseBusiness = new CourseBusiness()//toda vez q vemos uma classe chamada dentro de outra várias vezes, cabe utilizar injeção de dependência
        
            const output = await this.courseBusiness.getCourses(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public createCourse = async (req: Request, res: Response) => {
        try {

            const input = this.courseDTO.createog

            }

            const courseBusiness = new CourseBusiness()
            const output = await courseBusiness.createCourse(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public editCourse = async (req: Request, res: Response) => {
        try {

            const input = {
                idToEdit: req.params.id,
                newId: req.body.id,
                newName: req.body.name,
                newLessons: req.body.lessons
            }

            const output = await this.courseBusiness.editCourse(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public deleteCourse = async (req: Request, res: Response) => {
        try {

            const input = {
                idToDelete: req.params.id
            }

            const courseBusiness = new CourseBusiness()
            const output = await courseBusiness.deleteCourse(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}