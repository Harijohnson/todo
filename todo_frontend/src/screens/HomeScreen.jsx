import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { todoItem,todoDeleteItem,todoUpdateStatus } from '../actions/TodoAction';
import Loading from '../components/Loading';
function HomeScreen() {

  const dispatch = useDispatch()
  const userLogin  = useSelector(state => state.userInfo)   
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
        dispatch(todoItem(userInfo)); // Pass userInfo as parameter
    }
}, [dispatch, userInfo]);

  
  const todoListItem  = useSelector(state => state.todoList)   
  const { todoList,loading } = todoListItem
  // console.log('todo item object' ,todoList)



  // console.log('usee name',userInfo.name)


  const [newTask, setNewTask] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleSaveTask = () => {

    console.log()
    
  };

  const deleteHandler = (pk) => {
    // console.log('id from  db  to delete is ',pk)
    dispatch(todoDeleteItem(userInfo,pk))
    .then(() => {
      dispatch(todoItem(userInfo));
    });
  };

  const updateStatusHandler = (pk,statusvalue) => {
    // console.log('id from update db is ',statusvalue)
    dispatch(todoUpdateStatus(userInfo,pk,statusvalue))
    .then(() => {
      dispatch(todoItem(userInfo));
    });
  };
  return (
    <section style={{ backgroundColor: "#eee" }}>
    <Container className="py-5 h-100">
      <Row className="justify-content-center align-items-center">
        <Col lg="9" xl="7">
          <Card className="rounded-3">
            <Card.Body className="p-4">
              <h4 className="text-center my-3 pb-3">To Do App</h4>
              <Form>
                      <Row className="g-3 mb-4 pb-2">
                          <Col xs="12">
                              <Form.Control
                                  id="form1"
                                  type="text"
                                  placeholder="Enter Task here"
                                  value={newTask}
                                  onChange={(e) => setNewTask(e.target.value)} // Update newTask state when input value changes
                              />
                          </Col>
                          <Col xs="8">
                              <Form.Select
                                  value={selectedStatus}
                                  onChange={(e) => setSelectedStatus(e.target.value)} // Update selectedStatus state when selection changes
                              >
                                  <option value="">Select Status</option>
                                  <option value="Started">Not yet started</option>
                                  <option value="Started">Started</option>
                                  <option value="Ongoing">Ongoing</option>
                                  <option value="In Process">In Process</option>
                              </Form.Select>
                          </Col>
                          <Col xs="4">
                              <Button variant="primary" style={{ width: '100%' }} onClick={handleSaveTask}>
                                  Save
                              </Button>
                          </Col>
                      </Row>
                  </Form>

              {userInfo ? (
                <><Table className="mb-4 justify-content-center align-items-center ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="4"><Loading /></td>
                        </tr>
                      ) : (
                        todoList && todoList.map((todo, index) => (
                          <tr key={index}>
                            { todo.status !=='finished' ? 
                            (<>
                                <td>{index + 1}</td>
                                <td>{todo.todo}</td>
                                <td>{todo.status || 'NA'}</td>
                                <td>
                                    <Button variant="danger" onClick={() => deleteHandler(todo.id)}>
                                      Delete
                                    </Button>
                                    <Button variant="success" className="ms-1"  onClick={() => updateStatusHandler(todo.id,'finished')}>
                                      Finished
                                    </Button>
                                  </td>
                              </>):
                            <></> }
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                  
                  
                  <hr></hr>
                  
                  <h3>Finished Tasks</h3>
                  <Table className="mb-4">
                   <thead>
                     <tr>
                       <th scope="col">No.</th>
                       <th scope="col">Todo item</th>
                       <th scope="col">Status</th>
                     </tr>
                   </thead>
                   <tbody>
                      {loading ? (
                          <tr>
                            <td colSpan="4"><Loading /></td>
                          </tr>
                        ) : (
                          todoList && todoList.map((todo, index) => (
                            <tr key={index}>
                              {todo.status=='finished' ? (
                              <>
                              <td>{index + 1}</td>
                              <td>{todo.todo}</td>
                              <td>{todo.status}</td>
                              </>
                              ):(
                                <></>
                              )}
                            </tr>
                              )))}
                              
                              
                              
                             </tbody>
                 </Table>
                  
                  </>





              // 
              ) : (
                <h2>Welcome to Todo App. Please login to view todos.</h2>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default HomeScreen