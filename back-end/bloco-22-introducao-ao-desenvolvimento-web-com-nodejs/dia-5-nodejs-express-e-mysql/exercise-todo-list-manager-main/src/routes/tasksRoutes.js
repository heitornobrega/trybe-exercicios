const express = require('express');
const tasksDB = require('../db/taskDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const task = req.body;
  try {
    const [result] = await tasksDB.insert(task);
    res.status(201).json({
      message: `Tarefa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

router.put('/:id', async (req, res) => {
  const task = req.body;
  try {
    const [result] = await tasksDB.update(task, req.params.id);
    console.log(result);
    res.status(201).json({
      message: `${result.affectedRows} tarefa atualizada com sucesso` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar uma tarefa' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await tasksDB.remove(id);
    console.log(result);
    res.status(200).json({ message: `${result.affectedRows} removida com sucesso.` });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Erro ocorrido com sucesso' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await tasksDB.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro ocorrido com sucesso' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const [result] = await tasksDB.findById(req.params.id);
    if (result.length === 0) {
      return res.status(404).json({ message: 'Nenhuma tarefa encontrada' });
    } 
      return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
