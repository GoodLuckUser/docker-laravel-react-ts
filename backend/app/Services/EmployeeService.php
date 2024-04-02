<?php 
namespace App\Services;

use App\Models\Employee;

class EmployeeService 
{
  public function find($mail_address, $password)
  {
    $employeeModel = new Employee();

    $employee = $employeeModel
                  ->select('*')
                  ->where('mail_address', $mail_address)
                  ->where('pass', $password)
                  ->first();

    return $employee;
  }

  public function expireToken($token)
  {
    $employeeModel = new Employee();

    $employee = $employeeModel
                  ->select('*')
                  ->where('pass', $token)
                  ->first();

    return $employee;
  }
}