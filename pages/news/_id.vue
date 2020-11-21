<template>
  <v-container class="news">
    <template v-if="!news">
      <v-row justify="center" align="center">
        <v-col cols="6">
          <div class="news__empty-state">
            <h1>Новость не найдена</h1>

            <v-btn to="/" color="primary" class="news__search-button">
              <v-icon class="news__search-button-icon"> mdi-magnify </v-icon>
              Поискать ещё
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </template>

    <v-row v-else>
      <v-col>
        <div class="news__info">
          <div class="news__info-property">
            <div class="news__info-property-name">Дата:</div>
            <div class="news__info-property-value">
              {{ getDate(news.date) }}
            </div>
          </div>

          <div class="news__info-property" v-if="news.profiles">
            <div class="news__info-property-name">Автор:</div>
            <div class="news__info-property-value">{{ authorFullName }}</div>
          </div>

          <v-divider class="news__divider"></v-divider>

          <div>{{ news.text }}</div>

          <v-divider class="news__divider"></v-divider>

          <v-row justify="center" align="center">
            <v-col cols="4">
              <v-carousel
                height="180"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(image, i) in thumbsImages"
                  :key="i"
                  :src="image"
                  @click="openImage(fullImages[i])"
                >
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>

          <v-divider class="news__divider"></v-divider>

          <div class="news__info-property">
            <div class="news__info-property-name">Лайкнули:</div>
            <div class="news__info-property-value">{{ news.likes.count }}</div>
          </div>
        </div>
      </v-col>

      <v-dialog v-model="dialog" max-width="400" overlay-opacity="0.9">
          <img :src="currentImage">
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    news: null,
    dialog: false,
    currentImage: false
  }),
  computed: {
    authorFullName() {
      return (
        this.news.profiles &&
        this.news.profiles.first_name + this.news.profiles.last_name
      );
    },
    thumbsImages() {
      return this.news.attachments
        .filter((attachment) => attachment.type === "photo")
        .map((photo) => photo.photo.photo_130);
    },
    fullImages() {
      return this.news.attachments
        .filter((attachment) => attachment.type === "photo")
        .map((photo) => photo.photo.photo_604);
    },
  },
  methods: {
    ...mapActions(["getNewsById"]),

    getDate(date) {
      const newsDate = new Date(date * 1000).toLocaleDateString();

      return newsDate;
    },

    openImage(image) {
      this.currentImage = image;
      this.dialog = true;
    },
  },
  async created() {
    this.news = await this.getNewsById(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
.news {
  &__empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__search-button {
    margin-top: 16px;
  }

  &__search-button-icon {
    margin-right: 8px;
  }

  &__info-property {
    display: flex;
    align-items: center;
  }

  &__info-property-name {
    margin-right: 8px;
  }

  &__divider {
    margin: 16px 0;
  }
}
</style>