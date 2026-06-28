import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sourav - Backend Software Engineer Portfolio',
    short_name: 'Sourav Portfolio',
    description: 'Portfolio of Sourav, a Backend/Full Stack Engineer specializing in Python, C++, and scalable systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#0d1117',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
