<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Section } from '$lib/components/ui/section';
	import { Button } from '$lib/components/ui/button';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
</script>

<Section id="contact" tone="cream">
	<div class="flex flex-col items-start gap-6">
		<h2 class="font-display text-3xl font-medium tracking-tight md:text-5xl">
			Let's work together
		</h2>
		<p class="max-w-xl text-lg leading-relaxed">
			I'm open to backend and full-stack opportunities, freelance work, and collaborations. Drop me
			a line and I'll get back to you.
		</p>
		<Button href={`mailto:${data.email}`} variant="inverse" class="mt-2">
			<Email />
			{data.email}
		</Button>
	</div>
</Section>
