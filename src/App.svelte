<script>
	import NavBar from "./components/NavBar.svelte";
	import BibleViewer from "./components/BibleViewer.svelte";
	import MarginEditor from "./components/MarginEditor.svelte";
	import Interlinear from "./components/Interlinear.svelte";

	let nav_backgroundColor = "#353535";
	let bible_backgroundColor = "#000000";
	let margin_backgroundColor = "#000000";
	let defaultTextColor = "#ffffff";
	let defaultFont = "'Roboto', sans-serif";
	let navHeight = "30px";

	let interlinearOn = false;
</script>

<!--HTML-->

<main>
	<div
		id="Le_Body"
		style="
			--defaultBackground: #353535;
			--navBackground: {nav_backgroundColor};
			--bibleBackground: {bible_backgroundColor};
			--marginBackground: {margin_backgroundColor};
			--defaultTextColor: {defaultTextColor};
			--defaultFont: {defaultFont};
			--navHeight: {navHeight};
		"
	>
		<NavBar
			navBackground="{nav_backgroundColor},"
			defaultTextColor="{defaultTextColor},"
			defaultFont="{defaultFont},"
			{navHeight}
		/>

		<div id="main_pg">
			<div id="marginContainer" class="carousel_item">
				<!--needs to be a live edited and saved text box of the current open margin file-->
				<MarginEditor
					marginBackground="{margin_backgroundColor},"
					defaultTextColor="{defaultTextColor},"
					defaultFont="{defaultFont},"
				/>
			</div>

			<div id="bibleContainer" class="carousel_item">
				<!--???-->
				<BibleViewer
					bibleBackground="{bible_backgroundColor},"
					defaultTextColor="{defaultTextColor},"
					defaultFont="{defaultFont},"
				/>
			</div>

			{#if interlinearOn}
				<div id="interlinearContainer" class="carousel_item">
					<Interlinear
						interlinearBackground="{bible_backgroundColor},"
						defaultTextColor="{defaultTextColor},"
						defaultFont="{defaultFont},"
					/>
				</div>
			{/if}
		</div>
	</div>
</main>

<!--CSS-->

<style>
	/*
    html {
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
        overflow-y: hidden;
        overflow-x: hidden;
        background-color: pink;
        box-sizing: border-box;
    }
    */

	#Le_Body {
		background-color: var(--defaultBackground);
		color: var(--defaultTextColor);
		font-family: var(--defaultFont);

		height: auto /*calc(100vh - var(--navHeight))*/;
		width: 100vw;
		margin: 0px;
		padding: 0px;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	/*

    $(window).scroll(function() {
    var hT = $('#divName').offset().top,
        hH = $('#divName').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            //if the divName div is on the screen this code will execute.
        }
    });




    */

	/*MAIN CONTAINER*/

	#main_pg {
		width: 100vw; /*Or should be 3x auto?*/
		height: calc(100vh - var(--navHeight));
		overflow-y: auto;
		overflow-x: scroll;

		display: flex;
		flex-direction: row;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;

		/*OLD
        display: grid;
        grid-gap: 0px;
        grid-template-columns: 100vw 100vw 100vw;
        grid-auto-rows: auto;
        grid-template-areas:
            "mrg bib itl";
        */
		/*DEBUG*/
		border: dashed 0px white;
	}

	#bibleContainer {
		width: 100vw;
		background-color: var(--bibleBackground);
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		overflow-y: auto;

		/*DEBUG*/
		border: solid 1px grey;
	}

	#marginContainer {
		width: 100vw;
		background-color: var(--marginBackground);
		padding: 20px;
		overflow-y: auto;

		/*DEBUG*/
		border: solid 1px grey;
	}

	#interlinearContainer {
		width: 100vw;
		background-color: var(--defaultBackground);
		padding: 20px;
		overflow-y: auto;

		/*DEBUG*/
		border: solid 1px grey;
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel_item {
		flex-shrink: 0;
		scroll-snap-align: start;
		box-sizing: border-box;
	}
</style>
