<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class PortfolioProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'short_description',
        'description',
        'image_url',
        'actions',
        'tags',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'actions' => 'array',
        'tags' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('order', fn(Builder $builder) => $builder->orderBy('order'));
    }
}
