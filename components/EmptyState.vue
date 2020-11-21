<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <div class="empty-state">
        <slot>
          <h1>Ничено не найдено</h1>
        </slot>

        <v-btn to="/" color="primary" class="empty-state__search-button">
          <v-icon class="empty-state__search-button-icon"> mdi-magnify </v-icon>
          Поискать ещё
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>