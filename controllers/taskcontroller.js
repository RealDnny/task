import modelTask from "../models/modelTask.js"

class TaskController {

    static async gettask(req,res){
        try {
            const task = await modelTask.getTask()
            if(task.status !== 200){
                return res.status(task.status).render('teskForm', {message:task.message})
            }
            res.status(200).render('teskForm', {message:task.message, task:task.data})

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
    static async createtarsk(req,res){
        try {
            const {task} = req.body
            const response = await modelTask.createTask(task)
            
            if(response.status !== 200){
                return res.status(response.status).json({message:response.message})
            }
            
            res.status(200).render('teskForm', {message:response.message, task:response.data})
        } catch (error) {
            console.error(error.message)
            return res.status(500).json({message: error.message})
        }
    }
    static async markdone(req,res){
        const {taskId, ischecked} = req.body
        try {
            const markdone = await modelTask.markdone(taskId, ischecked)
            if(markdone.status !== 200){
                return res.status(markdone.status).json({message:markdone.message})
            }   
            res.status(markdone.status).render('teskForm', {message:markdone.message, task:markdone.data})
        } catch (error) {

            console.error(error.message)
            return res.status(500).json({message: error.message})
            
        }
    }

}

export default TaskController
