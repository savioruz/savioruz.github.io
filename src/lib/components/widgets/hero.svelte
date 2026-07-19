<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import ScrollReveal from './ScrollReveal.svelte';
	import Document from 'carbon-icons-svelte/lib/Document.svelte';
	import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
</script>

<Section id="hero" tone="canvas" containerClass="py-24 md:py-32">
	<ScrollReveal>
		<div class={cn('flex flex-col items-start gap-5')}>
			<p class={cn('text-signature-coral font-mono text-sm tracking-wide')}>Software Engineer</p>
			<h1
				class={cn('font-display text-4xl leading-tight font-semibold tracking-tight md:text-6xl')}
			>
				{data.name}
			</h1>
			<p class={cn('max-w-xl text-base leading-relaxed text-gray-500 md:text-lg')}>
				{data.summary}
			</p>
			<div class={cn('mt-3 flex flex-wrap items-center gap-3')}>
				<Button href={data.url} target="_blank" rel="noopener noreferrer">
					<Document />
					Resume
				</Button>
				<Button href={data.linkedin} target="_blank" rel="noopener noreferrer" variant="outline">
					<LogoLinkedin />
					LinkedIn
				</Button>
				<Button href={data.github} target="_blank" rel="noopener noreferrer" variant="outline">
					<LogoGithub />
					GitHub
				</Button>
			</div>
		</div>
	</ScrollReveal>
</Section>
