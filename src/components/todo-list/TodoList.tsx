"use client";

import { useState, useEffect } from "react";
import { Box, Button, Container, List, Paper, TextField, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { useTranslations } from "next-intl";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const t = useTranslations("todoList");
  const tCommon = useTranslations("common");

  useEffect(() => {
    fetch(`${BASE_URL}/api/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error in get todos", err));
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() === "") return;
    const res = await fetch(`${BASE_URL}/api/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTodo }),
    });

    if (res.ok) {
      const createdTodo = await res.json();
      setTodos([...todos, createdTodo]);
      setNewTodo("");
    }
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch(`${BASE_URL}/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });

    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !completed } : todo)));
  };

  const deleteTodo = async (id: number) => {
    await fetch(`${BASE_URL}/api/todos/${id}`, { method: "DELETE" });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, mt: 5, borderRadius: 3 }}>
        <Typography variant="h4" textAlign="center" mb={2}>
          {t("todoList")}
        </Typography>
        <Box display="flex" gap={2} mb={3}>
          <TextField
            fullWidth
            label={t("addTodo")}
            variant="outlined"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="contained" onClick={addTodo}>
            {tCommon("add")}
          </Button>
        </Box>
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={() => toggleTodo(todo.id, todo.completed)} onDelete={() => deleteTodo(todo.id)} />
          ))}
        </List>
      </Paper>
    </Container>
  );
}
