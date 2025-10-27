<?php

use App\Http\Controllers\CampaignsController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});//->middleware('auth');

// Route::get('/')

require __DIR__.'/auth.php';
