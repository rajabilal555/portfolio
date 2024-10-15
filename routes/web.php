<?php

use App\Models\CustomContent;
use App\Models\PortfolioProject;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
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

// check if table exists, otherwise migrations will fail
if (Schema::hasTable(with(new CustomContent())->getTable())) {
    Route::group(['prefix' => 'content'], function () {
        CustomContent::get()->each(function ($content) {
            Route::get($content->route, function () use ($content) {
                return view('custom-content', [
                    'title' => $content->title,
                    'content' => $content,
                ]);
            })->name('custom_content_'.$content->route);
        });
    });
}
