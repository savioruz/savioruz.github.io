<script lang="ts">
	import Root from './root.svelte';

	const colorPalette = [
		{ title: 'Primary', hexCode: 'hsl(222.2 47.4% 11.2%)', className: 'bg-primary' },
		{ title: 'Secondary', hexCode: 'hsl(210 40% 96.1%)', className: 'bg-secondary' },
		{ title: 'Accent', hexCode: 'hsl(210 40% 96.1%)', className: 'bg-accent' },
		{ title: 'Muted', hexCode: 'hsl(210 40% 96.1%)', className: 'bg-muted' },
		{ title: 'Background', hexCode: 'hsl(0 0% 100%)', className: 'bg-background' },
		{ title: 'Foreground', hexCode: 'hsl(222.2 84% 4.9%)', className: 'bg-foreground' },
		{ title: 'Ring', hexCode: 'hsl(222.2 84% 4.9%)', className: 'bg-ring' },
		{ title: 'Border', hexCode: 'hsl(214.3 31.8% 91.4%)', className: 'bg-border' },
		{ title: 'Gradient', hexCode: '#a855f7, #f472b6', className: 'bg-gradient-text' }
	];
</script>

<Root>
	<section id="pallete" class="flex flex-col items-start justify-center gap-8">
		<div>
			<h1 class="text-gradient text-4xl font-bold">Pallete</h1>
			<p class="text-md text-muted-foreground">Used colors in the website.</p>
		</div>
		<div class="w-full rounded-md border-2 border-dashed p-4">
			<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
				{#each colorPalette as { title, hexCode, className }}
					<li class="flex items-center gap-4">
						<div class="main-border h-10 w-10 rounded-md {className}"></div>
						<div>
							<h3>{title}</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								{hexCode}
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</Root>
