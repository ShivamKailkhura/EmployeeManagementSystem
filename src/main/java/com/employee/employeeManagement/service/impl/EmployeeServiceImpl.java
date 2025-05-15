package com.employee.employeeManagement.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.employeeManagement.dto.EmployeeDto;
import com.employee.employeeManagement.entity.Employee;
import com.employee.employeeManagement.mapper.EmployeeMapper;
import com.employee.employeeManagement.repository.EmployeeRepository;
import com.employee.employeeManagement.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
//creates springbean for the class
@AllArgsConstructor
//creates constructor for the class
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

         Employee employee = EmployeeMapper.mapToEmployee(employeeDto); 
         Employee savedEmployee = employeeRepository.save(employee);      
        
         return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        return employeeRepository.findById(employeeId)
            .map(EmployeeMapper::mapToEmployeeDto)
            .orElseThrow(() -> new RuntimeException("Employee not found with id: " + employeeId));
  }
    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
            .map(EmployeeMapper::mapToEmployeeDto)
            .toList();
    }
    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto) {

            
        EmployeeDto existingEmployee = getEmployeeById(employeeId);

        existingEmployee.setFirstName(employeeDto.getFirstName());
        existingEmployee.setLastName(employeeDto.getLastName());
        existingEmployee.setEmail(employeeDto.getEmail());
        existingEmployee.setGender(employeeDto.getGender());
        Employee employee = EmployeeMapper.mapToEmployee(existingEmployee);
        Employee updatedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);      

    }
    @Override
    public void deleteEmployee(Long employeeId) {
        EmployeeDto existingEmployee = getEmployeeById(employeeId);
        employeeRepository.deleteById(existingEmployee.getId());
    }
}
