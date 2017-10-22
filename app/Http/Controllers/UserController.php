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
				"name" => "Demo Course: Big Roses - My method",
				"class" => 1,
				"price" => "2500",
				"class_id" => 1,
				"end_time" => "11:00",
				"instructor" => "Tosan Jemide / Cakes by Tosan",
				"start_time" => "10:00",
				"description" => "You will see how African's cake maestro will infuse his creativity in making large roses your will never be the same",
				"instructor_image" => "tosan.jpeg",
			],
			[
				"day" => 1,
				"name" => "Demo Course: My Story – Get Inspired",
				"class" => 1,
				"price" => "2500",
				"class_id" => 2,
				"end_time" => "12:00",
				"instructor" => "Tosan Jemide / Cakes by Tosan",
				"start_time" => "11:15",
				"description" => "Get inspired from a small beginning to a large mindset",
				"instructor_image" => "tosan.jpeg",

			],
			[
				"day" => 1,
				"name" => "Demo Course: Swiss Meringue Buttercream and kisses",
				"class" => 1,
				"price" => "1500",
				"class_id" => 22,
				"end_time" => "1:00",
				"instructor" => "Abby Babalola – Honeyfrosting cakes",
				"start_time" => "12:15",
				"description" => "Learn how to make Swiss Meringue Buttercream icing that is rich and have creamy flavor",
				"instructor_image" => "abby.jpeg",
			],
			[
				"day" => 1,
				"name" => "Hands On Course: Real Life Facial Structure, Make Up And Gele of Omalicha!!! – Learn Sugar Anatomy",
				"class" => 1,
				"price" => "25000",
				"class_id" => 3,
				"end_time" => "16:15",
				"instructor" => "Tosan Jemide / Cakes by Tosan",
				"start_time" => "13:15",
				"description" => "Learn sugar anatomy model face eyes hear nose make up gele and time permiting accents all without mold",
				"instructor_image" => "tosan.jpeg",
			],





			[
				"day" => 1,
				"name" => "Elegant cake design",
				"class" => 2,
				"price" => "2000",
				"class_id" => 4,
				"end_time" => "9:45",
				"instructor" => "James Oluwabiyi James",
				"start_time" => "9:00",
				"description" => "Quick and easy technique",
				"instructor_image" => "james.jpeg",
			],
			[
				"day" => 1,
				"name" => "Demo Course: Outstanding Water Colour Cakes",
				"class" => 2,
				"price" => "2000",
				"class_id" => 4,
				"end_time" => "11:15",
				"instructor" => "Bidemi Bidokwu / Cake et all",
				"start_time" => "10:00",
				"description" => "You will learn how to select perfect colours on your cake, how to make rainbow cakes, how to colour your fondant and the secret of colourful cakes",
				"instructor_image" => "bidemi.jpeg",
			],
			[
				"day" => 1,
				"name" => "Demo Course: Elegant Party Cakes",
				"class" => 2,
				"price" => "2000",
				"class_id" => 5,
				"end_time" => "11:30",
				"instructor" => "Lolade Ogunjimi / Dainty Affair",
				"start_time" => "12:45",
				"description" => "NIGERIA- Education is the heart of Kogsy Cake Exhibition
Meet- Lolade Ogunjimi Talented n Techy Award winning cake designer of Dainty Affairs Bakery  at Kogsy Cake Exhibition Wednesday 26th October 10.00-11.15am - Elegant Party Cakes, 11.30-12.45 perfectly crafted cake borders, watch her transform cakes using her signature skills to elegant, neat work of art . Venue Classique Event Centre 7a Kudirat Abiola Road fee N2000 each. You don't want to miss her Classes!!!! tel 08160267738",
				"instructor_image" => "Lolade.jpeg",
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
				"description" => "Learn make your cake shimmer, how to create glamorous lustre finish and also the trending cake stencilling technique with rose gold. international gust instructor",
				"instructor_image" => "yetunde.jpeg",
			],
			[
				"day" => 1,
				"name" => "Demo Course: Mirror Glazing And Ganache",
				"class" => 2,
				"price" => "2500",
				"class_id" => 7,
				"end_time" => "15:15",
				"instructor" => "Yinka Oluwa /L & K Cake & Kenny Amakoh / Kaykes Kraft n Tools ",
				"start_time" => "14:15",
				"description" => "You will see how to make a shiny chocolate icing, how to make cake mirror glaze and ganache recipes",
				"instructor_image" => "Tosan Jemide / Cakes by Tosan",
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
				"description" => "Teaches on how to work with fondant in humid climate and through the season",
				"instructor_image" => "bolanle.jpeg",
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
				"description" => "Tarela Okene will demonstrate traditional wedding cakes; learn the step and the tips of making glamorous wedding cake. Take your traditional wedding cakes miles ahead",
				"instructor_image" => "tarela.jpeg",
			],
			[
				"day" => 2,
				"name" => "Demo Course: Tapestry Design",
				"class" => 1,
				"price" => "2500",
				"class_id" => 10,
				"end_time" => "12:15",
				"instructor" => "Tarela Okene / Dripples Cakes",
				"start_time" => "11:00",
				"description" => "learn cake decorating, art textile construction and design by tarela Okene",
				"instructor_image" => "tarela.jpeg",
			],
			[
				"day" => 2,
				"name" => "Hands On Course: Geode cakes and sugar Topper",
				"class" => 1,
				"price" => "25000",
				"class_id" => 210,
				"end_time" => "03:30",
				"instructor" => "Siku Adewuyi queen of cakes",
				"start_time" => "13:30",
				"description" => "learn how Geode cakes is made, how to make rock candy and its recipe",
				"instructor_image" => "siku.jpeg",
			],

			[
				"day" => 2,
				"name" => "Classic Cake Design",
				"class" => 2,
				"price" => "0",
				"class_id" => 12,
				"end_time" => "09:45",
				"instructor" => "Kemi Oluboro / El-royalitors",
				"start_time" => "09:00",
				"description" => "learn the tranding classis cake design",
				"instructor_image" => "kemi.jpeg",
			],
			[
				"day" => 2,
				"name" => "Demo Course: Gelatin Ball with Twist",
				"class" => 2,
				"price" => "2000",
				"class_id" => 10,
				"end_time" => "11:15",
				"instructor" => "Uwem Akpan – Barter Splash",
				"start_time" => "10:00",
				"description" => "Step by step instruction for making Gelatin Ball with twist, how to make a rope cake border and a twist on cake",
				"instructor_image" => "Uwem.jpeg",
			],
			[
				"day" => 2,
				"name" => "Demo Course: Jamaican Jerk Chicken and Fish in difference pepper",
				"class" => 2,
				"price" => "2000",
				"class_id" => 10,
				"end_time" => "12:45",
				"instructor" => "Chef lorna Opanubi – Lorna Goodies",
				"start_time" => "11:30",
				"description" => "Learn Jamaican way of making a jerk chicken and fishes in pepper",
				"instructor_image" => "lorna.jpeg",
			],
			[
				"day" => 2,
				"name" => "Catch Them Young Class -Cake decorating",
				"class" => 2,
				"price" => "0",
				"class_id" => 14,
				"end_time" => "14:00",
				"instructor" => "Yinka Oluwa Kenny Amakoh",
				"start_time" => "13:00",
				"description" => "",
				"instructor_image" => "Tosan Jemide / Cakes by Tosan",
			],
			[
				"day" => 2,
				"name" => "Demo Course: Gravity Defying Cake -illusion",
				"class" => 2,
				"price" => "2000",
				"class_id" => 15,
				"end_time" => "15:45",
				"instructor" => "Kema Abuede / Conspicuous Cakes",
				"start_time" => "14:30",
				"description" => "Explore cake structure and cake stand, how to orient the cake stand in a Topsy Turvy cake structure and cake framing learn the illusion",
				"instructor_image" => "kema.jpeg",
			],
			[
				"day" => 2,
				"name" => "Pricing and standing out competitive market",
				"class" => 2,
				"price" => "0",
				"class_id" => 15,
				"end_time" => "5:00",
				"instructor" => "",
				"start_time" => "4:00",
				"description" => "Featuring: Tosan Jemide, Siku Adewuyi, Yetunde Ogunbiyi, Anu Ajayi, Rollins Ogehenekaro",
				"instructor_image" => "tosan.jpeg",
			],
			[
				"day" => 3,
				"name" => "ALL 3 OF TOSAN’S CLASSES DISCOUNTED",
				"class" => 1,
				"price" => "17000",
				"class_id" => 16,
				"end_time" => "",
				"instructor" => "Tosan Jemide",
				"start_time" => "",
				"description" => "Attend all of Tosan's Classes at a 40% discount ",
				"instructor_image" => "tosan.jpeg",
			],
			[
				"day" => 3,
				"name" => "Siku and Tarella's classes discounted",
				"class" => 2,
				"price" => "15000",
				"class_id" => 17,
				"end_time" => "",
				"instructor" => "Siku Adewuyi",
				"start_time" => "",
				"description" => "Attend Siku and Tarela Classes at a 40% discount ",
				"instructor_image" => "Siku.jpeg",
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



		// return dd($carts->pluck('class_id')->contains(17));
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

    	$carts = collect(json_decode(isset($_COOKIE['class'])) ? json_decode($_COOKIE['class']) : []);

    	$carts_ids = $carts->pluck('class_id'); 

    	$carts->pluck('class_id');

    	if ($carts_ids->contains(16) == true) 
    	{
    		$carts_ids->push(1);
    		$carts_ids->push(2);
    		$carts_ids->push(3);
    	}

    	if ($carts_ids->contains(17) == true) 
    	{
    		$carts_ids->push(9);
    		$carts_ids->push(10);
    		$carts_ids->push(210);
    	}

    	if (($key = array_search(16, $carts_ids->toArray())) !== false) {
    	    unset($carts_ids[$key]);
    	}

    	if (($key = array_search(17, $carts_ids->toArray())) !== false) {
    	    unset($carts_ids[$key]);
    	}

    	$carts = $this->class_data()->whereIn('class_id', $carts_ids);

    	$data = [
	    	"name" => $request->name,
	    	"phone" => $request->phone,
	    	"email" => $request->email,
	    	"price" => $request->price,
	    	"reference" => $request->reference,
	    	"carts" => $carts
    	];

    	Mail::send('emails.price', ['data' => $data], function ($message) use ($data) {
    	    $message->from(env('MAIL_FROM_ADDRESS'), 'Welcome to Kogsysugarcraft');
    	    $message->to($data['email'])->subject('Payment Confirmation');
    	});

    	Mail::send('emails.admin_copy_price', ['data' => $data], function ($message) use ($data) {
    	    $message->from(env('MAIL_FROM_ADDRESS'), 'Email Notification');
    	    $message->to('hkgbelee@gmail.com')->subject('User Payment Receipt');
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