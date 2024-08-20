<?php

namespace App\Filament\Resources\PortfolioSkillResource\Pages;

use App\Filament\Resources\PortfolioSkillResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPortfolioSkills extends ListRecords
{
    protected static string $resource = PortfolioSkillResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
