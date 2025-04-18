export const fetchData = {
    restaurants: [
        {
            id: '123',
            rest_name: 'mangal',
            rest_data: {
                users: [],
                superAdmin: {
                    login: 'mangal-hero',
                    password: 'mangal112233'
                },
                admins: [],
                data: {
                    foods: [
                        {
                            title: 'Steyk (tovuq go\'shti)',
                            price: 30000,
                            img: 'https://grill-bbq.ru/wp-content/uploads/2022/02/stejki-iz-kurinoj-grudki-na-grile.jpg'
                        },
                        {
                            title: 'Shashlik (tovuq)',
                            price: 14000,
                            img: 'https://i.ytimg.com/vi/M03Lsyk-TU8/maxresdefault.jpg'
                        },
                        {
                            title: 'Lavash (mol go\'shti)',
                            price: 25000,
                            img: 'https://cdn-kz3.foodpicasso.com/assets/2024/10/11/5a566e9b4215902812353f0e810a4cbf---jpg_1000x_103c0_convert.jpg'
                        },
                        {
                            title: 'Lavash (siril)',
                            price: 28000,
                            img: 'https://img.postershop.me/cdn-cgi/image/width=1024,format=webp/https://img.postershop.me/6520/c8da63d7-cad5-4f12-add6-840020202210_image.jpg'
                        },
                        {
                            title: 'Lavash (tovuq)',
                            price: 18000,
                            img: 'https://wowfood.club/uploads/mini/big/97/rulet_iz_lavasha_s_kuricej_i_ovoshami.webp'
                        },
                        {
                            title: 'Klab sendvich',
                            price: 33000,
                            img: 'https://i.ibb.co/ccNfMf5L/klab.png'
                        },
                        {
                            title: 'Gamburg',
                            price: 10000,
                            img: 'https://i.ibb.co/FLhXTGt1/gamburg.jpg'
                        },
                        {
                            title: 'Burger',
                            price: 24000,
                            img: 'https://i.ibb.co/nqLCtB20/burgerrasm.jpg'
                        },
                        {
                            title: 'Donar (tovuq go\'shti)',
                            price: 23000,
                            img: 'https://i.ibb.co/JWkPWfmb/donartovuq.jpg'
                        },
                        {
                            title: 'Donar (mol go\'shti)',
                            price: 25000,
                            img: 'https://i.ibb.co/KcT06QC5/donarnon.webp'
                        },
                        {
                            title: 'Xot-dog',
                            price: 18000,
                            img: 'https://i.ibb.co/xKThnFgH/hotdog.jpg'
                        },
                        {
                            title: 'Xot-dog (nonga)',
                            price: 15000,
                            img: 'https://i.ibb.co/Y75SYhhz/hotdognon.jpg'
                        },
                        {
                            title: 'Xot-dog (go\'shtli)',
                            price: 30000,
                            img: 'https://i.ibb.co/NgXgY1bw/qazilihotdog.webp'
                        },
                        {
                            title: 'Xot-dog (kotletli)',
                            price: 15000,
                            img: 'https://i.ibb.co/G4pnbVdz/kotlethotdog.jpg'
                        },
                        {
                            title: 'Salat Yaponskiy',
                            price: 30000,
                            img: 'https://i.ytimg.com/vi/AKcbBYNQ3H8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDagwHL7RrJYUlvdSPb59xLqMKINw'
                        },
                        {
                            title: 'Mujskoy kapriz',
                            price: 30000,
                            img: 'https://hochu-gotovit.ru/wp-content/uploads/2020/01/muzhskoj-kapriz-1.jpg'
                        },
                        {
                            title: 'Fri',
                            price: 13000,
                            img: 'https://i.ibb.co/nNj5z9Tn/fri.jpg'
                        },
                        {
                            title: 'Aydaxo',
                            price: 18000,
                            img: 'https://i.ibb.co/bMtN15B0/aidaho.jpg'
                        },
                        {
                            title: 'Nagetsi',
                            price: 18000,
                            img: 'https://i.ibb.co/gbWCky1K/nuggets.jpg'
                        },
                        {
                            title: 'Sirli sharik',
                            price: 18000,
                            img: 'https://i.ibb.co/cK58Zsnh/cheeseballs.jpg'
                        }
                    ],
                    drinks: [
                        {
                            title: 'Sharbat (olcha / o\'rik)',
                            price: 5000,
                            img: 'https://i.ibb.co/93HpTZHR/sharbatlar.jpg'
                        },
                        {
                            title: 'Moxito',
                            price: 15000,
                            img: 'https://i.ibb.co/BH64GrtG/mohito.jpg'
                        },
                        {
                            title: 'Choy',
                            price: 5000,
                            img: 'https://i.ibb.co/kVPy0hGP/tea.webp'
                        },
                        {
                            title: 'Limon choy',
                            price: 8000,
                            img: 'https://i.ibb.co/kVPy0hGP/tea.webp'
                        },
                        {
                            title: 'Kofe 3/1',
                            price: 5000,
                            img: 'https://i.ibb.co/gbDqFNGS/cofe.jpg'
                        },
                        {
                            title: 'Kokteyl',
                            price: 18000,
                            img: 'https://i.ibb.co/hJMnnPJn/coctail.jpg'
                        }
                    ],
                    sweets: [
                        {
                            title: 'Muzqaymoq (vanil)',
                            price: 5000,
                            img: 'https://i.ibb.co/bjW5pBTY/icecream.webp'
                        },
                        {
                            title: 'Muzqaymoq (shokolad)',
                            price: 8000,
                            img: 'https://i.ibb.co/bjW5pBTY/icecream.webp'
                        },
                        {
                            title: 'Muzqaymoq (aralash)',
                            price: 8000,
                            img: 'https://i.ibb.co/bjW5pBTY/icecream.webp'
                        },
                        {
                            title: 'Muzqaymoq (kubokda)',
                            price: 8000,
                            img: 'https://i.ibb.co/bjW5pBTY/icecream.webp'
                        }
                    ]
                },
                clients: [
                    {
                        name:"Nodira",
                        surname:"Aliyeva",
                        number:"(97)-000-00-00",
                        gender:"A"
                    },
                    {
                        name:"Nodira",
                        surname:"Aliyeva",
                        number:"(97)-000-00-00",
                        gender:"A"
                    },
                    {
                        name:"Nodira",
                        surname:"Aliyeva",
                        number:"(97)-000-00-00",
                        gender:"A"
                    },
                    {
                        name:"Nodira",
                        surname:"Aliyeva",
                        number:"(97)-000-00-00",
                        gender:"A"
                    },
                    {
                        name:"Nodira",
                        surname:"Aliyeva",
                        number:"(97)-000-00-00",
                        gender:"A"
                    },
                    {
                        name:"Nodira",
                        surname:"Aliyeva",
                        number:"(97)-000-00-00",
                        gender:"A"
                    },
                ]
            }
        }
    ]
};