<!--
@component
The Interlinear component.
-->
<script>
    export let interlinearBackground, defaultTextColor, defaultFont;
    console.log(
        "Interlinear props:",
        interlinearBackground,
        defaultTextColor,
        defaultFont
    );
</script>

<!--HTML-->

<div
    id="interlinearContent"
    style="
        --interlinearBackground: {interlinearBackground};
        --defaultTextColor: {defaultTextColor};
        --defaultFont: {defaultFont};
        
        margin: 0px;
		padding: 0px;
        background-color: {interlinearBackground};
        color: {defaultTextColor};

        display: flex;
        flex-direction: row;
    "
>
    <p style="padding: 0px; margin: 0px;">pie</p>
</div>

<!--CSS-->

<style>
</style>
