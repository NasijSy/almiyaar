<script>
    import Head from '$lib/components/Head.svelte';
</script>

<Head
    title="عن المشروع"
    description="مقدمة عن مشروع المعيار وأهدافه ومنهجيته"
    canonical="/about"
/>

<main class="mx-auto w-full max-w-7xl px-3 py-2" dir="rtl">
    <header class="mb-6 pb-4">
        <h1 class="mb-1 text-3xl font-bold leading-tight md:text-4xl">مقدمة عن مشروع المعيار</h1>
        <p class="mb-0 text-zinc-600">
            مشروع تطوعي يقدم تقريراً الكترونياً عن الأداء الحكومي في سوريا بشكل مبسط يغطي القطاعات المختلفة ويجمع الإنجازات التي تستحق الإشادة والعثرات التي ربما كان يمكن تجنبها وأبرز هموم المواطن في مكان واحد بهدف توحيد الجهود وإثراء النقاش العام سعياً لواقع أفضل.
        </p>
    </header>

    <section class="mb-8" aria-labelledby="mission-heading">
        <h2 id="mission-heading" class="mb-2 border-b border-zinc-200 pb-2 text-2xl font-semibold">الأهداف</h2>
        <ul class="list-disc! space-y-2 p-0 m-0">
            <li class="rounded-md">تقديم موجز عن الأداء الحكومي في سوريا بشكل يسهل المتابعة.</li>
            <li class="rounded-md">تغطية لإنجازات الحكومة وعثراتها في مكان واحد بشفافية.</li>
            <li class="rounded-md">تسليط الضوء على هموم المواطن والمشاكل التي يعاني منها لتوحيد الجهود نحو إيجاد حلول لها.</li>
        </ul>
    </section>

    <section class="mb-8" aria-labelledby="methodology-heading">
        <h2 id="methodology-heading" class="mb-2 border-b border-zinc-200 pb-2 text-2xl font-semibold">المنهجية</h2>
        <ul class="grid gap-2 p-0 m-0 list-disc!" aria-label="عناصر المنهجية">
            <li class="rounded-md">فرز كل عنصر محتوى حسب القطاع والتصنيف لسهولة التصفح.</li>
            <li class="rounded-md">إدراج روابط للمصادر تدعم كل عنصر.</li>
            <li class="rounded-md">الاعتماد على تقارير متاحة للعلن من مصادر موثوقة.</li>
            <li class="rounded-md">تحديث المحتوى بشكل مستمر عند ورود معلومات جديدة.</li>
        </ul>
    </section>

    <section class="mb-8" aria-labelledby="data-heading">
        <h2 id="data-heading" class="mb-2 border-b border-zinc-200 pb-2 text-2xl font-semibold">البيانات والمصادر</h2>
        <p class="mb-0 text-zinc-600">
            يعتمد المشروع على بيانات وتقارير ومعلومات متوفرة للعامة.  توضع روابط المصادر المرجعية مع كل عنصر لدعم الشفافية والتحقق وتتم مراجعة المداخلات قبل اعتمادها ونشرها.
        </p>
    </section>

    <section class="mb-8" aria-labelledby="contribution-heading">
        <h2 id="contribution-heading" class="mb-2 border-b border-zinc-200 pb-2 text-2xl font-semibold">كيف يمكن المساهمة؟</h2>
        <p class="mb-3 text-zinc-600">
            يمكن للجميع المساعدة بمختلف الأشكال مثل إرسال اقتراحات إضافة أو تعديلات، أو الإبلاغ عن أخطاء في البيانات، أو تقديم
            مصادر موثوقة لعناصر جديدة أو المساهمة في تطوير الموقع.
        </p>
        <p class="mb-0">
            <a href="/contribute" class="font-semibold text-secondary underline underline-offset-2">الذهاب إلى صفحة المساهمة</a>
        </p>
    </section>
</main>