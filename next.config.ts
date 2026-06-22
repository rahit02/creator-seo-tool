import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // বিল্ড করার সময় টাইপস্ক্রিপ্ট এরর থাকলেও জোরপূর্বক বিল্ড কমপ্লিট করবে
    ignoreBuildErrors: true,
  },
  eslint: {
    // বিল্ড করার সময় লিন্ট এরর ইগনোর করবে
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;