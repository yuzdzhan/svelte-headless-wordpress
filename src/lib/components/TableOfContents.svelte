<script>
    /** @type {Array.<{level: number, id: string, text: string}>} */
    export let toc = [];
</script>

<h2>Съдържание</h2>
<details>
    <summary>Отворете съдържанието</summary>
    <ul>
        {#each toc as item}
            <li style="margin-left: {item.level * 20}px">
                <a href="#{item.id}">{item.text}</a>
            </li>
        {/each}
    </ul>
</details>

<style>
    details {
        margin-bottom: 40px;
    }

    summary {
        cursor: pointer;
    }
</style>