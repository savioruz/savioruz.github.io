<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import ScrollReveal from './ScrollReveal.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
</script>

<Section id="contact" tone="cream">
	<ScrollReveal>
		<div class={cn('flex flex-col items-start gap-6')}>
			<h2 class={cn('font-display text-3xl font-semibold tracking-tight md:text-5xl')}>
				Let's work together
			</h2>
			<p class={cn('max-w-xl text-base leading-relaxed text-gray-500')}>
				I'm open to backend and full-stack opportunities, freelance work, and collaborations. Drop
				me a line and I'll get back to you.
			</p>
			<Button href={`mailto:${data.email}`} variant="inverse" class="mt-2">
				<Email />
				{data.email}
			</Button>
		</div>
	</ScrollReveal>
</Section>
