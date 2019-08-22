const actions= {
    jian({commit}){
      setTimeout(() => {
          commit('jian')
      }, 1000);
    },

}


export default actions;
