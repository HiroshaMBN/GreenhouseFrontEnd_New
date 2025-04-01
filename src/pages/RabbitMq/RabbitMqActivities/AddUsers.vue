<template slot="header">
  <div> <!-- Added wrapper element -->
    <h5 class="card-category">Configure thresholds</h5>
    <h3 class="card-title">

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="userName" :counter="10" :rules="nameRules" label="User Name" required></v-text-field>

        <v-text-field v-model="password" :rules="nameRules" label="Password" type="password" required></v-text-field>

        <v-text-field v-model="re_password" label="Re Enter Password" type="password" required></v-text-field>


        <v-select :items="items" filled label="Standard"></v-select>



        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>

    </h3>
  </div>
</template>
<script>
export default {
  data: () => ({


    valid: true,
    userName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    password: '',
    re_password,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,

  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
