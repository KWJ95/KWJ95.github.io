<script>
	export let data;
</script>

<h1 class="h1">About me</h1>
<p class="my-6">Hello there, my name is Koo Wei Jie</p>

<div class="card w-fit">
	<header class="card-header">Below are my technical skills and talents:</header>
    <hr/>
	<ul class="list p-4">
		{#each data.skills as { talent, exp }}
			<li>{talent} for {exp} {exp > '1' ? 'months' : 'month'}</li>
		{/each}
	</ul>
</div>
<hr class="mx-5 my-8"/>
<div class="card w-fit">
	<header class="card-header">Here are my education level history:</header>
	<hr/>
    <ul class="list p-4">
		{#each data.educations as { school, year }}
			<li>{school} ({year})</li>
		{/each}
	</ul>
</div>
