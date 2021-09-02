import { Router } from 'express';
import { getTasks, getTask, getTaskCount, saveTask, updateTask, deleteTask } from '../Controllers/task';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        title:
 *          type: string
 *          description: the task title
 *        description:
 *          type: string
 *          description: the task description
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */


//TODO: Obtener Todas las Tareas
/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
*/
router.get('/tasks',getTasks);

//TODO: Contar Todas las Tareas
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total tasks counter
 *    tags: [Tasks]
 */
router.get('/tasks/count',getTaskCount);

//TODO: Obtiene Una tarea
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task by Id
 *    tags: [Tasks]
 */
router.get('/tasks/:id',getTask);

//TODO: Crea Una Tarea
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new Task
 *    tags: [Tasks]
 */
router.post('/tasks',saveTask);

//TODO: Actualiza una Tarea
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by Id
 *    tags: [Tasks]
 */
router.put('/tasks/:id',updateTask);

//TODO: Elimina una Tarea
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by Id
 *    tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask);

export default router;