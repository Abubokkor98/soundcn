export interface Sponsor {
	name: string;
	url: string;
	/** URL to a square logo/avatar (recommended 200×200px) */
	logo?: string;
	/** Short tagline shown on the card */
	tagline?: string;
}

// Add sponsors here as they come in
export const SPONSORS: Sponsor[] = [
	{
		name: "Ali Bey",
		url: "https://x.com/AliBey_10",
		logo: "https://avatars.githubusercontent.com/u/42802922?v=4",
	},
	{
		name: "Bro Bro",
		url: "https://x.com/brobro",
		logo: "https://pbs.twimg.com/profile_images/2004979173547270144/rDHpaxF-_400x400.jpg",
	},
	{
		name: "Edu Calvo",
		url: "https://educalvolopez.com/",
		logo: "https://avatars.githubusercontent.com/u/13372238?v=4",
	},
	{
		name: "OrcDev",
		url: "https://www.orcdev.com/",
		logo: "https://avatars.githubusercontent.com/u/7549148?v=4",
	},
	{
		name: "Irsyad A. Panjaitan",
		url: "https://irsyad.co/",
		logo: "https://avatars.githubusercontent.com/u/44585532?v=4",
	},
	{
		name: "Chánh Đại",
		url: "https://chanhdai.com/",
		logo: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
	},
	{
		name: "David Haz",
		url: "https://pro.reactbits.dev/",
		logo: "https://avatars.githubusercontent.com/u/48634587?v=4",
	},
];
