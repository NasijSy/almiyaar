<script>
    import Head from '$lib/components/Head.svelte';
    import IssueCard from '$lib/components/IssueCard.svelte';
    import issues from '$lib/data/issues.json';
    import sectors from '$lib/data/sectors.json';

    const sectorsIndex = Object.fromEntries(sectors.map((sector) => [sector.slug, sector]));
    const sortedIssues = [...issues];
</script>

<Head
    title="المشاكل والتحديات"
    description="هموم المواطنين في سوريا والمشاكل والتحديات التي تحتاج حلولاً"
    canonical="/issues"
/>

<main class="mx-auto w-full max-w-7xl px-3 py-2" dir="rtl">
    <header class="mb-6 border-b-2 border-zinc-200 pb-4">
        <h1 class="mb-1 text-3xl font-bold leading-tight md:text-4xl">المشاكل والتحديات</h1>
        <p class="mb-1 text-zinc-600">هموم المواطنين في سوريا والمشاكل والتحديات التي تحتاج حلولاً</p>
        <p class="mb-0 text-xs text-zinc-500">ترتيب العناصر: من الأحدث إلى الأقدم.</p>
    </header>

    <ul class="grid gap-4 p-0">
        {#each sortedIssues as issue (issue.title)}
            {@const sectorMeta = sectorsIndex[issue.sector]}
            <li>
                <IssueCard
                    {issue}
                    sectorTitle={sectorMeta?.title ?? issue.sector}
                    sectorDescription={sectorMeta?.description ?? ''}
                />
            </li>
        {/each}
    </ul>
</main>