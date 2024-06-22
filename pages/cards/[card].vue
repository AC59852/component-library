<template>
  <div>
    <CardComponent :cardData="cardData" />
    <select name="colorSelect" id="dropdown" v-model="cardData.title.color">
      <option v-for="color in colors" :value="color">{{ color }}</option>
    </select>
    <input type="file" accept="image/*" @change="loadFile($event)">
  </div>
  <div>
    <input type="text" v-model="cardData.title.name">
  </div>
  <ClientOnly>
    <highlightjs
        :code='`<article class="card">
    <div class="card__icon card__icon--top">
      <img src="/" alt="icon">
    </div>
    <div class="card__text">
      <h3 class="card__subtitle">10 June 2020</h3>
      <h2 class="card__title">${cardData.title.name}</h2>
      <p class="card__description">${cardData.description}</p>
      <button class="card__btn">
        <img src="/" alt="icon" class="card__icon card__icon--btn">
        <span class="card__subtitle card__subtitle--card">${cardData.btnText}</span>
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
  </article>`'
        language="html"
        />
    <highlightjs 
      :code="`
      .card__title {
        color: ${cardData.title.color}
      }
      `"
      language="css"
    />
  </ClientOnly>
</template>
<script>
  export default {
    data() {
      return {
        colors: ['red', 'blue', 'green', 'yellow'],

        cardData: {
          background: '',
          title: {
            name: 'Running in the Woods',
            color: 'green'
          },
          subtitle: '10 June 2020',
          description: 'The routines are designed to not only give you a full-body workout but also strengthen weak points—and pump up your trophy muscles.',
          btnText: 'Start',
          btnIcon: '/',
          footer: [
            {
              icon: '/',
              subtitle: 'Calories'
            },
            {
              icon: '/',
              subtitle: '45 Min'
            }
          ]
        },
      }
    },

    methods: {
      loadFile(e) {
        this.cardData.background = URL.createObjectURL(e.target.files[0]);

        // remove the background image when the file input is cleared
        if (!e.target.files[0]) {
          this.cardData.background = '';
        }
      }
    }
  }
</script>