export const state = () => ({
  apiUrl: 'https://api.vk.com/method/newsfeed.search',
  token: 'e2ddc95be2ddc95be2ddc95b9fe2a8c4ccee2dde2ddc95bbd650730980fc2014e13f23c',
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