<script lang="ts" module>
	type SectionTone = 'canvas' | 'navy' | 'coral' | 'forest' | 'cream';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		tone = 'canvas',
		id = undefined,
		class: className = undefined,
		containerClass = undefined,
		children
	}: {
		tone?: SectionTone;
		id?: string;
		class?: string;
		containerClass?: string;
		children: Snippet;
	} = $props();

	const tones: Record<SectionTone, string> = {
		canvas: 'bg-background text-foreground',
		navy: 'bg-signature-navy text-signature-navy-foreground',
		coral: 'bg-signature-coral text-signature-coral-foreground',
		forest: 'bg-signature-forest text-signature-forest-foreground',
		cream: 'bg-signature-cream text-signature-cream-foreground'
	};
</script>

<section {id} class={cn('w-full px-6', tones[tone], className)}>
	<div class={cn('mx-auto max-w-4xl py-16 md:py-24', containerClass)}>
		{@render children()}
	</div>
</section>
