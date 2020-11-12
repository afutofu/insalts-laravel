<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\User;

class AuthController extends Controller
{
    public function login (Request $request){

        $validator = Validator::make($request->all(), 
                    [ 
                    'email' => 'required|email|exists:users',
                    'password' => 'required', 
                    ]);  

         if ($validator->fails()) {  
            return response()->json(['error'=>$validator->errors()], 400); 
        }  

        // Retreive request data
        $email = $request->input('email');
        $password = $request->input('password');

    
        // Retreive user
        $foundUser = User::where('email', $email)->first();

        // Verify password
        $hashedPassword = $foundUser->password;
        if (Hash::check("$password", $hashedPassword)) {
            // Password matches
            return response()->json(["msg"=>"User exists. Logging in"], 200);
        }else{
            // Password doesnt match
            return response()->json(["msg"=>"Invalid credentials"]);
        }
    }
}
