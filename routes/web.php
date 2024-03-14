<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => \PHP_VERSION,
    ]);
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');
