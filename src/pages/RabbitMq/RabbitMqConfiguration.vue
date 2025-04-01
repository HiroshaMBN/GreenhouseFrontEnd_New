<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>RabbitMq Configuration</v-toolbar-title>

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
import userOverView from './RabbitMqActivities/OverView.vue'
import connections from './RabbitMqActivities/Connections.vue'
import channels from './RabbitMqActivities/AddChannels.vue'
import exchange from './RabbitMqActivities/AddExchange.vue'
import queue from './RabbitMqActivities/AddNewQueue.vue'
import addUsers from './RabbitMqActivities/AddUsers.vue'
import vHost from './RabbitMqActivities/AddVHosts.vue'
export default {
  data() {
    return {
      tab: null,
      items: [
        { label: 'Over view', component: userOverView },
        { label: 'Connections', component: connections },
        { label: 'Channels', component: channels },
        { label: 'Exchanges', component: exchange },
        { label: 'Queues', component: queue },
        { label: 'Add users', component: addUsers },
        { label: 'V host', component: vHost },



      ],
    };
  },
};
</script>
