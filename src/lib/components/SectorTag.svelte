<script>
    let { title, description = '' } = $props();
</script>

<span class="sector-tag" title={description} aria-label={`القطاع: ${title}`}>
    {title}
</span>

<style>
    .sector-tag {
        display: inline-flex;
        align-items: center;
        border: 1px solid #d4d4d8;
        border-radius: 999px;
        padding: 0.2rem 0.6rem;
        font-size: 0.85rem;
        line-height: 1.4;
        color: #27272a;
        background-color: #fafafa;
        white-space: nowrap;
    }
</style>
