import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import $ from 'jquery'
import { useState } from 'react';
import '../App.css'

function SearchBar() {
    const [todos, setTodos] = useState([
        { text: 'i am first' },
        { text: 'i am second' },

    ]);

    const [value, setValue] = useState();


    const handleSubmission = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }

    const addTodo = text=>{
        let newTodo = [...todos,{text}];
        setTodos(newTodo);
    }


    return (
        <>
            <Row>
                <Col md={6}>
                    <InputGroup className="col-md-6 mb-3" style={{ marginLeft: 460, marginTop: 50 }}>
                        <FormControl
                            placeholder="search here . . ."
                            aria-label="searchBox"
                            aria-describedby="basic-addon1"
                            value={value}
                            onChange={e => { setValue(e.target.value); }}
                            onKeyPress = {e => {if(e.key === 'Enter'){
                                handleSubmission(e);
                            }}}
                            id="searchBar"
                        />
                        <InputGroup.Text id="basic-addon1" onClick={handleSubmission}> @</InputGroup.Text>

                    </InputGroup>
                </Col>
            </Row>

            <div className="app">
                <div className="todo-list">
                    {todos.map((todo, index) => (
                        <Todo
                            index={index}
                            key = {index}
                            todo={todo}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


function Todo({ todo, index }) {
    return (
        <div className="todo">
            {todo.text}
        </div>
    );
}
export default SearchBar;