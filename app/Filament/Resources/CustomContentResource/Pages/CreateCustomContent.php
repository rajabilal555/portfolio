<?php

namespace App\Filament\Resources\CustomContentResource\Pages;

use App\Filament\Resources\CustomContentResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateCustomContent extends CreateRecord
{
    protected static string $resource = CustomContentResource::class;
}
