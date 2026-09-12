// Single source of truth for business details. Edit here, never in pages.

export const SITE_URL = 'https://www.gulfcoastsilentdisco.com';

export const site = {
  name: 'Gulf Coast Silent Disco',
  tagline: 'Silent disco headphone rentals and DJs for the Mobile Bay area',
  description:
    'Silent disco headphone rentals and DJ packages for weddings, corporate events, and parties across Mobile, Baldwin County, and the Alabama Gulf Coast.',
  // No public phone or email yet. Leave empty to hide; fill in to show.
  phone: '',
  phoneHref: '',
  email: '',
  areaShort: 'Mobile Bay area',
  areaLong: 'Mobile, Saraland, Theodore, Daphne, Spanish Fort, Fairhope, Foley, Gulf Shores, and Orange Beach',
  cities: ['Mobile', 'Saraland', 'Theodore', 'Daphne', 'Spanish Fort', 'Fairhope', 'Foley', 'Gulf Shores', 'Orange Beach'],
  // Social profiles. Leave empty to hide.
  social: {
    instagram: '',
    facebook: '',
  },
  // Web3Forms. Public access key from https://web3forms.com (safe to expose).
  formEndpoint: 'https://api.web3forms.com/submit',
  web3formsKey: 'a91d2a89-ab01-4120-bd53-e31ed849387d',
  // Existing Google Form, kept as a fallback link.
  googleForm: 'https://docs.google.com/forms/d/e/1FAIpQLScgSyofi6fPG9TmCLxQfLWQ0RA9MRMKfTSjVhVgAePSwTzaLA/viewform?usp=header',
  founded: 2023,
  ownerName: 'Brooks Conkle',
};

export const equipment = {
  headphoneCount: 75,
  channels: 3,
  batteryLife: 'all night',
};

// "Starting at" pricing only. Details on request.
export const pricing = {
  rentalOnly: { label: 'Rental only', startingAt: 500, unit: 'per event' },
  djPackage: { label: 'Rental + DJ', startingAt: 1300, unit: 'per event' },
  partyFavors: { label: 'Party favor upgrade', blurb: 'Glow sticks, LED glasses, and light-up extras for every guest.' },
};

export const usd = (n: number) => '$' + n.toLocaleString('en-US');

export const nav = [
  { href: '/rentals/', label: 'Rentals' },
  { href: '/events/', label: 'Events' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/guides/', label: 'Guides' },
  { href: '/about/', label: 'About' },
];
