<script>
    import SectorTag from '$lib/components/SectorTag.svelte';

    let { issue, sectorTitle, sectorDescription = '' } = $props();

    const impactLabels = {
        low: 'منخفض',
        medium: 'متوسط',
        high: 'مرتفع'
    };
</script>

<article class="entry" dir="rtl">
    <header>
        <h3 class="entry-title">{issue.title}</h3>
    </header>

    <p class="entry-description">{issue.description}</p>

    <dl class="entry-meta" aria-label="بيانات المشكلة">
        <div>
            <dt>القطاع</dt>
            <dd><SectorTag title={sectorTitle} description={sectorDescription} /></dd>
        </div>
        <div>
            <dt>الأثر</dt>
            <dd>{impactLabels[issue.impact] ?? issue.impact}</dd>
        </div>
        <div>
            <dt>المصدر</dt>
            <dd>
                <a href={issue.source_url} target="_blank" rel="noopener noreferrer">قراءة المصدر</a>
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
        font-size: 1.2rem;
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
