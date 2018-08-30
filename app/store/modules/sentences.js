const state = {
  de_sentences: [],
  en_sentences: [],
  namespaced: true,
};

const mutations = {
  en_initSentences: (state, en_sentences) => state.en_sentences = en_sentences,
  de_initSentences: (state, de_sentences) => state.de_sentences = de_sentences,

};

const actions = {
  en_initSentences: ({ commit }, en_sentences) => commit('en_initSentences', en_sentences),
  de_initSentences: ({ commit }, de_sentences) => commit('de_initSentences', de_sentences),
};

const getters = {
  en_sentence: state => number => state.en_sentences[number - 1],
  de_sentence: state => number => state.de_sentences[number - 1],
  sentenceCount: state => state.en_sentences.length,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
