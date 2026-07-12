<script>
    import SectorTag from '$lib/components/SectorTag.svelte';

    let { study, sectorTitle, sectorDescription = '' } = $props();

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
        <h2 class="entry-title">{study.title}</h2>
    </header>

    {#if study.description}
        <p class="entry-description">{study.description}</p>
    {/if}

    <dl class="entry-meta" aria-label="بيانات الدراسة">
        {#if study.author}
            <div>
                <dt>الجهة</dt>
                <dd>{study.author}</dd>
            </div>
        {/if}
        <div>
            <dt>القطاع</dt>
            <dd><SectorTag title={sectorTitle} description={sectorDescription} /></dd>
        </div>
        <div>
            <dt>التاريخ</dt>
            <dd><time datetime={study.date_made}>{formatDate(study.date_made)}</time></dd>
        </div>
        <div>
            <dt>المصدر</dt>
            <dd>
                <a href={study.source_url} target="_blank" rel="noopener noreferrer">قراءة الدراسة</a>
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
