<script>
    import EditIcon from '@iconify-svelte/akar-icons/edit';
    let links = [
        { name: "الإنجازات", href: "/achievements" },
        { name: "المشاكل والتحديات", href: "/challenges" },
        { name: "الوعود الحكومية", href: "/promises" },
        { name: "فهرس الدراسات", href: "/studies" },
    ];
    let projectLinks = [
        { name: "ساهم معنا", href: "/contribute" },
        { name: "عن المشروع", href: "/about" },
    ];
</script>
<footer class="max-w-7xl mx-auto px-2 mt-12 mb-4 w-full" dir="rtl">
    <div class="flex flex-col md:flex-row gap-6 justify-between">
        <div class="flex flex-col items-start gap-1 px-2 md:px-0">
            <div class="flex flex-row items-center gap-4 mb-2">
                <img src="/logo.png" alt="شعار تقرير الأداء الحكومي في سوريا" class="h-12" />
                <h2 class="text-2xl! text-secondary font-bold mb-0!">معيار</h2>
            </div>
            <p class="max-w-md">تقرير الكتروني يقدم لمحة عن الأداء الحكومي في سوريا بشكل مختصر ويعرض أبرز الإنجازات والتحديات في مكان واحد بهدف التوعية وإثراء النقاش العام</p>
            <div class="flex flex-row gap-4 text-palette-violet">
                <a href="https://www.facebook.com/NasijSy" class="hover:text-primary transition-colors" aria-label="Nasij on Facebook" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#SVGXv8lpc2Y)"><path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clip-rule="evenodd"/></g><defs><clipPath id="SVGXv8lpc2Y"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                </a>
                <a href="https://x.com/Almiyaar" class="hover:text-primary transition-colors" aria-label="Nasij on X (Twitter)" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574z"/></svg>
                </a>
                <a href="https://discord.gg/VqysmYaQbN" class="hover:text-primary transition-colors" aria-label="Join us on Discord" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.6 18.6 0 0 0-5.487 0a12 12 0 0 0-.617-1.23A.08.08 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.1.1 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20 20 0 0 0 5.993 2.98a.08.08 0 0 0 .084-.026a14 14 0 0 0 1.226-1.963a.074.074 0 0 0-.041-.104a13 13 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125q.19-.14.372-.287a.08.08 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.08.08 0 0 1 .079.009q.18.148.372.288a.075.075 0 0 1-.006.125q-.895.515-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.08.08 0 0 0 .084.028a20 20 0 0 0 6.002-2.981a.08.08 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028M8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38m7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38"/></svg>
                </a>
                <a href="https://github.com/NasijSy/almiyaar" class="hover:text-primary transition-colors" aria-label="GitHub" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#SVGXv8lpc2Y)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd"/></g><defs><clipPath id="SVGXv8lpc2Y"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                </a>
            </div>
            <div class="flex flex-col md:flex-row items-center gap-1 mt-2">
                {#each projectLinks as link}
                    <a href={link.href} class="footer-link">{link.name}</a>
                {/each}
            </div>
        </div>
        <div class="flex flex-col gap-2 px-2 md:px-0">
            <h3 class="text-lg! font-bold mb-0!">راوبط الأقسام</h3>
            <ul class="flex flex-col self-start gap-y-1 list-none!">
            {#each links as link}
                <li class="inline-flex">
                    <a href={link.href} class="footer-link">{link.name}</a>
                </li>
            {/each}
            </ul>
        </div>
    </div>
</footer>

<style>
    @reference '$lib/styles/layout.css';

    .footer-link {
        @apply rounded-sm text-start text-gray-600 px-2 py-0.5 hover:bg-primary hover:text-black transition-colors duration-200 ease-out;
    }
</style>