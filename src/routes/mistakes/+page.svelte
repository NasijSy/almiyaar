<script>
    import Head from '$lib/components/Head.svelte';
    import MistakeCard from '$lib/components/MistakeCard.svelte';
    import mistakes from '$lib/data/mistakes.json';
    import sectors from '$lib/data/sectors.json';

    const sectorsIndex = Object.fromEntries(sectors.map((sector) => [sector.slug, sector]));
    const sortedMistakes = [...mistakes].sort(
        (a, b) => new Date(b.date_made).getTime() - new Date(a.date_made).getTime()
    );
</script>

<Head
    title="الأخطاء والسلبيات"
    description="أبرز العثرات والأخطاء التي وقعت بها الحكومة السورية"
    canonical="/mistakes"
/>

<main class="mx-auto w-full max-w-7xl px-3 py-2" dir="rtl">
    <header class="mb-6 border-b-2 border-zinc-200 pb-4">
        <h1 class="mb-1 text-3xl font-bold leading-tight md:text-4xl">الأخطاء والسلبيات</h1>
        <p class="mb-1 text-zinc-600">أبرز العثرات والأخطاء التي وقعت بها الحكومة السورية</p>
        <p class="mb-0 text-xs text-zinc-500">ترتيب العناصر: من الأحدث إلى الأقدم.</p>
    </header>

    <ul class="grid gap-4 p-0">
        {#each sortedMistakes as mistake (mistake.title + mistake.date_made)}
            {@const sectorMeta = sectorsIndex[mistake.sector]}
            <li>
                <MistakeCard
                    {mistake}
                    sectorTitle={sectorMeta?.title ?? mistake.sector}
                    sectorDescription={sectorMeta?.description ?? ''}
                />
            </li>
        {/each}
    </ul>
</main>