import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'

function EmployeeComponent() {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [gender,setGender] = useState('')

    const {id} = useParams() 

    const [errors,setErrors] = useState({
        firstName: '',
        lastName: '',  
        email: '',
        gender: ''
    })

    const navigate = useNavigate()

    useEffect(() => {

        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setGender(response.data.gender)
            }).catch(error =>{
                console.error(error)
            })
        }

    },[id])

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        if(!validateForm()){
            return;
        }

        const employee = {firstName, lastName, email, gender}
        console.log(employee)

        if(id){
            updateEmployee(id, employee).then((response) => {
                console.log(response.data)
                navigate('/employees')
            }
            ).catch(error => {
                console.error(error)
            })
        }
        else{

            createEmployee(employee).then((response) => {
                console.log(response.data)
                navigate('/employees')
            }
            ).catch(error => {
                console.error(error)
            })
        }

        
    }

   
    function validateForm() {
        let valid = true;

        const errorsCopy = {...errors}   

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }
        else{
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }
        if(lastName.trim()){
            errorsCopy.lastName = '';
        }
        else{
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }
        if(email.trim()){
            errorsCopy.email = '';
        }
        else{
            errorsCopy.email = 'Email is required';
            valid = false;
        }
        if(gender.trim()){
            errorsCopy.gender = '';
        }
        else{
            errorsCopy.gender = 'Gender is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
         
    }

    function pageTitle() {

        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Gender</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Gender'
                                name='gender'
                                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
                        </div>
                        <div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default EmployeeComponent