<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("auth", function(Request $request){
    $email = $request->input('email');
    $password = $request->input('password');

    // Validation
    // Check if fields are empty
    if (!$email && !$password){
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
});

Route::post("users", function(Request $request){
    $user = new User();
    $user->username = $request->input('username');
    $user->email = $request->input('email');

    $hashedPassword = Hash::make($request->input('password'));
    $user->password = $hashedPassword;

    $user->save();

    return $user;
});