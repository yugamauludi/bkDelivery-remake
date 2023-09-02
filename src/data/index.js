import imgCarousel1 from "../assets/images/carousel/slider-1.jpg"
import imgCarousel2 from "../assets/images/carousel/slider-2.jpg"
import imgCarousel3 from "../assets/images/carousel/slider-3.jpg"
import imgCarousel4 from "../assets/images/carousel/slider-4.jpg"
import imgCarousel5 from "../assets/images/carousel/slider-5.jpg"
import menu1 from "../assets/images/menus/menu-1.jpg"
import menu2 from "../assets/images/menus/menu-2.jpg"
import menu3 from "../assets/images/menus/menu-3.jpg"
import menu4 from "../assets/images/menus/menu-4.jpg"
import menu5 from "../assets/images/menus/menu-5.jpg"
import menu6 from "../assets/images/menus/menu-6.jpg"
import menu7 from "../assets/images/menus/menu-7.jpg"
import menu8 from "../assets/images/menus/menu-8.jpg"
import menu9 from "../assets/images/menus/menu-9.jpg"
import menu10 from "../assets/images/menus/menu-10.jpg"
import menu11 from "../assets/images/menus/menu-11.jpg"
import menu12 from "../assets/images/menus/menu-12.jpg"

const carouselMasterData = [
    {image: imgCarousel1},
    {image: imgCarousel2},
    {image: imgCarousel3},
    {image: imgCarousel4},
    {image: imgCarousel5},
]

const menuMasterData = [
    {
        image: menu1, title: 'King\'s Chicken [ Rasa Baru ]',
        product: [
            {
                title: 'Paket Crispy 1',
                note: '1 pc Ayam Crispy + Nasi + Jasmine Tea Medium [ Rasa Baru, Enaknya sampe gigitan terakhir ! ] 𝘗𝘰𝘵𝘰𝘯𝘨𝘢𝘯 𝘢𝘺𝘢𝘮 𝘺𝘢𝘯𝘨 𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢 𝘵𝘦𝘳𝘨𝘢𝘯𝘵𝘶𝘯𝘨 𝘬𝘦𝘵𝘦𝘳𝘴𝘦𝘥𝘪𝘢𝘢𝘯 𝘥𝘪 𝘵𝘰𝘬𝘰 𝘱𝘢𝘥𝘢 𝘴𝘢𝘢𝘵 𝘱𝘦𝘮𝘦𝘴𝘢𝘯𝘢𝘯/𝘱𝘦𝘯𝘨𝘪𝘳𝘪𝘮𝘢𝘯',
                price: 25000,
                upsize: 0,
                image: require('../assets/images/products/paket_crispy_1.jpg'),
                show_extras: false
            },
            {
                title: 'Paket Crispy 2',
                note: '2 pcs Ayam Crispy + Nasi + Jasmine Tea Medium [ Rasa Baru, Enaknya sampe gigitan terakhir ! ]',
                price: 45000,
                upsize: 0,
                image: require('../assets/images/products/paket_crispy_2.jpg'),
                show_extras: false
            },
            {
                title: 'Paket Crispy 5',
                note: '5 pcs Ayam Crispy + 3 Nasi + 3 Jasmine Tea Medium [ Rasa Baru, Enaknya sampe gigitan terakhir ! ]',
                price: 115000,
                upsize: 0,
                image: require('../assets/images/products/paket_crispy_5.jpg'),
                show_extras: false
            },
            {
                title: '5 Pcs Ayam Crispy',
                note: '5 pcs Ayam Crispy. [ Rasa Baru, Enaknya sampe gigitan terakhir ! ]',
                price: 90909,
                upsize: 0,
                image: require('../assets/images/products/5_pcs_ayam_crispy.jpg'),
                show_extras: false
            }
        ]
    },
    {
        image: menu2, title: 'Special Menu',
        product: [
            {
                title: 'Paket 1 Pcs Ayam Madura Medium',
                note: '1 Pc Ayam, 1 Bumbu Madura, 1 Nasi & 1 Jasmine Tea Medium',
                price: 35909,
                upsize: 6818,
                image: require('../assets/images/products/paket_1_pcs_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: 'Paket 2 Pcs Ayam Madura Medium',
                note: '2 Pcs Ayam, 1 Bumbu Madura, 1 Nasi & 1 Jasmine Tea Medium',
                price: 51364,
                upsize: 6818,
                image: require('../assets/images/products/paket_2_pcs_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: 'King Box Ayam Madura Regular',
                note: '1 Pc Ayam, 1 Bumbu Madura, 1 Nasi, 1 Cheeseburger & 1 Jasmine Tea Regular',
                price: 51364,
                upsize: 5455,
                image: require('../assets/images/products/kings_box_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: 'King Box Ayam Madura Large',
                note: '1 Pc Ayam, 1 Bumbu Madura, 1 Nasi , 1 Cheeseburger & 1 Jasmine Tea Large',
                price: 63637,
                upsize: 0,
                image: require('../assets/images/products/kings_box_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: 'Paket 5 Pcs Ayam Madura',
                note: '5 Pc Ayam, 3 Bumbu Madura, 3 Nasi & 3 Jasmine Tea Regular',
                price: 134545,
                upsize: 0,
                image: require('../assets/images/products/paket_5_pcs_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: 'Paket Rame - Rame Ayam Madura',
                note: '5 Pc Ayam, 3 Nasi, 3 Bumbu Madura, 2 Cheese Whopper® Jr, 1 Cheeseburger Supreme, 3 Fries Regular, 3 Jasmine Tea Regular & 3 Coke Regular',
                price: 240000,
                upsize: 0,
                image: require('../assets/images/products/paket_rame_rame_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: '1 Pcs Ayam Madura',
                note: '1 Pcs Ayam Madura Kings Chicken juicy renyah tanpa MSG dengan bumbu Madura yang special',
                price: 25000,
                upsize: 0,
                image: require('../assets/images/products/1_pcs_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: '2 Pcs Ayam Madura',
                note: '2 Pcs Ayam Madura',
                price: 45000,
                upsize: 0,
                image: require('../assets/images/products/2_pcs_ayam_madura.jpg'),
                show_extras: false
            },
            {
                title: 'Madura Sauce',
                note: 'Bumbu Madura BK',
                price: 7273,
                upsize: 0,
                image: require('../assets/images/products/madura_sauce.jpg'),
                show_extras: false
            },
            {
                title: 'King Fusion Nastar Crumble',
                note: 'Ice cream vanilla yang lembut dibalut selai nastar asam manis dan bertabur nastar crumble',
                price: 15000,
                upsize: 0,
                image: require('../assets/images/products/king_fusion_nastar.jpg'),
                show_extras: false
            }
        ]
    },
    {
        image: menu3, title: 'Tropical Whopper [ Limited Time ]',
        product: [
            {
                title: 'King Box Tropical Whopper® Medium',
                note: 'Tropical Whopper® + 1 pc Ayam + Nasi + Coke Medium',
                price: 89545,
                upsize: 6818,
                image: require('../assets/images/products/king_box_tropical_wrapper.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu4, title: 'BK APP EXCLUSIVE',
        product: [
            {
                title: 'App Exc BBQ Beef Rasher',
                note: '',
                price: 23182,
                upsize: 0,
                image: require('../assets/images/products/app_exc_bbq_beef.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu5, title: 'Cheese Burger Favorite',
        product: [
            {
                title: 'King Box Cheeseburger Regular',
                note: 'Cheeseburger + 1 pc Ayam + Nasi + Coke Regular',
                price: 49545,
                upsize: 5455,
                image: require('../assets/images/products/king_box_cheeseburger.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu6, title: 'Cheese Whopper®',
        product: [
            {
                title: 'King Box Whopper®',
                note: 'Whopper® + 1pc Ayam + Nasi + Medium Coke',
                price: 86363,
                upsize: 0,
                image: require('../assets/images/products/king_box_wropper.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu7, title: 'Gold Collection',
        product: [
            {
                title: 'King Box BBQ Angus Burger Medium',
                note: 'BBQ Angus Burger + 1 pc Ayam + Nasi + Coke Medium',
                price: 89545,
                upsize: 0,
                image: require('../assets/images/products/king_box_bbq_angus.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu8, title: 'KING\'S CHICKEN',
        product: [
            {
                title: 'Paket BESAR 1',
                note: '1 pc Ayam Besar + Nasi + Jasmine tea Ukuran Medium. Resep Ayam Lebih Renyah dan Gurih.',
                price: 35909,
                upsize: 5909,
                image: require('../assets/images/products/paket_besar_1.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu9, title: 'Kids Meal',
        product: [
            {
                title: 'King JR Cheeseburger',
                note: 'KIds Cheeseburger + Regular Fries + Regular Ice Milo',
                price: 31818,
                upsize: 0,
                image: require('../assets/images/products/king_jr_cheeseburger.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu10, title: 'Side & Desert',
        product: [
            {
                title: 'Fusion Kitkat®',
                note: 'Es krim vanilla yang creamy di padukan dengan Kit Kat spread yang crunchy',
                price: 16818,
                upsize: 0,
                image: require('../assets/images/products/fusion_kitkat.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu11, title: 'BEVERAGES',
        product: [
            {
                title: 'Coke Large',
                note: 'Coke Large',
                price: 18182,
                upsize: 0,
                image: require('../assets/images/products/coke_large.jpg'),
                show_extras: false
            },
        ]
    },
    {
        image: menu12, title: 'KING DEALS',
        product: [
            {
                title: 'King Deals Box BBQ Beef Burger',
                note: '',
                price: 39545,
                upsize: 5455,
                image: require('../assets/images/products/kings_deal.jpg'),
                show_extras: true
            },
        ]
    },
    {
        image: menu3, title: 'Kupon Mei',
        product: [
            {
                title: 'K1A 0523 [ Ayam + Nasi ]',
                note: '1 Pcs Ayam + Nasi',
                price: 15000,
                upsize: 0,
                image: require('../assets/images/products/kia_o523.jpg'),
                show_extras: false
            },
        ]
    },
]

export {carouselMasterData, menuMasterData};