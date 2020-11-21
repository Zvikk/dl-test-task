export const state = () => ({
  news: null
})

export const mutations = {
  setNews(state, news) {
    state.news = news;
  }
}

export const actions = {
  getNewsById({ state }, id) {
    const news = state.news && state.news.find(news => news.id == id);
    return news;
  }
}