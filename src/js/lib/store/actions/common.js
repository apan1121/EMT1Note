import api from 'lib/api/index';

export default {
    initSystem({ commit }, params){
        commit('initSystem', params);
    },

    // getPlantInfo({ commit }, params){
    //     return new Promise((resolve, reject) => {
    //         api.getPlantInfo(params).success((response) => {
    //             commit('setPlantInfo', response);
    //             resolve(response);
    //         }).error((response) => {
    //             reject(response);
    //         });
    //     });
    // },
};