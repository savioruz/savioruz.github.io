<script lang="ts">
	import { resume as data } from '$lib/resume/resume';
	import Root from './root.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { onMount } from 'svelte';

	let userInput = '';
	let isLoading = false;
	let isLoaded = false;
	let messages: Array<{ role: 'user' | 'assistant'; content: string }> = [
		{
			role: 'assistant',
			content:
				"Hello I'm k-assistant, a chat-based artificial intelligence virtual assistant for Kheril. Ask me anything you want to know about his background, accomplishments, or current work."
		}
	];

	async function handleSubmit() {
		if (!userInput.trim() || isLoading) return;

		const userMessage = userInput;
		messages = [...messages, { role: 'user', content: userMessage }];
		userInput = '';
		isLoading = true;

		try {
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ message: userMessage })
			});

			const data = await response.json();

			if (data.error) {
				throw new Error(data.error);
			}

			messages = [...messages, { role: 'assistant', content: data.response }];
		} catch (error) {
			messages = [
				...messages,
				{
					role: 'assistant',
					content: 'Sorry, I encountered an error. Please try again.'
				}
			];
			console.error('Error:', error);
		} finally {
			isLoading = false;
		}
	}

	onMount(() => {
		setTimeout(() => {
			isLoaded = true;
		}, 500);
	});
</script>

<Root class="-mt-4 md:mt-0">
	{#if isLoaded}
		<section
			class="flex w-full flex-col items-start justify-center gap-8 rounded-md border-[1px] border-solid p-4"
		>
			<div class="flex w-full flex-col items-start justify-center gap-2 rounded-md bg-muted p-4">
				<h1 class="text-3xl">🤖 <span class="text-gradient font-bold">k-assistant</span></h1>
				<p class="text-md text-muted-foreground">
					Bot for answering questions about <span class="font-bold">{data.name}</span>
				</p>
			</div>

			<div id="chat-container" class="flex h-[70vh] w-full flex-col gap-4">
				<ScrollArea class="flex-1 p-4">
					<div class="flex flex-col gap-4">
						{#each messages as message}
							<div class="flex {message.role === 'user' ? 'justify-end' : 'justify-start'}">
								<div
									class="max-w-[70%] rounded-lg p-3 {message.role === 'user'
										? 'bg-primary text-primary-foreground'
										: 'bg-muted'}"
								>
									<p class="text-md">{message.content}</p>
								</div>
							</div>
						{/each}
						{#if isLoading}
							<div class="flex justify-start">
								<div class="max-w-[70%] rounded-lg bg-muted p-3">Typing...</div>
							</div>
						{/if}
					</div>
				</ScrollArea>

				<form on:submit|preventDefault={handleSubmit} class="flex gap-2">
					<Input
						type="text"
						bind:value={userInput}
						placeholder="Type your message..."
						class="flex-1"
						disabled={isLoading}
					/>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? 'Sending...' : 'Send'}
					</Button>
				</form>
			</div>
		</section>
	{:else}
		<section
			class="flex w-full flex-col items-start justify-center gap-8 rounded-md border-[1px] border-solid p-4"
		>
			<Skeleton class="mb-8 h-24 w-full" />
			<div class="flex w-full flex-col gap-4">
				<Skeleton class="h-12 w-1/2" />
				<Skeleton class="ml-auto h-12 w-2/3" />
				<Skeleton class="h-36 w-3/4" />
                <Skeleton class="h-12 w-1/2" />
                <div class="mt-32 flex w-full gap-4">
                    <Skeleton class="h-10 flex-1 rounded-full" />
                    <Skeleton class="h-10 w-20" />
                </div>
			</div>
		</section>
	{/if}
</Root>
