import React ,{useEffect, useState}  from 'react'
import { listEmployees,deleteEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

// In order to store reponse of restapi we need to import useState hook
//useState is a hook that allows you to add state to a functional component.
//usestate is javascript function that returns an array with two elements.
const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
       
        getAllEmployees()
    }, [])
    // the array represents depenedency list for useEffect.
    // the empty array means that the effect will only run once when the component is mounted.
    
    function getAllEmployees() {

         // this function will be called when the component is mounted
        // and it will fetch the data from the server
        listEmployees().then((response) => {
            // this function will be called when the data is fetched from the server
            // and it will set the data to the state
            setEmployees(response.data)
        }).catch(error => {console.error(error)})
    }

    function addNewEmployee() {
        navigate('/add-employee')
    }

    function updateEmployee(id) {
        navigate(`/update-employee/${id}`)
    }

    function removeEmployee(id){

        deleteEmployee(id).then((response)=>{
            console.log(response.data)
            
            // getAllEmployees()
            setEmployees(employees.filter(employee => employee.id !== id))
            // navigate('/employees')

        }).catch(error => {
            console.error(error)
        }
        )
    }

    return (
    <div className='container'>
        <h2 className='text-center '>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Empoyee email Id</th>
                    <th>Employee gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.gender}</td>
                            <td>
                                <button className='btn btn-warning' onClick={() => navigate(`/update-employee/${employee.id}`)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent