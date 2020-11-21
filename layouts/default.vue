<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center" align="center" no-gutters>
          <v-col cols="6" no-gutters>
            <div class="app-card">
              <Nuxt />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  .v-main {
    background: linear-gradient(-90deg, #31A74E 0%, #4385F5 100%);
  }

  .app-card {
    box-shadow: 0px 0px 22px 5px rgba(0,0,0,0.38);
    background-color: #f5f5f5;
  }
</style>
