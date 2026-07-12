<script>
    import Head from '$lib/components/Head.svelte';

    const TALLY_FORM_URL = 'https://tally.so/r/NpQXN0';
    const DISCORD_URL = 'https://discord.gg/Cs6uGTchpj';
    const GITHUB_URL = 'https://github.com/NasijSy/almiyaar';
</script>

<Head
    title="ساهم معنا"
    description="اختر الطريقة المناسبة للمساهمة في تطوير مشروع المعيار: استمارة لتقديم اقتراحات أو من خلال الانضمام لمجتمع ديسكورد أو المساهمة في تطوير المشروع على GitHub"
    canonical="/contribute"
/>

<main class="mx-auto w-full max-w-7xl px-3 py-2" dir="rtl">
    <header class="mb-6 border-b-2 border-zinc-200 pb-4">
        <h1 class="mb-1 text-3xl font-bold leading-tight md:text-4xl">ساهم معنا</h1>
        <p class="mb-0 text-zinc-600">يمكنك المساهمة في المشروع ودعمه بطرق مختلفة</p>
    </header>

    <div class="grid gap-4 md:grid-cols-3">
        <section class="rounded-lg border border-zinc-200 bg-white p-4" aria-labelledby="email-form-heading">
            <h2 id="email-form-heading" class="mb-2 text-xl font-semibold">1) إرسال ملاحظة أو اقتراح</h2>
            <p class="mb-4 text-zinc-600">
            يمكنكم التواصل معنا أو المساهمة بإرسال أي ملاحظات أو اقتراحات من خلال رابط الاستمارة
            </p>

            <a class="mb-2 inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 font-semibold text-white no-underline hover:opacity-90" href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer">
                استمارة التواصل
            </a>
        </section>

        <section class="rounded-lg border border-zinc-200 bg-white p-4" aria-labelledby="discord-heading">
            <h2 id="discord-heading" class="mb-2 text-xl font-semibold">2) الانضمام إلى مجتمع Discord</h2>
            <p class="mb-4 text-zinc-600">
                إذا كنت مهتماً بما نقدمه انضم للمجتمع وساهم في النقاشات وتبادل الأفكار
            </p>
            <a class="font-semibold text-secondary underline underline-offset-2" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">الانضمام إلى مجتمع Discord</a>
        </section>

        <section class="rounded-lg border border-zinc-200 bg-white p-4" aria-labelledby="github-heading">
            <h2 id="github-heading" class="mb-2 text-xl font-semibold">3) المساهمة عبر GitHub</h2>
            <p class="mb-4 text-zinc-600">
                يمكنك الإبلاغ عن مشاكل أو اقتراحات أو المساهمة بشكل مباشر في المحتوى أو تطوير الموقع
            </p>
            <a class="font-semibold text-secondary underline underline-offset-2" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">فتح مستودع GitHub</a>
        </section>
    </div>
</main>