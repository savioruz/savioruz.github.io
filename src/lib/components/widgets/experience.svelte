<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';

	const experience = data.experience;
</script>

<Section id="experience" tone="canvas">
	<div class="flex flex-col gap-8">
		<h2 class="font-display text-3xl font-medium tracking-tight md:text-4xl">Experience</h2>
		<ul class="flex flex-col">
			{#each experience as job (job.company + job.period)}
				<li
					class="border-border/60 -mx-4 flex flex-col gap-2 border-t px-4 py-5 first:border-t-0 md:flex-row md:items-baseline md:justify-between md:gap-8"
				>
					<div class="flex flex-col gap-1 md:max-w-md">
						<span class="font-display text-lg font-medium">
							{job.role}{#if job.type}<span class="text-muted-foreground font-normal">
									&middot; {job.type}</span
								>{/if}
						</span>
						<span class="text-sm font-medium">{job.company}</span>
						<span class="text-muted-foreground text-sm leading-relaxed">{job.description}</span>
						{#if job.tags?.length}
							<span class="text-muted-foreground mt-1 text-sm">{job.tags.join(', ')}</span>
						{/if}
					</div>
					<span class="text-muted-foreground text-sm md:text-right">
						{job.period}
						<br class="hidden md:block" />
						<span class="md:block">{job.location}</span>
					</span>
				</li>
			{/each}
		</ul>
	</div>
</Section>
