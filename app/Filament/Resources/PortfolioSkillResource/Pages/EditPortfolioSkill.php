<?php

namespace App\Filament\Resources\PortfolioSkillResource\Pages;

use App\Filament\Resources\PortfolioSkillResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPortfolioSkill extends EditRecord
{
    protected static string $resource = PortfolioSkillResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
