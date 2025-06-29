#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read environment variables
const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN || '';
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!mapboxToken || !supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing required environment variables:');
  console.error('   MAPBOX_ACCESS_TOKEN:', mapboxToken ? '✓' : '❌');
  console.error('   SUPABASE_URL:', supabaseUrl ? '✓' : '❌');
  console.error('   SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓' : '❌');
  process.exit(1);
}

// Create production environment file with actual values
const prodEnvContent = `export const environment = {
  production: true,
  mapboxAccessToken: '${mapboxToken}',
  supabase: {
    url: '${supabaseUrl}',
    anonKey: '${supabaseAnonKey}'
  }
};
`;

// Write to environment.prod.ts
const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');
fs.writeFileSync(envProdPath, prodEnvContent);

console.log('✅ Production environment file updated with environment variables');
