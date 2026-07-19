<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';
	import { cn } from '$lib/utils';
	import ScrollReveal from './ScrollReveal.svelte';
	import ArrowUpRight from 'carbon-icons-svelte/lib/ArrowUpRight.svelte';

	const projects = data.projects;
</script>

<Section id="projects">
	<ScrollReveal>
		<div class={cn('flex flex-col gap-8')}>
			<h2 class={cn('font-display text-3xl font-semibold tracking-tight md:text-4xl')}>Projects</h2>
			<ul class={cn('flex flex-col')}>
				{#each projects as project (project.name)}
					<li>
						<a
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							class={cn(
								'group border-border flex flex-col gap-2 rounded-lg border-t px-4 py-5 transition-colors',
								'hover:bg-secondary/60 first:border-t-0',
								'md:flex-row md:items-baseline md:justify-between md:gap-8'
							)}
						>
							<div class={cn('flex flex-col gap-1 md:max-w-md')}>
								<span class={cn('font-display flex items-center gap-1.5 text-lg font-medium')}>
									{project.name}
									<ArrowUpRight
										class={cn(
											'text-muted-foreground group-hover:text-foreground size-4 transition-colors'
										)}
									/>
								</span>
								<span class={cn('text-sm leading-relaxed text-gray-500')}>
									{project.description}
								</span>
							</div>
							<span class={cn('font-mono text-xs tracking-wide text-gray-400 md:text-right')}>
								{project.tags.join(' · ')}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</ScrollReveal>
</Section>
