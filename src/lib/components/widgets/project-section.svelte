<script lang="ts">
	import type { Project } from '$lib/resume/resume';
	import WordsPullUp from '$lib/components/ui/words-pull-up/words-pull-up.svelte';
	import ProjectCard from '$lib/components/ui/project-card/project-card.svelte';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import { cn } from '$lib/utils';
	import { page } from '$app/stores';

	export let title: string;
	export let projects: Project[];
	export let isLoaded: boolean;
	let id = title.toLowerCase().replace(/\s+/g, '-');

	$: isProjectsPage = $page.url.pathname === '/projects';
	$: sectionDescription =
		title === 'Featured Projects' ? 'My most recent projects' : 'My older projects';
</script>

<section {id} class="flex flex-col items-start justify-center gap-8">
	<div class="flex flex-col items-start justify-center gap-1">
		<WordsPullUp
			words={title}
			class={cn('text-3xl font-bold', {
				'text-gradient': isProjectsPage
			})}
		/>
		{#if isProjectsPage}
			<p class="text-md text-muted-foreground">{sectionDescription}</p>
		{/if}
	</div>
	<div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
		{#if isLoaded}
			{#each projects as project}
				<ProjectCard
					title={project.name}
					description={project.description}
					dates={project.startDate ?? ''}
					tags={project.tags}
					link={project.url}
					image={project.image ?? ''}
					href={project.href}
					loading="lazy"
				/>
			{/each}
		{:else}
			{#each Array(4) as i}
				<div id={i} class="flex w-[350px] flex-col gap-3 rounded-lg border p-4 md:w-[366px]">
					<Skeleton class="mb-2 h-40 w-full" />
					<Skeleton class="h-4 w-1/4" />
					<Skeleton class="h-4 w-3/4" />
					<div class="mt-2 flex gap-2">
						{#each Array(3) as j}
							<div id={j}>
								<Skeleton class="h-4 w-12" />
							</div>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>
