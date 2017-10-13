<?php

namespace App\Http\Controllers;

use Paystack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{

	public function class_data()
	{
		$data = [
			[
				"day" => 1,
				"name" => "fnbvdfjvdfvdfvhdfvdfdfdf",
				"class" => 1,
				"price" => "2000",
				"class_id" => 1,
				"end_time" => "2pm",
				"instructor" => "emeka",
				"start_time" => "1pm",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "fnbvdfjvdfvdfvhdfvdfdfdf",
				"class" => 2,
				"price" => "2000",
				"class_id" => 2,
				"end_time" => "2pm",
				"instructor" => "emeka",
				"start_time" => "1pm",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "fnbvdfjvdfvdfvhdfvdfdfdf",
				"class" => 1,
				"price" => "2000",
				"class_id" => 3,
				"end_time" => "2pm",
				"instructor" => "emeka",
				"start_time" => "1pm",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],			
			[
				"day" => 2,
				"name" => "fnbvdfjvdfvdfvhdfvdfdfdf",
				"class" => 2,
				"price" => "2000",
				"class_id" => 4,
				"end_time" => "2pm",
				"instructor" => "emeka",
				"start_time" => "1pm",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
		];

		return collect($data);
	}

	public function index()
	{
    	if (!isset($_COOKIE['class'])) 
    	{
			$time   =  time() + 360000;
			$path   = '/';
			$data   = json_encode([]);
			$domain = env('host'); 
			setcookie("class", $data, $time, $path, $domain);  		
    	}

    	$data = $this->class_data();
		$carts = collect(json_decode(isset($_COOKIE['class'])) ? json_decode($_COOKIE['class']) : []);

		return view('welcome', compact('data', 'carts'));
	}

    public function addClassList(Request $request)
    {
    	$data = [
    		"time" => "1pm",
    		"title" => "this is the title",
    		"price" => "2500"
    	];

    	// return $data;

        return Paystack::getAuthorizationUrl()->redirectNow();    	
    }

    public function add_to_cookie(Request $request)
    {
   
    	$class = json_decode($_COOKIE['class']);

    	$new_data = $this->class_data()->where('class_id', $request->class_id)[0];

    	$class[] = $new_data;

    	$time   =  time() + 360000;
    	$path   = '/';
    	$data   = json_encode($class);
    	$domain = env('host'); 
    	setcookie("class", $data, $time, $path, $domain);
    }


    public function send_email_for_payment(Request $request)
    {
    	$data = [
	    	// "email" => $request->email,
	    	"email" => "emailosuagwuandela@hotmail.com",
	    	"price" => $request->price,
	    	"reference" => $request->reference,
	    	"carts" => collect(json_decode(isset($_COOKIE['class'])) ? json_decode($_COOKIE['class']) : [])
    	];

    	Mail::send('emails.price', ['data' => $data], function ($message) use ($data) {
    	    $message->from(env('MAIL_FROM_ADDRESS'), 'Welcome to Pay day investment');
    	    $message->to($data['email'])->subject('Contact Form');
    	});

    	unset($_COOKIE['class']);

    }
}