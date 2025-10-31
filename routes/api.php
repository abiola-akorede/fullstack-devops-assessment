<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('/forms', [\App\Http\Controllers\FormController::class, 'allForms']);        // get all forms
    Route::post('/createforms', [\App\Http\Controllers\FormController::class, 'storeForm']);        // create a new form
    Route::get('/forms/{id}', [\App\Http\Controllers\FormController::class, 'getForm']);          // get a specific form
    Route::put('/forms/{id}', [\App\Http\Controllers\FormController::class, 'updateForm']);       // update a specific form
    Route::delete('/forms/{id}', [\App\Http\Controllers\FormController::class, 'deleteForm']);     // delete a specific form 
});
