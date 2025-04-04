<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <!-- <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ motor ? "Motor Turn On" : "Light 1 Turn Off" }}</v-card-title>
          </v-img> -->
          <v-card-subtitle class="pb-0" :style="{ backgroundColor: motorStatus === 'ON' ? 'aqua' : 'white' }">
            Fill storage water tanks
          </v-card-subtitle>
          <v-card-actions>

            <v-switch v-model="motor" :label="motor ? 'ON' : 'OFF'" @change="motorOnOff" hide-details inset></v-switch>

          </v-card-actions>
        </v-card>
      </div>

      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <!-- <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ light1 ? "Light 1 Turn On" : "Light 1 Turn Off" }}</v-card-title>
          </v-img> -->
          <v-card-subtitle class="pb-0" :style="{ backgroundColor: lighi1Status === 'ON' ? 'aqua' : 'white' }">
            Greenhouse light 1
          </v-card-subtitle>
          <v-card-actions>
            <v-switch v-model="light1" :label="light1 ? 'ON' : 'OFF'" @change="lightOne" hide-details inset></v-switch>


          </v-card-actions>
        </v-card>
      </div>


      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <!-- <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ light2 ? "Light 2 Turn On" : "Light 2 Turn Off" }}</v-card-title>
          </v-img> -->
          <v-card-subtitle class="pb-0" :style="{ backgroundColor: lighi2Status === 'ON' ? 'aqua' : 'white' }">
            Light controller 2
          </v-card-subtitle>
          <v-card-actions>
            <v-switch v-model="light2" :label="light2 ? 'ON' : 'OFF'" @change="lightTwo" hide-details inset></v-switch>

          </v-card-actions>
        </v-card>
      </div>


      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <!-- <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ light3 ? "Light 3 Turn On" : "Light 3 Turn Off" }}</v-card-title>
          </v-img> -->
          <v-card-subtitle class="pb-0" :style="{ backgroundColor: lighi3Status === 'ON' ? 'aqua' : 'white' }">
            Light controller 3
          </v-card-subtitle>
          <v-card-actions>
            <v-switch v-model="light3" :label="light3 ? 'ON' : 'OFF'" @change="lightThree" hide-details
              inset></v-switch>

          </v-card-actions>
        </v-card>
      </div>


      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <!-- <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ exhFan ? "Exhaust Fan Turn On" : "Exhaust Fan Turn Off" }}</v-card-title>
          </v-img> -->
          <v-card-subtitle class="pb-0" :style="{ backgroundColor: exhFanStatus === 'ON' ? 'aqua' : 'white' }">
            Exhaust Fan Controller
          </v-card-subtitle>
          <v-card-actions>
            <v-switch v-model="exhFan" :label="exhFan ? 'ON' : 'OFF'" @change="ExhaustFan" hide-details
              inset></v-switch>

          </v-card-actions>
        </v-card>
      </div>

    </div>


  </div>
</template>
<script setup>

import { ref, onMounted } from 'vue'
import axios from "axios";
let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTkyNmE3Yi0yMTQ2LTQ3NmYtYTIyNy1jNjA0Y2RhYjUzMDgiLCJqdGkiOiI3YTdlOTcwMWEwYzE5ZDJkNzVkZjNhZGU2NTg4NDRjZWE3NzJmMWQwNmVmODVkYzQ1OTAzODAzNWQ4YjdlMjk4ODg4NWZjMjk0MzU2MTIxOCIsImlhdCI6MTc0MzUxNzE4Mi44NzEwNDEsIm5iZiI6MTc0MzUxNzE4Mi44NzEwNDksImV4cCI6MTc0NjEwOTE4Mi44NTc0NCwic3ViIjoiOCIsInNjb3BlcyI6WyJyZWFkLXByb2ZpbGUiXX0.BJRSYB9wIQz1GW2vvTaUX5LILWdLKFI5Z4kJxd4mc3VQQAzVDgUehwE9yoN7bzvGbMG3AY_xLkJNVpDb2ckqwmh1JG0A_tz97eaLt9eaStSRFmWU6JuJFMLM-4E0HZmkUQQpooEj7mFBkCVNZVuJ8466u5R-cI528y6SuGtX4_7bGwmZv0GAPKB5miClHxNZL3XG1Q7MU7UlGMmy17_WPYqc1gkyVm1U5BeKPes37xiugzLAXnpuip5eWShelUOcg5sk8nsA-i4yKrCQpSdcIIEU5eoiEgdiVW0e08VgZD2KpWeptHsBejqwcW1NRDovn1eD8ZDeZRthedL6QFN-PP9RmTNR26QFBrHhFKl6R9DOkd8wumBcOzjCOKspGUUIdKc8XJrL5q-miyXFY_8n09IR9fdi2rZbo9j-sOQGHWxDkBIwpkI-meTkYHiYNzhhKcSI_UBCGYXFy__qj01sLdEnuXqF48-7klJkF_fc5-PgY9DjOo501AtDo4irU18g5eRs0suxsmgjAKKMXXhum-6yZpdiXe8n1Rh6LPX4h6Uv5eMBCDO-HRdI1VzAb392TnjmDPqDL_nxP4TrJBXOn_MIITXqNocsiqEgmcYeVgZGcN3tjfn1hkeHntMitbXGmDlSJgaVIjPtgyBRICG-E1wiJZwmVspJWnH-BJ05I64";
let msg = "";
let v = "aqua";
let motorStatus = ref("OFF"); // Track motor status (ON or OFF)
let lighi1Status = ref("OFF");
let lighi2Status = ref("OFF");
let lighi3Status = ref("OFF");
let exhFanStatus = ref("OFF");
let backgroundColor = ref("white"); // Track background color
const motor = ref(true)
const light1 = ref(true)
const light2 = ref(true)
const light3 = ref(true)
const exhFan = ref(true)

// Function to handle motor ON/OFF logic
const motorOnOff = async () => {
  try {
    const waterMotor = await axios.post('http://10.128.1.52:8000/api/auth/publish_on_off_water_motor',
      {
        // Request body data if needed
        "message_data": motor.value ? "ON" : "OFF"
      },
      {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    );
    motorStatus.value = waterMotor.data.message;
    backgroundColor.value = motorStatus.value === "ON" ? "aqua" : "white";

  } catch (error) {
    console.log(error);
  }
  // Add your logic here to control the motor
}
const lightOne = async () => {

  try {
    const lightOne = await axios.post('http://10.128.1.52:8000/api/auth/publish_on_off_light_one',
      {
        // Request body data if needed
        "message_data": light1.value ? "ON" : "OFF"
      },
      {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    );
    lighi1Status.value = lightOne.data.message;
    backgroundColor.value = lighi1Status.value === "ON" ? "aqua" : "white";
console.log(lighi1Status.value);
  } catch (error) {
    console.log(error);
  }
}
const lightTwo = async () => {
  try {
    const lightTwo = await axios.post('http://10.128.1.52:8000/api/auth/publish_on_off_light_two',
      {
        // Request body data if needed
        "message_data": light2.value ? "ON" : "OFF"
      },
      {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    );
    lighi2Status.value = lightTwo.data.message;
    backgroundColor.value = lighi2Status.value === "ON" ? "aqua" : "white";
  } catch (error) {
    console.log(error);
  }
  // console.log("Light 2 state changed:", light2.value ? "ON" : "OFF")
}
const lightThree = async () => {
  try {
    const lightThree = await axios.post('http://10.128.1.52:8000/api/auth/publish_on_off_light_three',
      {
        // Request body data if needed
        "message_data": light3.value ? "ON" : "OFF"
      },
      {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    );
    lighi3Status.value = lightThree.data.message;
    backgroundColor.value = lighi3Status.value === "ON" ? "aqua" : "white";
  } catch (error) {
    console.log(error);
  }
  // console.log("Light 3state changed:", light3.value ? "ON" : "OFF")
}
const ExhaustFan = async () => {
  try {
    const ExhFan = await axios.post('http://10.128.1.52:8000/api/auth/publish_on_off_exhaust_fan',
      {
        // Request body data if needed
        "message_data": exhFan.value ? "ON" : "OFF"
      },
      {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      }
    );

    exhFanStatus.value = ExhFan.data.message;
    backgroundColor.value = exhFanStatus.value === "ON" ? "aqua" : "white";


  } catch (error) {
    console.log(error)
  }
  // console.log("Exhaust Fan state changed:", exhFan.value ? "ON" : "OFF")
}

// const inLightOn

// Call motorOnOff when component is mounted
onMounted(() => {
  lightOne();
  // motorOnOff();
  // lightOne();
  // lightTwo();
  // lightThree();
  // ExhaustFan();
})


</script>
