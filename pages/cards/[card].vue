<template>
  <div>
    <CardComponent :cardData="cardData" />
    <!-- <select name="colorSelect" id="dropdown" v-model="cardData.title.color">
      <option v-for="color in colors" :value="color">{{ color }}</option>
    </select> -->
    <input type="file" accept="image/*" @change="loadFile($event)">
  </div>
  <div>
    <input type="text" v-model="cardData.title.name">
  </div>
  <div>
    <button @click="changeColour('.card__title')">Colour Picker</button>
    <h3>Current Colour: <span class="card__color">{{ cardData.title.color }}</span></h3>
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
  import Picker from 'vanilla-picker/csp';
  import 'vanilla-picker/dist/vanilla-picker.csp.css';

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
      },

      changeColour(e) {
        // if a picker is already open, do nothing
        if (document.querySelector('.picker_wrapper')) return;

        const picker = new Picker({
          parent: document.querySelector(e),
          popup: false,
          onChange: color => {
            this.cardData.title.color = color.hex;
          },
          // onDone, close the picker
          onDone: color => {
            picker.destroy();
          }
        });
      }
    }
  }
</script>
<style>
.card__color {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.card__color::before {
  content: '';
  height: 25px;
  width: 25px;
  display: flex;
  background-color: v-bind(cardData.title.color);
}
</style>