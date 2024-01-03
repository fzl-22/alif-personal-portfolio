<template>
  <div class="artList">
    <div>
      <h1>My Completion Work</h1>
    </div>

    <div class="type-container">
      <div>
          <h2>UI Design</h2>
          <div>
            <img alt="Vue logo" src="../assets/Socmed.png" width="125" height="125" />
            <img alt="Vue logo" src="../assets/UI_Mobile.png" width="250" height="125" />
          </div>
        </div>
    </div>


    <div class="type-container">
      <h2>Non-UI Design</h2>
      <div>
        <img alt="Vue logo" src="../assets/Whitespace.png" width="250" height="125" />
        <img alt="Vue logo" src="../assets/BGbiru.png" width="250" height="125" />
        <img alt="Vue logo" src="../assets/Knots.jpeg" width="250" height="125" />
      </div>
    </div>
    <div class="type-container">
      <h2>Drawing Art</h2>
      <div>
        <img alt="Vue logo" src="../assets/Anime.jpeg" width="125" height="125" />
        <img alt="Vue logo" src="../assets/Clock.jpeg" width="125" height="125" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourthSection',
}
</script>

<style>
.type-container{
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  
}
.type-container img{
  margin-left: 15px;
  height: 25%;
  width: 25%;
}
.artline{
  background-image: url('../assets/fourthsection.png');
  background-size: cover;
}
</style>
