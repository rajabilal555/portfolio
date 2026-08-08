import { getCollection, getEntry, render } from 'astro:content';

export async function getSite() {
  const entry = await getEntry('site', 'profile');
  if (!entry) {
    throw new Error('Missing src/content/site/profile.md');
  }
  const { Content } = await render(entry);
  return { ...entry.data, Content };
}

export async function getExperience() {
  const entries = await getCollection('experience');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjects(featuredOnly = false) {
  const entries = await getCollection('projects');
  return entries
    .filter((entry) => (featuredOnly ? entry.data.featured : true))
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getSkills() {
  const entries = await getCollection('skills');
  return entries.sort((a, b) => a.id.localeCompare(b.id));
}

export async function getPosts() {
  const posts = await getCollection('blog');
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatRange(start?: string, end?: string, current?: boolean) {
  const format = (value?: string) => {
    if (!value) return '';
    const monthMatch = /^(\d{4})-(\d{2})$/.exec(value);
    if (monthMatch) {
      const monthIndex = Number(monthMatch[2]) - 1;
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return `${months[monthIndex]} ${monthMatch[1]}`;
    }
    return value;
  };

  const startLabel = format(start);
  const endLabel = format(end);

  if (current) {
    return startLabel ? `${startLabel} – now` : 'Now';
  }
  if (startLabel && endLabel) {
    return `${startLabel} – ${endLabel}`;
  }
  return endLabel || startLabel;
}
