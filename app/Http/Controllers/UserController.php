<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\User;


class UserController extends Controller
{
    public function store(Request $request){

        $validator = Validator::make($request->all(), 
                    [ 
                    'username'=> 'required|min:4|alpha_num',
                    'email' => 'required|email|unique:users',
                    'password' => 'required|min:8',
                    'retyped_password' => 'required|same:password'
                    ]);  

         if ($validator->fails()) {  
            return response()->json(['error'=>$validator->errors()], 400); 
        }  

        // Retreive request data
        $username = $request->input('username');
        $email = $request->input('email');
        $password = $request->input('password');

        // Create new user
        $user = new User();
        $user->username = $username;
        $user->email = $email;

        // Hash password
        $hashedPassword = Hash::make($password);
        $user->password = $hashedPassword;

        // Save user to database
        $user->save();

        return $user;
    }   
}
