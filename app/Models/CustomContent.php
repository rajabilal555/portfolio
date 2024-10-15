<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomContent extends Model
{
    use HasFactory;

    protected $fillable = ['route', 'title', 'content'];
}
