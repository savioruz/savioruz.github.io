<script lang="ts">
	import Root from '$lib/components/widgets/root.svelte';
	import Hero from '$lib/components/widgets/hero.svelte';
	import ReachMe from '$lib/components/widgets/reach-me.svelte';
	import ProjectSection from '$lib/components/widgets/project-section.svelte';
	import { resume as data } from '$lib/resume/resume';
	import { onMount } from 'svelte';

	let isLoaded = false;
	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 500);
	});
</script>

<Root class="md:py-6">
	<Hero />
	<div class="flex flex-col items-center justify-center gap-8">
		<ProjectSection title="Featured Projects" projects={data.featuredProjects} {isLoaded} />
		<a
			href="/projects" 
			class="text-sm text-gray-500 animated-underline hover:text-primary"
			data-sveltekit-preload-data
		>View All Projects</a>
	</div>
	<ReachMe />
</Root>
