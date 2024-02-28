import React, { useEffect } from 'react'
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
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { todoItem } from '../actions/TodoAction'
import Loading from '../components/Loading';
function HomeScreen() {

  const dispatch = useDispatch()
  const userLogin  = useSelector(state => state.userInfo)   
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(todoItem());
  }, [dispatch]);


  
  const todoListItem  = useSelector(state => state.todoList)   
  const { todoList,loading } = todoListItem
  // console.log('todo item object' ,todoList)



  // console.log('usee name',userInfo.name)





  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" xl="7">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <h4 className="text-center my-3 pb-3">To Do App</h4>
              <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                <MDBCol size="12">
                  <MDBInput
                  
                    id="form1"
                    type="text"
                    placeholder='Enter Task here'
                  />
                </MDBCol>
                <MDBCol size="12">
                  <MDBBtn type="submit">Save</MDBBtn>
                </MDBCol>
                
              </MDBRow>

              {/* Conditional rendering based on user login */}
              {userInfo ? (
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  { loading  ? (<Loading />) :(
                  <MDBTableBody>
                    {todoList &&  todoList.map((todo, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{todo.todo}</td>
                        <td>{todo.status || 'NA'}</td>
                        <td>
                          <MDBBtn type="submit" color="danger">
                              
                          </MDBBtn>
                          <MDBBtn type="submit" color="success" className="ms-1">
                            Finished
                          </MDBBtn>
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                  )}
                </MDBTable>
              ) : (
                <h2>Welcome to Todo App. Please login to view todos.</h2>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  )
}

export default HomeScreen