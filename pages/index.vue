<template>
  <v-row no-gutters v-cloack>
    <v-col no-gutters>
      <v-form @submit.prevent="submit" v-model="valid" ref="form">
        <v-container>
          <v-row no-gutters>
            <v-col no-gutters>
              <div class="search-input">
                <v-text-field
                  v-model="query"
                  label="Введите запрос"
                  :rules="required"
                  required
                ></v-text-field>
                
                <v-btn class="mx-2" fab small color="primary" @click="submit">
                  <v-icon> mdi-magnify </v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    query: null,
    valid: false,
    required: [v => !!v || 'Введите как минимум 1 символ']
  }),
  methods: {
    submit() {
      const valid = this.$refs.form.validate();

      if (!valid) {
        return;
      }

      this.$router.push({ path: '/result', query: { q: this.query }});
    },
  },
};
</script>
