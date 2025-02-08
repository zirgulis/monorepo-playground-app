/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@monorepo/components', 'react-native'],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
};

export default nextConfig; 