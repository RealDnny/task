import express from 'express';
import taskController from '../controllers/taskcontroller.js'

const Router = express.Router()

Router.get('/',taskController.gettask)
Router.post('/createtask',taskController.createtarsk)
Router.post('/markdone', taskController.markdone)

export default Router