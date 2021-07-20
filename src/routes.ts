import { Router } from "express";
import { AuthController } from "./controllers/AuthController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensurreAdmin";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const auth = new AuthController()
const createComplimenController = new CreateComplimentController()

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/compliments", createComplimenController.handle)
router.post('/login', auth.handle)


export { router };