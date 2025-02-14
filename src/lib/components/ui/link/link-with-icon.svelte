<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ComponentType } from 'svelte';

	export let href: string;
	export let icon: ComponentType;
	export let text: string;
	export let target = '_blank';
	export let iconClass = 'size-4 text-gray-500 group-hover:text-purple';
	export let linkClass =
		'text-start text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100';

	let className: string = '';
	export { className as class };
</script>

<div class={cn('group flex items-center justify-center gap-1', className)}>
	<svelte:component this={icon} class={iconClass} />
	<a {href} {target} class={linkClass}>
		{text}
	</a>
</div>
