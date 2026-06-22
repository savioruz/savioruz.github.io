<script lang="ts">
	const { status, message } = $props();
</script>

<div class="flex min-h-dvh items-center justify-center px-6">
	<div class="flex flex-col items-center gap-6 text-center">
		<p class="font-display text-7xl font-medium tracking-tight md:text-8xl">{status}</p>
		<p class="text-muted-foreground max-w-md text-lg">
			{message === 'Not Found'
				? "The page you're looking for doesn't exist."
				: 'Something went wrong.'}
		</p>
		<a
			href="/"
			class="text-foreground decoration-muted-foreground/40 underline-offset-4 hover:underline"
		>
			&larr; Back home
		</a>
	</div>
</div>
