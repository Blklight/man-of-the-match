<template>
  <div class="container px-0 py-5">
    <div :class="show ? 'fade-out-bottom' : ''">
      <button
        class="
          btn btn-flat btn-block btn-lg btn-pink
          text-polen
          mx-auto
          d-block
          px-4
        "
        @click="play"
      >
        Ver o ranking geral de campeões!
      </button>
    </div>
    <div v-if="show" :class="show ? 'fade-in-bottom' : ''">
      <h1 class="mb-4">
        <span class="bg-pink text-polen py-2 px-2">
          <strong class="marker-line">#AllTimeChampions</strong>
        </span>
      </h1>
      <div class="">
        <div
          v-for="champion in champions"
          :key="champion.name"
          class="d-flex align-items-center mb-4"
        >
          <img
            :src="champion.avatar"
            :alt="champion.name"
            class="winner-avatar"
          />
          <div class="ms-3 text-pink">
            <h3>{{ champion.name }}</h3>
            <span
              v-for="(star, i) in champion.championships"
              :key="i"
              :title="star"
            >
              <font-awesome-icon :icon="['fa', 'star']" size="lg"
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Howl } from "howler";

import urna from "@/assets/audio/urna.mp3";
export default {
  data() {
    return {
      sound: "",
      show: false,
      champions: [
        {
          name: "Ultimate",
          avatar: "https://i.imgur.com/h4BIIOc.jpg",
          championships: ["2021/1", "2021/2", "2022/1", "2022/2"],
        },
        {
          name: "Ultimate Tanuke Sensei",
          avatar: "https://i.imgur.com/s7jHEMX.jpg",
          championships: ["2022/1", "2022/2"],
        },
        {
          name: "Ultimate F r a g m e n t a d o",
          avatar: "https://i.imgur.com/Lh0QVAs.jpg",
          championships: ["2022/1"],
        },
        {
          name: "Ultimate Arucard",
          avatar: "https://i.imgur.com/kLZpSGf.png",
          championships: ["2021/1"],
        },
        {
          name: "Ultimate DAAS",
          avatar: "https://i.imgur.com/YXIZt5A.jpg",
          championships: ["2022/2"],
        },
        {
          name: "Ultimate Ponderinho",
          avatar: "https://i.imgur.com/a2OMsBm.jpg",
          championships: ["2020/Setembro"],
        },
      ],
    };
  },
  mounted() {
    this.sound = new Howl({
      src: [urna],

      onloaderror(id, err) {
        // eslint-disable-next-line no-console
        console.warn("failed to load sound file:", { id, err });
      },
    });
  },
  methods: {
    play() {
      this.sound.play();
      setTimeout(() => (this.show = true), 300);
      clearTimeout();
    },
  },
};
</script>
<style lang="scss">
.winner-avatar {
  width: 125px;
  height: 125px;
  object-fit: cover;
  border-radius: 0.125rem;
}
</style>
