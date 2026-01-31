export default function manifest() {
  return {
    name: 'AVM Packaging and Crating LLC',
    short_name: 'AVM Packaging',
    description: 'Custom wooden crates and packaging services in Metro-Atlanta',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#92400e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
