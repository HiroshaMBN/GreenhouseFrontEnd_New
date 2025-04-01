<template slot="header">
  <div> <!-- Added wrapper element -->
    <h5 class="card-category">Configure thresholds</h5>
    <h3 class="card-title">
      <template>
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
      </template>


    </h3>
  </div>
</template>
<script>
import axios from "axios";


// let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTc2YTVjYi1lMjNmLTRiMzktODljMy00YzQ2ODg2NjYwY2YiLCJqdGkiOiI5ZGFlNjY5NjZlNzg0YjBjYWNkZTZhZDk3YzE5ZTExODIxMTAxNmRiMzAyYWYxMWUyOTcxYzY1ZjkzYWZjOWU1MGY3NDI0MzEzZjFmODFkMCIsImlhdCI6MTc0MzQzMTg4OS4yNTI3MDksIm5iZiI6MTc0MzQzMTg4OS4yNTI3MTYsImV4cCI6MTc0NjExMDI4OS4xNzQ4MzksInN1YiI6IjgiLCJzY29wZXMiOlsicmVhZC1wcm9maWxlIl19.OG-QCOoW_BzMiuFDkXLkwwISrX68mSpPl6zGhMrInelncZwVPPZTT4WJNUFhgyKYV9pemdx1Zg8n1tVkQa92ztswF08-3HSfUXyh0CdZMRqrUTEFKSlCvEYSW9RbILlDfi5cVz9wR_HAEDznNuDDK9zNqtA-OAaWq52wmt-mpYlzZERljknWi9lP26ZJppNtatFlC6GGSfixIJEHWxbuVeXNp2MCaUED1303-0qsBa3hjyk9otcj_CxWhiV8O36hUUjrZQ8WTk969_sIu0G8eAh5Gv7DJGcbR3IhZkaYMHETuJo79nXgtto9fj8wlTT1ThPKpB9JduMo3mD2Oh0OedfmIloOHXK1-A8g_o3Dq1gSHCZvA7pYLjkSLBSU7FAsPNUGMA6KxshMIPvRazK0zdBAqfFbElthZIWDu2Wyk1hVgKf4w5mWM3FQlHoX9mJxvHfhuMcQGSdvHeaCZgRbR_B0Qu0T0kVI1lxW_2Fu46FPr_Uy0Khh8YyXDmjj6a-MtrOSRdFwbnGYL2q5xqk6fF81cgj1L7ezIsNGFxQq4FMvUJ7lVI5N3JVl7kOwuQE-YSuKSSZKYUqn0yb2w5mfmLj94kG4PUU2yWP7MUwoGZSz1MRxTbpzrn5pTmVdBpUeTdTOv8Cw53CdqmAIWupmtxfsJ7EftxWwWi1D1Oqh5L0";


export default {
    data () {
      return {
        headers: [
          {
            text: 'Virtual Host',
            align: 'start',
            sortable: false,
            value: 'vhost',
          },
          { text: 'Name', value: 'name' },
          { text: 'User name', value: 'username' },
          { text: 'State', value: 'state' },
          { text: 'SSL/TLS', value: 'ssl_tls' },
          { text: 'Protocol', value: 'protocol' },
          { text: 'Channels', value: 'channels' },
          { text: 'From client', value: 'from_client' },
          { text: 'To client', value: 'to_client' },
        ],
        desserts: [
          {
            vhost: '/',
            name:"10.128.1.167",
            username: 'guest',
            state: "running",
            ssl_tls:"-",
            protocol:"MQTT",
            channels:"1",
            from_client:"0 B/s",
            to_client:"0 B/s"
          },
          {
            vhost: '/',
            name:"10.128.1.167",
            username: 'guest',
            state: "running",
            ssl_tls:"-",
            protocol:"MQTT",
            channels:"1",
            from_client:"0 B/s",
            to_client:"0 B/s"
          }
        ],
      }
    },
  }


</script>
