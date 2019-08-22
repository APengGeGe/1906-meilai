const mutations= {
    jia(state){
        return state.list1++
    },
    jian(state){
        return state.list1--
    },
    huo(state,name){
      return state.username = name
    }
}

export default mutations;



