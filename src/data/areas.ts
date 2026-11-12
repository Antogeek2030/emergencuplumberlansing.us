export interface Area {
  slug: string;
  name: string;
  description: string;
  neighborhoods?: string[];
}

export const areas: Area[] = [
  {
    slug: 'lansing',
    name: 'Lansing',
    description: 'We provide plumbing services throughout Lansing, including residential neighborhoods and local commercial properties. From downtown to the surrounding residential areas, we respond to emergency calls and scheduled work across the city.',
    neighborhoods: ['Old Town', 'REO Town', 'Eastside', 'Westside', 'South Lansing'],
  },
  {
    slug: 'grand-ledge',
    name: 'Grand Ledge',
    description: 'Based near Grand Ledge, we are a convenient choice for homeowners and businesses in the area. Whether you need drain cleaning, water heater help, or emergency leak response, we serve Grand Ledge and nearby streets.',
    neighborhoods: ['Downtown Grand Ledge', 'Oakwood', 'Riverfront area'],
  },
  {
    slug: 'east-lansing',
    name: 'East Lansing',
    description: 'East Lansing residents and property managers rely on responsive plumbing service for student housing, family homes, and local businesses. We handle everything from routine repairs to urgent backups.',
    neighborhoods: ['Campus area', 'Whitehills', 'Glencairn', 'Chandler Crossings'],
  },
  {
    slug: 'okemos',
    name: 'Okemos',
    description: 'Okemos homes and businesses are part of our regular service area. We offer the full range of plumbing services, from fixture installs to main line work, with clear communication every step of the way.',
    neighborhoods: ['Meridian Township area', 'Hamilton', 'Central Okemos'],
  },
  {
    slug: 'holt',
    name: 'Holt',
    description: 'Holt and the surrounding Delhi Township area are covered for residential and light commercial plumbing needs. Contact us for appointments or urgent service requests.',
    neighborhoods: ['Downtown Holt', 'North Holt', 'South Holt'],
  },
  {
    slug: 'mason',
    name: 'Mason',
    description: 'We serve Mason with the same focus on quality work and straightforward pricing. From water heater issues to drain problems, we are available for scheduled and emergency visits.',
    neighborhoods: ['Downtown Mason', 'Residential districts'],
  },
  {
    slug: 'deWitt',
    name: 'DeWitt',
    description: 'DeWitt homeowners can call on us for reliable plumbing service. We cover the city and nearby areas for repairs, installations, and emergency response.',
    neighborhoods: ['Downtown DeWitt', 'Surrounding residential'],
  },
  {
    slug: 'haslett',
    name: 'Haslett',
    description: 'Haslett is within our service area for drain cleaning, leak detection, fixture work, and more. We aim for prompt scheduling and clear explanations of any recommended repairs.',
    neighborhoods: ['Lake area', 'Central Haslett'],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
