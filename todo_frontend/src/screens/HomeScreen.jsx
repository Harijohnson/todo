// import React, { useEffect } from 'react'
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBInput,
//   MDBRow,
//   MDBTable,
//   MDBTableBody,
//   MDBTableHead,
// } from "mdb-react-ui-kit";
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { todoItem } from '../actions/TodoAction'
// function HomeScreen() {

//   const dispatch = useDispatch()
//   const userLogin  = useSelector(state => state.userInfo)   
//   const { userInfo } = userLogin

//   useEffect(() => {
//     dispatch(todoItem());
//   }, [dispatch]);


  
//   const todoListItem  = useSelector(state => state.todoList)   
//   const { todoList } = todoListItem
//   console.log('todo item object' ,todoList)



//   // console.log('usee name',userInfo.name)





//   return (
//     <section className="vh-100" style={{ backgroundColor: "#eee" }}>
//     <MDBContainer className="py-5 h-100">
//       <MDBRow className="d-flex justify-content-center align-items-center">
//         <MDBCol lg="9" xl="7">
//           <MDBCard className="rounded-3">
//             <MDBCardBody className="p-4">
//               <h4 className="text-center my-3 pb-3">To Do App</h4>
//               <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
//                 <MDBCol size="12">
//                   <MDBInput
//                     label="Enter a task here"
//                     id="form1"
//                     type="text"
//                   />
//                 </MDBCol>
//                 <MDBCol size="12">
//                   <MDBBtn type="submit">Save</MDBBtn>
//                 </MDBCol>
//                 <MDBCol size="12">
//                   <MDBBtn type="submit" color="warning">
//                     Get tasks
//                   </MDBBtn>
//                 </MDBCol>
//               </MDBRow>
//               <MDBTable className="mb-4">
//                 <MDBTableHead>
//                   <tr>
//                     <th scope="col">No.</th>
//                     <th scope="col">Todo item</th>
//                     <th scope="col">Status</th>
//                     <th scope="col">Actions</th>
//                   </tr>
//                 </MDBTableHead>
//                 <MDBTableBody>
//                   <tr>
//                     <th scope="row">1</th>
//                     <td>week</td>
//                     <td>In progress</td>
//                     <td>
//                       <MDBBtn type="submit" color="danger">
//                         Delete
//                       </MDBBtn>

//                       <MDBBtn type="submit" color="success" className="ms-1">
//                         Finished
//                       </MDBBtn>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">2</th>
//                     <td>Renew car insurance</td>
//                     <td>In progress</td>
//                     <td>
//                       <MDBBtn type="submit" color="danger">
//                         Delete
//                       </MDBBtn>

//                       <MDBBtn type="submit" color="success" className="ms-1">
//                         Finished
//                       </MDBBtn>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">3</th>
//                     <td>Sign up for online course</td>
//                     <td>In progress</td>
//                     <td>
//                       <MDBBtn type="submit" color="danger">
//                         Delete
//                       </MDBBtn>

//                       <MDBBtn type="submit" color="success" className="ms-1">
//                         Finished
//                       </MDBBtn>
//                     </td>
//                   </tr>
//                 </MDBTableBody>
//               </MDBTable>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   </section>
//   )
// }

// export default HomeScreen

import React, { useEffect } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { todoItem } from '../actions/TodoAction';

function HomeScreen() {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userInfo);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(todoItem());
  }, [dispatch]);

  const todoListItem = useSelector(state => state.todoList);
  const { todoList } = todoListItem;

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                {userInfo ? ( // If user is logged in, show the todo list
                  <>
                    <h4 className="text-center my-3 pb-3">To Do App</h4>
                    <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                      <MDBCol size="12">
                        <MDBInput
                          label="Enter a task here"
                          id="form1"
                          type="text"
                        />
                      </MDBCol>
                      <MDBCol size="12">
                        <MDBBtn type="submit">Save</MDBBtn>
                      </MDBCol>
                      <MDBCol size="12">
                        <MDBBtn type="submit" color="warning">
                          Get tasks
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <MDBTable className="mb-4">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">No.</th>
                          <th scope="col">Todo item</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {todoList.map((todo, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{todo.todo}</td>
                            <td>In progress</td>
                            <td>
                              <MDBBtn type="submit" color="danger">
                                Delete
                              </MDBBtn>
                              <MDBBtn type="submit" color="success" className="ms-1">
                                Finished
                              </MDBBtn>
                            </td>
                          </tr>
                        ))}
                      </MDBTableBody>
                    </MDBTable>
                  </>
                ) : ( // If user is not logged in, show welcome text
                  <h4 className="text-center my-3 pb-3">Welcome to the To Do App</h4>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default HomeScreen;
