export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuTab {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface ReservationFormValues {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  experience?: string;
  notes?: string;
}
