<script lang="ts">
	import LetterPullUp from '$lib/components/ui/letter-pull-up/letter-pull-up.svelte';

	const { status, message } = $props();
</script>

<div class="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
	<div class="space-y-8 text-center">
		<div class="flex flex-col items-center justify-center gap-2">
			<h1 class="text-gradient text-8xl font-bold">
				{status}
			</h1>
			<LetterPullUp
				words={message === 'Not Found'
					? "I'm sorry, but the page you're looking for doesn't exist."
					: "I'm sorry, but something went wrong."}
				class="text-md font-bold"
			/>
		</div>
		<a href="/" class="animated-underline inline-block text-lg">&larr; Go back home</a>
	</div>
</div>
