<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Activities</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="(item, index) in items" :key="index">
            {{ item.label }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-card flat>
          <v-card-text>
            <component :is="item.component"></component>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
// import WebComponent from './WebComponent.vue';
// import ShoppingComponent from './ShoppingComponent.vue';
// import VideosComponent from './VideosComponent.vue';
// import ImagesComponent from './ImagesComponent.vue';
// import NewsComponent from './NewsComponent.vue';
// import EditProfileForm from '../Activities/'
import UserActivity from '../Activities/UserActivity.vue';
import SystemActivity from '../Activities/SystemActivity.vue';
import Thresholds from '../Activities/Thresholds.vue';
import UpdateUserProfile from '../Activities/UpdateUserProfile.vue';
import UserActivation from '../Activities/UserActivation.vue';
export default {
  data() {
    return {
      tab: null,
      items: [
        { label: 'User activity', component: UserActivity },
        { label: 'System Logs', component: SystemActivity },
        { label: 'System settings',  },
        { label: 'Update User Profile', component: UpdateUserProfile },
        { label: 'User Activation/Deactivation', component: UpdateUserProfile },
      ],
    };
  },
};
</script>
