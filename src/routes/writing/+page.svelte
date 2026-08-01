<script lang="ts">
	import { posts } from './posts';
	import { siteConfig } from '$lib/metadata';
</script>

<svelte:head>
	<title>Writing — {siteConfig.name}</title>
</svelte:head>

<main class="writing">
	<h1>Writing</h1>
	<p class="lede">Notes on Go, AI infrastructure, and Web3 — from the trenches.</p>

	<ul class="post-list">
		{#each posts as post}
			<li>
				<a href="/writing/{post.slug}">
					<time>{post.date}</time>
					<h2>{post.title}</h2>
					<p>{post.excerpt}</p>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	.writing {
		max-width: 720px;
		margin: 0 auto;
		padding: 4rem 1.5rem;
	}
	.lede {
		color: #6b7280;
		margin-bottom: 3rem;
	}
	.post-list {
		list-style: none;
		padding: 0;
	}
	.post-list li {
		margin-bottom: 2.5rem;
	}
	.post-list a {
		text-decoration: none;
		color: inherit;
		display: block;
	}
	.post-list time {
		font-size: 0.85rem;
		color: #9ca3af;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.post-list h2 {
		margin: 0.4rem 0 0.3rem;
		font-size: 1.4rem;
	}
	.post-list p {
		color: #6b7280;
		margin: 0;
	}
</style>
