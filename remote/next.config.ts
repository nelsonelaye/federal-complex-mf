import type { NextConfig } from "next";
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

// build the project first before
// execute start script

const nextConfig: NextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          host: `host@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./ComponentA": "./components/ComponentA.tsx",
          "./ComponentB": "./components/ComponentB.tsx",
          "./ProductsPage": "./pages/products.tsx",
          "./ProductCard": "./components/ProductCard.tsx",
          "./products": "./data/products.ts",
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
