<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/', [
    'uses'    => 'UserController@index',
    'as'      => 'contact'
]);

Route::post('/class/add', [
    'uses'    => 'UserController@addClassList',
    'as'      => 'contact'
]);

Route::get('/add_to_cookie', [
    'uses'    => 'UserController@add_to_cookie',
    'as'      => 'contact'
]);

Route::get('payment/callback', [
    'uses'    => 'UserController@paymentCallback',
    'as'      => 'contact'
]);

Route::get('send_email_for_payment', [
    'uses'    => 'UserController@send_email_for_payment',
    'as'      => 'contact'
]);
