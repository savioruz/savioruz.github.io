<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import BlurIn from '$lib/components/ui/blur-in/blur-in.svelte';
	import WordRotate from '$lib/components/ui/word-rotate/word-rotate.svelte';
	import WordsPullUp from '$lib/components/ui/words-pull-up/words-pull-up.svelte';
	import LinkWithIcon from '$lib/components/ui/link/link-with-icon.svelte';
	import { FileText, Linkedin, Github } from 'lucide-svelte';
</script>

<section id="hero" class="flex flex-col items-start justify-center gap-8">
	<div class="flex flex-col items-start justify-center gap-2">
		<WordRotate
			words={[
				'Hi',
				'Bonjour',
				'Hola',
				'Hallo',
				'Ciao',
				'Olá',
				'こんにちは',
				'안녕하세요',
				'你好',
				'नमस्ते',
				'Привет',
				'こんにちは',
				'안녕하세요',
				'你好',
				'नमस्ते',
				'Привет'
			]}
			duration={2100}
			class="text-3xl font-bold"
		/>
		<div class="flex items-center justify-center gap-4">
			<WordsPullUp words="I'm" class="text-3xl font-bold" />
			<WordsPullUp words={data.name} class="text-gradient text-4xl font-bold" />
		</div>
	</div>
	<div class="flex flex-col items-start justify-center gap-8">
		<BlurIn word={data.summary} class="text-md text-start leading-5 text-gray-500 md:text-2xl" />
		<div class="flex items-start gap-6">
			<LinkWithIcon href={data.url} icon={FileText} text="Resume" />
			<LinkWithIcon href={data.linkedin} icon={Linkedin} text="LinkedIn" />
			<LinkWithIcon href={data.github} icon={Github} text="GitHub" />
		</div>
	</div>
</section>
