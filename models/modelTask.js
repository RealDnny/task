import axios from 'axios'
import prisma from '../prismaClient.js'
import {handleresponse} from '../handleResponse.js'


class modelTask {

    static async getTask(){
        try{
            const task = await prisma.tesk.findMany() 
            if(task.length === 0){
                return handleresponse(404, 'No task found in the database')
            }
            return handleresponse(200,'Task found', task)
        
        }catch(error){
            console.log(error.message)
            return handleresponse(500, error.message)
        }
    }
    static async createTask(task){
        try {
            if(!task){
                return handleresponse(400, 'Task is required')
            }
            const newtask = await prisma.tesk.create({
                data:{
                    task:task
                }
        })
        if(!newtask){
            return handleresponse(401, 'Task not created', null)
        }
        //Send task for whatssap
        try {
            const instance = "xxxxxxxxxxx"
            const token = "xxxxxxxxxxxxx"
            const phone = "xxxxxxxxxxxxxx"

            await axios.post(`https://api.ultramsg.com/${instance}/messages/chat`, {
                token,
                to: phone,
                body: `📌 Você criou uma nova tarefa: "${task}". Não esqueça de realizá-la!`,
            });
        } catch (error) {
            console.error(` error sending task > ${error.message}`)
            return handleresponse(500, error.message)
        }
       
        // Send task for whatsapp end
        
        const _task = await prisma.tesk.findMany()
        return handleresponse(200, 'Task created', _task)
        } catch (error) {
            console.error(` error create Task > ${error.message}`)
            return handleresponse(500, error.message)
        }
    }

    static async markdone(taskId, ischecked){
        const taskid = parseInt(taskId)
        try {
            const task = await prisma.tesk.update({
                where:{
                    id:taskid
                },
                data:{
                    isdone:ischecked
                }
            })
            if(!task){
                return handleresponse(401, 'Task not updated', null)
            }
            const _task = await prisma.tesk.findMany()
            return handleresponse(200, 'Task Markdone', _task)

        } catch (error) {
            console.error(` error markdone Task > ${error.message}`)
            return handleresponse(500, error.message)
        }
    }
}

export default modelTask