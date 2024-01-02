<template>
  <div id="logo-section">
    <img src="../assets/figma-logo.png" alt="Figma Logo" />
    <img src="../assets/informatika-logo.png" alt="Informatika Logo" />
  </div>
  <div id="contact-section">
    <img
      src="../assets/iniporto-logo.png"
      alt="Ini Porto Logo"
      id="iniporto-logo"
    />
    <div>
      <ul id="contact-list">
        <li v-for="contact in contacts" class="contact-item" :key="contact.url">
          <a :href="contact.url"
            ><span
              ><img :src="contact.img" :alt="contact.media" />{{
                contact.data
              }}</span
            ></a
          >
        </li>
      </ul>
    </div>
  </div>
  <div id="end-section">
    <span
      ><p>
        &#9400; 2023 UI Porto. All Right Reserved | Design by
        <span>Alif Rizky</span>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      contacts: [
        {
          media: 'phone',
          data: '+62 831 9058 3385',
          url: 'https://wa.me/6283190583385',
          img: require('../assets/icons/phone.png'),
        },
        {
          media: 'mail',
          data: 'alriz197@gmail.com',
          url: 'mailto:alriz197@gmail.com',
          img: require('../assets/icons/mail.png'),
        },
        {
          media: 'mail',
          data: 'Tiban Center, Batam',
          url: 'https://maps.app.goo.gl/2nujPiTJgCWL2h5BA',
          img: require('../assets/icons/location.png'),
        },
      ],
    };
  },
};
</script>

<style>
#logo-section {
  background-color: #0a6c49;
  padding-top: 64px;
  padding-bottom: 64px;
}

#contact-section {
  background-color: #343434;
  padding-top: 64px;
  padding-bottom: 64px;
}

#end-section {
  background-color: #0c3325;
  padding: 0px 30%;
}

#logo-section > img {
  height: 96px;
  margin: 48px;
}

#iniporto-logo {
  height: 48px;
  margin-bottom: 36px;
}

#contact-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0px;
}

.contact-item {
  margin: 0px 24px;
}

.contact-item > a {
  text-decoration: none;
}

.contact-item > a > span {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.contact-item > a > span > img {
  height: 36px;
  margin-right: 12px;
}

#end-section > span {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
}

#end-section > span > p > span {
  color: #039099;
}
</style>
