<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ vcrm } = data);

	let isModalOpen = false;
	const openModal = () => (isModalOpen = true);
</script>

<div class="overflow-x-auto">
	<table class="table table-zebra">
		<thead>
			<tr>
				<th>Info</th>
				<th>Requirement</th>
				<th>Compliance Status</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#each vcrm as row}
				<tr>
					<td class="text-center max-w-[30ch] whitespace-normal">
						{row['TAS ID']}
						{'\n'}
						{row['Design Package']}
						{'\n'}
						{row['Integration Level']}
					</td>
					<td class="text-center max-w-[100ch] whitespace-normal">{row['Requirement']}</td>
					<td class="text-center max-w-[4ch] whitespace-normal">{row['Compliance Status']}</td>
					<td class="text-center">
						<button class="btn btn-primary" on:click={openModal}>Open Modal</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if isModalOpen}
		<div
			class="fixed z-10 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div
					class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
				/>
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
					>&#8203;</span
				>
				<div class="modal modal-open">
					<div class="modal-box">
						<h2 class="text-xl" id="modal-title">Modal Title</h2>
						<div class="text-center">
							<p class="text-sm text-gray-500">Modal content...</p>
						</div>
						<div class="modal-action">
							<button class="btn" on:click={() => (isModalOpen = false)}>Close Modal</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
