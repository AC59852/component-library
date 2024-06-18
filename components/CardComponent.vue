<template>
  <article class="card">
    <div class="card__icon card__icon--top">
      <img src="/" alt="icon">
    </div>
    <div class="card__text">
      <h3 class="card__subtitle">10 June 2020</h3>
      <h2 class="card__title">{{ card.title.name }}</h2>
      <p class="card__description">The routines are designed to not only give you a full-body workout but also strengthen weak points—and pump up your trophy muscles.</p>
      <button class="card__btn">
        <img src="/" alt="icon" class="card__icon card__icon--btn">
        <span class="card__subtitle card__subtitle--card">Start</span>
      </button>
    </div>
    <div class="card__footer">
      <div class="card__thumb">
        <img src="/" alt="icon" class="card__icon card__icon--footer">
        <span class="card__subtitle card__subtitle--footer">Calories</span>
      </div>
      <div class="card__thumb">
        <img src="/" alt="icon" class="card__icon card__icon--footer">
        <span class="card__subtitle card__subtitle--footer">45 Min</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['cardData'],

  data() {
    return {
      card: this.cardData
    }
  },

  // when the card.background changes, update the background image
  watch: {
    'card.background': function() {
      this.$el.style.backgroundImage = `url(${this.card.background})`
    }
  }
}
</script>

<style>
  .card__title {
    color: v-bind(card.title.color)
  }

  .card {
    height: 500px;
    width: 350px;
    background-size: cover;
    background-position: center;
  }
</style>