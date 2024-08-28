import {Config} from 'ziggy-js';

// export interface User {
//     id: number;
//     name: string;
//     email: string;
//     email_verified_at: string;
// }
//
export interface PortfolioSkills {
    id: number;
    name: string;
    icon_url: string;
    is_active: boolean;
    order: number;
}

export interface PortfolioExperience {
    id: number;
    title: string;
    company: string;
    description: string;
    period_start_at: Date;
    period_end_at?: Date;
    is_active: boolean;
}

export interface PortfolioProject {
    id: number;
    title: string;
    short_description: string;
    description: string;
    image_url: string;
    actions:  Array<{
        icon: string,
        name: string,
        url: string,
    }>;
    tags: Array<string>;
    is_featured: boolean;
    is_active: boolean;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    portfolio: {
        name: string,
        first_name: string,
        last_name: string,
        nick_name: string,
        short_about: string,
        about: string,
        links: Array<{
            icon: string,
            name: string,
            url: string,
        }>,
        //

        skills: PortfolioSkills[],
        experiences: PortfolioExperience[],
        projects: PortfolioProject[],
    };
    config: {
        enable_blog: boolean;

        app_name: string;
        locale: string;
        timezone: string;
        url: string;
    };
    ziggy: Config & { location: string };
};
