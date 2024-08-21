<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortfolioExperienceResource\Pages;
use App\Filament\Resources\PortfolioExperienceResource\RelationManagers;
use App\Models\PortfolioExperience;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PortfolioExperienceResource extends Resource
{
    protected static ?string $model = PortfolioExperience::class;

    protected static ?string $label = 'Experience';
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Portfolio';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required(),
                Forms\Components\TextInput::make('company')
                    ->required(),

                Forms\Components\DatePicker::make('period_start_at')
//                    ->native(false)
                    ->maxDate(now())
                    ->required(),
                Forms\Components\DatePicker::make('period_end_at')
//                    ->native(false)
                    ->maxDate(now()),

                Forms\Components\MarkdownEditor::make('description')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->reorderable('order')
            ->defaultSort('order')
            ->columns([
                Tables\Columns\TextColumn::make('company')
                    ->searchable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('period_start_at')
                    ->date()
                    ->searchable(),
                Tables\Columns\TextColumn::make('period_end_at')
                    ->date()
                    ->placeholder("PRESENT")
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPortfolioExperiences::route('/'),
            'create' => Pages\CreatePortfolioExperience::route('/create'),
            'edit' => Pages\EditPortfolioExperience::route('/{record}/edit'),
        ];
    }
}
