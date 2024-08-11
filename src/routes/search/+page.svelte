<script>
</script>

<h1>Търсене</h1>
<p>Потърсете статия...</p>

<label class="search">
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
        </svg>
    </span>
    <input placeholder="Търсене..." type="text" name="search" autocomplete="off" value="">
</label>


<style>
    h1 {
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 600;
    }

    p {
        margin-bottom: 1.5rem;
        margin-top: 0.5rem;
        font-style: italic;
    }

    .search {
        display: block;
        position: relative;
    }

    .search span {
        opacity: .75;
        padding-left: .5rem;
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }

    .search svg {
        display: inline-block;
        height: 1.5rem;
        width: 1.5rem;
        fill: rgb(var(--color-text-base));
    }

    .search input {
        padding: .75rem .75rem .75rem 2.5rem;
        background-color: rgba(var(--color-fill));
        border-color: rgba(var(--color-text-base), .4);
        border-width: 1px;
        border-radius: .25rem;
        display: block;
        width: 100%;
    }

    .search input:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
        border-color: rgba(var(--color-accent));
    }
</style>