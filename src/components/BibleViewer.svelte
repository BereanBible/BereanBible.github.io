<!--
@component
The Bible component.
-->
<script>
    import { onMount } from "svelte";
    // import NASB95 from "../data/bibles/NASB95.json";

    export let bibleBackground, defaultTextColor, defaultFont;

    export let book;
    export let chapter;

    console.log(
        "Bible props:",
        bibleBackground,
        defaultTextColor,
        defaultFont,
        book,
        chapter
    );

    // let data = NASB95[0][0][0][1];
    // console.log("data=", data);

    var jaxon = require("jaxon");

    jaxon
        .factory()
        .on("parse", "__text", function (err, data) {
            console.log("Text=", data);
        })
        .parse("../data/bibles/NASB95.json");
</script>

<!--HTML-->

<div
    id="bibleContent"
    style="
        --bibleBackground: {bibleBackground};
        --defaultTextColor: {defaultTextColor};
        --defaultFont: {defaultFont};
        
        margin: 0px;
		padding: 0px;
        background-color: {bibleBackground};
        color: {defaultTextColor};

        display: flex;
        flex-direction: row;
    "
>
    <!-- 
        {#each config.backgroundImages as imgObj}
            <img
                src={base + '/backgrounds/' + imgObj.filename}
                class="image_selector_pane_box"
                on:click={() => {
                    voi_imgSrc = imgObj.filename;
                }}
            />
        {/each} 
    -->
    <p style="padding: 0px; margin: 0px;">
        In Thessalonica 17 When Paul and his companions had passed through
        Amphipolis and Apollonia, they came to Thessalonica, where there was a
        Jewish synagogue. 2 As was his custom, Paul went into the synagogue, and
        on three Sabbath days he reasoned with them from the Scriptures, 3
        explaining and proving that the Messiah had to suffer and rise from the
        dead. “This Jesus I am proclaiming to you is the Messiah,” he said. 4
        Some of the Jews were persuaded and joined Paul and Silas, as did a
        large number of God-fearing Greeks and quite a few prominent women. 5
        But other Jews were jealous; so they rounded up some bad characters from
        the marketplace, formed a mob and started a riot in the city. They
        rushed to Jason’s house in search of Paul and Silas in order to bring
        them out to the crowd.[a] 6 But when they did not find them, they
        dragged Jason and some other believers before the city officials,
        shouting: “These men who have caused trouble all over the world have now
        come here, 7 and Jason has welcomed them into his house. They are all
        defying Caesar’s decrees, saying that there is another king, one called
        Jesus.” 8 When they heard this, the crowd and the city officials were
        thrown into turmoil. 9 Then they made Jason and the others post bond and
        let them go. In Berea 10 As soon as it was night, the believers sent
        Paul and Silas away to Berea. On arriving there, they went to the Jewish
        synagogue. 11 Now the Berean Jews were of more noble character than
        those in Thessalonica, for they received the message with great
        eagerness and examined the Scriptures every day to see if what Paul said
        was true. 12 As a result, many of them believed, as did also a number of
        prominent Greek women and many Greek men. 13 But when the Jews in
        Thessalonica learned that Paul was preaching the word of God at Berea,
        some of them went there too, agitating the crowds and stirring them up.
        14 The believers immediately sent Paul to the coast, but Silas and
        Timothy stayed at Berea. 15 Those who escorted Paul brought him to
        Athens and then left with instructions for Silas and Timothy to join him
        as soon as possible. In Athens 16 While Paul was waiting for them in
        Athens, he was greatly distressed to see that the city was full of
        idols. 17 So he reasoned in the synagogue with both Jews and God-fearing
        Greeks, as well as in the marketplace day by day with those who happened
        to be there. 18 A group of Epicurean and Stoic philosophers began to
        debate with him. Some of them asked, “What is this babbler trying to
        say?” Others remarked, “He seems to be advocating foreign gods.” They
        said this because Paul was preaching the good news about Jesus and the
        resurrection. 19 Then they took him and brought him to a meeting of the
        Areopagus, where they said to him, “May we know what this new teaching
        is that you are presenting? 20 You are bringing some strange ideas to
        our ears, and we would like to know what they mean.” 21 (All the
        Athenians and the foreigners who lived there spent their time doing
        nothing but talking about and listening to the latest ideas.) 22 Paul
        then stood up in the meeting of the Areopagus and said: “People of
        Athens! I see that in every way you are very religious. 23 For as I
        walked around and looked carefully at your objects of worship, I even
        found an altar with this inscription: to an unknown god. So you are
        ignorant of the very thing you worship—and this is what I am going to
        proclaim to you. 24 “The God who made the world and everything in it is
        the Lord of heaven and earth and does not live in temples built by human
        hands. 25 And he is not served by human hands, as if he needed anything.
        Rather, he himself gives everyone life and breath and everything else.
        26 From one man he made all the nations, that they should inhabit the
        whole earth; and he marked out their appointed times in history and the
        boundaries of their lands. 27 God did this so that they would seek him
        and perhaps reach out for him and find him, though he is not far from
        any one of us. 28 ‘For in him we live and move and have our being.’[b]
        As some of your own poets have said, ‘We are his offspring.’[c] 29
        “Therefore since we are God’s offspring, we should not think that the
        divine being is like gold or silver or stone—an image made by human
        design and skill. 30 In the past God overlooked such ignorance, but now
        he commands all people everywhere to repent. 31 For he has set a day
        when he will judge the world with justice by the man he has appointed.
        He has given proof of this to everyone by raising him from the dead.” 32
        When they heard about the resurrection of the dead, some of them
        sneered, but others said, “We want to hear you again on this subject.”
        33 At that, Paul left the Council. 34 Some of the people became
        followers of Paul and believed. Among them was Dionysius, a member of
        the Areopagus, also a woman named Damaris, and a number of others.
    </p>
</div>

<!--CSS-->

<style>
</style>
