<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => env('APP_PORTFOLIO_NAME', 'Bilal Pervez'),
            'email' => env('APP_PORTFOLIO_EMAIL', 'rajabilal555@gmail.com'),
        ]);
    }
}
