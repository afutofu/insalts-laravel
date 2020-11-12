<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class AuthController extends Controller
{
    public function login (Request $request){
        // Retreive request data
        $email = $request->input('email');
        $password = $request->input('password');
    
        // Validation
        // Check if fields are empty
        if (!$email || !$password){
            return response()->json(["msg"=>"Please enter all fields"], 400);
        }
    
        // Check if user exists
        $foundUser = User::where('email', $email)->first();
        if (!$foundUser){
            return response()->json(["msg"=>"User does not exist"], 400);
        }
    
        // If user exists
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
