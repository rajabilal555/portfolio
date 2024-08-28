<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortfolioProjectResource\Pages;
use App\Filament\Resources\PortfolioProjectResource\RelationManagers;
use App\Models\PortfolioProject;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PortfolioProjectResource extends Resource
{
    protected static ?string $model = PortfolioProject::class;

    protected static ?string $label = 'Projects';
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Portfolio';

    public static function form(Form $form): Form
    {
        return $form
            ->columns(6)
            ->schema([
                Forms\Components\Section::make()
                    ->columnSpan(4)
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required(),
                        Forms\Components\MarkdownEditor::make('short_description')
                            ->required(),
                        Forms\Components\MarkdownEditor::make('description')
                            ->required()
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Grid::make()
                    ->columnSpan(2)
                    ->columns(1)
                    ->schema([
                        Forms\Components\Section::make()
                            ->columnSpan(1)
                            ->columns(2)
                            ->schema([
                                Forms\Components\Toggle::make('is_featured'),
                                Forms\Components\Toggle::make('is_active')
                                    ->default(true),
                            ]),
                        Forms\Components\Section::make()
                            ->columnSpan(1)
                            ->schema([
                                Forms\Components\FileUpload::make('image_url')
                                    ->label('Image')
                                    ->image(),
                                Forms\Components\TagsInput::make('tags')
                                    ->default([])
                                    ->columnSpanFull(),
                                Forms\Components\Repeater::make('actions')
                                    ->columns(2)
                                    ->default([])
                                    ->schema([
                                        Forms\Components\TextInput::make('icon')
                                            ->columnSpan(1),
                                        Forms\Components\TextInput::make('name')
                                            ->columnSpan(1)
                                            ->required(),
                                        Forms\Components\TextInput::make('url')
                                            ->columnSpan(2)
                                            ->required(),
                                    ])
                                    ->columnSpanFull(),
                            ]),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->reorderable('order')
            ->defaultSort('order')
            ->columns([
                Tables\Columns\ImageColumn::make('image_url')
                    ->placeholder('None')
                    ->label('Image'),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('short_description')
                    ->limit(50)
                    ->markdown()
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_featured')
                    ->label('Featured')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),

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
            'index' => Pages\ListPortfolioProjects::route('/'),
            'create' => Pages\CreatePortfolioProject::route('/create'),
            'edit' => Pages\EditPortfolioProject::route('/{record}/edit'),
        ];
    }
}
