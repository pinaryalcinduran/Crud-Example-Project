package com.crudexampleproject.Crud.Example.Project.repository;

import com.crudexampleproject.Crud.Example.Project.entity.*;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}