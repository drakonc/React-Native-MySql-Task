import { connect } from '../DB/database';

export const getTasks = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tasks');
    res.status(200).json({'message':'Request OK','data':rows});
}

export const getTask = async  (req,res) => {
    const _id = req.params.id;
    const conn = await connect();
    const [rows] = await conn.query(`SELECT * FROM tasks WHERE id = ${_id}`);
    if(rows.length > 0)
        res.status(200).json({'message':'Request OK','data':rows[0]});
    else
        res.status(200).json({'message':'Task Not Found'});
}

export const getTaskCount = async (req,res) => {
    const conn = await connect();
    const [rows] = await conn.query(`SELECT COUNT(*) AS  COUNT FROM tasks`);
    res.status(200).json({'message':'Request OK','data':rows[0].COUNT});
}

export const saveTask = async (req,res) => {
    const conn = await connect();
    const [results] = await conn.query(`INSERT INTO tasks (title,description) VALUES (?,?)`,[req.body.title,req.body.description]);
    res.status(200).json({'message':'Request OK','data': {'id':results.insertId, ...req.body}});
}

export const updateTask = async (req,res) => {
    const _id = req.params.id;
    const conn = await connect();
    const [results] = await conn.query(`UPDATE tasks SET ? WHERE id = ${_id}`,[req.body]);
    if(results.affectedRows > 0)
        res.status(200).json({'message':'Request OK','data': {'id':_id, ...req.body}});
    else
        res.status(200).json({'message':'Task Not Found'});
}

export const deleteTask = async (req,res) => {
    const _id = req.params.id;
    const conn = await connect();
    const [results] = await conn.query(`DELETE FROM tasks WHERE id = ${_id}`);
    if(results.affectedRows > 0)
        res.status(200).json({'message':'Request OK'});
    else
        res.status(200).json({'message':'Task Not Found'});
}