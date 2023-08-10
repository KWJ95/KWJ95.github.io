<script>
    export let data;
</script>

<h1>About me</h1>
<p>Hello there, my name is Koo Wei Jie</p>

<p>Below are my technical skills and talents:</p>

<ul>
    {#each data.skills as { talent, exp}}
        <li>{talent} for {exp} { exp > '1' ? "years" : "year" }</li>
    {/each}
</ul>