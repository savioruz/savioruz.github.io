<script lang="ts">
	import { page } from '$app/stores';
	import { navigationConfig } from '$lib/navigation';
	import ThemeToggle from '$lib/components/ui/theme-toggle/theme-toggle.svelte';
	import { Separator } from '$lib/components/ui/separator';
</script>

<header
	class="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 md:bottom-auto md:top-0"
>
	<div
		class="rounded-full border bg-background/95 px-8 py-1 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div>
			<nav class="flex items-center gap-4">
				{#each navigationConfig as item}
					<a
						href={item.href}
						class="smooth-transition text-gradient-hover text-xs md:text-sm {$page.url.pathname ===
						item.href
							? 'text-gradient'
							: ''}"
					>
						{item.label}
					</a>
				{/each}
				<Separator orientation="vertical" class="ml-2 py-3" />
				<ThemeToggle class="rounded-full" />
			</nav>
		</div>
	</div>
</header>
