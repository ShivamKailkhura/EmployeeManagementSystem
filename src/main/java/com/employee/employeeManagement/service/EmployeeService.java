package com.employee.employeeManagement.service;

import java.util.List;

import com.employee.employeeManagement.dto.EmployeeDto;

public interface EmployeeService {
    
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto);

    void deleteEmployee(Long employeeId);
}
