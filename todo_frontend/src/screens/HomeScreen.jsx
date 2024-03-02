// import React, { useEffect, useState } from 'react';
// import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { todoItem,todoDeleteItem,todoUpdateStatus,addTaskItem } from '../actions/TodoAction';
// import Loading from '../components/Loading';
// import {useNavigate} from 'react-router-dom'
// function HomeScreen() {

//   const dispatch = useDispatch()
//   const userLogin  = useSelector(state => state.userInfo)   
//   const { userInfo } = userLogin

//   useEffect(() => {
//     if (userInfo) {
//         dispatch(todoItem(userInfo)); // Pass userInfo as parameter
//     }
// }, [dispatch, userInfo]);

  
//   const todoListItem  = useSelector(state => state.todoList)   
//   const { todoList,loading } = todoListItem
//   // console.log('todo item object' ,todoList)



//   // console.log('usee name',userInfo.name)
//   const navigate = useNavigate()

//   const [newTask, setNewTask] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState('');

//   const handleSaveTask = () => {
//     if(!userInfo){
//       navigate('login/')
//     }
//     else if (newTask.trim() && selectedStatus) { // Check if newTask is not empty and selectedStatus is not empty
//       // Dispatch an action to save the new task with its status
//       // For simplicity, I'm logging the new task and its status
      
//       dispatch(addTaskItem(userInfo,newTask,selectedStatus))
//       .then(() => {
//         dispatch(todoItem(userInfo));
//       });
//       // Here you can dispatch an action to save the new task with its status
//       // For example:
//       // dispatch(saveTask(newTask, selectedStatus));

//       // Clear the input fields after saving the task
//       setNewTask('');
//       setSelectedStatus('');
//   } else {
      
//      alert('Please enter a task and select a status');
//   }
    
//   };

//   const deleteHandler = (pk) => {
//     // console.log('id from  db  to delete is ',pk)
//     dispatch(todoDeleteItem(userInfo,pk))
//       .then(() => {
//         dispatch(todoItem(userInfo));
//       });
//   };

//   // const updateStatusHandler = (pk,statusvalue) => {
//   //   // console.log('id from update db is ',statusvalue)
//   //   dispatch(todoUpdateStatus(userInfo,pk,statusvalue))
//   //   .then(() => {
//   //     dispatch(todoItem(userInfo));
//   //   });
//   const updateStatusHandler = (pk, newStatus) => {
//     dispatch(todoUpdateStatus(userInfo, pk, newStatus))
//         .then(() => {
//             dispatch(todoItem(userInfo));
//         });

//     const updatedTodoList = todoList.map(todo => {
//         if (todo.id === pk) {
//             return { ...todo, status: newStatus };
//         }
//         return todo;
//     });

//     const updatedTodo = updatedTodoList.find(todo => todo.id === pk);
//     if (updatedTodo) {
//         setSelectedStatus(updatedTodo.status);
//     }}



//   return (
//     <section style={{ backgroundColor: "#eee" }}>
//     <Container className="py-5 h-100">
//       <Row className="justify-content-center align-items-center">
//         <Col lg="9" xl="7">
//           <Card className="rounded-3">
//             <Card.Body className="p-4">
//               <h4 className="text-center my-3 pb-3">To Do App</h4>
//               <Form>
//                       <Row className="g-3 mb-4 pb-2">
//                           <Col xs="12">
//                               <Form.Control
//                                   id="form1"
//                                   type="text"
//                                   placeholder="Enter Task here"
//                                   value={newTask}
//                                   onChange={(e) => setNewTask(e.target.value)} // Update newTask state when input value changes
//                               />
//                           </Col>
//                           <Col xs="8">
//                               <Form.Select
//                                   value={selectedStatus}
//                                   onChange={(e) => setSelectedStatus(e.target.value)} // Update selectedStatus state when selection changes
//                               >
//                                   <option value="">Select Status</option>
//                                   <option value="Started">Not yet started</option>
//                                   <option value="Started">Started</option>
//                                   <option value="Ongoing">Ongoing</option>
//                                   <option value="In Process">In Process</option>
//                               </Form.Select>
//                           </Col>
//                           <Col xs="4">
//                               <Button variant="primary" style={{ width: '100%' }} onClick={handleSaveTask}>
//                                   Save
//                               </Button>
//                           </Col>
//                       </Row>
//                   </Form>

//               {userInfo ? (
//                 <><Table className="mb-4 justify-content-center align-items-center ">
//                     <thead>
//                       <tr>
//                         <th scope="col">No.</th>
//                         <th scope="col">Todo item</th>
//                         <th scope="col">Status</th>
//                         <th scope="col">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {loading ? (
//                         <tr>
//                           <td colSpan="4"><Loading /></td>
//                         </tr>
//                       ) : (
//                         todoList && todoList.map((todo, index) => (
//                           <tr key={index}>
//                             { todo.status !=='finished' ? 
//                             (<>
//                                 <td>{index + 1}</td>
//                                 <td>{todo.todo}</td>
//                                 {/* <td>{todo.status || 'NA'}</td> */}

//                                 <td><Form.Select
//                                   value={selectedStatus}
//                                   onChange={(e) => updateStatusHandler(todo.id,e.target.value)} 
//                               >
//                                   <option value="not yet started">Not yet started</option>
//                                   <option value="started">Started</option>
//                                   <option value="ongoing">Ongoing</option>  
//                                   <option value="end process">End Process</option>
//                               </Form.Select>

//                               </td>
//                                 <td>
//                                     <Button variant="danger" onClick={() => deleteHandler(todo.id)}>
//                                       Delete
//                                     </Button>
//                                     <Button variant="success" className="ms-1"  onClick={() => updateStatusHandler(todo.id,'finished')}>
//                                       Finished
//                                     </Button>
//                                   </td>
//                               </>):
//                             <></> }
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                   </Table>
                  
                  
//                   <hr></hr>
                  
//                   <h3>Finished Tasks</h3>
//                   <Table className="mb-4">
//                    <thead>
//                      <tr>
//                        <th scope="col">No.</th>
//                        <th scope="col">Todo item</th>
//                        <th scope="col">Status</th>
//                      </tr>
//                    </thead>
//                    <tbody>
//                       {loading ? (
//                           <tr>
//                             <td colSpan="4"><Loading /></td>
//                           </tr>
//                         ) : (
//                           todoList && todoList.map((todo, index) => (
//                             <tr key={index}>
//                               {todo.status=='finished' ? (
//                               <>
//                               <td>{index + 1}</td>
//                               <td>{todo.todo}</td>
//                               <td>{todo.status}</td>
//                               </>
//                               ):(
//                                 <></>
//                               )}
//                             </tr>
//                               )))}
                              
                              
                              
//                              </tbody>
//                  </Table>
                  
//                   </>





//               // 
//               ) : (
//                 <h2>Welcome to Todo App. Please login to view todos.</h2>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   </section>
//   )
// }

// export default HomeScreen
// import React, { useEffect, useState } from 'react';
// import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { todoItem, todoDeleteItem, todoUpdateStatus, addTaskItem } from '../actions/TodoAction';
// import Loading from '../components/Loading';
// import { useNavigate } from 'react-router-dom';

// function HomeScreen() {

//     const dispatch = useDispatch();
//     const userLogin = useSelector(state => state.userInfo);
//     const { userInfo } = userLogin;

//     useEffect(() => {
//         if (userInfo) {
//             dispatch(todoItem(userInfo)); // Pass userInfo as parameter
//         }
//     }, [dispatch, userInfo]);


//     const todoListItem = useSelector(state => state.todoList);
//     const { todoList, loading } = todoListItem;

//     const navigate = useNavigate();

//     const [newTask, setNewTask] = useState('');
//     const [selectedStatus, setSelectedStatus] = useState('');

//     useEffect(() => {
//         // Initialize selectedStatus with the status from the Redux store
//         if (todoList && todoList.length > 0) {
//             const firstTask = todoList[0];
//             setSelectedStatus(firstTask.status);
//         }
//     }, [todoList]);

//     const handleSaveTask = () => {
//         if (!userInfo) {
//             navigate('login/')
//         } else if (newTask.trim() && selectedStatus) {
//             dispatch(addTaskItem(userInfo, newTask, selectedStatus))
//                 .then(() => {
//                     dispatch(todoItem(userInfo));
//                 });
//             setNewTask('');
//             setSelectedStatus('');
//         } else {
//             alert('Please enter a task and select a status');
//         }
//     };

//     const deleteHandler = (pk) => {
//         dispatch(todoDeleteItem(userInfo, pk))
//             .then(() => {
//                 dispatch(todoItem(userInfo));
//             });
//     };

//     const updateStatusHandler = (pk, newStatus) => {
//         dispatch(todoUpdateStatus(userInfo, pk, newStatus))
//             .then(() => {
//                 dispatch(todoItem(userInfo));
//             });
//     };

//     return (
//         <section style={{ backgroundColor: "#eee" }}>
//             <Container className="py-5 h-100">
//                 <Row className="justify-content-center align-items-center">
//                     <Col lg="9" xl="7">
//                         <Card className="rounded-3">
//                             <Card.Body className="p-4">
//                                 <h4 className="text-center my-3 pb-3">To Do App</h4>
//                                 <Form>
//                                     <Row className="g-3 mb-4 pb-2">
//                                         <Col xs="12">
//                                             <Form.Control
//                                                 id="form1"
//                                                 type="text"
//                                                 placeholder="Enter Task here"
//                                                 value={newTask}
//                                                 onChange={(e) => setNewTask(e.target.value)}
//                                             />
//                                         </Col>
//                                         <Col xs="8">
//                                             <Form.Select
//                                                 value={selectedStatus}
//                                                 onChange={(e) => setSelectedStatus(e.target.value)}
//                                             >
//                                                 <option value="">Select Status</option>
//                                                 <option value="Not yet started">Not yet started</option>
//                                                 <option value="Started">Started</option>
//                                                 <option value="Ongoing">Ongoing</option>
//                                                 <option value="In Process">In Process</option>
//                                             </Form.Select>
//                                         </Col>
//                                         <Col xs="4">
//                                             <Button variant="primary" style={{ width: '100%' }} onClick={handleSaveTask}>
//                                                 Save
//                                             </Button>
//                                         </Col>
//                                     </Row>
//                                 </Form>

//                                 {userInfo ? (
//                                     <>
//                                         <Table className="mb-4 justify-content-center align-items-center ">
//                                             <thead>
//                                                 <tr>
//                                                     <th scope="col">No.</th>
//                                                     <th scope="col">Todo item</th>
//                                                     <th scope="col">Status</th>
//                                                     <th scope="col">Actions</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {loading ? (
//                                                     <tr>
//                                                         <td colSpan="4"><Loading /></td>
//                                                     </tr>
//                                                 ) : (
//                                                     todoList && todoList.map((todo, index) => (
//                                                         <tr key={index}>
//                                                             {todo.status !== 'finished' ? (
//                                                                 <>
//                                                                     <td>{index + 1}</td>
//                                                                     <td>{todo.todo}</td>
//                                                                     <td>
//                                                                         <Form.Select
//                                                                             value={todo.status}
//                                                                             onChange={(e) => updateStatusHandler(todo.id, e.target.value)}
//                                                                         >
//                                                                             <option value="Not yet started">Not yet started</option>
//                                                                             <option value="Started">Started</option>
//                                                                             <option value="Ongoing">Ongoing</option>
//                                                                             <option value="In Process">In Process</option>
//                                                                         </Form.Select>
//                                                                     </td>
//                                                                     <td>
//                                                                         <Button variant="danger" onClick={() => deleteHandler(todo.id)}>
//                                                                             Delete
//                                                                         </Button>
//                                                                         <Button variant="success" className="ms-1" onClick={() => updateStatusHandler(todo.id, 'finished')}>
//                                                                             Finished
//                                                                         </Button>
//                                                                     </td>
//                                                                 </>
//                                                             ) : (
//                                                                 <>
//                                                                     <td>{index + 1}</td>
//                                                                     <td>{todo.todo}</td>
//                                                                     <td>{todo.status}</td>
//                                                                     <td>
//                                                                         <Button variant="danger" onClick={() => deleteHandler(todo.id)}>
//                                                                             Delete
//                                                                         </Button>
//                                                                     </td>
//                                                                 </>
//                                                             )}
//                                                         </tr>
//                                                     ))
//                                                 )}
//                                             </tbody>
//                                         </Table>

//                                         <hr />

//                                         <h3>Finished Tasks</h3>
//                                         <Table className="mb-4">
//                                             <thead>
//                                                 <tr>
//                                                     <th scope="col">No.</th>
//                                                     <th scope="col">Todo item</th>
//                                                     <th scope="col">Status</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {loading ? (
//                                                     <tr>
//                                                         <td colSpan="4"><Loading /></td>
//                                                     </tr>
//                                                 ) : (
//                                                     todoList && todoList.map((todo, index) => (
//                                                         <tr key={index}>
//                                                             {todo.status === 'finished' && (
//                                                                 <>
//                                                                     <td>{index + 1}</td>
//                                                                     <td>{todo.todo}</td>
//                                                                     <td>{todo.status}</td>
//                                                                 </>
//                                                             )}
//                                                         </tr>
//                                                     ))
//                                                 )}
//                                             </tbody>
//                                         </Table>
//                                     </>
//                                 ) : (
//                                     <h2>Welcome to Todo App. Please login to view todos.</h2>
//                                 )}
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     )
// }

// export default HomeScreen;
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { todoItem, todoDeleteItem, todoUpdateStatus, addTaskItem } from '../actions/TodoAction';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userInfo);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(todoItem(userInfo)); // Pass userInfo as parameter
        }
    }, [dispatch, userInfo]);


    const todoListItem = useSelector(state => state.todoList);
    const { todoList, loading } = todoListItem;

    const navigate = useNavigate();

    const [newTask, setNewTask] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    useEffect(() => {
        // Initialize selectedStatus with the status from the Redux store
        if (todoList && todoList.length > 0) {
            const firstTask = todoList[0];
            setSelectedStatus(firstTask.status);
        }
    }, [todoList]);

    const handleSaveTask = () => {
        if (!userInfo) {
            navigate('login/')
        } else if (newTask.trim() && selectedStatus) {
            dispatch(addTaskItem(userInfo, newTask, selectedStatus))
                .then(() => {
                    dispatch(todoItem(userInfo));
                });
            setNewTask('');
            setSelectedStatus('');
        } else {
            alert('Please enter a task and select a status');
        }
    };

    const deleteHandler = (pk) => {
        dispatch(todoDeleteItem(userInfo, pk))
            .then(() => {
                dispatch(todoItem(userInfo));
            });
    };

    const updateStatusHandler = (pk, newStatus) => {
        dispatch(todoUpdateStatus(userInfo, pk, newStatus))
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
                                                onChange={(e) => setNewTask(e.target.value)}
                                            />
                                        </Col>
                                        <Col xs="8">
                                            <Form.Select
                                                value={selectedStatus}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="Not yet started">Not yet started</option>
                                                <option value="Started">Started</option>
                                                {/* <option value="In Progress">In Progress</option>
                                                <option value="End Process">End Process</option> */}
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
                                    <>
                                        <Table className="mb-4 justify-content-center align-items-center ">
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
                                                            {todo.status !== 'finished' ? (
                                                                <>
                                                                    <td>{index + 1}</td>
                                                                    <td>{todo.todo}</td>
                                                                    <td>
                                                                        <Form.Select
                                                                            value={todo.status}
                                                                            onChange={(e) => updateStatusHandler(todo.id, e.target.value)}
                                                                        >
                                                                            <option value="Not yet started">Not yet started</option>
                                                                            <option value="Started">Started</option> 
                                                                            <option value="In Progress">In Progress</option>
                                                                            <option value="End Process">End Process</option>
                                                                        </Form.Select>
                                                                    </td>
                                                                    <td>
                                                                        <Button variant="danger" onClick={() => deleteHandler(todo.id)}>
                                                                            Delete
                                                                        </Button>
                                                                        <Button variant="success" className="ms-1" onClick={() => updateStatusHandler(todo.id, 'finished')}>
                                                                            Finished
                                                                        </Button>
                                                                    </td>
                                                                </>
                                                            ) : null}
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </Table>

                                        <hr />

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
                                                            {todo.status === 'finished' && (
                                                                <>
                                                                    <td>{index + 1}</td>
                                                                    <td>{todo.todo}</td>
                                                                    <td>{todo.status}</td>
                                                                </>
                                                            )}
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </Table>
                                    </>
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

export default HomeScreen;
