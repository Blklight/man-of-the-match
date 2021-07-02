<template>
  <div class="bg-dark">
    <div class="container-fluid bg-dark" style="height: 100vh">
      <div class="container py-5 bg-dark">
        <div class="mt-5 text-center">
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

          <h2 class="exo-font mt-3">
            <span class="marker marker-neon-yellow marker-tag">
              <strong> <em>2021/1</em></strong>
            </span>
          </h2>
        </div>
        <div class="container">
          <div class="card card-plain">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdODmlsFiyTu4J8z4khxsHxalniWfutH9EvLfPCTjNGDb_5qQ/viewform?embedded=true" width="100%" height="2142" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
body{
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

.freebirdFormviewerViewCenteredContent{
  width: 100%  !important;
  max-width: 100%  !important;
  margin: 0 auto;
}
// .exo-font {
//   font-family: 'Exo', 'Roboto Mono', 'Fira Code', monospace !important;
// }
</style>