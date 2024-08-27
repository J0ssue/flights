<?php

use App\Http\Controllers\FlightController;
use App\Http\Controllers\ProfileController;
use App\Models\Flight;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $flights = Flight::get();

    return Inertia::render('Welcome', [
        'flights' => $flights,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::post('/flights', [FlightController::class, 'store'])->name('flights.store');
Route::delete('/flights', [FlightController::class, 'destroy'])->name('flights.destroy');
Route::patch('/flights', [FlightController::class, 'update'])->name('flights.update');

require __DIR__ . '/auth.php';
