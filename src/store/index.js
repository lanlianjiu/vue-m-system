import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import getters from './getters'
import menu from './modules/menu'
import home from './modules/home'
import systemMsg from './modules/systemMsg'

import basechart from './modules/example/basechart'
import getMsgtabs from './modules/example/getMsgtabs'
import baseForm from './modules/example/baseForm'
import dragList from './modules/example/dragList'
import baseTable from './modules/example/baseTable'


const store = new Vuex.Store({
    modules: {
        user,
        menu,
        home,
        systemMsg,
        basechart,
        getMsgtabs,
        baseForm,
        dragList,
        baseTable
    },
    getters,
    strict: false
})

export default store
