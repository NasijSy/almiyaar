<script>
	import Head from '$lib/components/Head.svelte';
    import achievements from '$lib/data/achievements.json';
    import mistakes from '$lib/data/mistakes.json';
    import issues from '$lib/data/issues.json';
    import promises from '$lib/data/promises.json';
    import studies from '$lib/data/studies.json';
    import sectors from '$lib/data/sectors.json';

    let activeSector = $state('all');

    const sectorBySlug = Object.fromEntries(sectors.map((sector) => [sector.slug, sector]));

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
        month: 'short',
        day: 'numeric'
    });

    const formatDate = (dateValue) => {
        const parsed = new Date(dateValue);
        return Number.isNaN(parsed.getTime()) ? dateValue : dateFormatter.format(parsed);
    };

    const dateValue = (item) => {
        const rawDate = item.date_made ?? item.date;
        if (!rawDate) return 0;
        const parsed = new Date(rawDate).getTime();
        return Number.isNaN(parsed) ? 0 : parsed;
    };

    const mainSectorTags = $derived.by(() => {
        const slugs = new Set();
        for (const item of achievements) slugs.add(item.sector);
        for (const item of mistakes) slugs.add(item.sector);
        for (const item of issues) slugs.add(item.sector);
        return sectors.filter((sector) => slugs.has(sector.slug));
    });

    const filteredAchievements = $derived.by(() =>
        [...achievements]
            .filter((item) => activeSector === 'all' || item.sector === activeSector)
            .sort((a, b) => dateValue(b) - dateValue(a))
            .slice(0, 3)
    );

    const filteredMistakes = $derived.by(() =>
        [...mistakes]
            .filter((item) => activeSector === 'all' || item.sector === activeSector)
            .sort((a, b) => dateValue(b) - dateValue(a))
            .slice(0, 3)
    );

    const filteredIssues = $derived.by(() =>
        [...issues]
            .filter((item) => activeSector === 'all' || item.sector === activeSector)
            .sort((a, b) => dateValue(b) - dateValue(a))
            .slice(0, 3)
    );

    const topPromises = $derived.by(() => [...promises].sort((a, b) => dateValue(b) - dateValue(a)).slice(0, 3));
    const topStudies = $derived.by(() => [...studies].sort((a, b) => dateValue(b) - dateValue(a)).slice(0, 3));

    const totalAchievements = achievements.length;
    const totalMistakes = mistakes.length;
    const totalIssues = issues.length;
    const totalPromises = promises.length;
    const totalStudies = studies.length;

    const activeSectorLabel = $derived.by(() =>
        activeSector === 'all' ? 'كل القطاعات' : sectorBySlug[activeSector]?.title ?? activeSector
    );
</script>

<Head
    description="تقرير عن  الأداء الحكومي في سوريا: إنجازات، سلبيات، مشاكل، وعود حكومية، وأبرز تقارير الدراسات."
    canonical="/"
/>

<main class="w-full sm:max-w-7xl sm:mx-auto px-2 py-2 space-y-12" dir="rtl">
    <section class="flex flex-col md:flex-row gap-4 min-h-[22rem]" aria-labelledby="hero-heading">
        <div class="md:w-1/2 order-2 md:order-1 content-center text-center md:text-start shrink-0">
            <h1 id="hero-heading" class="text-4xl! md:text-5xl! font-black leading-16">
                ملخص متوازن للأداء الحكومي في سوريا سعياً لواقع أفضل
            </h1>
            <p class="mt-4 text-lg md:text-xl text-gray-700">
                تقرير الكتروني يرصد الأداء الحكومي في سوريا ويسلط الضوء على القضايا والهموم الأكثر إلحاحاً للمواطن ويقدم لمحة عن أبرز إنجازات الحكومة والتحديات التي
                تواجهها في مختلف المجالات
            </p>
        </div>
        <img
            class="object-contain md:w-1/2 order-1 md:order-2 flex-1 min-h-0 max-h-82 w-full"
            src="/media/hero.png"
            alt="خدمات وسياسات حكومية"
        />
    </section>

    <section aria-labelledby="main-tracker-heading" class="space-y-5">
        <header class="flex flex-col gap-2 border-b border-zinc-200 pb-4">
            <h2 id="main-tracker-heading" class="text-3xl font-bold mb-0!">استعرض أبرز البنود</h2>
            <p class="mb-0! text-zinc-600">
                استعراض سريع للإنجازات والسلبيات والمشاكل مع فلترة حسب القطاع
            </p>
            <p class="mb-0! text-xs text-zinc-500">ترتيب العناصر: من الأحدث إلى الأقدم.</p>
        </header>

        <div class="space-y-3">
            <div class="flex flex-wrap gap-2" role="group" aria-label="تصفية حسب القطاع">
                <button
                    type="button"
                    onclick={() => (activeSector = 'all')}
                    class={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                        activeSector === 'all'
                            ? 'bg-secondary text-white border-secondary'
                            : 'bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-50'
                    }`}
                    aria-pressed={activeSector === 'all'}
                >
                    كل القطاعات
                </button>

                {#each mainSectorTags as sector}
                    <button
                        type="button"
                        onclick={() => (activeSector = sector.slug)}
                        class={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                            activeSector === sector.slug
                                ? 'bg-secondary text-white border-secondary'
                                : 'bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-50'
                        }`}
                        aria-pressed={activeSector === sector.slug}
                        title={sector.description}
                    >
                        {sector.title}
                    </button>
                {/each}
            </div>
            <p class="text-sm text-zinc-600 mb-0!">القطاع النشط: <strong>{activeSectorLabel}</strong></p>
        </div>

        <div class="grid lg:grid-cols-3 gap-4">
            <article class="border border-zinc-200 rounded-lg p-4 bg-white">
                <header class="flex items-center justify-between gap-3 mb-3 border-b border-zinc-100 pb-2">
                    <div>
                        <h3 class="text-xl font-bold mb-0!">الإنجازات</h3>
                        <p class="text-xs text-zinc-500 mt-1 mb-0!">نتائج إيجابية تحقق أثرها على الأرض</p>
                    </div>
                    <a href="/achievements" class="text-sm text-secondary hover:underline">عرض الكل ({totalAchievements})</a>
                </header>
                <ul class="space-y-3 mb-0! p-0!">
                    {#each filteredAchievements as item}
                        <li class="pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                            <h4 class="text-base font-semibold mb-1! leading-7">{item.title}</h4>
                            {#if item.description}
                                <p class="text-sm text-zinc-600 mb-1!">{item.description}</p>
                            {/if}
                            <div class="text-xs text-zinc-500 flex items-center gap-2 mb-0!">
                                <time datetime={item.date}>{formatDate(item.date)}</time>
                                {#if item.source_url}
                                    <span aria-hidden="true">|</span>
                                    <a
                                        href={item.source_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="text-xs text-secondary hover:underline"
                                    >
                                        المصدر
                                    </a>
                                {/if}
                            </div>
                        </li>
                    {:else}
                        <li class="text-sm text-zinc-500">لا توجد نتائج في هذا القطاع.</li>
                    {/each}
                </ul>
            </article>

            <article class="border border-zinc-200 rounded-lg p-4 bg-white">
                <header class="flex items-center justify-between gap-3 mb-3 border-b border-zinc-100 pb-2">
                    <div>
                        <h3 class="text-xl font-bold mb-0!">السلبيات</h3>
                        <p class="text-xs text-zinc-500 mt-1 mb-0!">عثرات وأخطاء وقعت بها الحكومة السورية</p>
                    </div>
                    <a href="/mistakes" class="text-sm text-secondary hover:underline">عرض الكل ({totalMistakes})</a>
                </header>
                <ul class="space-y-3 mb-0! p-0!">
                    {#each filteredMistakes as item}
                        <li class="pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                            <h4 class="text-base font-semibold mb-1! leading-7">{item.title}</h4>
                            <p class="text-sm text-zinc-600 mb-1!">{item.description}</p>
                            <div class="text-xs text-zinc-500 flex items-center gap-2 mb-0!">
                                <time datetime={item.date_made}>{formatDate(item.date_made)}</time>
                                {#if item.source_url}
                                    <span aria-hidden="true">|</span>
                                    <a
                                        href={item.source_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="text-xs text-secondary hover:underline"
                                    >
                                        المصدر
                                    </a>
                                {/if}
                            </div>
                        </li>
                    {:else}
                        <li class="text-sm text-zinc-500">لا توجد نتائج في هذا القطاع.</li>
                    {/each}
                </ul>
            </article>

            <article class="border border-zinc-200 rounded-lg p-4 bg-white">
                <header class="flex items-center justify-between gap-3 mb-3 border-b border-zinc-100 pb-2">
                    <div>
                        <h3 class="text-xl font-bold mb-0!">التحديات</h3>
                        <p class="text-xs text-zinc-500 mt-1 mb-0!">مشاكل يعاني منها المواطن وقد تطلب حلولاً طويلة الأمد</p>
                    </div>
                    <a href="/issues" class="text-sm text-secondary hover:underline">عرض الكل ({totalIssues})</a>
                </header>
                <ul class="space-y-3 mb-0! p-0!">
                    {#each filteredIssues as item}
                        <li class="pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                            <h4 class="text-base font-semibold mb-1! leading-7">{item.title}</h4>
                            <p class="text-sm text-zinc-600 mb-1!">{item.description}</p>
                            {#if item.source_url}
                                <div class="text-xs text-zinc-500 flex items-center gap-2 mb-0!">
                                    <a
                                        href={item.source_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="text-xs text-secondary hover:underline"
                                    >
                                        المصدر
                                    </a>
                                </div>
                            {/if}
                        </li>
                    {:else}
                        <li class="text-sm text-zinc-500">لا توجد نتائج في هذا القطاع.</li>
                    {/each}
                </ul>
            </article>
        </div>
    </section>

    <section aria-labelledby="promises-heading" class="space-y-4">
        <header class="flex items-end justify-between gap-4 border-b border-zinc-200 pb-3">
            <div>
                <h2 id="promises-heading" class="text-3xl font-bold mb-0!">الوعود الحكومية</h2>
                <p class="text-zinc-600 mt-2 mb-0!">قائمة الوعود التي أطلقتها الحكومة وحالتها التنفيذية</p>
                <p class="text-xs text-zinc-500 mt-1 mb-0!">ترتيب العناصر: من الأحدث إلى الأقدم</p>
            </div>
            <a href="/promises" class="text-sm text-secondary hover:underline shrink-0">عرض كل الوعود ({totalPromises})</a>
        </header>

        <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-0! p-0!">
            {#each topPromises as promise}
                <li class="border border-zinc-200 rounded-lg p-4 bg-white">
                    <h3 class="text-lg font-semibold leading-8 mb-2!">{promise.title}</h3>
                    {#if promise.description}
                        <p class="text-sm text-zinc-600 mb-3!">{promise.description}</p>
                    {/if}
                    <p class="text-xs text-zinc-500 mb-1!">
                        الحالة: <strong>{statusLabels[promise.status] ?? promise.status}</strong>
                    </p>
                    <div class="text-xs text-zinc-500 flex items-center gap-2 mb-0!">
                        <time datetime={promise.date_made}>{formatDate(promise.date_made)}</time>
                        {#if promise.source_url}
                            <span aria-hidden="true">|</span>
                            <a
                                href={promise.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-xs text-secondary hover:underline"
                            >
                                المصدر
                            </a>
                        {/if}
                    </div>
                </li>
            {/each}
        </ul>
    </section>

    <section aria-labelledby="studies-heading" class="space-y-4">
        <header class="flex items-end justify-between gap-4 border-b border-zinc-200 pb-3">
            <div>
                <h2 id="studies-heading" class="text-3xl font-bold mb-0!">الدراسات والتقارير</h2>
                <p class="text-zinc-600 mt-2 mb-0!">فهرس يجمع أبرز الدراسات والمقالات عن سوريا</p>
                <p class="text-xs text-zinc-500 mt-1 mb-0!">ترتيب العناصر: من الأحدث إلى الأقدم</p>
            </div>
            <a href="/studies" class="text-sm text-secondary hover:underline shrink-0">عرض كل الدراسات ({totalStudies})</a>
        </header>

        <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-0! p-0!">
            {#each topStudies as study}
                <li class="border border-zinc-200 rounded-lg p-4 bg-white">
                    <h3 class="text-lg font-semibold leading-8 mb-2!">{study.title}</h3>
                    {#if study.description}
                        <p class="text-sm text-zinc-600 mb-3!">{study.description}</p>
                    {/if}
                    {#if study.author}
                        <p class="text-xs text-zinc-500 mb-1!">الجهة: <strong>{study.author}</strong></p>
                    {/if}
                    <div class="text-xs text-zinc-500 flex items-center gap-2 mb-0!">
                        <time datetime={study.date_made}>{formatDate(study.date_made)}</time>
                        {#if study.source_url}
                            <span aria-hidden="true">|</span>
                            <a
                                href={study.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-xs text-secondary hover:underline"
                            >
                                المصدر
                            </a>
                        {/if}
                    </div>
                </li>
            {/each}
        </ul>
    </section>
</main>