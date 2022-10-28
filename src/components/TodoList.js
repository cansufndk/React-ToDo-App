import { useContext } from "react"
import { Button, ListGroup, Row, Col, Container, FormControl, InputGroup } from "react-bootstrap"
import { TodoListContext } from "../contexts/TodoListContext"

function TodoList() {
  const { todos, dispatch } = useContext(TodoListContext)

  return (
    <Container fluid className="mb-3">
      <Row>
        <Col>
          <ListGroup variant="flush">
            {todos.map((todo) => (
              <ListGroup.Item
                className="bg-dark pe-0"
                key={todo.id}
              >
                <InputGroup>
                  <FormControl
                    className={`form-control text-white ${todo.completed ? "text-decoration-line-through bg-secondary" : "bg-dark"}`}
                    placeHolder="Todo item..."
                    value={todo.title}
                    onChange={(e) => dispatch({ type: "edit", id: todo.id, title: e.target.value })}
                    readOnly={todo.completed}
                    disabled={todo.completed}
                  ></FormControl>
                  <Button
                    variant={todo.completed ? "warning" : "success"}
                    onClick={(e) => dispatch({ type: todo.completed ? "reopen" : "complete", id: todo.id })}
                    style={{ borderColor: "#fff" }}
                  >
                    <i className={todo.completed ? "fas fa-undo" : "fas fa-check-circle"}></i>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(e) => dispatch({ type: "delete", id: todo.id })}
                    style={{ borderColor: "#fff" }}
                  >
                    <i className="fa fa-times-circle"></i>
                  </Button>
                </InputGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>

        </Col>
      </Row>
    </Container>
  )
}

export default TodoList
