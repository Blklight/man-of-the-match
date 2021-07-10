<template>
  <div class="bg-dark">
    <div class="container-fluid bg-dark" style="height: 100vh">
      <div class="container py-5 bg-dark">
        <div class="text-center">
          <h1 class="main-title mb-3">
            <span class="marker marker-neon-yellow px-md-4 py-md-3 py-2 px-2">
              #ManOfTheMatch
            </span>
          </h1>
          <p class="text-monospace">
            <span class="marker marker-neon-yellow marker-tag">
              <i> Developed by Team Blklight</i>
            </span>
          </p>

          <h2 class="mt-3 mb-4" style="font-weight: 900">
            <span class="marker marker-neon-yellow marker-tag px-3">
              <strong> <em>2021/1</em></strong>
            </span>
          </h2>
        </div>
        <div class="container">
          <div :class="show ? 'fade-out-bottom' : ''">
            <button
              class="
                btn btn-flat btn-block btn-neon-yellow
                mx-auto
                d-block
                w-50
              "
              @click="play"
            >
              Ver o(s) vencedor(es)!
            </button>
          </div>

          <div v-if="show" :class="show ? 'fade-in-bottom' : ''">
            <div class="mb-4">
              <h2 class="marker marker-neon-yellow marker-tag mb-3">
                <span class="">
                  <strong><em>Vencedor(es)</em></strong>
                </span>
              </h2>
              <img
                v-lazy="winner"
                class="img-fluid mx-auto d-block"
                :alt="winnerName"
                :title="winnerName"
              />
              <p class="text-neon-yellow text-center my-3">
                <em>
                  <a
                    :href="winnerHD"
                    class="marker marker-link marker-neon-yellow mx-1"
                    target="_blank"
                  >
                    Clique aqui
                  </a>
                  para baixar a versão em HD.
                </em>
              </p>
            </div>
            <div class="mb-4">
              <h3 class="mb-3">
                <span class="marker marker-neon-yellow marker-tag">
                  <strong><em> 2ª colocação </em></strong>
                </span>
              </h3>
              <template v-for="(second, i) in seconds">
                <p :key="i" class="text-neon-yellow text-size">
                  <em>"{{ second.quote }}" - {{ second.name }}</em>
                </p>
              </template>
            </div>
            <div class="mb-4">
              <h3 class="mb-3">
                <span class="marker marker-neon-yellow marker-tag">
                  <strong><em> 3ª colocação </em></strong>
                </span>
              </h3>
              <template v-for="(third, i) in thirds">
                <p :key="i" class="text-neon-yellow text-size">
                  <em>"{{ third.quote }}" - {{ third.name }}</em>
                </p>
              </template>
            </div>
            <div class="mb-4">
              <h2 class="mb-3">
                <span class="marker marker-neon-yellow marker-tag">
                  <strong><em> Bônus </em></strong>
                </span>
              </h2>
              <h4 class="marker marker-neon-yellow marker-tag mb-3">
                <span class="">
                  <strong><em> Daft Vitola - Wallpaper </em></strong>
                </span>
              </h4>
              <img
                v-lazy="daft"
                class="img-fluid mx-auto d-block"
                alt="Daft Vitola"
                title="Daft Vitola"
              />
              <p class="text-neon-yellow text-center my-3">
                <em>
                  <a
                    :href="daftHD"
                    class="marker marker-link marker-neon-yellow mx-1"
                    target="_blank"
                  >
                    Clique aqui
                  </a>
                  para baixar a versão em HD.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Howl } from 'howler'

import urna from '~/assets/audio/urna.mp3'

import dataSecond from '~/assets/data/seconds.json'
import dataThird from '~/assets/data/thirds.json'
export default {
  data() {
    return {
      sound: '',
      show: false,
      winnerName: 'Ultimate',
      winner: 'https://i.imgur.com/qb7PZXm.jpg',
      winnerHD: 'https://i.imgur.com/cSRyYIx.jpg',
      daft: 'https://i.imgur.com/3ndugq6.jpg',
      daftHD: 'https://i.imgur.com/bZQauq4.jpg',
      seconds: dataSecond,
      thirds: dataThird,
    }
  },
  mounted() {
    this.sound = new Howl({
      src: [urna],

      onloaderror(id, err) {
        console.warn('failed to load sound file:', { id, err })
      },
    })
  },
  methods: {
    play() {
      this.sound.play()
      setTimeout(() => (this.show = true), 300)
      clearTimeout()
    },

    showWinner() {},
  },
}
</script>

<style lang="scss">
body {
  background-color: #121212;
}
.main-title {
  font-weight: 900;
  font-style: italic;
  font-size: 88px;
  font-family: 'Exo', sans-serif;
}
@media screen and (max-width: 992px) {
  .main-title {
    font-size: 64px;
  }
}
@media screen and (max-width: 768px) {
  .main-title {
    font-size: 56px;
  }
}
@media screen and (max-width: 576px) {
  .main-title {
    font-size: 2.5rem;
  }
}

.freebirdFormviewerViewCenteredContent {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 auto;
}

.text-size {
  font-size: 20px;
}

.fade-in-bottom {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 2s
    both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;
}

.fade-out-bottom {
  -webkit-animation: fade-out-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    0.5s both;
  animation: fade-out-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
}
/* ----------------------------------------------
 * Generated by Animista on 2021-7-3 17:54:7
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

/**
 * ----------------------------------------
 * animation fade-out-bottom
 * ----------------------------------------
 */
@-webkit-keyframes fade-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
}
@keyframes fade-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>
