<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';
	import { Button } from '$lib/components/ui/button';
	import { FileText, Linkedin, Github } from 'lucide-svelte';
</script>

<Section id="hero">
	<div class="fade-up flex flex-col items-start gap-6">
		<p class="text-muted-foreground text-base">Hi, I'm</p>
		<h1 class="font-display text-4xl leading-tight font-medium tracking-tight md:text-6xl">
			{data.name}
		</h1>
		<p class="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
			{data.summary}
		</p>
		<div class="mt-2 flex flex-wrap items-center gap-3">
			<Button href={data.url} target="_blank" rel="noopener noreferrer">
				<FileText />
				Resume
			</Button>
			<Button href={data.linkedin} target="_blank" rel="noopener noreferrer" variant="outline">
				<Linkedin />
				LinkedIn
			</Button>
			<Button href={data.github} target="_blank" rel="noopener noreferrer" variant="outline">
				<Github />
				GitHub
			</Button>
		</div>
	</div>
</Section>
