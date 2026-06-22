<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import { Github, Linkedin, Twitter } from 'lucide-svelte';

	const year = new Date().getFullYear();
	const githubUsername = data.github.split('/').pop();

	const socials = [
		{ href: data.github, label: 'GitHub', icon: Github },
		{ href: data.linkedin, label: 'LinkedIn', icon: Linkedin },
		{ href: data.twitter, label: 'X', icon: Twitter }
	];
</script>

<footer class="border-border w-full border-t px-6">
	<div class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 py-10 sm:flex-row">
		<p class="text-muted-foreground text-sm">
			&copy; {year}
			{githubUsername}
		</p>
		<div class="flex items-center gap-5">
			{#each socials as social (social.label)}
				<a
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.label}
					class="text-muted-foreground hover:text-foreground transition-colors"
				>
					<social.icon class="size-5" />
				</a>
			{/each}
			<a
				href="https://github.com/savioruz/savioruz.github.io"
				target="_blank"
				rel="noopener noreferrer"
				class="text-muted-foreground hover:text-foreground text-sm transition-colors"
			>
				Source
			</a>
		</div>
	</div>
</footer>
