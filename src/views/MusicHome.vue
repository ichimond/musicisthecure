<template>
    <section class="banner">
        <img class="logo-banner" src="../assets/original_images/mitc_logo_hero.png" alt="">
        <img class="img-banner" src="../assets/original_images/mitc_singing_mic_women_hero.png" alt="">
        <div class="text-banner">
            <p>Hello! We're MusicIsTheCure, a community building a bot dream team to promote the cure, artists , and their music.</p>
            <pvButton  Button label="See How" class="p-button-warning"/>
        </div>

        

    </section>
  
</template>

<script>


export default {

}
</script>

<style scoped>
.banner {
    background-image: linear-gradient(to right, blue, black);
    height: 400px;
}

.img-banner {
    height: 400px;
    float: right;
}

.logo-banner {
    height: 400px;
    float: left;
}

.text-banner {
    text-align: center;
    color: white;
    padding-top: 80px;
    line-height: 30px;
}

pvButton {
    text-align: center;
}

</style>