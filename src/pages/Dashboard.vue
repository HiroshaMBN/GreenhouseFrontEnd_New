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
              <div class="col-sm-6">
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
              </div>
            </div>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%" ref="bigChart" chart-id="big-line-chart"
              :chart-data="bigLineChart.chartData" :gradient-colors="bigLineChart.gradientColors"
              :gradient-stops="bigLineChart.gradientStops" :extra-options="bigLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Air Quality Of GreenHouse</h5>
            <h3 class="card-title">
              <!-- <i class="tim-icons icon-bell-55 text-primary"></i> 763,215 -->
              {{ 72 }} ppm

            </h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%" chart-id="purple-line-chart" :chart-data="purpleLineChart.chartData"
              :gradient-colors="purpleLineChart.gradientColors" :gradient-stops="purpleLineChart.gradientStops"
              :extra-options="purpleLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
      <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Daily water usage</h5>
            <h3 class="card-title">
              {{ 15 }}Liters
              <!-- <i class="tim-icons icon-delivery-fast text-info"></i> {{ 15 }}L -->
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart style="height: 100%" chart-id="blue-bar-chart" :chart-data="blueBarChart.chartData"
              :gradient-stops="blueBarChart.gradientStops" :extra-options="blueBarChart.extraOptions">
            </bar-chart>
          </div>
        </card>
      </div>
      <div class="col-lg-4" :class="{ 'text-right': isRTL }">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">Total Humidity Records in a Month</h5>
            <h3 class="card-title">
              <!-- <i class="tim-icons icon-send text-success"></i> 75 -->
              75
            </h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%" chart-id="green-line-chart" :chart-data="greenLineChart.chartData"
              :gradient-stops="greenLineChart.gradientStops" :extra-options="greenLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <card type="tasks" :header-classes="{ 'text-right': isRTL }">
          <template slot="header">
            <h6 class="title d-inline">
              {{ $t("dashboard.tasks", { count: 5 }) }}
            </h6>
            <p class="card-category d-inline">{{ $t("dashboard.today") }}</p>
            <base-dropdown menu-on-right="" tag="div" title-classes="btn btn-link btn-icon" aria-label="Settings menu"
              :class="{ 'float-left': isRTL }">
              <i slot="title" class="tim-icons icon-settings-gear-63"></i>
              <a class="dropdown-item" href="#pablo">{{
                $t("dashboard.dropdown.action")
                }}</a>
              <a class="dropdown-item" href="#pablo">{{
                $t("dashboard.dropdown.anotherAction")
                }}</a>
              <a class="dropdown-item" href="#pablo">{{
                $t("dashboard.dropdown.somethingElse")
                }}</a>
            </base-dropdown>
          </template>
          <div class="table-full-width table-responsive">
            <task-list></task-list>
          </div>
        </card>
      </div>
      <div class="col-lg-6 col-md-12">
        <card class="card" :header-classes="{ 'text-right': isRTL }">
          <h4 slot="header" class="card-title">
            {{ $t("dashboard.simpleTable") }}
          </h4>
          <div class="table-responsive">
            <user-table></user-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import TaskList from "./Dashboard/TaskList";
import UserTable from "./Dashboard/UserTable";
import config from "@/config";
import axios from "axios";
// import axios from './axios';
// import axios from '../axios.js';
export default {
  components: {
    LineChart,
    BarChart,
    TaskList,
    UserTable,
  },
  data() {
    let airQualityDate = "";
    let airQualityValue = "";
    return {

      async getTemperatureData() {
        try {
          const response = await axios.post('http://10.128.1.52:8000/api/auth/readTemperature',
            {
              // Request body data if needed
              "date": "",
              "time": "",
              "type": ""
            },
            {
              headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTc2YTVjYi1lMjNmLTRiMzktODljMy00YzQ2ODg2NjYwY2YiLCJqdGkiOiI2MjBkMTRkNDczNTEyOWI1Y2RmMWI5ZmUzMWQ5MDJhNDQwYzQ2MzhlNzY5ZTc5NTBhNDQwZmZjYzdmMzBkZWM1YTU1NDk3MGYyZDJiZGZhNSIsImlhdCI6MTc0MjMyNDI2MC4wNTkwNjQsIm5iZiI6MTc0MjMyNDI2MC4wNTkwNzEsImV4cCI6MTc0NTAwMjY1OS45OTIwODQsInN1YiI6IjEiLCJzY29wZXMiOlsicmVhZC1wcm9maWxlIl19.Anae6vVe30d0TB95XlhBYi2XrlbmpUzwP7GWNn4s908CoZrnt4ELSc9uiabnX7jQTgcXdZX_3vZJsnfl1s1oTUMHJ4vGeWWpMN1oqqwyRJV-ICKIPBhBykrfwZZDHQXFO0x4I9WKa-5VyKlg7EtMINEXKplTorQn7zEhitwGChXXZ4Q69oxwaYcLbO_2q1YJqFwcBUnpajvJnTXTb_ALpUdf5HRxpv2bDX5rztQD3_9aFy0_tklcJMR-u64_AwTtOTYStOW0PlPWyHhDqZ15q5SarOohbpk4sGphSwaje4nqdURaDSbqBS00abd1RP1OAOLuxZCgqksyNksBPOZgTYjKa6_5M2c3eGEfbDksTBGqMRiyxSZzItV3p0LtzZx-KVCUBcq2S86hNmcQmLnXX3ha9MDRyA2Bbj25E5TOUIUgxOe3tHUTC-nUelEFTj5Z5o77Uj0E72K8uErHoILF3EpiScIL6sgAwZ4Aus96Y1Dv86khEg4mA3bw49IcvKDuXuWpEqd-dgeZMN9tbelti_Rfjp2Kpwh_x_Q9Ux2QvBWH-Knd7h1FygVEn341nBLBaRdnd_pSBxi48lTDmJ7Fg2YA3vkLPY8yJbUhDSF9U1TefZcNanC1PPkZa6OlHO0csRXrVUp1Zaf-M_dVgFTdzLTsqCImVzxTSS1jIZXIbeI',
                'Content-Type': 'application/json'
              }
            }
          );
          // console.log(response.data);
          let temperatureData = new Array().fill(null);
          response.data.forEach(item => {
            // console.log(item);

            const monthIndex = item.created_at; // Get the month index from created_at (0 = Jan, 11 = Dec)
            temperatureData[monthIndex] = item.created_at; // Place the temperature in the corresponding month slot
            this.bigLineChart.allData[1] = item.temperature;
            // this.bigLineChart.chartData.labels= item.created_at;

            // console.log([item.created_at,item.temperature]);
            // console.log([item.created_at,item.temperature]);
            // console.log([item.created_at,item.temperature]);
            // console.log(item.temperature);

          });
          // this.initBigChart(temperatureData);

        } catch (error) {
          console.log(error);
        } finally {
          //
        }
      },
      async airQuality() {
        try {
          const airResponse = await axios.post('http://10.128.1.52:8000/api/auth/mq2AirQuality',
            {
              // Request body data if needed
              "date": "",
              "time": "",
              "type": ""
            },
            {
              headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTc2YTVjYi1lMjNmLTRiMzktODljMy00YzQ2ODg2NjYwY2YiLCJqdGkiOiI2MjBkMTRkNDczNTEyOWI1Y2RmMWI5ZmUzMWQ5MDJhNDQwYzQ2MzhlNzY5ZTc5NTBhNDQwZmZjYzdmMzBkZWM1YTU1NDk3MGYyZDJiZGZhNSIsImlhdCI6MTc0MjMyNDI2MC4wNTkwNjQsIm5iZiI6MTc0MjMyNDI2MC4wNTkwNzEsImV4cCI6MTc0NTAwMjY1OS45OTIwODQsInN1YiI6IjEiLCJzY29wZXMiOlsicmVhZC1wcm9maWxlIl19.Anae6vVe30d0TB95XlhBYi2XrlbmpUzwP7GWNn4s908CoZrnt4ELSc9uiabnX7jQTgcXdZX_3vZJsnfl1s1oTUMHJ4vGeWWpMN1oqqwyRJV-ICKIPBhBykrfwZZDHQXFO0x4I9WKa-5VyKlg7EtMINEXKplTorQn7zEhitwGChXXZ4Q69oxwaYcLbO_2q1YJqFwcBUnpajvJnTXTb_ALpUdf5HRxpv2bDX5rztQD3_9aFy0_tklcJMR-u64_AwTtOTYStOW0PlPWyHhDqZ15q5SarOohbpk4sGphSwaje4nqdURaDSbqBS00abd1RP1OAOLuxZCgqksyNksBPOZgTYjKa6_5M2c3eGEfbDksTBGqMRiyxSZzItV3p0LtzZx-KVCUBcq2S86hNmcQmLnXX3ha9MDRyA2Bbj25E5TOUIUgxOe3tHUTC-nUelEFTj5Z5o77Uj0E72K8uErHoILF3EpiScIL6sgAwZ4Aus96Y1Dv86khEg4mA3bw49IcvKDuXuWpEqd-dgeZMN9tbelti_Rfjp2Kpwh_x_Q9Ux2QvBWH-Knd7h1FygVEn341nBLBaRdnd_pSBxi48lTDmJ7Fg2YA3vkLPY8yJbUhDSF9U1TefZcNanC1PPkZa6OlHO0csRXrVUp1Zaf-M_dVgFTdzLTsqCImVzxTSS1jIZXIbeI',
                'Content-Type': 'application/json'
              }
            }
          );

          if (airResponse.data && Array.isArray(airResponse.data)) {
          const labels = airResponse.data.map(item => item.day);
          const dataValues = airResponse.data.map(item => item.value);
            this.purpleLineChart.chartData={
              labels: labels,
              datasets: [
                {

              label: "Air quality Ppm",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: dataValues,
                  // label: "Ppm",

                }
              ]
            }
          }
          // console.log(this.purpleLineChart.chartData.datasets[0].data);
        } catch (error) {
          console.log(error);
        } finally {

        }
      },
      async maxHumidityInMonthly() {
        try {
          const airResponse = await axios.post('http://10.128.1.52:8000/api/auth/maxHumidity',
            {
              // Request body data if needed
              "date": "",
              "time": "",
              "type": ""
            },
            {
              headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZTc2YTVjYi1lMjNmLTRiMzktODljMy00YzQ2ODg2NjYwY2YiLCJqdGkiOiI2MjBkMTRkNDczNTEyOWI1Y2RmMWI5ZmUzMWQ5MDJhNDQwYzQ2MzhlNzY5ZTc5NTBhNDQwZmZjYzdmMzBkZWM1YTU1NDk3MGYyZDJiZGZhNSIsImlhdCI6MTc0MjMyNDI2MC4wNTkwNjQsIm5iZiI6MTc0MjMyNDI2MC4wNTkwNzEsImV4cCI6MTc0NTAwMjY1OS45OTIwODQsInN1YiI6IjEiLCJzY29wZXMiOlsicmVhZC1wcm9maWxlIl19.Anae6vVe30d0TB95XlhBYi2XrlbmpUzwP7GWNn4s908CoZrnt4ELSc9uiabnX7jQTgcXdZX_3vZJsnfl1s1oTUMHJ4vGeWWpMN1oqqwyRJV-ICKIPBhBykrfwZZDHQXFO0x4I9WKa-5VyKlg7EtMINEXKplTorQn7zEhitwGChXXZ4Q69oxwaYcLbO_2q1YJqFwcBUnpajvJnTXTb_ALpUdf5HRxpv2bDX5rztQD3_9aFy0_tklcJMR-u64_AwTtOTYStOW0PlPWyHhDqZ15q5SarOohbpk4sGphSwaje4nqdURaDSbqBS00abd1RP1OAOLuxZCgqksyNksBPOZgTYjKa6_5M2c3eGEfbDksTBGqMRiyxSZzItV3p0LtzZx-KVCUBcq2S86hNmcQmLnXX3ha9MDRyA2Bbj25E5TOUIUgxOe3tHUTC-nUelEFTj5Z5o77Uj0E72K8uErHoILF3EpiScIL6sgAwZ4Aus96Y1Dv86khEg4mA3bw49IcvKDuXuWpEqd-dgeZMN9tbelti_Rfjp2Kpwh_x_Q9Ux2QvBWH-Knd7h1FygVEn341nBLBaRdnd_pSBxi48lTDmJ7Fg2YA3vkLPY8yJbUhDSF9U1TefZcNanC1PPkZa6OlHO0csRXrVUp1Zaf-M_dVgFTdzLTsqCImVzxTSS1jIZXIbeI',
                'Content-Type': 'application/json'
              }
            }
          );
          if (airResponse.data && Array.isArray(airResponse.data)) {
            const labels = airResponse.data.map(item => item.month);
            const dataValues = airResponse.data.map(item => item.max_humidity);

            this.greenLineChart.chartData = {
              labels: labels,
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
              data: dataValues,
                }
              ]
            };
          }
        } catch (error) {
          console.log(error);

        }
      },
      bigLineChart: {
        allData: [
          [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          //   [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
          //   [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        ],
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
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: [],
          datasets: [
            {
              label: "Air quality Ppm",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: []
              // data: [80, 10, 11, 12, 3, 100],
              // data: [100, 70, 90, 70, 85, 60],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0],
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
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], //label insert
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45, 12], //data insert
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return this.$t("dashboard.chartCategories");
    },
  },
  methods: {

    initBigChart(index) {
      // console.log(this.bigLineChart);
      let chartData = {
        datasets: [
          {
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",],
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = "ar";
      this.$rtl.enableRTL();
    }
    this.maxHumidityInMonthly(),
      this.initBigChart(0);
    this.getTemperatureData();
    this.airQuality();
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
