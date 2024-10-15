<?php

namespace App\Filament\Resources\CustomContentResource\Pages;

use App\Filament\Resources\CustomContentResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCustomContent extends EditRecord
{
    protected static string $resource = CustomContentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
