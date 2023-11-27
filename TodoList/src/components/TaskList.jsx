import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { updateTodo } from "../features/todo/todoSlice";
import { Button, Typography, Grid, Paper, IconButton } from "@mui/material";
import TaskIcon from '@mui/icons-material/Task';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id) => {
    const newText = window.prompt("Update task");
    if (newText !== null) {
      dispatch(updateTodo({ taskId: id, newText }));
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{width:'50rem' , height:'auto'}}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: "20px", width:'100%' }}>
          <Typography variant="h4" gutterBottom>
            Your Tasks <TaskIcon style={{ verticalAlign: 'middle', fontSize: "2rem", marginLeft: '8px' , color:'black' }} />
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tasks.map((task, index) => (
              <li key={task.id} style={{ marginBottom: '1rem' }}>
                <Typography variant="body1" display="inline">{index + 1}. {task.text}</Typography>
                <IconButton
                  style={{ color: 'red', marginLeft: '1rem' }}
                  onClick={() => handleDelete(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  style={{ color: 'green', marginLeft: '0.5rem' }}
                  onClick={() => handleUpdate(task.id)}
                >
                  <EditIcon />
                </IconButton>
              </li>
            ))}
          </ul>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TaskList;
