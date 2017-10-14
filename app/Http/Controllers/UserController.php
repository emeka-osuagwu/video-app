<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Classes;
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
				"name" => "Big Roses - My method",
				"class" => 1,
				"price" => "2500",
				"class_id" => 1,
				"end_time" => "11:00",
				"instructor" => "Tosan Jemide / Cakes by Tosan",
				"start_time" => "10:00",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "My Story – Get Inspired",
				"class" => 1,
				"price" => "2500",
				"class_id" => 2,
				"end_time" => "12:00",
				"instructor" => "Tosan Jemide / Cakes by Tosan",
				"start_time" => "11:15",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "Hands On Course: Real Life Facial Structure, Make Up And Gele of Omalicha!!! – Learn Sugar Anatomy",
				"class" => 1,
				"price" => "25,000",
				"class_id" => 3,
				"end_time" => "16:15",
				"instructor" => "Tosan Jemide / Cakes by Tosan",
				"start_time" => "13:15",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "Outstanding Water Colour Cakes",
				"class" => 2,
				"price" => "2000",
				"class_id" => 4,
				"end_time" => "11:15",
				"instructor" => "Bidemi Bidokwu / Cake et all",
				"start_time" => "10:00",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "Elegant Party Cakes",
				"class" => 2,
				"price" => "2000",
				"class_id" => 5,
				"end_time" => "11:30",
				"instructor" => "Lolade Ogunjimi / Dainty Affair",
				"start_time" => "12:45",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "Demo Course: Lustre, Lace It Up With Stencling And A Rose Gold",
				"class" => 2,
				"price" => "2500",
				"class_id" => 6,
				"end_time" => "14:15",
				"instructor" => "Yetunde Ogunbiyi / Teal And Roses",
				"start_time" => "13:00",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "Course: Mirror Glazing And Ganache",
				"class" => 2,
				"price" => "2500",
				"class_id" => 7,
				"end_time" => "15:15",
				"instructor" => "Yinka Oluwa /L & K Cake & Kenny Amakoh / Kaykes Kraft n Tools ",
				"start_time" => "14:15",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 1,
				"name" => "Demo Course: Fondant 101 Basics – Fondant through the season tricks for sweaty fondant",
				"class" => 2,
				"price" => "1000",
				"class_id" => 8,
				"end_time" => "16:45",
				"instructor" => "Bolanle akinosun / T – Lash Cakes",
				"start_time" => "15:30",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "Demo Course: Luxurious Traditional Wedding Engagement Cake",
				"class" => 1,
				"price" => "2500",
				"class_id" => 9,
				"end_time" => "10:45",
				"instructor" => "Tarela Okene / Dripples Cakes",
				"start_time" => "09:30",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "Learn New Skills",
				"class" => 1,
				"price" => "0",
				"class_id" => 10,
				"end_time" => "12:15",
				"instructor" => "Tarela Okene / Dripples Cakes",
				"start_time" => "11:00",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "Geode Cake and Sugar Topper",
				"class" => 1,
				"price" => "25,000",
				"class_id" => 11,
				"end_time" => "15:30",
				"instructor" => "Siku Adewuyi / Cake And Candy Confectionaries",
				"start_time" => "12:30",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "Demo Free Class Course: Classic Cake Design",
				"class" => 2,
				"price" => "0",
				"class_id" => 12,
				"end_time" => "09:45",
				"instructor" => "Kemi Oluboro / CEO at Crown.io & Patricia Atake / CEO at Crown.io",
				"start_time" => "09:00",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "Demo Course: Jamaican Jerk Chicken And Fish In different Peppers",
				"class" => 2,
				"price" => "2000",
				"class_id" => 13,
				"end_time" => "12:45",
				"instructor" => "Chef Lorna Opanubi / Lornar Goodies",
				"start_time" => "11:30",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "Demo Catch Them Young Class -Cake decorating",
				"class" => 2,
				"price" => "0",
				"class_id" => 14,
				"end_time" => "14:00",
				"instructor" => "Yinka Oluwa Kenny Amakoh",
				"start_time" => "13:00",
				"description" => "fjdfjdhfjdfhvdjfhdjfhdjfhjhfjdhfjdfhjdfhjdfhdjh"
			],
			[
				"day" => 2,
				"name" => "Demo Gravity Defying Cake -illusion",
				"class" => 2,
				"price" => "2000",
				"class_id" => 15,
				"end_time" => "15:45",
				"instructor" => "Kema Abuede / Conspicuous Cakes",
				"start_time" => "14:30",
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

        return Paystack::getAuthorizationUrl()->redirectNow();    	
    }

    public function add_to_cookie(Request $request)
    {
   
  		$class = collect(json_decode($_COOKIE['class']));
    	// return $class->where('class_id', $request->class_id)->count() ;
    	if ($class->where('class_id', $request->class_id)->count() < 1)
    	{
    		$class = json_decode($_COOKIE['class']);
	    	$new_data = $this->class_data()->where('class_id', $request->class_id)->first();

	    	$class[] = $new_data;

	    	$time   =  time() + 360000;
	    	$path   = '/';
	    	$data   = json_encode($class);
	    	$domain = env('host'); 
	    	setcookie("class", $data, $time, $path, $domain);
    		
    		return redirect('/#tabs-lv1');
    	}
    	else 
    	{	
    		return redirect('/#tabs-lv1');
    	}
    	



    }


    public function send_email_for_payment(Request $request)
    {
    	$data = [
	    	"name" => $request->name,
	    	"phone" => $request->phone,
	    	"email" => $request->email,
	    	"price" => $request->price,
	    	"reference" => $request->reference,
	    	"carts" => collect(json_decode(isset($_COOKIE['class'])) ? json_decode($_COOKIE['class']) : [])
    	];

    	Mail::send('emails.price', ['data' => $data], function ($message) use ($data) {
    	    $message->from(env('MAIL_FROM_ADDRESS'), 'Welcome to Kogsysugarcraft');
    	    $message->to($data['email'])->subject('Payment Confirmation');
    	});

    	$data['created_at'] = Carbon::now();
    	$data['updated_at'] = Carbon::now();

    	Classes::create($data);

    	unset($_COOKIE['class']);

    }


    public function remove_class($id)
    {
    	$class = collect(json_decode($_COOKIE['class']));
    	$ids =  $class->pluck('class_id')->toArray();
    	collect($ids)->forget(1);

    	if (($key = array_search($id, $ids)) !== false) {
    	    unset($ids[$key]);
    	}

    	$new_class_data = $this->class_data()->whereIn('class_id', $ids);

		$time   =  time() + 360000;
    	$path   = '/';
    	$data   = json_encode($new_class_data);
    	$domain = env('host'); 
    	setcookie("class", $data, $time, $path, $domain);
		
		return redirect('/#tabs-lv1');
    }
}