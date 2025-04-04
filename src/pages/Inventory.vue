<template>
  <div class="row">
    <div class="col-6">
      <v-card>
        <v-card-title>
          Fertilization stocks report



          <v-spacer> </v-spacer>
          <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

          <!-- <v-btn density="compact" icon="mdi-plus" style="background-color: rgb(179, 179, 179)" >+</v-btn>

          <v-text-field dark v-model="search" append-icon="mdi-magnify" label="Search" single-line
            hide-details></v-text-field> -->



        </v-card-title>
        <v-data-table dark dense :headers="headers" :items="fertilizer" :search="search"></v-data-table>
      </v-card>
    </div>

    <div class="col-6">
      <v-card>
        <v-card-title>
          Seed stocks report
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
            hide-details></v-text-field>
        </v-card-title>
        <v-data-table dark dense :headers="headersx" :items="seeds" :search="search"></v-data-table>
      </v-card>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTkyNmE3Yi0yMTQ2LTQ3NmYtYTIyNy1jNjA0Y2RhYjUzMDgiLCJqdGkiOiJiOTRjNGFiYTc0NzJlMmMwZDc2ODYxN2U2MWZmMjlhNzk3M2ZjMjY4YTZjNTg3NGZhNWNiYjYyYjJiYmNhNjQ1MGEwZjc4ZjlkYmZmYTcyYSIsImlhdCI6MTc0MzYyMjYyMy44NjY0NDYsIm5iZiI6MTc0MzYyMjYyMy44NjY0NTQsImV4cCI6MTc0NjIxNDYyMy44NDk3MDEsInN1YiI6IjkiLCJzY29wZXMiOlsicmVhZC1wcm9maWxlIl19.ov3q1HqGx29d2nsf-JtBX-PdVujlLlR2kyCRFEpykQbPmiVo14PI1ZVHDi2XTanNYsQL6-eqGHTSYP3hBr-tHKpBTp2dNqgce9A98Omv5RWo5Gh3JvGIx7zQ0XPjkoifXzwVZ_eTEHhUzqvUi6eSksn9Cx0VpGW9GfIiW5xWomGRPGSrH4RtXF-G5OhABzyEX46DayOSfatXRkjEUDV38mDdn0eAUBzdbPRZzT3aVqQNyiJPiYWbw0UgNBjUmXrdCx8b8ZH4yqMXEtYRnfBTjQNuSw_NFyDsd2nH3gzOPI8QNPmHyOuWxPbwyUc7UiF7SEjkuCmPGkIwDlzCddaVRpBo2041Zh1yGj-Dqv-w_sGoDGMFKY7FBhz9wR3Oz6VFEVPL4O39vAz9ZrbeuiLQLHfVU36btJjYXE9XCFci-lRwij_GrIWcoJxAzHNtRuXwcHzwlOx2N_g6MyD5IP1OfTyIB9xL9B42VHc9zFLBoIPcPRNz3zgeMBtHcpV1AMo9lIqSsz2raZflVsweEBBI89mJq6PtfO6ri-WE5chn9aFBvvmCJ_vJdbPiq2MvJPhIb7U3TmtkyzQcF6puCm5LTZklCf8_-JehxvmqlCkNcInjstn1qK908aKDKA51DFidmjaKOLYXKqxdaqu4TyAS0qLeEKPd5OSWVdbUiKrOdk0";

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Fertilizer Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Availability', value: 'availability' },
        { text: 'Unit Type', value: 'unitType' },
        { text: 'Next stock date', value: 'nextStockDate' },
        { text: 'Unit Price', value: 'unitPrice' },
        { text: 'Total Price', value: 'totalPrice' },
        { text: 'Stock Level', value: 'stockLevel' },
        { text: 'Stock date', value: 'stockDate' },


      ], headersx: [
        {
          text: 'Seed Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Availability', value: 'availability' },
        { text: 'Unit Type', value: 'unitType' },
        { text: 'Next stock date', value: 'nextStockDate' },
        { text: 'Unit Price', value: 'unitPrice' },
        { text: 'Total Price', value: 'totalPrice' },
        { text: 'Stock Level', value: 'stockLevel' },
        { text: 'Stock date', value: 'stockDate' },


      ],
      fertilizer: [],
      seeds: []
    }
  }, mounted() {
    this.fertilizationTable();
    this.seedTable();
  },
  methods: {
    async fertilizationTable() {
      try {
        const fertilizationResult = await axios.get('http://10.128.1.52:8000/api/auth/show_fertilization_stocks',
          {
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            }
          }
        );
        if (fertilizationResult.data) {
          this.fertilizer = fertilizationResult.data.map((item) => ({
            name: item.fertilize_name,
            availability: item.availability,
            unitType: item.unit_type,
            nextStockDate: item.next_stock_date,
            unitPrice: item.unit_price,
            totalPrice: item.total_price,
            stockLevel: item.stock_level,
            stockDate: item.created_at
          }));


        } else {
          console.log("data received failed..!");
        }
      } catch (error) {

        console.log("fertilization table error: " + error);


      }
    },
    async seedTable() {
      try {
        const seedTableResult = await axios.get('http://10.128.1.52:8000/api/auth/show_seeds_stocks',
          {
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            }
          }
        );
        if (seedTableResult.data) {
          this.seeds = seedTableResult.data.map((item) => ({
            name: item.seed_name,
            availability: item.availability,
            unitType: item.unit_type,
            nextStockDate: item.next_stock_date,
            unitPrice: item.unit_price,
            totalPrice: item.total_price,
            stockLevel: item.stock_level,
            stockDate: item.created_at
          }));
        } else {
          console.log("seed table data loading error");
        }
      } catch (error) {
        console.log("seed table error: " + error);
      }
    }
  }
}
</script>
