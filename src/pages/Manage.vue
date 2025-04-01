<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ motor ? "Motor Turn On" : "Light 1 Turn Off" }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            Fill storage water tanks
          </v-card-subtitle>
          <v-card-actions>

            <v-switch v-model="motor" :label="motor ? 'ON' : 'OFF'" @change="motorOnOff" hide-details inset></v-switch>


          </v-card-actions>
        </v-card>
      </div>

      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ light1 ? "Light 1 Turn On" : "Light 1 Turn Off" }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            Light controller 1
          </v-card-subtitle>
          <v-card-actions>
            <v-switch v-model="light1" :label="light1 ? 'ON' : 'OFF'" @change="lightOne" hide-details inset></v-switch>


          </v-card-actions>
        </v-card>
      </div>


      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ light2 ? "Light 2 Turn On" : "Light 2 Turn Off" }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            Light controller 2
          </v-card-subtitle>
          <v-card-actions>
            <v-switch v-model="light2" :label="light2 ? 'ON' : 'OFF'" @change="lightTwo" hide-details inset></v-switch>

          </v-card-actions>
        </v-card>
      </div>


      <div class="col-md-3">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ light3 ? "Light 3 Turn On" : "Light 3 Turn Off" }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
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
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ exhFan ? "Exhaust Fan Turn On" : "Exhaust Fan Turn Off" }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
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

const motor = ref(true)
const light1 = ref(true)
const light2 = ref(true)
const light3 = ref(true)
const exhFan = ref(true)

// Function to handle motor ON/OFF logic
const motorOnOff = () => {
  console.log("Motor state changed:", motor.value ? "ON" : "OFF")
  // Add your logic here to control the motor
}
const lightOne = () => {
  console.log("Light 1 state changed:", light1.value ? "ON" : "OFF")
}
const lightTwo = () => {
  console.log("Light 2 state changed:", light2.value ? "ON" : "OFF")
}
const lightThree = () => {
  console.log("Light 3state changed:", exhFan.value ? "ON" : "OFF")
}
const ExhaustFan = () =>{
  console.log("Exhaust Fan state changed:", exhFan.value ? "ON" : "OFF")
}

// const inLightOn

// Call motorOnOff when component is mounted
onMounted(() => {
  motorOnOff()
})
</script>
