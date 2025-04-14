import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

// build the project first before
// execute start script

// nextjs-mf only supports 'pages' directory
const URL = process.env.REMOTE_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          remote: `remote@${URL}/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          // Expose modules from the Host application
          "./Header": "./components/Header",
          "./Footer": "./components/Footer",
        },
        shared: {
          // Shared dependencies between the Host and Remote applications
          // '@chakra-ui/': { eager: true, requiredVersion: false, singleton: true },
          // './utils': { eager: true, requiredVersion: false, singleton: true }, //singleton value ensures that only a single instance of each module is loaded.
        },
        extraOptions: {},
      })
    );
    return config;
  },
};

export default nextConfig;
