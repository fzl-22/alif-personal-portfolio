<script>
    export default {
        name: 'Third Section',
    }
</script>

<template>
    <div class="skill">
        <v-container>
            <v-row class="skill-row">
                <v-col class="image-skill">
                    <img class="image" src="../assets/skills.jpg" alt="Skills" />
                </v-col>
                <v-col class="text-skill">
                    <h3>My Skills</h3>
                    <h1>My Featured</h1>
                    <p>I Speciallize branding some strategy as using my passionate to creating an innovation post, i always begin based on plan mapping to completion the satisfication</p>
                    <div class="list-skill">
                        <p>
                            <font-awesome-icon :icon="['fas', 'paint-brush']" style="margin-right: 5px;"/>
                            UI/UX Designer
                        </p>
                        <p>
                            <font-awesome-icon :icon="['fas', 'lightbulb']" style="margin-right: 5px;"/>
                            Ideas & Developing
                        </p>
                        <p>
                            <font-awesome-icon :icon="['fab', 'vuejs']" style="margin-right: 5px;"/>
                            Front-End
                        </p>
                        <p>
                            <font-awesome-icon :icon="['fab', 'figma']" style="margin-right: 5px;"/>
                            UI Intermediate - Expert
                        </p>
                        <p>
                            <font-awesome-icon :icon="['fas', 'object-group']" style="margin-right: 5px;"/>
                            Non UI - Design
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
    body{
        background-image: url('../assets/background2.png');
        background: cover;
        background-size: cover;
        min-height: 100vh;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
    .skill-row{
        display: flex;
        justify-content: center;
        padding: 0 100px;

    }
    .image{
        width: 450px;
        height: 528px;
        border: 1px solid #000;
        border-radius: 20px;
        padding: 15px;
        transform: translateX(-20px);
        animation: slideFadeInImage 1s ease-in-out forwards;
    }
    .text-skill{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        transform: translateX(20px);
        animation: slideFadeInText 1s ease-in-out forwards;
    }
    .list-skill{
        margin-top: 10px;
    }

    @keyframes slideFadeInImage{
        from{
            opacity: 0;
            transform: translateX(-20px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideFadeInText{
        from{
            opacity: 0;
            transform: translateX(20px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
    
</style>