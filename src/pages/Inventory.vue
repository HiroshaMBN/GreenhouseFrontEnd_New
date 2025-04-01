<template>
  <div class="row">
    <div class="col-6">
      <v-card>
        <v-card-title >
          Fertilization stocks report
          <v-spacer></v-spacer>
          <v-text-field dark v-model="search" append-icon="mdi-magnify" label="Search" single-line
            hide-details></v-text-field>
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
        <v-data-table dark dense  :headers="headers" :items="fertilizer" :search="search"></v-data-table>
      </v-card>
    </div>
  </div>

</template>

<script>
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
        { text: 'Stock date', value: 'stockDate' },
        { text: 'Next stock date', value: 'nextStockDate' },
        { text: 'Unit Price', value: 'unitPrice' },
        { text: 'Total Price', value: 'totalPrice' },
        { text: 'Stock Level', value: 'stockLevel' }
      ],
      fertilizer: [
        {
          name: 'Growdddddddddddd',
          availability: "1kg",
          stockDate: "2025-01-10",
          nextStockDate: "2025-03-10",
          stockLevel: "warning",
          unitPrice: 4.0,
          totalPrice: 1,

        },
        {
          name: 'placni',
          availability: "500g",
          stockDate: "2025-01-10",
          nextStockDate: "2025-03-22",
          stockLevel: "Critical",
          unitPrice: 4.0,
          totalPrice: 1,
        }
      ],
    }
  }
}
</script>
