import "./App.css";
import { Container, Row, Col } from 'react-bootstrap';
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { TodoListContextProvider } from "./contexts/TodoListContext"

function App() {
  return (
    <TodoListContextProvider>
      <Container className="mt-5 bg-dark">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoList />
          </Col>
        </Row>
      </Container>
    </TodoListContextProvider>
  );
}

export default App;
