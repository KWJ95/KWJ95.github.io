<script>
	import { Avatar } from "@skeletonlabs/skeleton";

    export let data;
    // let headingSize = 32;
</script>

<div class="container mx-auto mt-8">
    <div class="flex flex-col-reverse md:flex-row justify-center">
        <h1 class="h1">Hi, my name is
            <span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Jack Koo</span>
        </h1>
        <span class="divider-vertical invisible md:h-32 md:visible"/>
        <div class="grow md:grow-0 grid justify-center">
            <Avatar src="#" initials="KWJ" width="w-32" rounded="rounded-full" />
        </div>
    </div>
    <br>
    <!-- <h1 class="h1">Hello {data.visited ? 'friend' : 'stranger'}!</h1> -->
    <h1 class="h1">I'm a software engineer specialized in web development.</h1>
    <br>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    
    <p>Testing reactivity on static pages with DOM events</p>
    
    <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-0.5 my-3">
        {#each data.externalLinks as links}
            <a class="logo-item variant-soft" href="{links.src}" target="_blank" rel="noreferrer">
                <i class="{links.icon} text-2xl"/>
                <span>{links.text}</span>
            </a>
        {/each}

    </div>
</div>