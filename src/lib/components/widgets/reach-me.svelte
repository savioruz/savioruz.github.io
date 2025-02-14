<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import WordsPullUp from '$lib/components/ui/words-pull-up/words-pull-up.svelte';
	import BlurIn from '$lib/components/ui/blur-in/blur-in.svelte';
	import Button from '../ui/button/button.svelte';
	import { Mail } from 'lucide-svelte';
</script>

<section id="reach-me" class="flex flex-col items-start justify-center gap-8">
	<WordsPullUp words="Reach Me" class="text-3xl font-bold" />
	<div>
		<BlurIn
			word="Want to get in touch?"
			class="text-md text-start leading-5 text-gray-500 md:text-2xl"
		/>
		<BlurIn
			word="I'm always looking for new opportunities and collaborations."
			class="text-md text-start leading-5 text-gray-500 md:text-2xl"
		/>
	</div>
	<Button
		href={`mailto:${data.email}`}
		variant="outline"
		size="sm"
		class="animate-shine border-input bg-background
		bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--accent)),55%,hsl(var(--background)))] 
		bg-[length:200%_100%] 
		text-foreground 
		hover:text-accent-foreground dark:bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--accent)),55%,hsl(var(--background)))]"
	>
		<Mail className="w-4 h-4" />
		Email
	</Button>
</section>
