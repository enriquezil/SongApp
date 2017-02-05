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

//Route::get('/', function () {
//    return view('welcome');
//});


//Route::get('/prueba', 'SongController@index');
Auth::routes();


Route::get('/', 'HomeController@index');

Route::post('/search', 'SongController@search');

Route::post('/song', 'SongController@song');

Route::get('/loginFacebook', 'Auth\LoginController@redirectToProvider')->name('loginFacebook');
Route::get('/handleProviderCallback', 'Auth\LoginController@handleProviderCallback')->name('redirectHome');
