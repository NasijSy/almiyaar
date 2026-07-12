<script>
    import { onMount } from 'svelte';
    import MoreHorizontalIcon from '@iconify-svelte/akar-icons/more-horizontal';
    import XSmallIcon from '@iconify-svelte/akar-icons/x-small';
    import ChevronDownIcon from '@iconify-svelte/akar-icons/chevron-down';

    let mobileMenuOpen = $state(false);
    let navShell;
    let mobileToggle;

    const sections = [
        { name: 'الإنجازات', href: '/achievements' },
        { name: 'السلبيات', href: '/mistakes' },
        { name: 'التحديات', href: '/issues' },
        { name: 'الوعود الحكومية', href: '/promises' },
        { name: 'الدراسات والتقارير', href: '/studies' }
    ];

    const mainLinks = [
        { name: 'الصفحة الرئيسية', href: '/' },
        { name: 'ساهم معنا', href: '/contribute' },
        { name: 'عن المشروع', href: '/about' }
    ];

    const handleTouchStart = (event) => {
        if (!mobileMenuOpen) return;

        const target = event.target;
        if (!(target instanceof Node)) return;

        if (navShell?.contains(target) || mobileToggle?.contains(target)) return;

        mobileMenuOpen = false;
    };

    onMount(() => {
        document.addEventListener('touchstart', handleTouchStart, { passive: true });

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    });

</script>

<header class="w-full sm:max-w-7xl sm:mx-auto pt-4 px-2 mb-4" dir="rtl">
    <div bind:this={navShell} class="relative rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur px-3 sm:px-4 py-3">
        <div class="flex items-center justify-between gap-3">
            <a class="h-14 flex items-center gap-x-2 shrink-0" href="/" title="الصفحة الرئيسية" aria-label="الصفحة الرئيسية">
                <img src="/logo.png" alt="شعار تقرير الأداء الحكومي في سوريا" class="h-full w-auto" />
            </a>

            <nav class="hidden lg:flex items-center gap-2 text-sm" aria-label="التنقل الرئيسي">
                <a
                    href="/"
                    class="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                >
                    الصفحة الرئيسية
                </a>

                <details class="relative group">
                    <summary
                        class="list-none cursor-pointer rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors flex items-center gap-1"
                    >
                        <span>الأقسام</span>
                        <ChevronDownIcon class="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>

                    <div class="absolute top-full mt-2 right-0 min-w-56 rounded-2xl border border-zinc-200 bg-white shadow-lg p-2 z-20">
                        {#each sections as section}
                            <a
                                href={section.href}
                                class="block rounded-xl px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                            >
                                {section.name}
                            </a>
                        {/each}
                    </div>
                </details>

                {#each mainLinks.slice(1) as link}
                    <a
                        href={link.href}
                        class="rounded-full px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                    >
                        {link.name}
                    </a>
                {/each}
            </nav>

            <button
                bind:this={mobileToggle}
                type="button"
                class="lg:hidden inline-flex items-center justify-center rounded-full border border-zinc-200 p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
            >
                {#if mobileMenuOpen}
                    <XSmallIcon class="h-6 w-6" />
                {:else}
                    <MoreHorizontalIcon class="h-6 w-6" />
                {/if}
            </button>
        </div>

        {#if mobileMenuOpen}
            <nav
                id="mobile-navigation"
                class="absolute inset-x-3 top-full mt-3 z-30 lg:hidden rounded-2xl border border-zinc-200 bg-white shadow-lg p-3"
                aria-label="التنقل الرئيسي على الجوال"
            >
                <div class="grid gap-2">
                    {#each mainLinks as link}
                        <a
                            href={link.href}
                            class="rounded-2xl border border-zinc-200 px-4 py-3 text-zinc-800 hover:bg-zinc-50 transition-colors"
                            onclick={() => (mobileMenuOpen = false)}
                        >
                            {link.name}
                        </a>
                    {/each}
                </div>

                <div class="mt-4">
                    <p class="mb-2! text-sm font-semibold text-zinc-500">الأقسام</p>
                    <div class="grid gap-2">
                        {#each sections as section}
                            <a
                                href={section.href}
                                class="rounded-2xl border border-zinc-200 px-4 py-3 text-zinc-800 hover:bg-zinc-50 transition-colors"
                                onclick={() => (mobileMenuOpen = false)}
                            >
                                {section.name}
                            </a>
                        {/each}
                    </div>
                </div>
            </nav>
        {/if}
    </div>
</header>