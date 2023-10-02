<template>
    <header class="w-3/4 inline-flex gap-2 items-center justify-between border-b max-md:w-full max-md:px-6 max-md:py-4">

        <!-- Responsive-Menu-Button & Logo & Navigation Items -->
        <div class="flex items-center justify-between">
            <!-- Menu Button of Small Screens -->
            <button @click="active = !active" class="hidden mr-4 max-md:block z-[80]">
                <img v-show="!active" src="../assets/icons/icon-menu.svg" alt="">
                <img v-show="active" class="absolute top-[1.5rem] right-100 bottom-0" src="../assets/icons/icon-close.svg"
                    alt="">
            </button>
            <a :class="active ? 'mr-[-50%]' : 'mr-12'" class="block max-[400px]:mr-1 w-[140px]" href="#" aria-label="Sneakers Logo">
                <svg class="self-center" width="138" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                        fill="#1D2026" fill-rule="nonzero" />
                </svg>
            </a>

            <ul class="flex items-center gap-8 max-lg:gap-4 max-md:hidden">
                <li class="transition-all flex items-center h-28 hover:border-b-4 hover:border-b-[#ff7d1a]
                            [&_a]:hover:text-[#000]" v-for="item in navList" :key="item">
                    <a class="text-[#68707d] hover:font-semibold" href="#">{{ item }}</a>
                </li>
            </ul>
        </div>

        <!-- Mobile Overlay Container For Small Screens -->
        <transition name="slide-menu">
            <div v-show="active" class="slideLayer hidden absolute bg-white flex-col left-0 top-0 
                bottom-0 w-[64%] px-8 py-10 max-lg:flex z-[70]">
                <!-- Your menu content here -->
                <ul class="flex flex-col items-start mt-12 gap-4">
                    <li class="transition-all flex items-center hover:underline
                    [&_a]:hover:text-[#000]" v-for="item in navList" :key="item">
                        <a class="text-[#000] font-bold text-xl" href="#">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </transition>




        <!--- Overlay Contaienr to set opacity to the main contents-->
        <div :class="active ? 'bg-black absolute opacity-70 top-0 bottom-0 left-0 w-[100%]' : 'opacity-100'"
            @click="active = !active" class="slideLayer opacity-100 z-[60]"></div>


        <!-- Cart & Avatar Container -->
        <div class="inline-flex items-center justify-center gap-[2vw]">
            <a class="relative [&_path]:hover:fill-[#000] w-[30px]" @click="isCartOpened = !isCartOpened" href="#">
                <span v-show="!isBasketEmpty"
                    class="absolute -right-2 -top-2  
                            inline-flex items-center justify-center text-white text-[10px] font-bold w-5 h-4 rounded-full bg-orange-500">
                    {{ totalQuantity }}
                </span>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#69707D" fill-rule="nonzero" />
                </svg>
            </a>

            <Transition enter-from-class="opacity-0" enter-leave-class="opacity-100"
                enter-active-class="transition-opacity duration-450" leave-from-class="opacity-100"
                leave-to-class="opacity-0" leave-active-class="transition-opacity duration-450">
                <div v-show="isCartOpened && active === false" class="absolute top-[5.5em] right-24 flex flex-col items-start w-[360px] h-[260px] 
                bg-white rounded-lg shadow-lg shadow-black-500/50 max-md:z-[99] max-md:w-[96%] max-md:right-3">
                    <h5 class="font-semibold p-6">Cart</h5>
                    <span class="border-[1px] border-gray-100 w-full"></span>

                    <div v-show="isBasketEmpty"
                        class="flex flex-row w-full h-full justify-center items-center font-semibold">
                        Your cart is empty.
                    </div>

                    <div v-show="!isBasketEmpty" class="flex flex-col p-6 gap-6 w-full h-full 
                            justify-center items-center font-semibold">

                        <div class="flex flex-row items-center justify-between w-full gap-4">
                            <div class="flex flex-row items-center justify-center gap-4">
                                <img class="max-w-[55px] rounded-md" src="./../assets/images/image-product-1-thumbnail.jpg"
                                    alt="Fall Limited Edition Sneakers">
                                <div class="flex flex-col justify-between items-start mr-2 h-full">
                                    <p class="text-[#68707d] text-[15.5px] font-normal leading-relaxed">
                                        {{ productInfo.productName }}
                                    </p>
                                    <p class="text-[#68707d] font-normal leading-relaxed">
                                        ${{ calculatePrice(productInfo.price, productInfo.discount) }} x {{
                                            totalQuantity }}
                                        <span class=" font-bold text-black">${{ (calculatePrice(productInfo.price,
                                            productInfo.discount) * totalQuantity).toFixed(2) }}</span>
                                    </p>
                                </div>
                            </div>

                            <svg @click="setQuantityToZero()" class="[&_use]:hover:fill-black cursor-pointer" width="14"
                                height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <path
                                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                        id="a" />
                                </defs>
                                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                            </svg>
                        </div>

                        <a class="font-bold text-sm flex flex-row items-center bg-[#ff7d1a] hover:opacity-50 
                                transition-all h-[3.45rem] w-full justify-center rounded-lg shadow-lg cursor-pointer
                                text-white shadow-orange-500/50">
                            <svg width="36" height="34" fill="#ffffff" viewBox="0 0 100 100" data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M65.84,51.69A14.16,14.16,0,1,1,51.69,65.84,14.2,14.2,0,0,1,65.84,51.69ZM43,64.54a5,5,0,1,1-5,5A5,5,0,0,1,43,64.54ZM71,60.08l-7.58,8.49L60,65.14a1,1,0,0,0-1.42,0l-1.41,1.31a.86.86,0,0,0,0,1.32L62,72.52a2,2,0,0,0,1.42.6,1.84,1.84,0,0,0,1.41-.6l9-9.81a1,1,0,0,0,0-1.31l-1.41-1.32A1,1,0,0,0,71,60.08ZM27.75,20a3,3,0,0,1,2.8,2.12h0l.78,2.7H75.46a1.87,1.87,0,0,1,1.84,2.41h0l-5.23,18.3a1.81,1.81,0,0,1-.65,1,19.75,19.75,0,0,0-5.58-.8A20,20,0,0,0,59,47H41.68a2.75,2.75,0,0,0-2.61,3.66h0v.1a2.82,2.82,0,0,0,2.71,2h8.87a20.26,20.26,0,0,0-3.5,5.78H37.52a2.9,2.9,0,0,1-2.8-2.12h0l-9.1-30.64H22.91A3,3,0,0,1,20,22.7,3.06,3.06,0,0,1,23.1,20h4.65Z">
                                    </path>
                                </g>
                            </svg>
                            Checkout
                        </a>
                    </div>
                </div>
            </transition>

            <a href="#" class="min-w-[38px]">
                <img class="w-[3.25em] hover:border-2 hover:border-[#ff7d1a] rounded-full 
                            p-[1px] transition-all max-md:w-10" src="./../assets/images/image-avatar.png"
                    alt="Avatar image">
            </a>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "page-header",
    computed: {
        productInfo() {
            return this.$store.state.productInfo;
        },
        // Use the mapState helper to map the state to a local computed property
        ...mapState(['isBasketEmpty']),
        ...mapState(['totalQuantity']),
    },
    methods: {
        setQuantityToZero() {
            this.$store.commit('updateBasketEmptyState', this.$store.state.isBasketEmpty = true)
            this.$store.commit('updateQuantity', this.$store.state.totalQuantity = 0);
        },

    },
    data() {
        return {
            active: false,
        };
    },
};
</script>

<script setup>
import { ref } from "vue";


const isCartOpened = ref(false);

function calculatePrice(price, discount) {
    return (price * (discount / 100)).toFixed(2);
}

const navList = ref([
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact"
]);

</script>

<style scoped>
.slide-menu-enter-active {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(-100%, 0);
    -webkit-transform: translate(-100%, 0);
}

.slide-menu-leave-active {
    transform: translate(-100%, 0);
    -webkit-transform: translate(-100%, 0);
}

.slideLayer {
    transition: all 120ms ease-in-out 0s;
    -webkit-transition: all 120ms ease-in-out 0s;
}
</style>