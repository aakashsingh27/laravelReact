<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactControlle;
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
Route::get('{any}', function () {
    return view('welcome'); // Blade template where React is loaded
})->where('any', '.*');

Route::post('/submit-form',[ContactControlle::class,'contact_submit'])->name('submit_form');