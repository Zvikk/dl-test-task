<template>
  <v-container>
    <v-row v-if="!feed || !feed.length">
      <empty-state></empty-state>
    </v-row>

    <template v-else>
      <v-row>
        <v-col>
          <v-btn color="primary" to="/">Вернуться на главную</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h1>
            Вот что удалось найти
          </h1>

          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row v-for="(item, i) in feed" :key="i">
        <v-col>
          <v-card @click="navigateToNews(item)">
            <v-card-text>{{ item.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store, $axios, query }) {
    try {
      const { apiUrl, token } = store.state;
      const feed = (await $axios.$get(`/method/newsfeed.search/?q=${query.q}&extended=1&v=5.52&access_token=${token}`)).response.items;
      store.commit('setNews', feed);
      
      return {
        feed
      };
    } catch (error) {
      return {
        feed: null,
      };
    }
  },
  methods: {
    navigateToNews(news) {
      this.$router.push({ path: `/news/${news.id}`, meta: { news }})
    }
  }
};
</script>