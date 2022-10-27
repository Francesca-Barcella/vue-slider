const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Spiderman',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit empore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            
            /* imageActive: {
                src: './assets/img/01.webp'
            }, */

            imageActive: 0,

            videogames: [
                {
                    image: './assets/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    altText: 'Spiderman'
                },
                {
                    image: './assets/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    altText: 'Ratchet & Clank'
                },
                {
                    image: './assets/img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    altText: 'Fortnite'
                },
                {
                    image: './assets/img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    altText: 'Stray'
                },
                {
                    image: './assets/img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    altText: 'Avengers'
                }
            ]
        }
    },

    methods: {
        nextBtn: function (){
            console.log('hai cliccato su next' + this.imageActive)
            if (this.imageActive === 0) {
                this.imageActive++
            }
        }
    }
}).mount('#app')