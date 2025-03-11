import { Router } from "express";

import employeeController from "../controller/employee.controller.js";

const employeeRouter = Router()


employeeRouter.get("/allemployees", employeeController.sendEmployee)
employeeRouter.post("/addemployee", employeeController.addEmployee)
export default employeeRouter