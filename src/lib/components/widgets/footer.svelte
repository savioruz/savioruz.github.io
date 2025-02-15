<script lang="ts">
	import { resume as data } from '$lib/resume/resume';

	const year = new Date().getFullYear();
	const githubUsername = data.github.split('/').pop();
</script>

<footer
	class="flex flex-col items-center justify-center gap-4 mb-16 md:mb-0 border-t bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="flex flex-row gap-4">
		<a
			href="https://github.com/savioruz/savioruz.github.io"
			target="_blank"
			rel="noopener noreferrer"
			class="animated-underline text-sm text-muted-foreground hover:text-primary"
		>
			Source Code
		</a>
		<a href="/pallete" class="animated-underline text-sm text-muted-foreground hover:text-primary" data-sveltekit-preload-data> Pallete </a>
		<a href="/stats" class="animated-underline text-sm text-muted-foreground hover:text-primary" data-sveltekit-preload-data> Stats </a>
	</div>
	<p class="text-sm text-muted-foreground">
		&copy; {year}
		{githubUsername}
	</p>
</footer>
