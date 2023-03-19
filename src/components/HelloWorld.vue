<template>
  <template v-if="activePhase == 1">
    <main class="containerDiv">
      <!-- <h1>{{ msg }}</h1> -->
      <div class="bg-[#2f394b9e] circularBackground">
        <svg class="" width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614" />
        </svg>
      </div>
      <h1 class="text-3xl font-medium mt-10">How did we do?</h1>
      <p class="text-[15px] leading-6 text-gray-400 mt-4">
        {{ paragraph }}
      </p>
      <ul id="ratingsList" class="flex flex-row justify-around mt-4">
        <li @click="checkSelectedChoice" :id="'choice' + label"
          class="flex flex-row circularBackground bg-[#2f394b9e] hover:bg-orange-600 active:bg-orange-700"
          v-for="label in ratings" :key="label">
          <input v-model="selected" :value="label" type="radio" name="ratings" :id="'choice' + label">
          <span class="select-none mt-1" :for="'rating' + label">{{ label }}</span>
        </li>
      </ul>
      <button @click.prevent="activePhase = 2"
        class="bg-orange-600 uppercase tracking-wider hover:bg-slate-100 active:bg-slate-200 text-white-700 font-normal hover:text-orange-600 py-3 px-4 rounded-3xl mt-6">
        submit
      </button>
    </main>
  </template>

  <Transition name="fade">
  <template v-if="activePhase == 2">
    <main class="containerDiv max-w-xs" style="max-width: 410px;">
      <!-- <h1>{{ msg }}</h1> -->
      <div class="self-center mt-2">
        <img src="../assets/illustration-thank-you.svg" alt="">
      </div>
      <div class="p-1 pr-4 pl-4 rounded-2xl self-center text-orange-400 text-base mt-8" 
           style="background: rgb(34 43 54);">
        You selected {{ ratingChoice }} out of 5
      </div>
      <h1 class="self-center mt-9 text-3xl font-semibold">Thank you!</h1>
      <p class="self-center text-center text-[15px] text-gray-400 mt-5">
        We appreciate you taking the time to give a rating. If
        you ever need more support, don’t hesitate to get in touch!
      </p>
    </main>
  </template>
</Transition>
<div class="text-slate-300 mt-2">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
      >. 
      <br>
      Coded by <a href="https://github.com/AhmedTxl">AhmedTx</a>.
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  }
};
</script>

<script setup>
import { ref } from "vue";

var ratingChoice = 1;

function checkSelectedChoice() {

  var ul = document.getElementById("ratingsList");
  var items = ul.getElementsByTagName("li");

  for (var i = 0; i < items.length; ++i) {
    if (items[i].firstChild.checked) {
      ratingChoice = items[i].firstChild.value;

      document.getElementById(items[i].firstChild.id).classList.remove('bg-[#2f394b9e]');
      document.getElementById(items[i].firstChild.id).classList.add('bg-[#3e495d]');
    } else {
      document.getElementById(items[i].firstChild.id).classList.remove('bg-[#3e495d]');
      document.getElementById(items[i].firstChild.id).classList.add('bg-[#2f394b9e]');
    }
  }
}

var activePhase = ref(1);
const selected = ref(1);
const paragraph = ref(
  "Please let us know how we did with your support request." +
  "All feedback is appreciated to help us improve our offering!"
);
const ratings = ["1", "2", "3", "4", "5"];
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
<style scoped>
@import "../main.css";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
