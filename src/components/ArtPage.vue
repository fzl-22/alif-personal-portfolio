<template>
  <div class="art-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="462" height="819" viewBox="0 0 462 819" fill="none">
        <path d="M0 819L6.10352e-05 0L462 0L0 819Z" fill="#2D2D2D"/>
    </svg>
    <div class="triangle-background">
      <svg xmlns="http://www.w3.org/2000/svg" width="1333" height="2342" viewBox="0 0 1333 2342" fill="none">
          <path d="M1333 0L1333 2342H0L1333 0Z" fill="#2D2D2D"/>
      </svg>
    </div>

    <div class="title-container">
      <h1>My Completion Work</h1>
    </div>

    <div class="theme theme1">
      <!-- <h2>UI Design</h2> -->
      <div class="images">
        <div class="title-and-images">
          <h2 class="tema1">UI Design</h2>
          <div class="image-container">
            <img alt="Vue logo" class="logo" src="./Image/Socmed.png" width="125" height="125" />
            <img alt="Vue logo" class="gambar" src="./Image/UI_Mobile.png" width="250" height="125" />
          </div>
        </div>
      </div>
    </div>

    <hr class="line" />

    <div class="theme theme2">
      <h2>Non-UI Design</h2>
      <div class="images">
        <img alt="Vue logo" class="gambar" src="./Image/Whitespace.png" width="250" height="125" />
        <img alt="Vue logo" class="gambar" src="./Image/BGbiru.png" width="250" height="125" />
        <img alt="Vue logo" class="gambar" src="./Image/Knots.jpeg" width="250" height="125" />
      </div>
    </div>

    <hr class="line" />

    <div class="theme theme3">
      <h2>Drawing Art</h2>
      <div class="images">
        <img alt="Vue logo" class="logo" src="./Image/Anime.jpeg" width="125" height="125" />
        <img alt="Vue logo" class="logo" src="./Image/Clock.jpeg" width="125" height="125" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArtPage',
}
</script>

<style scoped>

h1{
  font-size: 50px;
}

.tema1{
  margin-left: -500px;
}
.theme {
  margin-top: 2rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  display: inline-block;
  position: relative;
}

.title-container {
  margin-top: -45rem;
  margin-left: 0rem;
  position: relative;
}

.title-container h1 {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0);
  padding: 0 20px;
  border-radius: 0px;
  font-weight: bold;
}

.theme1 {
  margin-top: 10rem;
  margin-left: -30rem;
  z-index: 1; /* Set z-index to ensure it's in front of other elements */
}

.title-and-images {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  display: flex;
  flex-direction: row;
}

.images {
  margin-left: 1rem; /* Adjust the margin as needed */
}

.theme2 {
  margin-left: 40rem;
}

.theme3 {
  margin-top: 2rem;
  margin-left: 0rem;
  z-index: 1; /* Set z-index to ensure it's in front of other elements */
}

.theme h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.line {
  width: 60%;
  margin: 0 auto;
  margin-left: 10rem;
  border: none;
  border-top: 1.5px solid #ffffff;
}

.images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.logo,
.gambar {
  width: 230px;
  height: 230px;
  margin: 1rem; /* Add margin for spacing between images */
  position: relative;
  z-index: 2; /* Set z-index to ensure it's in front of the background */
}

.gambar {
  width: 400px;
  height: 230px;
}

.segitiga1 {
  margin-top: 2rem;
  margin-left: -70rem;
  position: relative;
  text-align: center;
  z-index: 0; /* Set z-index to ensure it's behind other elements */
}

.art-container {
  margin-top: 5rem;
  margin-left: 0rem;
  position: relative;
  text-align: center;
}

h2 {
  font-weight: bold;
}

@media (min-width: 1024px) {
  .theme {
    padding: 2rem 4rem;
  }
}
.triangle-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>
