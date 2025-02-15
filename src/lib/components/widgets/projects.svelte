<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import Root from '$lib/components/widgets/root.svelte';
	import ProjectSection from '$lib/components/widgets/project-section.svelte';
	import { onMount } from 'svelte';

	let isLoaded = false;
	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 500);
	});
</script>

<Root class="py-2 md:py-8">
	<ProjectSection title="Featured Projects" projects={data.featuredProjects} {isLoaded} />
	<ProjectSection title="Past Projects" projects={data.pastProjects} {isLoaded} />
</Root>
