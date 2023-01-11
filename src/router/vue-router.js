import { createRouter, createWebHashHistory } from "vue-router";
import gHeader from "@/components/g-header.vue";
import gRegistration from "@/components/g-registration.vue";
import gTab from "@/components/g-tab.vue";


export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {path: '/', component:gHeader},
        {path: '/reg', component:gRegistration},
        {path: '/tab', component:gTab}
    ]
})
