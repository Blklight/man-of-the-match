import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('~/static/man-of-the-match-cover-large.jpg'),
  loading: require('~/static/man-of-the-match-cover-large.jpg'),
  attempt: 1,
})
