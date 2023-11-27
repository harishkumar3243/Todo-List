import React from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { Button, TextField, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  }

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <div style={{ textAlign: 'center' }}>
        <h1>TODO LIST</h1>
        <br/>
          <TextField 
            variant="outlined"
            placeholder="Add your task here.."
            inputRef={inputRef}
            style={{ width: '110%', marginBottom: '1rem' , color:'white' }}
            InputProps={{
              style: { color: 'black', borderColor: 'red' , backgroundColor:'whitesmoke' },
            }}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: 'lightblue', color: 'black', marginTop: '0.5rem' ,marginBottom:'1rem' , fontWeight:600 }}
            onClick={addNewTask}
            endIcon={<AddIcon />}
          >
            Add Task
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Task;

