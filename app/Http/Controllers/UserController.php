<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;


class UserController extends Controller
{
    public function store(Request $request){
        // Retreive request data
        $username = $request->input('username');
        $email = $request->input('email');
        $password = $request->input('password');

        // Server-Side Validation
        // Check if fields are empty
        if (!$username || !$email || !$password){
            return response()->json(["msg"=>"Please enter all fields"], 400);
        }

        // Check username length
        if (strlen($username) < 4){
            return response()->json(["msg"=>"Username must be at least 4 characters long"], 400);
        }

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return response()->json(["msg"=>"Invalid email format"], 400);
        }

        // Check password length
        if (strlen($username) < 8){
            return response()->json(["msg"=>"Password must be at least 8 characters long"], 400);
        }
    
        // Check if user exists
        $foundUser = User::where('email', $email)->first();
        if ($foundUser){
            return response()->json(["msg"=>"Email already taken"], 400);
        }

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
