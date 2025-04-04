<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Sensor Activities</v-toolbar-title>

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
import axios from "axios";
import temperature from './Thresholds/temperatureThresholds.vue';
import humidity from './Thresholds/humidityThresholds.vue';
import soil from './Thresholds/soilThresholds.vue';
import airQuality from './Thresholds/airQualityThresholds.vue';
let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTc2YTVjYi1lMjNmLTRiMzktODljMy00YzQ2ODg2NjYwY2YiLCJqdGkiOiI5ZGFlNjY5NjZlNzg0YjBjYWNkZTZhZDk3YzE5ZTExODIxMTAxNmRiMzAyYWYxMWUyOTcxYzY1ZjkzYWZjOWU1MGY3NDI0MzEzZjFmODFkMCIsImlhdCI6MTc0MzQzMTg4OS4yNTI3MDksIm5iZiI6MTc0MzQzMTg4OS4yNTI3MTYsImV4cCI6MTc0NjExMDI4OS4xNzQ4MzksInN1YiI6IjgiLCJzY29wZXMiOlsicmVhZC1wcm9maWxlIl19.OG-QCOoW_BzMiuFDkXLkwwISrX68mSpPl6zGhMrInelncZwVPPZTT4WJNUFhgyKYV9pemdx1Zg8n1tVkQa92ztswF08-3HSfUXyh0CdZMRqrUTEFKSlCvEYSW9RbILlDfi5cVz9wR_HAEDznNuDDK9zNqtA-OAaWq52wmt-mpYlzZERljknWi9lP26ZJppNtatFlC6GGSfixIJEHWxbuVeXNp2MCaUED1303-0qsBa3hjyk9otcj_CxWhiV8O36hUUjrZQ8WTk969_sIu0G8eAh5Gv7DJGcbR3IhZkaYMHETuJo79nXgtto9fj8wlTT1ThPKpB9JduMo3mD2Oh0OedfmIloOHXK1-A8g_o3Dq1gSHCZvA7pYLjkSLBSU7FAsPNUGMA6KxshMIPvRazK0zdBAqfFbElthZIWDu2Wyk1hVgKf4w5mWM3FQlHoX9mJxvHfhuMcQGSdvHeaCZgRbR_B0Qu0T0kVI1lxW_2Fu46FPr_Uy0Khh8YyXDmjj6a-MtrOSRdFwbnGYL2q5xqk6fF81cgj1L7ezIsNGFxQq4FMvUJ7lVI5N3JVl7kOwuQE-YSuKSSZKYUqn0yb2w5mfmLj94kG4PUU2yWP7MUwoGZSz1MRxTbpzrn5pTmVdBpUeTdTOv8Cw53CdqmAIWupmtxfsJ7EftxWwWi1D1Oqh5L0";

export default {
  methods: {

    logItem(title) {
      console.log("Selected Item:", title);
    },
    // async sensorData() {
    //   let response = await axios.get('http://10.128.1.52:8000/api/auth/sensor_name',
    //     {
    //       headers: {
    //         'Authorization': token,
    //         'Content-Type': 'application/json'
    //       }
    //     })

    //   let data = response.data; // Get the actual array
    //   let returnData = data.map(item => item.name);
    //   if (Array.isArray(data)) {
    //     // Convert API data to dropdown format
    //     const apiItems = data.map(item => ({ title: item.name }));
    //     this.selectedSensor = apiItems.name;
    //     // Merge with static dropdown items
    //     this.items = [
    //       ...apiItems,
    //       // { title: "Humidity" },
    //       // { title: "Air quality" },
    //       // { title: "Soil moisture" },
    //     ];
    //   }
    // },
  },
  async mounted() {
    // this.sensorData();
    // this.data();
  },
  data() {
    return {
      items: [],
      tab: null,
      items: [
        { label: 'Temperature thresholds',component:temperature },
        { label: 'Humidity thresholds',component:humidity },
        { label: 'Soil level thresholds',component:soil },
        { label: 'Air quality thresholds',component:airQuality },

        // { label: 'System Logs', component: SystemActivity },
        // { label: 'User Thresholds', component: Thresholds },
        // { label: 'Update User Profile', component: UpdateUserProfile },
        // { label: 'User Activation/Deactivation', component: UpdateUserProfile },
      ],
    };
  }
};
</script>

<style></style>
