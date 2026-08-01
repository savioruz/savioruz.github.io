<script lang="ts">
	import { posts } from '../posts';
	import { siteConfig } from '$lib/metadata';
	import { page } from '$app/stores';

	const post = $derived(posts.find((p) => p.slug === $page.params.slug));
</script>

<svelte:head>
	<title>{post?.title ?? 'Post'} — {siteConfig.name}</title>
</svelte:head>

{#if post}
	<main class="post">
		<a class="back" href="/writing">← All posts</a>
		<time>{post.date}</time>
		<h1>{post.title}</h1>
		<div class="content">
			{@html post.content}
		</div>
	</main>
{:else}
	<main class="post">
		<h1>Post not found</h1>
		<p><a href="/writing">Back to writing</a></p>
	</main>
{/if}

<style>
	.post {
		max-width: 720px;
		margin: 0 auto;
		padding: 4rem 1.5rem;
	}
	.back {
		color: #6b7280;
		text-decoration: none;
		font-size: 0.9rem;
	}
	.time {
		display: block;
		margin-top: 1.5rem;
		color: #9ca3af;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 0.85rem;
	}
	h1 {
		margin: 0.5rem 0 2rem;
	}
	.content {
		line-height: 1.7;
	}
	.content h3 {
		margin-top: 2rem;
	}
	.content li {
		margin-bottom: 0.5rem;
	}
</style>
