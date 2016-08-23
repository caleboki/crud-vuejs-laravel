<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Request;

use App\User;

use App\Http\Requests;

class UserController extends Controller
{
    public function index()
    {
    	return view('users.fetchUser');
    }

    public function create(Request $request)
    {

    	
    	$this->validate($request, [
            'email'=>'required|email|unique:users,email,'
        ]);
    	return User::create($request->all());
    }
}
