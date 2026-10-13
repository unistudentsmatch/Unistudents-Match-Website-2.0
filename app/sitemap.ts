import type { MetadataRoute } from "next";

const SITE = "https://unistudentsmatch.com";

export default function sitemap(): MetadataRoute.Sitemap {
	return ["", "/about", "/privacy", "/terms-and-condition"].map((path) => ({
		url: `${SITE}${path}`,
		changeFrequency: "monthly",
		priority: path === "" ? 1 : 0.5,
	}));
}
