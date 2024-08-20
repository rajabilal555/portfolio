<?php

namespace App\Filament\Resources\PortfolioExperienceResource\Pages;

use App\Filament\Resources\PortfolioExperienceResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPortfolioExperiences extends ListRecords
{
    protected static string $resource = PortfolioExperienceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
