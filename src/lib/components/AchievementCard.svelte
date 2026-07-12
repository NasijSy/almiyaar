<script>
    import SectorTag from '$lib/components/SectorTag.svelte';

    let { achievement, sectorTitle, sectorDescription = '' } = $props();

    const impactLabels = {
        low: 'منخفض',
        medium: 'متوسط',
        high: 'مرتفع'
    };

    const dateFormatter = new Intl.DateTimeFormat('ar-SY', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formatDate = (dateValue) => {
        const parsed = new Date(dateValue);
        return Number.isNaN(parsed.getTime()) ? dateValue : dateFormatter.format(parsed);
    };
</script>

<article class="entry" dir="rtl">
    <header>
        <h2 class="entry-title">{achievement.title}</h2>
    </header>

    {#if achievement.description}
        <p class="entry-description">{achievement.description}</p>
    {/if}

    <dl class="entry-meta" aria-label="بيانات الإنجاز">
        <div>
            <dt>القطاع</dt>
            <dd><SectorTag title={sectorTitle} description={sectorDescription} /></dd>
        </div>
        <div>
            <dt>الأثر</dt>
            <dd>{impactLabels[achievement.impact] ?? achievement.impact}</dd>
        </div>
        <div>
            <dt>التاريخ</dt>
            <dd><time datetime={achievement.date}>{formatDate(achievement.date)}</time></dd>
        </div>
        <div>
            <dt>المصدر</dt>
            <dd>
                <a href={achievement.source_url} target="_blank" rel="noopener noreferrer">قراءة المصدر</a>
            </dd>
        </div>
    </dl>
</article>

<style>
    .entry {
        border-bottom: 1px solid #e4e4e7;
        padding-block: 1rem;
    }

    .entry-title {
        font-size: 1.35rem;
        line-height: 1.5;
        margin-bottom: 0.5rem;
    }

    .entry-description {
        margin-bottom: 0.8rem;
        color: #3f3f46;
    }

    .entry-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem 1.2rem;
        margin: 0;
    }

    .entry-meta div {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
    }

    dt {
        color: #52525b;
        font-weight: 600;
    }

    dd {
        margin: 0;
    }

    a {
        text-decoration: underline;
        text-underline-offset: 2px;
    }
</style>
