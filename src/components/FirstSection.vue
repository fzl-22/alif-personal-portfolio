<script>
export default {
  name: 'FirstSection',
};
</script>

<template>
  <div class="v3_2">
    <img class="logo-prot" src="../assets/iniporto-logo.png" alt="" />
    <div class="v6_28"></div>
    <div class="v13_123"></div>
    <div class="name"></div>
    <div class="v13_128">
      <span class="v13_129">Hi, i'm Alif Rizky</span
      ><span class="v13_130">Informatics Design</span
      ><span class="v13_131"
        >I loved UI design when join as Front-End developer training at abound
        course, even based love art, design, and drawing since 2021</span
      >
    </div>
    <div class="name"></div>
    <a href="#"><img class="btn-crt" src="../assets/button.png" alt="" /></a>
    <img class="alief-he" src="../assets/alif-header.png" alt="" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.logo-prot {
  position: absolute;
  left: 179px;
  top: 105px;
}
.btn-crt {
  position: absolute;
  top: 700px;
  left: 179px;
}
.v3_2 {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v6_28 {
  width: 100%;
  height: 100%;
  background: url('../assets/v6_28.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.alief-he {
  position: absolute;
  top: 0;
  right: 0;
  height: 1080px;
  transform: scaleX(-1);
  transform: scaleX(-1);
}
.name {
  color: #fff;
}
.v13_128 {
  width: 669px;
  height: 188px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 446px;
  left: 179px;
  overflow: hidden;
}
.v13_129 {
  width: 282px;
  color: rgba(255, 255, 255, 1);
  position: relative;
  top: 0px;
  left: 0px;
  font-family: Montserrat;
  font-weight: Regular;
  font-size: 36px;
  opacity: 1;
  text-align: left;
}
.v13_130 {
  width: 606px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 45px;
  left: 0px;
  font-family: Mplus 1p Bold;
  font-weight: Bold;
  font-size: 64px;
  opacity: 1;
  text-align: left;
}
.v13_131 {
  width: 669px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 140px;
  left: 0px;
  font-family: Mplus 1p;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.name {
  color: #fff;
}
</style>
