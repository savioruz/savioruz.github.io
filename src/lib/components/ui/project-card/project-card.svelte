<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { cn } from '@/utils';
	import { Motion, useMotionValue, useMotionTemplate } from 'svelte-motion';

	let className = '';
	export { className as class };
	export let title: string;
	export let href: string = '';
	export let description: string;
	export let dates: string;
	export let tags: readonly string[];
	export let link: string = '';
	export let image: string = '';
	export let video: string = '';
	//export let links: { icon: any; type: string; href: string }[] = [];
	export let links: { href: string }[] = [];
	export let loading: 'lazy' | 'eager' = 'lazy';

	// Spotlight effect
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
		mouseX.set(e.clientX - rect.left);
		mouseY.set(e.clientY - rect.top);
	}

	function handleMouseLeave() {
		mouseX.set(0);
		mouseY.set(0);
	}

	const bg = useMotionTemplate`radial-gradient(
		400px circle at ${mouseX}px ${mouseY}px,
		hsl(270 94% 65% / 0.15),
		transparent 40%
	)`;
</script>

<!-- Card -->
<div
	role="article"
	aria-label={title}
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	class={cn(
		'group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-out hover:border-purple/50',
		className
	)}
>
	<a href={href || '#'} target="_blank" class="block cursor-pointer">
		{#if video}
			<video
				class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
				src={video}
				autoplay
				loop
				muted
			></video>
		{:else}
			<img
				class="h-40 w-full overflow-hidden object-cover object-top"
				src={image}
				alt={title}
				{loading}
				decoding="async"
				fetchpriority="low"
			/>
		{/if}
	</a>
	<!-- Card Header -->
	<div class="flex flex-col px-2">
		<div class="space-y-1">
			<!-- Card Title -->
			<div class="mt-1 text-base">{title}</div>
			<time class="font-sans text-xs">{dates}</time>
			<div class="hidden font-sans text-xs underline print:visible">
				{link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<div
				class="prose dark:prose-invert max-w-full text-pretty font-sans text-xs text-muted-foreground"
			>
				{description}
			</div>
		</div>
	</div>
	<!-- Card Content -->
	<div class="mt-auto flex flex-col text-pretty px-2 font-sans text-sm text-muted-foreground">
		{#if tags && tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1">
				{#each tags as tag}
					<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</div>
	<!-- Card Footer -->
	<div class="flex items-center px-2 pb-2 pt-2">
		{#if links && links.length > 0}
			<div class="flex flex-row flex-wrap items-start gap-1">
				{#each links as link}
					<a href={link?.href} target="_blank">
						<Badge class="flex items-center justify-center gap-1 px-2 py-1 text-[10px]">
							<!-- {link.icon} -->
							<!-- <svelte:component this={link.icon} class="mb-px size-3" strokeWidth={1.6} />
							{link.type} -->
						</Badge>
					</a>
				{/each}
			</div>
		{/if}
	</div>

	<Motion
		style={{
			background: bg,
			opacity: 1
		}}
		let:motion
	>
		<div
			use:motion
			class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</Motion>
</div>
