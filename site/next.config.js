/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Slchris Homelab Kasm Registry',
    description: 'The unofficial store for slchris's homelab kasm workspaces.',
    icon: 'https://slchris.github.io/homelab_kasm_registry/1.0/favicon.ico',
    listUrl: 'https://slchris.github.io/homelab_kasm_registry/',
    contactUrl: 'https://slchris.github.io/homelab_kasm_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
