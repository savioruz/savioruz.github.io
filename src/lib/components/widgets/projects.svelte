<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';
	import ArrowUpRight from 'carbon-icons-svelte/lib/ArrowUpRight.svelte';

	const projects = data.projects;
</script>

<Section id="projects">
	<div class="flex flex-col gap-8">
		<h2 class="font-display text-3xl font-medium tracking-tight md:text-4xl">Projects</h2>
		<ul class="flex flex-col">
			{#each projects as project (project.name)}
				<li>
					<a
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group border-border hover:bg-secondary/60 -mx-4 flex flex-col gap-2 rounded-lg border-t px-4 py-5 transition-colors first:border-t-0 md:flex-row md:items-baseline md:justify-between md:gap-8"
					>
						<div class="flex flex-col gap-1 md:max-w-md">
							<span class="font-display flex items-center gap-1.5 text-lg font-medium">
								{project.name}
								<ArrowUpRight
									class="text-muted-foreground group-hover:text-foreground size-4 transition-colors"
								/>
							</span>
							<span class="text-muted-foreground text-sm leading-relaxed"
								>{project.description}</span
							>
						</div>
						<span class="text-muted-foreground text-sm md:text-right"
							>{project.tags.join(', ')}</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</Section>
