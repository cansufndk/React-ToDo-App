import { useContext } from "react"
import { Button, FormControl, InputGroup, Row, Col, Form, Container } from "react-bootstrap"
import { TodoListContext } from "../contexts/TodoListContext"

// { input, setInput, todo, setTodo }
function Header() {
  const { input, setInput, dispatch } = useContext(TodoListContext)

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-white text-center my-3">Todo~List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={(e) => (e.preventDefault(), dispatch({ type: "add" }))}>
            <InputGroup className="mb-3">
              <FormControl
                className="form-control"
                placeHolder="Add Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></FormControl>
              <Button type="submit">
                Add
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
