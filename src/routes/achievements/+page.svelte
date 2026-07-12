<script>
    import Head from '$lib/components/Head.svelte';
    import AchievementCard from '$lib/components/AchievementCard.svelte';
    import achievements from '$lib/data/achievements.json';
    import sectors from '$lib/data/sectors.json';

    const sectorsIndex = Object.fromEntries(sectors.map((sector) => [sector.slug, sector]));
    const sortedAchievements = [...achievements].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
</script>

<Head
    title="الإنجازات"
    description="أبرز الإنجازات التي حققتها الحكومة السورية مع تصنيف حسب القطاع والأثر"
    canonical="/achievements"
/>

<main class="page" dir="rtl">
    <header class="page-header">
        <h1>الإنجازات</h1>
        <p>ملخص لأبرز النتائج الإيجابية الموثقة بحسب القطاعات المختلفة.</p>
        <p class="order-note">ترتيب العناصر: من الأحدث إلى الأقدم.</p>
    </header>

    <ul class="entries" aria-label="قائمة الإنجازات">
        {#each sortedAchievements as achievement (achievement.title + achievement.date)}
            {@const sectorMeta = sectorsIndex[achievement.sector]}
            <li>
                <AchievementCard
                    {achievement}
                    sectorTitle={sectorMeta?.title ?? achievement.sector}
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