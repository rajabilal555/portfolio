<?php

namespace App\Filament\Pages;

use App\Models\User;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Exceptions\Halt;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class EditUserInfo extends Page implements Forms\Contracts\HasForms
{
    use Forms\Concerns\InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static string $view = 'filament.pages.edit-user-info';
    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill(User::getPortfolioUser()->attributesToArray());
    }

    protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label(__('filament-panels::resources/pages/edit-record.form.actions.save.label'))
                ->submit('save'),
        ];
    }

    public function form(Form $form): Form
    {
        return $form
            ->columns(12)
            ->schema([
                Forms\Components\Section::make('Portfolio')
                    ->columnSpan(8)
                    ->schema([
                        Forms\Components\TextInput::make('first_name')
                            ->required(),
                        Forms\Components\TextInput::make('last_name')
                            ->required(),
                        Forms\Components\TextInput::make('nick_name'),
                        Forms\Components\MarkdownEditor::make('short_about')
                            ->required()
                            ->columnSpanFull(),
                        Forms\Components\MarkdownEditor::make('about')
                            ->required()
                            ->columnSpanFull(),
                        Forms\Components\FileUpload::make('resume_url')
                            ->getUploadedFileNameForStorageUsing(
                                fn(TemporaryUploadedFile $file): string => (string)str('')->prepend(User::getPortfolioUser()->name)
                                    ->append('-resume-'.date('Ymds'))->append(".{$file->getClientOriginalExtension()}"),
                            )
                            ->label('Resume')
                            ->columnSpanFull(),
                        Forms\Components\Repeater::make('links')
                            ->schema([
                                Forms\Components\TextInput::make('icon')
                                    ->columnSpan(1)
                                    ->required(),
                                Forms\Components\TextInput::make('name')
                                    ->columnSpan(1)
                                    ->required(),
                                Forms\Components\TextInput::make('url')
                                    ->columnSpan(2)
                                    ->required(),
                            ])
                            ->columnSpanFull(),
                    ]),
                Forms\Components\Section::make('Details')
                    ->columnSpan(4)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required(),
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->required(),
                        Forms\Components\DateTimePicker::make('email_verified_at'),
                        Forms\Components\TextInput::make('password')
                            ->password()
                            ->placeholder(fn(?User $record) => $record?->exists ? 'Leave empty to keep the same' : null)
                            ->required(fn(string $operation): bool => $operation === 'create')
                            ->dehydrated(fn($state) => filled($state))
                            ->autocomplete('new-password')
                            ->maxLength(255),
                    ]),
            ])->statePath('data');
    }

    public function save(): void
    {
        try {
            $data = $this->form->getState();

            User::getPortfolioUser()->update($data);

            Notification::make()
                ->success()
                ->title(__('filament-panels::resources/pages/edit-record.notifications.saved.title'))
                ->send();
        } catch (Halt $exception) {
            $this->halt();
        }
    }
}
