<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string = '';
	export { className as class };
</script>

<main class="flex min-h-screen flex-col items-center justify-start py-8 md:my-8 md:justify-center">
	<div
		class={cn(
			'flex w-full max-w-sm flex-col items-start justify-center gap-20 px-4 md:max-w-screen-md md:px-0',
			className
		)}
	>
		<slot />
	</div>
</main>
