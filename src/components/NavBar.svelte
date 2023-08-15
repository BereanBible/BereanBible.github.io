<!--
@component
The navbar component.
-->
<script>
    export let navBackground, defaultTextColor, defaultFont, navHeight;
    console.log("[[[", navBackground, defaultTextColor, defaultFont, navHeight);
</script>

<!--HTML-->

<div
    id="navBar"
    style="
        --navBackground: {navBackground};
        --defaultTextColor: {defaultTextColor};
        --defaultFont: {defaultFont};
        --navHeight: {navHeight};
        
        display: flex;
        flex-direction: row;
    "
>
    <div
        id="navLeft"
        style="
            min-width: {navHeight};
        "
    >
        <!--???-->
    </div>

    <div
        id="navMiddle"
        style="
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        "
    >
        <!--???-->
        <h1 id="navPassageText">TestNavMiddle</h1>
    </div>

    <div
        id="navRight"
        style="
            min-width: {navHeight};
        "
    >
        <!--???-->
    </div>
</div>

<!--CSS-->

<style>
    #navBar {
        /*On mobile center should scroll down, */
        width: 100vw;
        height: var(--navHeight);
        background-color: var(--navBackground);
        /*DEBUG*/
        color: white;
    }

    #navPassageText {
        font-size: 1rem;
    }
</style>
