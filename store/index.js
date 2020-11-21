export const state = () => ({
  apiUrl: 'https://api.vk.com/method/newsfeed.search',
  token: '400da894a5970bce8bae9cac81817c305496b1e32a8975317cff63c01b892559654b7a4064d0d47e8a837',
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