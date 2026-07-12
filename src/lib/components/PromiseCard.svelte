<script>
    import SectorTag from '$lib/components/SectorTag.svelte';

    let { promise, sectorTitle, sectorDescription = '' } = $props();

    const statusLabels = {
        not_started: 'لم يبدأ',
        in_progress: 'قيد التنفيذ',
        done: 'مكتمل',
        broken: 'مكسور',
        stalled: 'متوقف',
        partial: 'منجز جزئيا',
        no_data: 'لا بيانات'
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
        <h2 class="entry-title">{promise.title}</h2>
    </header>

    {#if promise.description}
        <p class="entry-description">{promise.description}</p>
    {/if}

    {#if promise.source_quote}
        <blockquote class="entry-quote">{promise.source_quote}</blockquote>
    {/if}

    <dl class="entry-meta" aria-label="بيانات الوعد">
        <div>
            <dt>الحالة</dt>
            <dd>{statusLabels[promise.status] ?? promise.status}</dd>
        </div>
        <div>
            <dt>القطاع</dt>
            <dd><SectorTag title={sectorTitle} description={sectorDescription} /></dd>
        </div>
        <div>
            <dt>تاريخ الوعد</dt>
            <dd><time datetime={promise.date_made}>{formatDate(promise.date_made)}</time></dd>
        </div>
        {#if promise.deadline}
            <div>
                <dt>الموعد النهائي</dt>
                <dd><time datetime={promise.deadline}>{formatDate(promise.deadline)}</time></dd>
            </div>
        {/if}
        <div>
            <dt>المصدر</dt>
            <dd>
                <a href={promise.source_url} target="_blank" rel="noopener noreferrer">قراءة المصدر</a>
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

    .entry-quote {
        border-inline-start: 3px solid #a1a1aa;
        margin: 0 0 0.8rem;
        padding-inline-start: 0.8rem;
        color: #52525b;
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
