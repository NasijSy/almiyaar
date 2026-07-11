<script>
  import { page } from '$app/stores';

  let {
    title,
    description = null,
    canonical = null,
    robots = null,
    ogUrl = null,
    ogImage = null,
  } = $props();

  let defaultTitle = 'المعيار - لمحة عن الأداء الحكومي في سوريا';
  let titleExtension = 'المعيار';
  let newtitle = $derived(title ? title + ' | ' + titleExtension : defaultTitle);
  let resolvedOgImage = $derived(
    new URL(ogImage || '/og-image.jpg', `${$page.url.origin}/`).toString()
  );
  let resolvedCanonical = $derived(
    canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${$page.url.origin}${canonical}`
      : null
  );
  let resolvedOgUrl = $derived(
    ogUrl
      ? ogUrl.startsWith('http')
        ? ogUrl
        : `${$page.url.origin}${ogUrl}`
      : `${$page.url.origin}${$page.url.pathname}${$page.url.search}`
  );
</script>

<svelte:head>
  <title>{newtitle}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
  {#if resolvedCanonical}
    <link rel="canonical" href={resolvedCanonical} />
  {/if}
  {#if robots}
    <meta name="robots" content={robots} />
  {/if}
  <meta property="og:url" content={resolvedOgUrl} />
  <meta property="og:image" content={resolvedOgImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/jpeg" />
</svelte:head>