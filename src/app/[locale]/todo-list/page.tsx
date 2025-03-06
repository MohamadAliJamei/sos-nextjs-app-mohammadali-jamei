import TodoList from "@/src/components/todo-list/TodoList";
import { Container, Typography } from "@mui/material";

export default function TodoListPage() {
  return (
    <Container sx={{ mt: 12 }}>
      <TodoList />
    </Container>
  );
}
