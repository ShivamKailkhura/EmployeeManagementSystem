package com.employee.employeeManagement.mapper;

import com.employee.employeeManagement.dto.EmployeeDto;
import com.employee.employeeManagement.entity.Employee;

public class EmployeeMapper {
    
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
            employee.getId(),
            employee.getFirstName(),
            employee.getLastName(),
            employee.getEmail(),
            employee.getGender()
        );
    }


    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
            employeeDto.getId(),
            employeeDto.getFirstName(),
            employeeDto.getLastName(),
            employeeDto.getEmail(),
            employeeDto.getGender()
        );
    }
}