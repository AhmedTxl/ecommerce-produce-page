import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            quantity: 0,
            productInfo: {
                brand: 'Sneaker Company',
                productName: 'Fall Limited Edition Snakers',
                productDescription: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
                price: 250,
                discount: 50,
                isDiscounted: true,
            },
            isBasketEmpty: true,
            totalQuantity: 0,
        };
    },
    mutations: {
        updateQuantity(state, newQuantity) {
            state.totalQuantity = newQuantity;
        },
        updateBasketStatus(state, newBasketStatus) {
            state.isBasketEmpty = newBasketStatus;
        },
        updateBasketEmptyState(state, newBasketEmptyState) { 
            state.isBasketEmpty = newBasketEmptyState;
        }
    },
});

export default store;