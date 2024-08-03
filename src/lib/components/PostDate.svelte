<script>
    import {formatDate} from '../../utils/utils.js';

    /** @type Date */
    export let date;
</script>
<div class="date">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/>
    </svg>
    <span>Последно обновено:</span>
    <span>
      <time datetime={formatDate(date)}>{formatDate(date)}</time>
    </span>
</div>

<style>

    svg {
        width: 21px;
        height: 21px;
        fill: rgba(var(--color-text-base), 0.8);
    }
    .date {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 10px 0;
    }

    .date span {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-style: italic;
        color: rgba(var(--color-text-base), 0.8);
    }
</style>