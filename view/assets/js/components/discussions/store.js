import Vue from './../../vue/vue';
import Vuex from './../../vue/vuex';

/**
 * Make sure to call Vue.use(Vuex) first if using a vuex module system
 */
Vue.use(Vuex);

export default new Vuex.Store({

	state: {
		is_discuss_form_active: false,
		milestones: []
	},
	
	mutations: {
		showHideDiscussForm (state, status) {
			if ( status === 'toggle' ) {
                state.is_discuss_form_active = state.is_discuss_form_active ? false : true;
            } else {
                state.is_discuss_form_active = status;
            }
		},

		setMilestones (state, milestones) {
			state.milestones = milestones;
		}
	}
});