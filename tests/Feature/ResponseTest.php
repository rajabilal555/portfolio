<?php

use function Pest\Laravel\get;

it('can load the home page', function () {
    $response = get('/');
    $response->assertStatus(200);
});


it('can load the about page', function () {
    $response = get('/about');
    $response->assertStatus(200);
});


it('can load the contact page', function () {
    $response = get('/contact');
    $response->assertStatus(200);
});


it('can load the blog', function () {
    $response = get('/blog');
    $response->assertStatus(200);
})->todo();
