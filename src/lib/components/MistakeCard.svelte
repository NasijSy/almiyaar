<script>
    import SectorTag from '$lib/components/SectorTag.svelte';

    let { mistake, sectorTitle, sectorDescription = '' } = $props();

    const typeLabels = {
        corruption: 'فساد',
        mismanagement: 'سوء إدارة',
        policy_failure: 'فشل سياساتي',
        other: 'أخرى'
    };

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
        <h3 class="entry-title">{mistake.title}</h3>
    </header>

    <p class="entry-description">{mistake.description}</p>

    <dl class="entry-meta" aria-label="بيانات السلبية">
        <div>
            <dt>النوع</dt>
            <dd>{typeLabels[mistake.type] ?? mistake.type}</dd>
        </div>
        <div>
            <dt>الأثر</dt>
            <dd>{impactLabels[mistake.impact] ?? mistake.impact}</dd>
        </div>
        <div>
            <dt>القطاع</dt>
            <dd><SectorTag title={sectorTitle} description={sectorDescription} /></dd>
        </div>
        <div>
            <dt>التاريخ</dt>
            <dd><time datetime={mistake.date_made}>{formatDate(mistake.date_made)}</time></dd>
        </div>
        <div>
            <dt>المصدر</dt>
            <dd>
                <a href={mistake.source_url} target="_blank" rel="noopener noreferrer">قراءة المصدر</a>
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
