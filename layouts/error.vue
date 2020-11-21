<template>
  <v-container>
    <v-row>
      <v-col>
        <empty-state>
          <h1>Упс.... Что-то пошло не так</h1>  
        </empty-state>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["error"],
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
