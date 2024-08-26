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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
