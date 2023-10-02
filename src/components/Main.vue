<template>
    <main class="flex flex-col items-center justify-center mt-[10vh] 
                max-lg:px-28 max-md:w-full max-md:mt-0 max-md:px-0">
        <div class="inline-flex items-center justify-around max-md:flex-col 
                    max-md:w-full">
            <div class="flex flex-col items-center w-[450px] max-lg:w-[24em] max-md:hidden max-[825px]:w-80 max-[825px]:mt-[2em]">
                <a @click="isImgOpened = true" class="cursor-pointer">
                    <img class="rounded-2xl" :src="require('@/assets/images/' + selectedImage.full)"
                        :alt="selectedImage.full" />
                </a>
                <ul class="overflow-hidden inline-flex gap-6">
                    <li class="mt-8 whitespace-nowrap cursor-pointer" @click="selectedImage = image"
                        v-for="(image, index) in productImages" :key="index">
                        <a :class="JSON.stringify(selectedImage) === JSON.stringify(image)
                            ? 'block rounded-2xl border-[#ff7d1a] border-2'
                            : 'border-none opacity-100'
                            ">
                            <img :class="JSON.stringify(selectedImage) === JSON.stringify(image)
                                ? 'opacity-50'
                                : 'opacity-100'" class="transition-all rounded-xl hover:opacity-50"
                                :src="require('@/assets/images/' + image.thumbnail)" :alt="image.thumbnail" />
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Repsonsive Product Image View -->
            <div class="relative inline-flex items-center justify-center 
                        md:hidden max-md:w-full">
                <a @click="prevImage"
                    class="absolute left-0 translate-x-[25%] translate-y-[-50%] mr-5 inline-flex items-center justify-center z-50 px-5 py-[1.1em] rounded-full bg-white cursor-pointer [&_path]:hover:transition-all [&_path]:hover:stroke-orange-500">
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                    </svg>
                </a>
                <Transition 
                    enter-from-class="opacity-0" 
                    enter-leave-class="opacity-400"
                    enter-active-class="transition-opacity duration-400" 
                    leave-from-class="opacity-400"
                    leave-to-class="opacity-0" 
                    leave-active-class="transition-opacity duration-400" 
                    mode="out-in">
                    <img class="w-[515px] max-md:w-full max-md:max-h-[525px] max-sm:max-h-[395px] max-md:object-cover"
                        :src="require('@/assets/images/' + selectedImage.full)" :alt="selectedImage.full"
                        :key="selectedImage.full" />
                </Transition>
                <a @click="nextImage" class="absolute right-0 translate-x-[15%] translate-y-[-50%] mr-5 
                    inline-flex items-center justify-center z-50 px-5 py-[1.1em] rounded-full 
                    bg-white cursor-pointer [&_path]:hover:transition-all [&_path]:hover:stroke-orange-500">
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                    </svg>
                </a>
            </div>

            <!-- LightBox Container -->
            <div @click="isImgOpened = false" v-show="isImgOpened"
                class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
            <Transition enter-from-class="opacity-0" enter-leave-class="opacity-100"
                enter-active-class="transition-opacity duration-300" leave-from-class="opacity-100"
                leave-to-class="opacity-0" leave-active-class="transition-opacity duration-300">
                <div v-show="isImgOpened"
                    class="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
                    <!-- Close icon of lightbox -->
                    <svg @click="isImgOpened = false"
                        class="scale-[1.75] w-6 h-6 self-end cursor-pointer mb-2 [&_path]:w-6 [&_path]:hover:fill-orange-500 [&_path]:transition-all"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#ffffff" fill-rule="evenodd" />
                    </svg>

                    <!-- The full image display with PREV and NEXT navigation buttons -->
                    <div class="relative inline-flex items-center justify-center">
                        <a @click="prevImage"
                            class="absolute left-0 translate-x-[-50%] translate-y-[-50%] mr-5 inline-flex items-center justify-center z-50 px-5 py-[1.1em] rounded-full bg-white cursor-pointer [&_path]:hover:transition-all [&_path]:hover:stroke-orange-500">
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                            </svg>
                        </a>
                        <Transition enter-from-class="opacity-0" enter-leave-class="opacity-100"
                            enter-active-class="transition-opacity duration-200" leave-from-class="opacity-100"
                            leave-to-class="opacity-0" leave-active-class="transition-opacity duration-200" mode="out-in">
                            <img class="rounded-2xl w-[515px]" :src="require('@/assets/images/' + selectedImage.full)"
                                :alt="selectedImage.full" :key="selectedImage.full" />
                        </Transition>
                        <a @click="nextImage"
                            class="absolute right-0 translate-x-[85%] translate-y-[-50%] mr-5 inline-flex items-center justify-center z-50 px-5 py-[1.1em] rounded-full bg-white cursor-pointer [&_path]:hover:transition-all [&_path]:hover:stroke-orange-500">
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                            </svg>
                        </a>
                    </div>

                    <ul class="overflow-hidden inline-flex gap-6">
                        <li class="mt-8 cursor-pointer" @click="selectedImage = image"
                            v-for="(image, index) in productImages" :key="index">
                            <a class="relative block" :class="JSON.stringify(selectedImage) === JSON.stringify(image)
                                ? ' rounded-[13.5px] border-[#ff7d1a] border-2'
                                : 'border-none opacity-100'
                                ">
                                <img :class="JSON.stringify(selectedImage) === JSON.stringify(image)
                                    ? 'brightness-[1.05]'
                                    : 'brightness-[0.9]'
                                    " class="w-[86px] rounded-xl hover:brightness-[1.12]"
                                    :src="require('@/assets/images/' + image.thumbnail)" :alt="image.thumbnail" />
                                <div :class="JSON.stringify(selectedImage) === JSON.stringify(image)
                                    ? 'absolute'
                                    : 'hidden'
                                    "
                                    class="top-0 left-0 w-full h-full bg-white bg-opacity-60 rounded-xl cursor-pointer">
                                </div>
                                <div
                                    class="absolute top-0 left-0 w-full h-full hover:bg-white hover:bg-opacity-40 rounded-xl cursor-pointer">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>

            <div class="flex flex-col justify-start mt-10 items-start gap-4 p-5 text-left ml-24 max-w-[455px]
                        max-md:p-0 max-md:ml-0 max-md:px-6 max-md:max-w-[95vw] max-[940px]:ml-[6vw] max-sm:mt-7
                        max-[895px]:ml-0 max-[815px]:p-4">
                <h4 class="uppercase text-sm tracking-widest font-bold text-[#ff7d1a]">
                    {{ productInfo.brand }}
                </h4>

                <h1 class="leading-[1.135] font-bold mb-3"
                    style="font-size: clamp(3ch, 3.9ch, 4.2ch);">
                    {{ productInfo.productName }}
                </h1>

                <p class="text-[#68707d] text-[15.75px] leading-relaxed mb-2">
                    {{ productInfo.productDescription }}
                </p>
                <div class="flex flex-col gap-1 max-md:flex-row max-md:justify-between max-md:w-full max-md:items-center">
                    <div class="inline-flex items-center justify-center gap-4">
                        <h2 class="text-3xl font-bold">${{ calculatePrice() }}</h2>
                        <span :class="productInfo.isDiscounted ? 'block' : 'hidden'"
                            class="text-[#ff7d1a] font-bold bg-[#ff7d1a33] px-[0.6rem] py-[2px] rounded-lg">
                            {{ productInfo.discount }}%
                        </span>
                    </div>
                    <h3 :class="productInfo.isDiscounted ? 'block' : 'hidden'"
                        class="text-[#b6bcc8] font-bold line-through">
                        ${{ productInfo.price.toFixed(2) }}
                    </h3>
                </div>

                <div class="inline-flex items-center justify-center gap-4 mt-4 max-md:flex-col max-md:w-full">
                    <div class="select-none inline-flex items-center justify-around h-[3.45rem] 
                                w-40 bg-[#f7f8fd] rounded-lg max-md:w-full">
                        <a class="hover:opacity-50 cursor-pointer" @click.prevent="quantity !== 0 ? quantity-- : quantity"  aria-label="Decrease Quantity">
                            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <path
                                        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"></path>
                                </defs>
                                <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"></use>
                            </svg>
                        </a>
                        <span class="font-bold w-2.5">
                            {{ quantity }}
                        </span>
                        <a class="hover:opacity-50 cursor-pointer" @click.prevent="quantity++" aria-label="Increase Quantity">
                            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <path
                                        d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"/>
                                </defs>
                                <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
                            </svg>
                        </a>
                    </div>
                    <a @click="addToBasket()" class="font-bold text-sm flex flex-row items-center bg-[#ff7d1a] 
                                hover:opacity-50 transition-all h-[3.45rem] w-64 justify-center 
                                rounded-lg shadow-lg cursor-pointer select-none text-white 
                                shadow-orange-500/50 max-md:w-full max-md:mb-20"
                        aria-label="Add To Cart">
                        <svg class="mr-2" width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#fff" fill-rule="nonzero" />
                        </svg>
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "main-page",
    computed: {
        ...mapState(["isBasketEmpty"]),
        ...mapState(["totalQuantity"]),
    },
    methods: {
        addToTotalQuantity() {
            this.$store.commit(
                "updateQuantity",
                (this.$store.state.totalQuantity += this.quantity)
            );
        },
        addToBasket() {
            if (this.quantity === 0) {
                // Should appear as a pop-up feedback to the user.
                console.log(
                    "Add 1 of product quantity at least to be able to add it to your basket!"
                );
            } else {
                this.addToTotalQuantity();
                this.$store.commit(
                    "updateBasketStatus",
                    (this.$store.state.isBasketEmpty = false)
                );
            }
        },
    },
    data() {
        return {
            // Local Ref to indicate the quantity added to the total basket quantity
            quantity: 1,
        };
    },
};
</script>

<script setup>
import { ref } from "vue";

// Indicates if the image clicked (Act as trigger to show the lightbox)
const isImgOpened = ref(false);

// Function to perform the navigation in the lightbox for the Previous button
const prevImage = () => {
    const index = productImages.value.indexOf(selectedImage.value);
    selectedImage.value =
        productImages.value[index - 1] ||
        productImages.value[productImages.value.length - 1];
};

// Function to perform the navigation in the lightbox for the Next button
const nextImage = () => {
    const index = productImages.value.indexOf(selectedImage.value);
    selectedImage.value =
        productImages.value[index + 1] || productImages.value[0];
};

function calculatePrice() {
    return (productInfo.value.price * (productInfo.value.discount / 100)).toFixed(
        2
    );
}

// Store the product info in an object to make it easier to read and modify
const productInfo = ref({
    brand: "Sneaker Company",
    productName: "Fall Limited Edition Snakers",
    productDescription:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
    isDiscounted: true,
});

// An object that used to show the choosed image
var selectedImage = ref({
    full: "image-product-1.jpg",
    thumbnail: "image-product-1-thumbnail.jpg",
});

// Stores the product images in an array to make it easier
// differentiate between the full and thumbnail image for the product
const productImages = ref([
    {
        full: "image-product-1.jpg",
        thumbnail: "image-product-1-thumbnail.jpg",
    },
    {
        full: "image-product-2.jpg",
        thumbnail: "image-product-2-thumbnail.jpg",
    },
    {
        full: "image-product-3.jpg",
        thumbnail: "image-product-3-thumbnail.jpg",
    },
    {
        full: "image-product-4.jpg",
        thumbnail: "image-product-4-thumbnail.jpg",
    },
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    opacity: 1;
    animation-duration: 200ms;
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
