<?php

namespace App\Http\Middleware;

use App\Models\PortfolioExperience;
use App\Models\PortfolioProject;
use App\Models\PortfolioSkill;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $portfolioUser = User::getPortfolioUser();

        return [
            ...parent::share($request),
            'config' => [
                'enable_blog' => config('app.enable_blog'),
                //
                'app_name' => config('app.name'),
                'locale' => config('app.locale'),
                'timezone' => config('app.timezone'),
                'url' => config('app.url'),
            ],
            'portfolio' => [
                'name' => $portfolioUser->name,
                'first_name' => $portfolioUser->first_name,
                'last_name' => $portfolioUser->last_name,
                'nick_name' => $portfolioUser->nick_name,
                'short_about' => $portfolioUser->short_about,
                'about' => $portfolioUser->about,
                'links' => $portfolioUser->links,

                'skills' => PortfolioSkill::where('is_active', true)->orderBy('order')->get(),
                'projects' => PortfolioProject::where('is_active', true)->where('is_featured', true)->get(),
                'experiences' => PortfolioExperience::where('is_active', true)->orderBy('order')->get(),
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
