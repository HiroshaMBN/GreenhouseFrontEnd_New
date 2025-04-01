<template>
  <div class="row">
    <div class="col-md-6">
      <template>
        <h4>Notification (SMS)</h4>
        <v-data-table dark dense :headers="headers" :items="sms" item-key="name" class="elevation-1"></v-data-table>
      </template>
    </div>
    <div class="col-md-6">
      <template>
        <h4>Notification (E-mail)</h4>
        <v-data-table dark dense :headers="headers" :items="sms" item-key="name" class="elevation-1"></v-data-table>
      </template>
    </div>

  </div>
</template>
<script>
export default {
  data: () => ({
    sms: [
      {
        name: 'Frozen Yogurt',
        sms: 159,
        email: 6.0
      },
      {
        name: 'Total SMS',
        sms: 237,
        email: 9.0
      },
    ],
    headers: [
      {
        text: 'sms name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'SMS Information', value: 'sms' },
      { text: 'Email count', value: 'email' },
    ],
  }),
}
</script>
<style></style>
