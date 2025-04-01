<template>
  <div>
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
                <!-- <h5 class="card-category">
                  {{ $t("dashboard.totalShipments") }}
                </h5> -->
                <h2 class="card-title">{{ $t("dashboard.performance") }}</h2>
              </div>
              <!-- <div class="col-sm-6">
                <div class="btn-group btn-group-toggle" :class="isRTL ? 'float-left' : 'float-right'"
                  data-toggle="buttons">
                  <label v-for="(option, index) in bigLineChartCategories" :key="option"
                    class="btn btn-sm btn-primary btn-simple" :class="{ active: bigLineChart.activeIndex === index }"
                    :id="index">
                  <input type="radio" @click="initBigChart(index)" name="options" autocomplete="off"
                      :checked="bigLineChart.activeIndex === index" />
                  {{ option }}
                  </label>
                </div>
              </div> -->
            </div>
          </template>
          <div class="chart-area">

            <line-chart style="height: 100%" ref="myChart" chart-id="myChart"
              :chart-data="lineChartForTemperature.chartData" :gradient-colors="bigLineChart.gradientColors"
              :gradient-stops="bigLineChart.gradientStops" :extra-options="bigLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Air Quality Of GreenHouse</h5>
            <h3 class="card-title">
              <!-- <i class="tim-icons icon-bell-55 text-primary"></i> 763,215 -->
              {{ 72 }} ppm

            </h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%"chart-id="airQualityChart"
            :chart-data="lineChartForTemperature.chartData" :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops" :extra-options="bigLineChart.extraOptions"
            >

            </line-chart>


          </div>
        </card>
      </div>
      <div class="col-md-12" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Daily water usage</h5>
            <h3 class="card-title">
              {{ 15 }}Liters
              <!-- <i class="tim-icons icon-delivery-fast text-info"></i> {{ 15 }}L -->
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart style="height: 100%" chart-id="waterLevel"
            :chart-data="lineChartForTemperature.chartData" :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops" :extra-options="bigLineChart.extraOptions"
            >


            </bar-chart>
          </div>
        </card>
      </div>
      <div class="col-md-12" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Soil Status</h5>
            <h3 class="card-title">
              <!-- <i class="tim-icons icon-send text-success"></i> 75 -->
              75
            </h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%" chart-id="soilLevel"
            :chart-data="lineChartForTemperature.chartData" :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops" :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </div>
        </card>
      </div>
      <div class=" col-md-12">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Ph Level</h5>
            <h3 class="card-title">
              <!-- <i class="tim-icons icon-send text-success"></i> 75 -->
              120Ph
            </h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%" chart-id="phLevel"
            :chart-data="lineChartForTemperature.chartData" :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops" :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">

      <!-- <div class="col-md-12" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Total Notification SMS and Emails</h5>
            <h3 class="card-title">
              Total Notification Count

            </h3>
          </template>
          <div class="">

            <canvas id="notifications" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>

          </div>
        </card>
      </div> -->


      <div class="col-md-12" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Total Notification SMS and Emails</h5>
            <h3 class="card-title">
              Total Notification Count
              <!-- <i class="tim-icons icon-delivery-fast text-info"></i> {{ 15 }}L -->
            </h3>
          </template>

          <!-- <bar-chart width="400" height="70" chart-id="notifications">
            </bar-chart> -->
          <canvas id="notifications" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>

        </card>
      </div>

      <!-- <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Total Notification SMS and Emails</h5>
            <h3 class="card-title">
              Total Notification Count
            </h3>
          </template>
          <div class="chart-area">

          </div>
        </card>
      </div> -->




    </div>
  </div>
</template>
<script>
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import * as chartConfigs from "@/components/Charts/config";
import TaskList from "./Dashboard/TaskList";
import UserTable from "./Dashboard/UserTable";
import config from "@/config";
import axios from "axios";
import echo from "@/websocket.js";

// import axios from './axios';
// import axios from '../axios.js';
let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTkyNmE3Yi0yMTQ2LTQ3NmYtYTIyNy1jNjA0Y2RhYjUzMDgiLCJqdGkiOiI3YTdlOTcwMWEwYzE5ZDJkNzVkZjNhZGU2NTg4NDRjZWE3NzJmMWQwNmVmODVkYzQ1OTAzODAzNWQ4YjdlMjk4ODg4NWZjMjk0MzU2MTIxOCIsImlhdCI6MTc0MzUxNzE4Mi44NzEwNDEsIm5iZiI6MTc0MzUxNzE4Mi44NzEwNDksImV4cCI6MTc0NjEwOTE4Mi44NTc0NCwic3ViIjoiOCIsInNjb3BlcyI6WyJyZWFkLXByb2ZpbGUiXX0.BJRSYB9wIQz1GW2vvTaUX5LILWdLKFI5Z4kJxd4mc3VQQAzVDgUehwE9yoN7bzvGbMG3AY_xLkJNVpDb2ckqwmh1JG0A_tz97eaLt9eaStSRFmWU6JuJFMLM-4E0HZmkUQQpooEj7mFBkCVNZVuJ8466u5R-cI528y6SuGtX4_7bGwmZv0GAPKB5miClHxNZL3XG1Q7MU7UlGMmy17_WPYqc1gkyVm1U5BeKPes37xiugzLAXnpuip5eWShelUOcg5sk8nsA-i4yKrCQpSdcIIEU5eoiEgdiVW0e08VgZD2KpWeptHsBejqwcW1NRDovn1eD8ZDeZRthedL6QFN-PP9RmTNR26QFBrHhFKl6R9DOkd8wumBcOzjCOKspGUUIdKc8XJrL5q-miyXFY_8n09IR9fdi2rZbo9j-sOQGHWxDkBIwpkI-meTkYHiYNzhhKcSI_UBCGYXFy__qj01sLdEnuXqF48-7klJkF_fc5-PgY9DjOo501AtDo4irU18g5eRs0suxsmgjAKKMXXhum-6yZpdiXe8n1Rh6LPX4h6Uv5eMBCDO-HRdI1VzAb392TnjmDPqDL_nxP4TrJBXOn_MIITXqNocsiqEgmcYeVgZGcN3tjfn1hkeHntMitbXGmDlSJgaVIjPtgyBRICG-E1wiJZwmVspJWnH-BJ05I64";

// console.log(process.env.API_URL);
export default {
  components: {
    LineChart,
    BarChart,
    PieChart,
    TaskList,
    UserTable,
  },
  data() {
    let airQualityDate = "";
    let airQualityValue = "";

    return {

      // async getTemperatureData() {
      //   try {
      //     const response = await axios.post('http://10.128.1.52:8000/api/auth/readTemperature',
      //       {
      //         // Request body data if needed
      //         "date": "",
      //         "time": "",
      //         "type": ""
      //       },
      //       {
      //         headers: {
      //           'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTc2YTVjYi1lMjNmLTRiMzktODljMy00YzQ2ODg2NjYwY2YiLCJqdGkiOiI2MjBkMTRkNDczNTEyOWI1Y2RmMWI5ZmUzMWQ5MDJhNDQwYzQ2MzhlNzY5ZTc5NTBhNDQwZmZjYzdmMzBkZWM1YTU1NDk3MGYyZDJiZGZhNSIsImlhdCI6MTc0MjMyNDI2MC4wNTkwNjQsIm5iZiI6MTc0MjMyNDI2MC4wNTkwNzEsImV4cCI6MTc0NTAwMjY1OS45OTIwODQsInN1YiI6IjEiLCJzY29wZXMiOlsicmVhZC1wcm9maWxlIl19.Anae6vVe30d0TB95XlhBYi2XrlbmpUzwP7GWNn4s908CoZrnt4ELSc9uiabnX7jQTgcXdZX_3vZJsnfl1s1oTUMHJ4vGeWWpMN1oqqwyRJV-ICKIPBhBykrfwZZDHQXFO0x4I9WKa-5VyKlg7EtMINEXKplTorQn7zEhitwGChXXZ4Q69oxwaYcLbO_2q1YJqFwcBUnpajvJnTXTb_ALpUdf5HRxpv2bDX5rztQD3_9aFy0_tklcJMR-u64_AwTtOTYStOW0PlPWyHhDqZ15q5SarOohbpk4sGphSwaje4nqdURaDSbqBS00abd1RP1OAOLuxZCgqksyNksBPOZgTYjKa6_5M2c3eGEfbDksTBGqMRiyxSZzItV3p0LtzZx-KVCUBcq2S86hNmcQmLnXX3ha9MDRyA2Bbj25E5TOUIUgxOe3tHUTC-nUelEFTj5Z5o77Uj0E72K8uErHoILF3EpiScIL6sgAwZ4Aus96Y1Dv86khEg4mA3bw49IcvKDuXuWpEqd-dgeZMN9tbelti_Rfjp2Kpwh_x_Q9Ux2QvBWH-Knd7h1FygVEn341nBLBaRdnd_pSBxi48lTDmJ7Fg2YA3vkLPY8yJbUhDSF9U1TefZcNanC1PPkZa6OlHO0csRXrVUp1Zaf-M_dVgFTdzLTsqCImVzxTSS1jIZXIbeI',
      //           'Content-Type': 'application/json'
      //         }
      //       }
      //     );
      //     // console.log(response.data);
      //     let temperatureData = new Array().fill(null);
      //     response.data.forEach(item => {
      //       // console.log(item);

      //       const monthIndex = item.created_at; // Get the month index from created_at (0 = Jan, 11 = Dec)
      //       temperatureData[monthIndex] = item.created_at; // Place the temperature in the corresponding month slot
      //       // this.bigLineChart.allData[1] = item.temperature;
      //       // this.bigLineChart.chartData.labels= item.created_at;

      //       // console.log([item.created_at,item.temperature]);
      //       // console.log([item.created_at,item.temperature]);
      //       // console.log([item.created_at,item.temperature]);
      //       // console.log(item.temperature);

      //     });
      //     // this.initBigChart(temperatureData);

      //   } catch (error) {
      //     console.log(error);
      //   } finally {
      //     //
      //   }
      // },
      bigLineChart: {

        activeIndex: 0,
        chartData: {
          datasets: [{}],
          // labels: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC",],
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
      },

      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Humidity records",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [],
            },
          ],
        },
        gradientColors: [
          "rgba(66,134,121,0.15)",
          "rgba(66,134,121,0.0)",
          "rgba(66,134,121,0)",
        ],
        gradientStops: [1, 0.4, 0],
      },
      notificationBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ["SMS", "EMAIL"], //label insert
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 41], //data insert
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      }
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },

  },
  methods: {


    async lineChartForTemperature() {
    try{
      const temperature = await axios.post('http://10.128.1.52:8000/api/auth/readTemperature',
        {
          // Request body data if needed
          "date": "",
          "time": "",
          "type": "%"
        },
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(temperature.data[]);
      if (temperature.data && Array.isArray(temperature.data)) {
        const labels = temperature.data.map(item => item.created_at);
        const dataValues = temperature.data.map(item => item.temperature);
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Average Temperature In a Day',
              data: dataValues,
              backgroundColor: [
                'rgba(255, 240, 243, 0.22)'

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });




      } else {

      }

    }catch(error){
      console.log(error);
    }

    },
    async airQuality() {
      try{
        const temperature = await axios.post('http://10.128.1.52:8000/api/auth/mq2AirQuality',
        {
          // Request body data if needed
          "date": "",
          "time": "",
          "type": ""
        },
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(temperature.data[]);
      if (temperature.data && Array.isArray(temperature.data)) {
        const labels = temperature.data.map(item => item.day);
        const dataValues = temperature.data.map(item => item.value);

        var ctx = document.getElementById('airQualityChart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Average Air Quality In a Day',
              data: dataValues,
              backgroundColor: [
                'rgba(245, 74, 120, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } else {

      }
      }catch(error){
        console.log(error);
      }
    },
    async waterStocks() {
      try{
        const temperature = await axios.post('http://10.128.1.52:8000/api/auth/mq2AirQuality',
        {
          // Request body data if needed
          "date": "",
          "time": "",
          "type": ""
        },
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(temperature.data[]);
      if (temperature.data && Array.isArray(temperature.data)) {
        const labels = temperature.data.map(item => item.day);
        const dataValues = temperature.data.map(item => item.value);

        var ctx = document.getElementById('waterLevel').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Water Level In Tanks',
              data: dataValues,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } else {

      }
      }catch(error){
        console.log(error);
      }
    },
    async soilStatus() {
      try {
        const temperature = await axios.post('http://10.128.1.52:8000/api/auth/soilLevel',
        {
          // Request body data if needed
          "date": "",
          "time": "",
          "type": ""
        },
        {
          headers: {
            'Authorization':token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(temperature.data[]);
      if (temperature.data && Array.isArray(temperature.data)) {
        const labels = temperature.data.map(item => item.created_at);
        const dataValues = temperature.data.map(item => item.Level);
        var ctx = document.getElementById('soilLevel').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Water Level In Tanks',
              data: dataValues,
              backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [

                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } else {

      }
      } catch (error) {
        console.log(error.message);
      }

    },
    async phLevel() {
    try{
      const temperature = await axios.post('http://10.128.1.52:8000/api/auth/mq2AirQuality',
        {
          // Request body data if needed
          "date": "",
          "time": "",
          "type": ""
        },
        {
          headers: {
            'Authorization':token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(temperature.data[]);
      if (temperature.data && Array.isArray(temperature.data)) {
        const labels = temperature.data.map(item => item.day);
        const dataValues = temperature.data.map(item => item.value);

        var ctx = document.getElementById('phLevel').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Water Level In Tanks',
              data: dataValues,
              backgroundColor: [
                'rgba(252, 232, 8, 0.35)',
              ],
              borderColor: [

                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } else {

      }
    }catch(error){
      console.log(error);
    }
    },
    async totalNotification() {
     try{
      const temperature = await axios.post('http://10.128.1.52:8000/api/auth/soilLevel',
        {
          // Request body data if needed
          "date": "",
          "time": "",
          "type": ""
        },
        {
          headers: {
            'Authorization':token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(temperature.data[]);
      if (temperature.data && Array.isArray(temperature.data)) {
        // const labels = temperature.data.map(item => item.day);
        // const dataValues = temperature.data.map(item => item.value);

        var ctx = document.getElementById('notifications').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ["SMS", "Email"],
            datasets: [{
              // label: 'Water Level In Tanks',
              data: [10, 60],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [

                'rgba(153, 102, 255, 0.2)',
              ],
              borderWidth: 0
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      } else {

      }
     }catch(error){
      console.log(error);
     }
    }



  },
 async mounted() {
    // console.log("in dashboard");
    this.lineChartForTemperature();
    this.airQuality();
    this.waterStocks();
    this.soilStatus();
    this.phLevel();
    this.totalNotification();
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = "ar";
      this.$rtl.enableRTL();
    }
    // this.maxHumidityInMonthly(),
    // this.initBigChart(0);
    // this.getTemperatureData();





  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = "en";
      this.$rtl.disableRTL();
    }
  },
};
</script>
<style></style>
