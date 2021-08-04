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

export const saveTask = (req,res) => {
    res.send('Create Task');
}

export const updateTask = (req,res) => {
    res.send('Update Tasks');
}

export const deleteTask = (req,res) => {
    res.send('Delete Tasks');
}