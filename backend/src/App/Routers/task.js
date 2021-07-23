import { Router } from 'express';
import { getTasks } from '../Controllers/task';

const router = Router();

//TODO: Obtener Todas las Tareas
router.get('/tasks',getTasks);

//TODO: Contar Todas las Tareas
router.get('/tasks/count');

//TODO: Obtiene Una tarea
router.get('/tasks/:id');

//TODO: Crea Una Tarea
router.post('/tasks');

//TODO: Actualiza una Tarea
router.put('/tasks');

//TODO: Elimina una Tarea
router.delete('/tasks');

export default router;