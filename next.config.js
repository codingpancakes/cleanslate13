/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com"],
	},
	experimental: {
		serverActions: true,
	},
	publicRuntimeConfig: {
		staticFolder: "/static",
	},
};

module.exports = nextConfig;
