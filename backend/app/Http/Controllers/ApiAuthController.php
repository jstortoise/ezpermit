<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

class ApiAuthController extends Controller
{
    public function authenticate()
    {
      $credentials = request()->only('email', 'password');

      try {
        $token = JWTAuth::attempt($credentials);

        if (!$token) {
          return response()->json(['error' => 'invalid_credentials'], 401);
        }
      } catch (JWTException $e) {
        return response()->json(['error' => 'something_went_wrong'], 500);
      }

      return response()->json(['token' => $token], 200);
    }

    public function register()
    {
      $firstname = request()->firstname;
      $lastname = request()->lastname;
      $nationality = request()->nationality;
      $city = request()->city;
      $email = request()->email;
      $password = request()->password;
      $tob = request()->tob;
      $category1 = request()->category1;
      $category2 = request()->category2;
      $category3 = request()->category3;
      $category4 = request()->category4;
      $etc = request()->etc;
      $career = request()->career;
      $job = request()->job;
      $sdate = request()->sdate;
      $edate = request()->edate;
      $purpose = request()->purpose;

      $user = User::create([
        'firstname' => $firstname,
        'lastname' => $lastname,
        'nationality' => $nationality,
        'city' => $city,
        'email' => $email,
        'password' => bcrypt($password),
        'tob' => $tob,
        'category1' => $category1,
        'category2' => $category2,
        'category3' => $category3,
        'category4' => $category4,
        'etc' => $etc,
        'career' => $career,
        'job' => $job,
        'sdate' => $sdate,
        'edate' => $edate,
        'purpose' => $purpose,
        'status' => 1
      ]);

      $token = JWTAuth::fromUser($user);

      return response()->json(['token' => $token], 200);
    }
}
