<?php

use App\Models\PortfolioProject;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/blog', function () {
    if (config('app.enable_blog') === false) {
        abort(401);
    }
    return Inertia::render('Blog');
})->name('blog');

Route::get('/about', function () {
    $allProjects = PortfolioProject::where('is_active', true)->get();
    return Inertia::render('About', compact('allProjects'));
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
