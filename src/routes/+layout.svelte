<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { siteConfig } from '$lib/metadata';
	import { page } from '$app/stores';
	import NotFound from '$lib/components/widgets/not-found.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	let { children } = $props();
	
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<svelte:head>
	<title>{siteConfig.name} - Personal Website</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="utf-8" />
	
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content={siteConfig.name} />

	<meta property="og:title" content="{siteConfig.name} - Personal Website" />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={siteConfig.url.toString()} />
	{#if siteConfig.ogImage}
		<meta property="og:image" content={siteConfig.ogImage.toString()} />
	{/if}
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@savioruz" />
	<meta name="twitter:title" content={siteConfig.name} />
	<meta name="twitter:image" content={siteConfig.ogImage.toString()} />
	<meta name="twitter:description" content={siteConfig.description} />

	<link rel="canonical" href={siteConfig.url.toString()} />
	<meta name="google-site-verification" content={siteConfig.googleVerification} />
	<meta name="yandex-verification" content={siteConfig.yandexVerification} />
</svelte:head>

<ModeWatcher />

{#if $page.error?.message}
	<NotFound status={$page.status} message={$page.error.message} />
{:else}
	{@render children()}
{/if}
