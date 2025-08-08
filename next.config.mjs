import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image domain
    formats: ['image/avif', 'image/webp']
},
  experimental: {
    optimizeCss: true,
    images: {
      layoutRaw: true
}
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|fbx|obj|mtl)$/,
      use: 'file-loader'
});
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
        ]
},
    ];
  }
};

export default nextConfig;