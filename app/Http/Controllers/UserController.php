<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;


class UserController extends Controller
{
    public function store(Request $request){
        // Create new user
        $user = new User();
        $user->username = $request->input('username');
        $user->email = $request->input('email');

        // Hash password
        $hashedPassword = Hash::make($request->input('password'));
        $user->password = $hashedPassword;

        // Save user to database
        $user->save();

        return $user;
    }   
}
