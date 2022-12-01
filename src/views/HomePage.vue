<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>sesi8</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">sesi8</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container" v-for="{eventKe, eventName, index} in semuaEvent" :key="index">
        <p style="background-color:aquamarine">{{ eventKe }} - {{ eventName }}</p>

        <ion-button @click="berfotoSekarang()">Ambil foto sekarang !</ion-button>
        <img :src="imageUrl" style="height: 300px;" />
        <p><B>Waktu : </B></p> 
        <p>{{ waktu }}</p> <br>

        <p><b>Lokasi :</b> </p>
        <p>latitude {{ locLatitude }}</p>
        <p>longitude {{ locLongitude}}</p>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Plugins } from '@capacitor/core';
import { CameraSource, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@ionic-native/geolocation';

const { Camera } = Plugins;

export default defineComponent({
  name: 'HomePage',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      imageUrl: null,
      waktu: '',
      urutanEvent: 0,
      semuaEvent: [{eventKe: '0', eventName: 'Event ke 0'}],
      locLatitude: '',
      locLongitude: ''
    };
  },
  methods: {
    async berfotoSekarang() {
      const currTime = new Date();
      this.waktu = currTime.toString();

      const isAvailable = true;

      if(!isAvailable) {
        alert("Device anda tidak mempunyai kamera");
      } else {
        try {
          const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Prompt
          });
          console.log(image);
          this.imageUrl = image.dataUrl;
        } catch (e) {
          console.log("error", e);
        }
      }

      this.urutanEvent += 1;

      this.semuaEvent.push({
        eventKe: this.urutanEvent.toString(),
        eventName: "Event ke " + this.urutanEvent.toString()
      });

      Geolocation.getCurrentPosition().then((resp) => {
        this.locLatitude = resp.coords.latitude.toString();
        this.locLongitude = resp.coords.longitude.toString();
      }).catch((error) => {
        console.log('Error: tidak berhasil mendapatkan Lokasi', error);
      });
    }
  },
  activated() {
    console.log("activated");
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
