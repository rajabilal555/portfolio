<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioExperience extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'company',
        'description',
        'period_start_at',
        'period_end_at',
        'is_active',
    ];

    protected $casts = [
        'period_start_at' => 'datetime',
        'period_end_at' => 'datetime',
        'is_active' => 'boolean',
    ];
}
