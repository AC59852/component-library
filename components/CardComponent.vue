<template>
  <article class="card">
    <div class="card__icon card__icon--top">
      <img src="/" alt="icon">
    </div>
    <div class="card__text">
      <h3 class="card__subtitle">10 June 2020</h3>
      <h2 class="card__title">{{ cardData.title.name }}</h2>
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
    }
  },

  // when the cardData.background changes, update the background image
  watch: {
    'cardData.background': function(newVal) {
      this.$el.style.backgroundImage = `url(${newVal})`
    }
  }
}
</script>

<style>
  .card__title {
    color: v-bind(cardData.title.color)
  }

  .card {
    height: 500px;
    width: 350px;
    background-size: cover;
    background-position: center;
    background-image: url('@/assets/images/card_img.png');
  }
</style>