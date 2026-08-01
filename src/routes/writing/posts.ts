export interface Post {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	content: string;
}

export const posts: Post[] = [
	{
		slug: 'searxng-raspberry-pi',
		title: 'Self-Hosting SearXNG on a Raspberry Pi with Docker',
		date: 'Aug 2026',
		excerpt:
			'Private, ad-free search with 270+ engines — running on a $50 Pi 4 with a few lines of Docker Compose.',
		content: `
<p>Search engines are the biggest data brokers on the internet. The fix is easy: run your own metasearch instance and stop handing every query to one company.</p>

<p>Here's how I run SearXNG on a Raspberry Pi 4 (8GB) with Docker — private search, 270+ engines, and zero monthly cost.</p>

<h3>Why SearXNG</h3>
<p>SearXNG is a metasearch engine — it queries many upstream engines (Google, Bing, DuckDuckGo, and hundreds more) and merges the results. Your query goes to the engines through the SearXNG instance, so your IP and browser fingerprint stay private. It also returns clean JSON for programmatic use, which makes it a great backend for agent tooling.</p>

<h3>The setup</h3>
<p>Three files and you're done:</p>

<pre><code># docker-compose.yml
services:
  searxng:
    image: searxng/searxng:latest
    ports:
      - "127.0.0.1:8888:8080"
    volumes:
      - ./searxng:/etc/searxng
    environment:
      - SEARXNG_BASE_URL=http://localhost:8888/
      - SEARXNG_SECRET=<code>your-secret-here</code>
      - TZ=Asia/Jakarta
</code></pre>

<p>Generate the secret, start it, and the container writes a default settings file on first boot.</p>

<pre><code>openssl rand -hex 32 &gt; .searxng_secret
docker compose up -d
</code></pre>

<h3>Enabling the JSON API</h3>
<p>For agent/script usage you need the JSON format. Add this to <code>settings.yml</code> and restart:</p>

<pre><code>search:
  formats:
    - html
    - json
</code></pre>

<h3>Results</h3>
<p>On first boot, SearXNG reports <strong>274 engines</strong> registered. With the JSON API enabled, a search is one GET request:</p>

<pre><code>curl "http://localhost:8888/search?q=raspberry+pi&amp;format=json"
</code></pre>

<p>It's fast (sub-second on a Pi 4), totally free, and the whole thing uses about 300MB of RAM — a rounding error on an 8GB Pi.</p>

<h3>Notes from the trenches</h3>
<ul>
<li>Bind to <code>127.0.0.1</code> unless you want the whole network using your instance.</li>
<li>The container writes config as root — <code>sudo chown</code> the volume once so you can edit it.</li>
<li>Some engines (wikidata, google) will 403 from datacenter/shared IPs. That's normal — SearXNG falls back to the engines that respond.</li>
</ul>

<p>Private search, self-hosted, on hardware you own. That's the Pi way.</p>
`
	},
	{
		slug: 'go-backend-patterns',
		title: 'Go Backend Patterns I Use in Production',
		date: 'Jul 2026',
		excerpt:
			'Clean Architecture, event-driven services, and the patterns that actually survive 6 months of production.',
		content: `
<p>After two years building Go backends in production — at a logistics company, an RAG platform, and several hackathon projects — these are the patterns that actually held up.</p>

<h3>Clean Architecture (the parts that matter)</h3>
<p>Everyone talks about Clean Architecture. Here's what actually works in Go services at a small scale: keep your business logic in pure functions that take and return structs. Put the database behind an interface. Let the HTTP handler parse the request and call the domain function. That's it — you don't need 47 layers of abstraction.</p>

<h3>Event-driven with Kafka</h3>
<p>Kafka makes sense when you have genuine service boundaries that need to stay decoupled. For a small team, the pattern I use: one producer topic per event type, one consumer per service that cares about it, and a dead-letter queue for anything that fails. Don't overthink the topic structure — start with what your services actually need, not what you think you might need in 5 years.</p>

<h3>Semantic caching with Qdrant</h3>
<p>If you're doing RAG, semantic caching saves real money. Hash the query embedding, store it in Qdrant, and before you call the expensive LLM for context retrieval, check if a similar query already exists. We implemented this at Hagoon — it cut token usage by a meaningful amount while keeping response quality consistent.</p>

<h3>The takeaway</h3>
<p>Patterns should serve your team size and service complexity, not the other way around. Start simple, make it work, then only add complexity when the pain of keeping it simple becomes real.</p>
`
	}
];
