"use client";

import {
  ListItem,
  Checkbox,
  IconButton,
  Typography,
  FormControlLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: todo.completed ? "grey.100" : "white",
        borderRadius: 2,
        mb: 1,
        p: 1,
      }}
    >
      <FormControlLabel
        control={<Checkbox checked={todo.completed} onChange={onToggle} />}
        label={
          <Typography
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
              flexGrow: 1,
            }}
          >
            {todo.text}
          </Typography>
        }
      />
      <IconButton onClick={onDelete} color="error">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
