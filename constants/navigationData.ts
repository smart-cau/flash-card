export const HOME = 'Home';
export const SETS = 'Sets';
export const CREATE = 'Create';
export const PROFILE = 'Profile';

export const navigations = [
  { name: HOME, link: '/' },
  { name: SETS, link: '/sets' },
  { name: CREATE, link: '/create' },
  { name: PROFILE, link: '/profile' },
];

export type Navigations = typeof navigations;
