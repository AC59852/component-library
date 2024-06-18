<template>
  <div>
    <CardComponent :cardData="cardData" />
    <select name="colorSelect" id="dropdown" v-model="cardData.title.color">
      <option v-for="color in colors" :value="color">{{ color }}</option>
    </select>
    <input type="file" accept="image/*" @change="loadFile($event)">
  </div>
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
        }
      }
    },

    methods: {
      loadFile(e) {
        // const reader = new FileReader();
        // reader.onload = e => variable = e.target.result;
        // reader.readAsDataURL(this.files[0]);

        // this.cardData.background = variable;

        this.cardData.background = URL.createObjectURL(e.target.files[0]);

        // remove the background image when the file input is cleared
        if (!e.target.files[0]) {
          this.cardData.background = '';
        }
      }
    }
  }
</script>