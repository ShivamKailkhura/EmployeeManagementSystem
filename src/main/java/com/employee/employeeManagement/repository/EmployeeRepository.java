package com.employee.employeeManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.employeeManagement.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Custom query methods can be defined here if needed
    // For example, findByLastName(String lastName);
    
}
