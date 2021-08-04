import { Router } from 'express';
import { getTasks, getTask, getTaskCount, saveTask, updateTask, deleteTask } from '../Controllers/task';

const router = Router();

//TODO: Obtener Todas las Tareas
router.get('/tasks',getTasks);

//TODO: Contar Todas las Tareas
router.get('/tasks/count',getTaskCount);

//TODO: Obtiene Una tarea
router.get('/tasks/:id',getTask);

//TODO: Crea Una Tarea
router.post('/tasks',saveTask);

//TODO: Actualiza una Tarea
router.put('/tasks',updateTask);

//TODO: Elimina una Tarea
router.delete('/tasks', deleteTask);

export default router;