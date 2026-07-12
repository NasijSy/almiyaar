<script>
    import Head from '$lib/components/Head.svelte';
    import PromiseCard from '$lib/components/PromiseCard.svelte';
    import promises from '$lib/data/promises.json';
    import sectors from '$lib/data/sectors.json';

    const sectorsIndex = Object.fromEntries(sectors.map((sector) => [sector.slug, sector]));
    const sortedPromises = [...promises].sort((a, b) =>
        new Date(b.date_made).getTime() - new Date(a.date_made).getTime()
    );
</script>

<Head
    title="الوعود الحكومية"
    description="متابعة الوعود التي أطلقها المسؤولون السوريون وحالتها التنفيذية ضمن القطاعات المختلفة"
    canonical="/promises"
/>

<main class="page" dir="rtl">
    <header class="page-header">
        <h1>الوعود الحكومية</h1>
        <p>توثيق لأهم الوعود التي أطلقها المسؤولون السوريون ومؤشرات التقدم في تنفيذها.</p>
        <p class="order-note">ترتيب العناصر: من الأحدث إلى الأقدم.</p>
    </header>

    <ul class="entries" aria-label="قائمة الوعود الحكومية">
        {#each sortedPromises as promise (promise.title + promise.date_made)}
            {@const sectorMeta = sectorsIndex[promise.sector]}
            <li>
                <PromiseCard
                    {promise}
                    sectorTitle={sectorMeta?.title ?? promise.sector}
                    sectorDescription={sectorMeta?.description ?? ''}
                />
            </li>
        {/each}
    </ul>
</main>

<style>
    .page {
        max-width: 72rem;
        margin-inline: auto;
        padding: 0 0.8rem;
    }

    .page-header {
        border-bottom: 2px solid #e4e4e7;
        margin-bottom: 1.2rem;
    }

    .page-header h1 {
        font-size: 2rem;
        line-height: 1.4;
        margin-bottom: 0.4rem;
    }

    .page-header p {
        color: #3f3f46;
        margin-bottom: 1rem;
    }

    .order-note {
        font-size: 0.82rem;
        color: #71717a;
        margin-top: -0.3rem;
    }

    .entries {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>