export const environment = {
  production: true,
  mapboxAccessToken: process.env['MAPBOX_ACCESS_TOKEN'] || '',
  supabase: {
    url: process.env['SUPABASE_URL'] || '',
    anonKey: process.env['SUPABASE_ANON_KEY'] || ''
  }
};
