package com.employee.employeeManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class EmployeeDto {
    
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private char gender;
}
