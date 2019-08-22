import Vue from 'vue'
import Vuex from 'vuex'
import state from '../store/state'
import getters from '../store/getters'
import modules from '../store/modules'
import mutations from '../store/mutation'
import actions from '../store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
  modules,

})
