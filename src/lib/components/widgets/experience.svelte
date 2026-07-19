<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';
	import { cn } from '$lib/utils';
	import ScrollReveal from './ScrollReveal.svelte';

	const experience = data.experience;
</script>

<Section id="experience" tone="canvas">
	<ScrollReveal>
		<div class={cn('flex flex-col gap-8')}>
			<h2 class={cn('font-display text-3xl font-semibold tracking-tight md:text-4xl')}>
				Experience
			</h2>
			<ul class={cn('flex flex-col')}>
				{#each experience as job (job.company + job.period)}
					<li
						class={cn(
							'border-border/60 -mx-4 flex flex-col gap-2 border-t px-4 py-5',
							'first:border-t-0',
							'md:flex-row md:items-baseline md:justify-between md:gap-8'
						)}
					>
						<div class={cn('flex flex-col gap-1 md:max-w-md')}>
							<span class={cn('font-display text-lg font-medium')}>
								{job.role}{#if job.type}<span class={cn('ml-2 font-normal text-gray-400')}>
										&middot; {job.type}</span
									>{/if}
							</span>
							<span class={cn('text-sm font-medium')}>{job.company}</span>
							<span class={cn('text-sm leading-relaxed text-gray-500')}>{job.description}</span>
							{#if job.tags?.length}
								<span class={cn('mt-1 font-mono text-xs tracking-wide text-gray-400')}>
									{job.tags.join(' · ')}
								</span>
							{/if}
						</div>
						<span class={cn('text-sm text-gray-400 md:text-right')}>
							{job.period}
							<br class={cn('hidden md:block')} />
							<span class={cn('md:block')}>{job.location}</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</ScrollReveal>
</Section>
