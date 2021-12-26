import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('~/static/man-of-the-match-cover-2.jpg'),
  loading: require('~/static/man-of-the-match-cover-2.jpg'),
  attempt: 1,
})
