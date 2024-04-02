<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Services\EmployeeService;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all();

        $jsonData = array(
            'status' => 200,
            'employees' => $employees
        );

        return response()->json($jsonData);
    }

    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $employeeService = new EmployeeService();
        $employee = $employeeService->find($email, $password);
        logger('employee', ['employee' => $employee]);

        if (!empty($employee)) {
            $jsonData = array(
                'status' => 200,
                'token' => $employee->pass
            );
        } else {
            $jsonData = array(
                'status' => 400,
                'token' => null
            );
        }
                

        return response()->json($jsonData);
    }

    public function loginToken(Request $request)
    {
        $token = $request->token;
        $employeeService = new EmployeeService();
        $employee = $employeeService->expireToken($token);
        logger('employee2', ['employee' => $employee]);

        if (!empty($employee)) {
            $jsonData = array(
                'status' => 200,
                'token' => $employee->pass,
                'isToken' => true
            );
        } else {
            $jsonData = array(
                'status' => 400,
                'token' => null,
                'isToken' => false
            );
        }
                

        return response()->json($jsonData);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
