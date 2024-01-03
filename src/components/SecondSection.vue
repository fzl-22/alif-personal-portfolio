<script>
export default {
  name: 'SecondSection',
};
</script>
<template>
  <!-- <h1>alo grayscale</h1> -->
  <div id="bio">
    <v-container class="pa-9">
      <v-row>
        <v-col>
          <img src="../assets/alif.png" alt="" width="80%" />
          <!-- baris 1 -->
        </v-col>

        <v-col class="border">
          <!-- deskripsi -->
          <v-sheet class="ma-5 text-left">
            <p class="">my biography</p>
            <br />
            <h1 class="">web designer UI & informaticm Engineer</h1>
            <br />
            <p class="">
              I loved UI design when join as Front-End developer training at
              abound course, even based love art, design, and drawing since
              2021. I can give your contribute a new passion!
            </p>

            <v-container>
              <v-row class="w-100 text-left flex-start">
                <v-col>
                  <b>Name</b>: Alif Rizky
                  <br />
                  <b>Email</b>: AlifRizky@mail.com
                </v-col>
                <v-col>
                  <b>From</b>: Batam
                  <br />
                  <b>Phone</b>: 0812345678910
                </v-col>
              </v-row>
            </v-container>
            <br />
            <v-container>
              <v-row>
                <v-col class="" cols="4">
                  <b>FOLLOW ME :</b>
                </v-col>
                <v-col cols="1">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="21"
                      viewBox="0 0 448 512"
                    >
                      !Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2023
                      Fonticons, Inc.
                      <path
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                      />
                    </svg>
                  </a>
                </v-col>
                <v-col cols="1">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="21"
                      viewBox="0 0 448 512"
                    >
                      !Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2023
                      Fonticons, Inc.
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </a>
                </v-col>
                <v-col cols="1">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="21"
                      viewBox="0 0 512 512"
                    >
                      !Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2023
                      Fonticons, Inc.
                      <path
                        d="M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8 .3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4 .6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"
                      />
                    </svg>
                  </a>
                </v-col>
                <v-col cols="1">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="21"
                      viewBox="0 0 448 512"
                    >
                      !Font Awesome Free 6.5.1 by @fontawesome -
                      https://fontawesome.com License -
                      https://fontawesome.com/license/free Copyright 2023
                      Fonticons, Inc.
                      <path
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                  </a>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <button class="bg-green px-5 py-3 rounded-pill">
                    portofolio
                  </button>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
body {
  background-image: url('../assets/background.png');
  background: cover;
  background-size: cover;
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
