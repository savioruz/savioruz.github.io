<script lang="ts">
	import LetterPullUp from '$lib/components/ui/letter-pull-up/letter-pull-up.svelte';
</script>

<div class="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
	<div class="space-y-8 text-center">
		<div class="flex flex-col items-center justify-center gap-2">
			<h1 class="text-gradient text-8xl font-bold">503</h1>
			<LetterPullUp
				words="I'm sorry, but the service is currently unavailable."
				class="text-md font-bold"
			/>
		</div>
		<a href="/" class="animated-underline inline-block text-lg">&larr; Go back home</a>
	</div>
</div>
