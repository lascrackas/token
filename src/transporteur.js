const fs = require('fs');

const transporteur = [
    {
        "position": 1,
        "place_id": "17338497554812385225",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17338497554812385225&q=logistique+75",
        "lsig": "AB86z5WB7-dtUkPjSrZDABpAl4bB",
        "provider_id": "/g/11g01zw2_4",
        "gps_coordinates": {
            "latitude": 48.884534599999995,
            "longitude": 2.3855103
        },
        "links": {
            "website": "https://logistique-internationale.fr/",
            "directions": "https://www.google.fr/maps/dir//Logistique+Internationale,+75019+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66dc5e628be87:0xf09eb7a9ad9237c9?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "Logistique Internationale",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "address": "Paris"
    },
    {
        "position": 2,
        "place_id": "12540384463543221420",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12540384463543221420&q=logistique+75",
        "lsig": "AB86z5U9-nQojtmpmNdFLKgddbcE",
        "provider_id": "/g/11gxn54kgf",
        "gps_coordinates": {
            "latitude": 49.0214101,
            "longitude": 2.5975702
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Sed+Supply+Chain+Solutions,+35+Rue+de+Guivry,+77990+Le+Mesnil-Amelot/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e63d8547225e2d:0xae08653a50523cac?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIFRAA&hl=fr&gl=fr"
        },
        "title": "Sed Supply Chain Solutions",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "address": "Le Mesnil-Amelot"
    },
    {
        "position": 3,
        "rating": 5,
        "reviews_original": "(9)",
        "reviews": 9,
        "description": "\"Un logisticien comme vous n’en trouverez nul part ailleurs !\"",
        "place_id": "8441628182399152808",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8441628182399152808&q=logistique+75",
        "lsig": "AB86z5UirETFM4hcWo1oFl3j2i_s",
        "provider_id": "/g/11sx6ypsg2",
        "gps_coordinates": {
            "latitude": 48.952661899999995,
            "longitude": 2.4762473
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SoEasyLog+-+Logistique+E-commerce,+4+Rue+Louis+Saillant,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6154127b622fd:0x7526b01b31d3f2a8?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "SoEasyLog - Logistique E-commerce",
        "type": "Service logistique",
        "phone": "06 34 66 24 88",
        "address": "Aulnay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 4,
        "rating": 4,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "8772921016657731206",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8772921016657731206&q=logistique+75",
        "lsig": "AB86z5Ut5UH5AaoFI_8Utp6ARlnB",
        "provider_id": "/g/1tgtdvlr",
        "gps_coordinates": {
            "latitude": 45.6884018,
            "longitude": 4.9315226
        },
        "links": {
            "website": "https://www.sed.fr/fr/",
            "directions": "https://www.google.fr/maps/dir//Sed+Logistique,+5bis+Rue+de+l'Industrie,+69800+Saint-Priest/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4c39caff3e5a5:0x79bfad2f08715e86?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "Sed Logistique",
        "type": "Service logistique",
        "phone": "01 74 25 63 75",
        "address": "Saint-Priest",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 5,
        "place_id": "4608978840188212567",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4608978840188212567&q=logistique+75",
        "lsig": "AB86z5WvP77gdHwvO8XO2ZkLZwL5",
        "provider_id": "/g/11h_vvyz8l",
        "gps_coordinates": {
            "latitude": 43.5275695,
            "longitude": 5.4053357
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//S.D.L+Services+Diffusion+Logistique,+Les+Acad%C3%A9mies+Aixoises,+75+rue+Paul+Sabatier+Luynes,+13090+Aix-en-Provence/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12c98db43b1cc125:0x3ff661d5f2b5d557?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "S.D.L Services Diffusion Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "04 42 16 23 23",
        "address": "Aix-en-Provence",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 6,
        "place_id": "11826679084337181231",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11826679084337181231&q=logistique+75",
        "lsig": "AB86z5XPvPciEXejtjJACfmxvkOk",
        "provider_id": "/g/11tstzrss3",
        "gps_coordinates": {
            "latitude": 44.693965899999995,
            "longitude": 4.793998
        },
        "links": {
            "website": "https://www.skipper-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+-+Saulce-sur-Rh%C3%B4ne,+ZA+Le+Bosquet,+84+Chem.+Ferrat,+26270+Saulce-sur-Rh%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b547f0f4b7b751:0xa420cdf77e75b22f?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique - Saulce-sur-Rhône",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "04 75 85 85 00",
        "address": "Saulce-sur-Rhône",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 7,
        "rating": 3.1,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "9487441651200891112",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9487441651200891112&q=logistique+75",
        "lsig": "AB86z5WrT3mTM1si_zvZgyu3BPO6",
        "provider_id": "/g/11gnpqbyrp",
        "gps_coordinates": {
            "latitude": 45.6500336,
            "longitude": 5.1026269
        },
        "links": {
            "website": "http://www.sett-transports.com/",
            "directions": "https://www.google.fr/maps/dir//RT+Logistique+SQF,+29+Bcle+de+la+Ram%C3%A9e,+38070+Saint-Quentin-Fallavier/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4cfc682c332b5:0x83aa29ea471318e8?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "RT Logistique SQF",
        "type": "Service logistique",
        "phone": "04 76 72 83 75",
        "address": "Saint-Quentin-Fallavier",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 8,
        "rating": 4,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "13627861669690541509",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13627861669690541509&q=logistique+75",
        "lsig": "AB86z5XOyHr7keLuosf1kuE055O_",
        "provider_id": "/g/11ghpp4nbn",
        "gps_coordinates": {
            "latitude": 48.8843264,
            "longitude": 2.3096578
        },
        "links": {
            "website": "https://www.aft-dev.com/",
            "directions": "https://www.google.fr/maps/dir//AFT+Transport+Logistique,+82+Rue+Cardinet,+75017+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f2674ea014d:0xbd1fe3fc2e1105c5?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "AFT Transport Logistique",
        "type": "Siège social",
        "phone": "01 88 40 11 80",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 9,
        "rating": 4,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "137077372238568775",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=137077372238568775&q=logistique+75",
        "lsig": "AB86z5UPDqTAZ6vmTZPLUmmbJbct",
        "provider_id": "/g/11btmq6g35",
        "gps_coordinates": {
            "latitude": 50.970938999999994,
            "longitude": 2.2359795
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SDV+Logistique+Internationale,+Port+4112+contour+de+Loopersfort+zac+Eurofr%C3%AAt+Bp+75,+59279+Craywick/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47dc5fc01108fdd3:0x1e6ff24cf061d47?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIDRAA&hl=fr&gl=fr"
        },
        "title": "SDV Logistique Internationale",
        "type": "Société de transport international de marchandises",
        "phone": "03 28 22 65 00",
        "address": "Craywick"
    },
    {
        "position": 10,
        "rating": 4.6,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "10832687927162985209",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10832687927162985209&q=logistique+75",
        "lsig": "AB86z5WX6F0B0pb3miazXjcuKNAf",
        "provider_id": "/g/11gxjwdz2w",
        "gps_coordinates": {
            "latitude": 49.7115003,
            "longitude": 2.7886979
        },
        "links": {
            "website": "https://www.says-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//Says+Logistique+Ile+de+France,+ZI,+A.+du+N,+80700+Roye/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e7cdb13b6b736d:0x9655704695365af9?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "Says Logistique Ile de France",
        "type": "Service logistique",
        "phone": "03 74 09 59 12",
        "address": "Roye",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 11,
        "rating": 4,
        "reviews_original": "(55)",
        "reviews": 55,
        "place_id": "6193418870149567291",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6193418870149567291&q=logistique+75",
        "lsig": "AB86z5VjOdGw7Q9JY45dNtzoupeI",
        "provider_id": "/g/1thtnx6_",
        "gps_coordinates": {
            "latitude": 48.997280599999996,
            "longitude": 2.5294081999999998
        },
        "links": {
            "website": "https://www.transport-sctil.fr/",
            "directions": "https://www.google.fr/maps/dir//SCTIL,+Zone+Cargo+6,+2+Rue+des+Voyelles,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61596dc3d6c95:0x55f371a5f477533b?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIDhAA&hl=fr&gl=fr"
        },
        "title": "SCTIL",
        "type": "Service logistique",
        "phone": "01 48 62 06 57",
        "address": "Tremblay-en-France",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 12,
        "rating": 3.7,
        "reviews_original": "(64)",
        "reviews": 64,
        "place_id": "3975230396182688111",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3975230396182688111&q=logistique+75",
        "lsig": "AB86z5UOZ2oN0mPoSAcHStf0eMeD",
        "provider_id": "/g/11c5h2k8p8",
        "gps_coordinates": {
            "latitude": 49.909171099999995,
            "longitude": 2.2676191
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Entrep%C3%B4t+Simply+AMIENS,+75+Rue+de+Sully,+80000+Amiens/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e783f8d418d233:0x372adafbd0cdf16f?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIChAA&hl=fr&gl=fr"
        },
        "title": "Entrepôt Simply AMIENS",
        "type": "Service logistique",
        "address": "Amiens",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 13,
        "rating": 5,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "18061888638923677700",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18061888638923677700&q=logistique+75",
        "lsig": "AB86z5WIDbQuEEl2e3-2Zo3jkE6J",
        "provider_id": "/g/1hc2zzphq",
        "gps_coordinates": {
            "latitude": 45.2464617,
            "longitude": 4.6875715
        },
        "links": {
            "website": "https://www.vialogistique.com/",
            "directions": "https://www.google.fr/maps/dir//Via+Logistique+Annonay,+Rue+Pae+Marenton,+07100+Annonay/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f513087415dd4b:0xfaa8b80567b5a004?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Via Logistique Annonay",
        "type": "Service logistique",
        "phone": "04 75 32 49 39",
        "address": "Annonay",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 14,
        "rating": 3.9,
        "reviews_original": "(102)",
        "reviews": 102,
        "description": "\"Bonne société de fret\"",
        "place_id": "4396688519058705991",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4396688519058705991&q=logistique+75",
        "lsig": "AB86z5WKfzjbPx3l9_4avBplPaTq",
        "provider_id": "/g/1tgpmbh_",
        "gps_coordinates": {
            "latitude": 48.758614099999996,
            "longitude": 2.3400463
        },
        "links": {
            "website": "https://www.bollore-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//Bollore+Logistics,+Zone+Euro+Delta,+13+Bd+du+Delta,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e676be9a93fd2b:0x3d042ce9d6884e47?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "Bollore Logistics",
        "type": "Service logistique",
        "phone": "01 41 73 00 40",
        "address": "Rungis",
        "hours": "Fermé ⋅ Ouvre à 05:00 mer."
    },
    {
        "position": 15,
        "rating": 4.4,
        "reviews_original": "(88)",
        "reviews": 88,
        "place_id": "760265520852123784",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=760265520852123784&q=logistique+75",
        "lsig": "AB86z5XZXKMgyub9sSDLhBFsoSHf",
        "provider_id": "/g/11fj19xldc",
        "gps_coordinates": {
            "latitude": 44.8190676,
            "longitude": 4.8570626
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+d'Etoile+-+Etoile+sur+Rh%C3%B4ne,+ZA+des+caires,+route+des,+Les+Caires+S,+26800+%C3%89toile-sur-Rh%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b54ff8971775d1:0xa8d0176915e4088?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIFBAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique d'Etoile - Etoile sur Rhône",
        "type": "Société de transport routier",
        "phone": "04 75 85 85 61",
        "address": "Étoile-sur-Rhône",
        "hours": "Ferme bientôt ⋅ 12:30"
    },
    {
        "position": 16,
        "rating": 4.4,
        "reviews_original": "(92)",
        "reviews": 92,
        "place_id": "17476489511689930725",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17476489511689930725&q=logistique+75",
        "lsig": "AB86z5VR3zPnh6_awDu6MLmeLRxG",
        "provider_id": "/g/1tdtxz1z",
        "gps_coordinates": {
            "latitude": 44.8102495,
            "longitude": 4.7962375999999995
        },
        "links": {
            "website": "https://www.skipper-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+-+La+Voulte,+1520+avenue+marie+curie,+07800+La+Voulte-sur-Rh%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b54941fb504feb:0xf288f69dd11e47e5?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique - La Voulte",
        "type": "Service logistique",
        "phone": "04 75 85 00 11",
        "address": "La Voulte-sur-Rhône",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 17,
        "rating": 4,
        "reviews_original": "(353)",
        "reviews": 353,
        "place_id": "8321007301032757713",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8321007301032757713&q=logistique+75",
        "lsig": "AB86z5UQ8klEbdq7h2NxauermBsj",
        "provider_id": "/g/1vf9bp59",
        "gps_coordinates": {
            "latitude": 48.7554002,
            "longitude": 2.4772132
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "http://www.dgs-transports.fr/",
            "directions": "https://www.google.fr/maps/dir//DGS+Transports,+75+Rue+Albert+Garry,+94450+Limeil-Br%C3%A9vannes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6769bffffffff:0x737a280dbf7d49d1?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQICBAA&hl=fr&gl=fr"
        },
        "title": "DGS Transports",
        "type": "Service logistique",
        "phone": "01 56 86 31 31",
        "address": "Limeil-Brévannes",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 18,
        "rating": 4.2,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "14332858697434876994",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14332858697434876994&q=logistique+75",
        "lsig": "AB86z5X5n2VVg5KWgw5JWcABI0uI",
        "provider_id": "/g/11f3cvqjxs",
        "gps_coordinates": {
            "latitude": 48.8702543,
            "longitude": 2.3910532
        },
        "links": {
            "website": "http://www.gtsupply.fr/",
            "directions": "https://www.google.fr/maps/dir//Global+Transport+And+Supply,+24+Rue+des+Cascades,+75020+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d935667c55d:0xc6e88b0bec794c42?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "Global Transport And Supply",
        "type": "Service de transport",
        "phone": "01 42 62 53 20",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 19,
        "rating": 4.1,
        "reviews_original": "(112)",
        "reviews": 112,
        "place_id": "13775822510170187114",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13775822510170187114&q=logistique+75",
        "lsig": "AB86z5VfCdVd87TwEhrJdene96xo",
        "provider_id": "/g/11c5xw40lh",
        "gps_coordinates": {
            "latitude": 49.0849207,
            "longitude": 2.7329555
        },
        "links": {
            "website": "https://www.leroylogistique.com/agences/plateforme-logistique-paris-nord/",
            "directions": "https://www.google.fr/maps/dir//Le+Roy+Logistique+Lagny-le-sec,+1+Carrefour+du+Monay+Zi,+Folle+Emprise,+60330+Lagny-le-Sec/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e623f6c7f5bd39:0xbf2d8d95e786256a?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "Le Roy Logistique Lagny-le-sec",
        "type": "Service logistique",
        "phone": "03 44 60 41 70",
        "address": "Lagny-le-Sec",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 20,
        "place_id": "16917652474405072716",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16917652474405072716&q=logistique+75",
        "lsig": "AB86z5Xp76P19iUrOGjYG-85uYFV",
        "provider_id": "/g/11j6_pt4_x",
        "gps_coordinates": {
            "latitude": 44.7556653,
            "longitude": 4.7664272
        },
        "links": {
            "website": "http://www.slowlogistique.com/",
            "directions": "https://www.google.fr/maps/dir//Slow+Logistique,+22+ZI+Rh%C3%B4ne+Vall%C3%A9e+S,+07250+Le+Pouzin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b54955c7edfe8d:0xeac7934aba6c2f4c?sa=X&ved=2ahUKEwj4_ZyKvY6CAxUGQjABHQirDFYQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "Slow Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "04 75 85 85 00",
        "address": "Le Pouzin",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 1,
        "rating": 4,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "3360460172646204554",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3360460172646204554&q=logistique+75&start=20",
        "lsig": "AB86z5W27ec1fvE2if1uxnEDj8z-",
        "provider_id": "/g/1tkb4drd",
        "gps_coordinates": {
            "latitude": 48.822719899999996,
            "longitude": 2.624714
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//A.R.C.,+8+All%C3%A9e+de+Valmy,+ZAC+de+Malnoue,+77184+%C3%89merainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60e352c7a7c09:0x2ea2c0b8f86cc48a?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "A.R.C.",
        "type": "Service logistique",
        "phone": "01 64 61 75 75",
        "address": "Émerainville",
        "hours": "Ferme bientôt ⋅ 12:30"
    },
    {
        "position": 2,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "6310332949110969999",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6310332949110969999&q=logistique+75&start=20",
        "lsig": "AB86z5U7PYw0maWZzWTtmoz44Db3",
        "provider_id": "/g/11b6dqsh4p",
        "gps_coordinates": {
            "latitude": 49.094412399999996,
            "longitude": 2.7547786
        },
        "links": {
            "website": "https://www.abl-exploitation.com/",
            "directions": "https://www.google.fr/maps/dir//AFFRETEMENT+BRISON+LOGISTIQUE+%C2%AB+ABL+%C2%BB,+Centre+d'affaires+EGB,+5+Av.+Georges+Bataille,+60330+Le+Plessis-Belleville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e62401da7da37b:0x5792ce623633d68f?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "AFFRETEMENT BRISON LOGISTIQUE « ABL »",
        "type": "Société de transport international de marchandises",
        "phone": "03 75 83 01 25",
        "address": "Le Plessis-Belleville",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 3,
        "rating": 4.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "16725625887083326974",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16725625887083326974&q=logistique+75&start=20",
        "lsig": "AB86z5Wa2rsqthESpa5DQJ-OgBOK",
        "provider_id": "/g/11sx4nm5jj",
        "gps_coordinates": {
            "latitude": 45.167768800000005,
            "longitude": 4.8122408
        },
        "links": {
            "website": "https://www.transportfilhol.fr/",
            "directions": "https://www.google.fr/maps/dir//Filhol+Logistique,+14+Av.+Marc+Seguin,+26240+Saint-Vallier/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f541cacc0abd57:0xe81d5c20cdadedfe?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Filhol Logistique",
        "type": "Service logistique",
        "phone": "04 75 32 41 40",
        "address": "Saint-Vallier",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 4,
        "rating": 4.4,
        "reviews_original": "(60)",
        "reviews": 60,
        "place_id": "4471785152761682664",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4471785152761682664&q=logistique+75&start=20",
        "lsig": "AB86z5WUnHThgj5LT7LVqF1CtOXT",
        "provider_id": "/g/1tfc1c9h",
        "gps_coordinates": {
            "latitude": 44.9248823,
            "longitude": 4.9203835
        },
        "links": {
            "website": "https://www.skipper-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+-+Briffaut,+ZI+Briffaut+Ouest,+15+Rue+Georges+M%C3%A9li%C3%A8s,+26000+Valence/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f557a284350a91:0x3e0ef8e76639dae8?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique - Briffaut",
        "type": "Service logistique",
        "phone": "04 75 57 43 72",
        "address": "Valence",
        "hours": "Ouvert ⋅ Ferme à 17:15"
    },
    {
        "position": 5,
        "rating": 3.6,
        "reviews_original": "(51)",
        "reviews": 51,
        "place_id": "14953364042175362636",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14953364042175362636&q=logistique+75&start=20",
        "lsig": "AB86z5U_E5RaM5heEiQb3ULAQbeT",
        "provider_id": "/g/1tpc78pk",
        "gps_coordinates": {
            "latitude": 48.8123577,
            "longitude": 2.398781
        },
        "links": {
            "website": "http://www.logistiquecitoyenne.com/",
            "directions": "https://www.google.fr/maps/dir//Axelis+Plus,+15+Rue+Pierre+Rigaud,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673ad1ad04863:0xcf85055ebaf6364c?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Axelis Plus",
        "type": "Service logistique",
        "phone": "01 49 59 61 47",
        "address": "Ivry-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 6,
        "place_id": "2691561410895576163",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2691561410895576163&q=logistique+75&start=20",
        "lsig": "AB86z5VPJB6hj-fW3B113k4Q1wZm",
        "provider_id": "/g/11btmqfljw",
        "gps_coordinates": {
            "latitude": 49.035689500000004,
            "longitude": 2.0316806
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transport+Logistique+Boulakdam,+18+Rue+de+Puiseux,+95490+Vaur%C3%A9al/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6f4a525e11e4b:0x255a58d7bb947c63?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Transport Logistique Boulakdam",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "06 75 97 24 89",
        "address": "Vauréal"
    },
    {
        "position": 7,
        "rating": 4.2,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "4621326675497082779",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4621326675497082779&q=logistique+75&start=20",
        "lsig": "AB86z5UwyjC-LSJDGI0JoL44qFXw",
        "provider_id": "/g/11b6d2crp0",
        "gps_coordinates": {
            "latitude": 43.6326235,
            "longitude": 1.4228596
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Cyc+Logistique+et+Location,+82+Rue+de+Fenouillet,+31200+Toulouse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aebb4a8e891179:0x40224020640a5f9b?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Cyc Logistique et Location",
        "type": "Société de transport routier",
        "phone": "06 43 75 94 80",
        "address": "Toulouse",
        "hours": "Ouvert ⋅ Ferme à 14:00"
    },
    {
        "position": 8,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "11384625328909683357",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11384625328909683357&q=logistique+75&start=20",
        "lsig": "AB86z5VYsSSbBYDsH-0xs9tsmNXY",
        "provider_id": "/g/11cn17pbf7",
        "gps_coordinates": {
            "latitude": 47.9520997,
            "longitude": 1.8460717
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//TEM,+1495+Rte+d'Ormes,+45770+Saran/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e4f088d1f1c0b5:0x9dfe506b16938a9d?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "TEM",
        "type": "Service logistique",
        "phone": "09 64 43 66 10",
        "address": "Saran",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 9,
        "rating": 4.2,
        "reviews_original": "(5)",
        "reviews": 5,
        "description": "\"Enfin un professionnel de la logistique .\"",
        "place_id": "15633508954411097358",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15633508954411097358&q=logistique+75&start=20",
        "lsig": "AB86z5VRfxHvAFcBBFq1Ci6i0s3v",
        "provider_id": "/g/11hbprnrbc",
        "gps_coordinates": {
            "latitude": 49.198339399999995,
            "longitude": 1.2226282
        },
        "links": {
            "website": "https://logistic-twice-asa.com/",
            "directions": "https://www.google.fr/maps/dir//Logistic+Twice+Asa,+9+All.+des+Tilleuls,+27400+Heudebouville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e126f9e7ba8795:0xd8f561906c8fdd0e?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Logistic Twice Asa",
        "type": "Service logistique",
        "phone": "02 32 35 34 10",
        "address": "Heudebouville",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 10,
        "place_id": "11956835630938975976",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11956835630938975976&q=logistique+75&start=20",
        "lsig": "AB86z5X6Lk9-vu1Gc2J04pcYZaQx",
        "provider_id": "/g/11qrp1kmvb",
        "gps_coordinates": {
            "latitude": 45.7608882,
            "longitude": 4.8896462
        },
        "links": {
            "website": "https://alexandria-sas.com/",
            "directions": "https://www.google.fr/maps/dir//Alexandria,+109+Rue+du+1er+Mars+1943,+69100+Villeurbanne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4c1cb39955555:0xa5ef36a803d9eee8?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Alexandria",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 75 40 86 03",
        "address": "Villeurbanne"
    },
    {
        "position": 11,
        "rating": 4.4,
        "reviews_original": "(80)",
        "reviews": 80,
        "place_id": "1784245524985496482",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1784245524985496482&q=logistique+75&start=20",
        "lsig": "AB86z5WvEMRci262V7KVu7FEgiZ1",
        "provider_id": "/g/11b6d4gkg_",
        "gps_coordinates": {
            "latitude": 46.3503293,
            "longitude": -0.295885
        },
        "links": {
            "website": "http://www.eurial-ingredients.com/",
            "directions": "https://www.google.fr/maps/dir//Eurial+Logistique+Ouest,+Zone+Artisanale+Champs+Albert+2,+79260+La+Cr%C3%A8che/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4807478dd8e729ad:0x18c2e9da04d743a2?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Eurial Logistique Ouest",
        "type": "Service logistique",
        "phone": "05 86 09 00 46",
        "address": "La Crèche"
    },
    {
        "position": 12,
        "rating": 4.4,
        "reviews_original": "(38)",
        "reviews": 38,
        "description": "\"Super dépôt logistique rapide et professionnel personnel super aimable\"",
        "place_id": "816812450348907217",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=816812450348907217&q=logistique+75&start=20",
        "lsig": "AB86z5VHhB76ZgB0O8omOUwDIzOE",
        "provider_id": "/g/11c482sr4t",
        "gps_coordinates": {
            "latitude": 44.7542252,
            "longitude": 4.793507600000001
        },
        "links": {
            "website": "https://www.bernard-transport-logistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Bernard+Stockage+Logistique+1,+513+All%C3%A9e+des+Platanes,+26270+Loriol-sur-Dr%C3%B4me/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b548a168bd1009:0xb55e6988f29bad1?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Bernard Stockage Logistique 1",
        "type": "Service logistique",
        "phone": "04 75 61 12 33",
        "address": "Loriol-sur-Drôme"
    },
    {
        "position": 13,
        "rating": 4,
        "reviews_original": "(20)",
        "reviews": 20,
        "place_id": "5201717565669057694",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5201717565669057694&q=logistique+75&start=20",
        "lsig": "AB86z5UNV3Xg6CgET3Xh5duLvz6-",
        "provider_id": "/g/11hbkdvgl1",
        "gps_coordinates": {
            "latitude": 44.892172699999996,
            "longitude": 4.8599717
        },
        "links": {
            "website": "http://www.skipper-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+-+Cousteau,+ZI+de+la+Motte,+Rue+du+Commandant+Cousteau,+26800+Portes-l%C3%A8s-Valence/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b54d2d9ccc4b39:0x48303690eb9d249e?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique - Cousteau",
        "type": "Service logistique",
        "phone": "04 75 79 90 60",
        "address": "Portes-lès-Valence"
    },
    {
        "position": 14,
        "rating": 3.7,
        "reviews_original": "(122)",
        "reviews": 122,
        "place_id": "14608627037145823281",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14608627037145823281&q=logistique+75&start=20",
        "lsig": "AB86z5VIvqYiWqpbxv2i9u6ur_KM",
        "provider_id": "/g/1tjbbc9l",
        "gps_coordinates": {
            "latitude": 44.782730099999995,
            "longitude": 4.8505983
        },
        "links": {
            "website": "https://www.skipper-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+-+Livron,+995+Chem.+du+Gaz,+26250+Livron-sur-Dr%C3%B4me/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b54e553cd83cc9:0xcabc44e3f53e7831?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique - Livron",
        "type": "Service logistique",
        "phone": "04 75 61 22 11",
        "address": "Livron-sur-Drôme",
        "hours": "Fermé ⋅ Ouvre à 13:00"
    },
    {
        "position": 15,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "3642210166499469634",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3642210166499469634&q=logistique+75&start=20",
        "lsig": "AB86z5UO3FX17yCEF6h0Sq-DAumN",
        "provider_id": "/g/1tf1l0bq",
        "gps_coordinates": {
            "latitude": 43.2841374,
            "longitude": 5.3843399
        },
        "links": {
            "website": "http://i-l-e.fr/",
            "directions": "https://www.google.fr/maps/dir//International+Logistique+Europe+(+I.L.E+),+24+Av.+du+Prado,+13006+Marseille/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12c9c0217fa1bc0d:0x328bbad963846942?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "International Logistique Europe ( I.L.E )",
        "type": "Société de transport international de marchandises",
        "phone": "04 96 15 19 75",
        "address": "Marseille",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 16,
        "place_id": "11885474505076422906",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11885474505076422906&q=logistique+75&start=20",
        "lsig": "AB86z5VMFyT8fJ4CCJEHm4jsTpfP",
        "provider_id": "/g/11sv5k_w43",
        "gps_coordinates": {
            "latitude": 48.7807441,
            "longitude": 2.2734858
        },
        "links": {
            "website": "http://relais.pickup.fr/info.php?p=5930P",
            "directions": "https://www.google.fr/maps/dir//Relais+Pickup,+75+Av.+de+la+R%C3%A9publique,+92350+Le+Plessis-Robinson/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6715b1d2e625b:0xa4f1b017260ab8fa?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Relais Pickup",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Le Plessis-Robinson",
        "hours": "Ouvert ⋅ Ferme à 22:30"
    },
    {
        "position": 17,
        "rating": 3.9,
        "reviews_original": "(88)",
        "reviews": 88,
        "place_id": "17881503801174801275",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17881503801174801275&q=logistique+75&start=20",
        "lsig": "AB86z5UYDs6lDvIwm7jTfkQu4fDS",
        "provider_id": "/g/1tg6v140",
        "gps_coordinates": {
            "latitude": 44.900394,
            "longitude": 4.8801059
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+Logistique+VALENCE,+Rue+de+Chantecouriol,+26000+Valence/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f5580dd9c5d77f:0xf827dcf786d23b7b?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "STEF Logistique VALENCE",
        "type": "Service logistique",
        "phone": "04 75 41 46 22",
        "address": "Ouvert actuellement"
    },
    {
        "position": 18,
        "rating": 4,
        "reviews_original": "(172)",
        "reviews": 172,
        "description": "\"La rolls de la logistique\"",
        "place_id": "10775554456322848999",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10775554456322848999&q=logistique+75&start=20",
        "lsig": "AB86z5WN8OICuABDtg8DXFQS1TuH",
        "provider_id": "/g/1t_wnn3f",
        "gps_coordinates": {
            "latitude": 47.828679799999996,
            "longitude": 1.6657007
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ID+Logistics+France,+Parc+Synergie+Val+de+Loire,+45130+Meung-sur-Loire/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e4eb58d774ef9f:0x958a75afcb0038e7?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "ID Logistics France",
        "type": "Service logistique",
        "phone": "02 38 45 34 50",
        "address": "Meung-sur-Loire",
        "hours": "Ferme bientôt ⋅ 12:30"
    },
    {
        "position": 19,
        "place_id": "7249671599650342868",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7249671599650342868&q=logistique+75&start=20",
        "lsig": "AB86z5U_iyoWJZV06l0HnZGH1HsV",
        "provider_id": "/g/11k58715w7",
        "gps_coordinates": {
            "latitude": 43.4253037,
            "longitude": 3.305765
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//centrevilleservian,+Grand+Rue,+34290+Servian/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b113eadfb633d9:0x649c01e8d36587d4?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "centrevilleservian",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 75 37 65 20",
        "address": "Servian"
    },
    {
        "position": 20,
        "rating": 4.7,
        "reviews_original": "(75)",
        "reviews": 75,
        "place_id": "5426097442843699171",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5426097442843699171&q=logistique+75&start=20",
        "lsig": "AB86z5UzrNtCTn2V9Q-5qNXG87sW",
        "provider_id": "/g/11j8whs8wr",
        "gps_coordinates": {
            "latitude": 45.2648155,
            "longitude": 4.8318835
        },
        "links": {
            "website": "http://www.bert.fr/",
            "directions": "https://www.google.fr/maps/dir//BERT+LOGISTIQUE,+Les+Picardes,+26140+Albon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53d493fb604f7:0x4b4d5ee0255aa7e3?sa=X&ved=2ahUKEwi9hp-LvY6CAxXBFlkFHYoRALg4FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "BERT LOGISTIQUE",
        "type": "Service logistique",
        "phone": "04 75 31 01 15",
        "address": "Albon",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 1,
        "rating": 4.6,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "7641983273875245995",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7641983273875245995&q=logistique+75&start=40",
        "lsig": "AB86z5XNhAW3qD7NsgYepiFTj2oy",
        "provider_id": "/g/11b6lkx75n",
        "gps_coordinates": {
            "latitude": 48.983305099999995,
            "longitude": 2.5134201
        },
        "links": {
            "website": "http://www.businessbyair.com/",
            "directions": "https://www.google.fr/maps/dir//Business+By+Air,+165+avenue+du+Bois+de+la+Pie,+B%C3%A2t.+G+-+Parc+des+reflets+Paris+Nord+2,+BP+53006+Roissy+en+France,+95945+Roissy+CDG+Cedex/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x410b9204b49c4e15:0x6a0dc74c72cf8bab?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Business By Air",
        "type": "Société de transport international de marchandises",
        "phone": "01 49 19 52 00",
        "address": "Roissy CDG Cedex"
    },
    {
        "position": 2,
        "rating": 3.9,
        "reviews_original": "(16)",
        "reviews": 16,
        "place_id": "1343840474910443545",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1343840474910443545&q=logistique+75&start=40",
        "lsig": "AB86z5XVHfc2SzbgVQfS_Pc1usIE",
        "provider_id": "/g/11sfpg62sr",
        "gps_coordinates": {
            "latitude": 49.3856999,
            "longitude": 1.9991925000000001
        },
        "links": {
            "website": "https://emballages-valois.fr/",
            "directions": "https://www.google.fr/maps/dir//Auneuil+Valois+Logistique,+Rue+Irene+Caron,+60390+Auneuil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e703e4057bd9e5:0x12a647cabdd44819?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "Auneuil Valois Logistique",
        "type": "Service logistique",
        "phone": "07 62 08 75 95",
        "address": "Auneuil"
    },
    {
        "position": 3,
        "rating": 3.5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "16182737875554500694",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16182737875554500694&q=logistique+75&start=40",
        "lsig": "AB86z5XY4-7FZc7NPKSnbWhkjtUx",
        "provider_id": "/g/1hc15fj4_",
        "gps_coordinates": {
            "latitude": 48.788245499999995,
            "longitude": 6.1354907999999995
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Michel+Logistique,+Rue+de+Pr%C3%A9+%C3%80+Varois,+54670+Custines/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4794bc2defd11689:0xe094a25ba5af8056?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Michel Logistique",
        "type": "Société de transport routier",
        "phone": "03 83 49 90 75",
        "address": "Custines"
    },
    {
        "position": 4,
        "place_id": "10557402796909792246",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10557402796909792246&q=logistique+75&start=40",
        "lsig": "AB86z5WIhiZdLpEeE2-rutwpRLX8",
        "provider_id": "/g/1tgcr6m0",
        "gps_coordinates": {
            "latitude": 45.290842999999995,
            "longitude": 4.814204
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Dr%C3%B4me+Logistique,+Ham.+de+la+Tulandi%C3%A8re,+26140+Saint-Rambert-d'Albon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53dc022c8a31b:0x92836de884860bf6?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Drôme Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "04 75 31 28 87",
        "address": "Saint-Rambert-d'Albon"
    },
    {
        "position": 5,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "11554317056572444975",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11554317056572444975&q=logistique+75&start=40",
        "lsig": "AB86z5X6iJKQIDa14RWo_q689-tf",
        "provider_id": "/g/11b80730hy",
        "gps_coordinates": {
            "latitude": 45.8239711,
            "longitude": 4.9881725
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Va+logistique,+1+Chem.+de+Thil,+01700+Saint-Maurice-de-Beynost/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4b8c2ac4781d1:0xa0592e25433cd12f?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Va logistique",
        "type": "Service logistique",
        "phone": "04 37 26 00 06",
        "address": "Saint-Maurice-de-Beynost"
    },
    {
        "position": 6,
        "rating": 4.3,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "17230477250657612188",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17230477250657612188&q=logistique+75&start=40",
        "lsig": "AB86z5WfBlsMEAagCnB23i6udoSJ",
        "provider_id": "/g/11qg5cg3w7",
        "gps_coordinates": {
            "latitude": 45.6967289,
            "longitude": 4.8302654
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//OTHIUM+CONCIERGERIE,+75+Chem.+d'Yvours,+69310+Pierre-B%C3%A9nite/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4e9bc70453dab:0xef1ef3c4bbe5719c?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "OTHIUM CONCIERGERIE",
        "type": "Service logistique",
        "phone": "06 24 14 27 05",
        "address": "Pierre-Bénite",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 7,
        "rating": 3.8,
        "reviews_original": "(26)",
        "reviews": 26,
        "place_id": "4434459229585856401",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4434459229585856401&q=logistique+75&start=40",
        "lsig": "AB86z5W_WBLzWmPkoBz3Sy3KSLVg",
        "provider_id": "/g/1tvw47fp",
        "gps_coordinates": {
            "latitude": 48.8786208,
            "longitude": 2.3149728
        },
        "links": {
            "website": "http://www.stef.com/",
            "directions": "https://www.google.fr/maps/dir//Stef+SA,+93+Bd+Malesherbes,+75008+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66fb7b6e02855:0x3d8a5d2cae6ad791?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Stef SA",
        "type": "Service logistique",
        "phone": "01 40 74 29 00",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 8,
        "rating": 4.2,
        "reviews_original": "(39)",
        "reviews": 39,
        "place_id": "4245346419596674232",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4245346419596674232&q=logistique+75&start=40",
        "lsig": "AB86z5XEnXGHj408hhC2Q0FXCfjy",
        "provider_id": "/g/11f4pvfhnw",
        "gps_coordinates": {
            "latitude": 43.71956840000001,
            "longitude": 1.3908756
        },
        "links": {
            "website": "https://www.leroylogistique.com/agences/plateforme-logistique-toulouse/",
            "directions": "https://www.google.fr/maps/dir//Le+Roy+Logistique+Toulouse+2,+6+Rue+du+Benelux,+31150+Lespinasse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aea4574ae55fd7:0x3aea8013688944b8?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Le Roy Logistique Toulouse 2",
        "type": "Service logistique",
        "phone": "05 62 75 81 95",
        "address": "Lespinasse",
        "hours": "Ferme bientôt ⋅ 12:30"
    },
    {
        "position": 9,
        "rating": 4.3,
        "reviews_original": "(93)",
        "reviews": 93,
        "place_id": "15820244845828896492",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15820244845828896492&q=logistique+75&start=40",
        "lsig": "AB86z5V7s-EupeyajoQHAlxOPZfi",
        "provider_id": "/g/1td80rl0",
        "gps_coordinates": {
            "latitude": 44.7612539,
            "longitude": 4.7619949
        },
        "links": {
            "website": "http://www.skipper-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+-+Le+Pouzin,+Parc+industriel+Rh%C3%B4ne+Vall%C3%A9e,+07250+Le+Pouzin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b54879a46804a5:0xdb8cccde3755f6ec?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique - Le Pouzin",
        "type": "Service logistique",
        "phone": "04 75 41 85 95",
        "address": "Le Pouzin",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 10,
        "rating": 4.5,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "16727029494826810715",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16727029494826810715&q=logistique+75&start=40",
        "lsig": "AB86z5Xq_dtWn-vPbxX9QIEQN1qI",
        "provider_id": "/g/1thpw5f9",
        "gps_coordinates": {
            "latitude": 45.780812499999996,
            "longitude": 4.937557099999999
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Leroy+Logistique,+3+Rue+des+Alpes,+69120+Vaulx-en-Velin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4c095056c81fd:0xe82258b3b2a23d5b?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Leroy Logistique",
        "type": "Société de transport routier",
        "phone": "04 78 80 75 35",
        "address": "Vaulx-en-Velin"
    },
    {
        "position": 11,
        "place_id": "15095319440441794593",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15095319440441794593&q=logistique+75&start=40",
        "lsig": "AB86z5XDvtuXEE4a1cewUINIXZ0D",
        "provider_id": "/g/11g0tl8fxs",
        "gps_coordinates": {
            "latitude": 44.9090292,
            "longitude": -0.4328121
        },
        "links": {
            "website": "https://www.espacelogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Espace+Logistique,+8+Chem.+de+Mage,+33450+Saint-Loub%C3%A8s/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd54dc922f795d3b:0xd17d590d7a94e021?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Espace Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "05 57 77 75 33",
        "address": "Saint-Loubès",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 12,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "6035027035855301232",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6035027035855301232&q=logistique+75&start=40",
        "lsig": "AB86z5WqzHsUeO64ykom4eZvFzlO",
        "provider_id": "/g/11st73xmxn",
        "gps_coordinates": {
            "latitude": 43.6072272,
            "longitude": 6.9537797
        },
        "links": {
            "website": "https://www.bwayachting.com/logistics-solutions/",
            "directions": "https://www.google.fr/maps/dir//BWA+Yachting+Logistics+SOF,+14+Voie+B,+06370+Mouans-Sartoux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12cc2996ccef4fcf:0x53c0b91d3a08aa70?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "BWA Yachting Logistics SOF",
        "type": "Service logistique",
        "phone": "07 75 11 99 75",
        "address": "Mouans-Sartoux",
        "hours": "Ouvert ⋅ Ferme à 15:00"
    },
    {
        "position": 13,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "16195661662483511372",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16195661662483511372&q=logistique+75&start=40",
        "lsig": "AB86z5VpvIZB-ZPFFBSK5EbbL-gL",
        "provider_id": "/g/11b6d2cxg8",
        "gps_coordinates": {
            "latitude": 48.75517,
            "longitude": 2.3726179999999997
        },
        "links": {
            "website": "http://www.ecs75.fr/",
            "directions": "https://www.google.fr/maps/dir//Euro+Courses+Services+%22+ECS+%22,+1+Av.+de+l'Europe,+94320+Thiais/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67118adf5b9f1:0xe0c28c7946bdf84c?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Euro Courses Services \" ECS \"",
        "type": "Service logistique",
        "phone": "01 70 03 60 00",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 14,
        "rating": 4,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "5844854824121149314",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5844854824121149314&q=logistique+75&start=40",
        "lsig": "AB86z5W5qEvQLK0hPh9Q8bt8A4L7",
        "provider_id": "/g/11sv1yykr8",
        "gps_coordinates": {
            "latitude": 45.7671754,
            "longitude": 4.8547427
        },
        "links": {
            "website": "http://relais.pickup.fr/info.php?p=1982S",
            "directions": "https://www.google.fr/maps/dir//Relais+Pickup,+75+Rue+Mass%C3%A9na,+69006+Lyon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4eb4209811a75:0x511d187ec3782782?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Relais Pickup",
        "type": "Service logistique",
        "address": "Lyon",
        "hours": "Ferme bientôt ⋅ 12:30"
    },
    {
        "position": 15,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "9991349582956747750",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9991349582956747750&q=logistique+75&start=40",
        "lsig": "AB86z5W3VttSgt2cIOHk3AFaCsVR",
        "provider_id": "/g/11tslpdgrv",
        "gps_coordinates": {
            "latitude": 47.1518088,
            "longitude": -1.5853903999999999
        },
        "links": {
            "website": "http://www.grandlieulogistique.com/",
            "directions": "https://www.google.fr/maps/dir//Grand+Lieu+Logistique,+ZI+Nantes+Atlantique,+5+Rue+Claire+Roman,+44860+Saint-Aignan-Grandlieu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4805ebd35619676b:0x8aa867825ee25be6?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Grand Lieu Logistique",
        "type": "Société de transport routier",
        "phone": "02 40 75 20 00",
        "address": "Saint-Aignan-Grandlieu",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 16,
        "rating": 3.8,
        "reviews_original": "(265)",
        "reviews": 265,
        "place_id": "11394187457015486591",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11394187457015486591&q=logistique+75&start=40",
        "lsig": "AB86z5XvSV8dEnZ4M6pgplsxoE4-",
        "provider_id": "/g/11bxdyyd5r",
        "gps_coordinates": {
            "latitude": 48.721897999999996,
            "longitude": 2.4077341
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+PARIS+ATHIS,+17+Rue+des+Guyards+Bp9+Cd118,+91200+Athis-Mons/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6750f204f7be3:0x9e20491f879e987f?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "STEF PARIS ATHIS",
        "type": "Service logistique",
        "phone": "01 49 75 33 66",
        "address": "Ouvert actuellement"
    },
    {
        "position": 17,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "6722773557269099539",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6722773557269099539&q=logistique+75&start=40",
        "lsig": "AB86z5VTFTUMo__6j18TSIS7Qq6m",
        "provider_id": "/g/1tdzkxwy",
        "gps_coordinates": {
            "latitude": 45.3158142,
            "longitude": 4.164566
        },
        "links": {
            "website": "http://www.clean-log.com/",
            "directions": "https://www.google.fr/maps/dir//Clean-Log+:+simplifiez-vous+la+logistique,+65+Rte+des+Villages,+43120+Monistrol-sur-Loire/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f5b8dfad98f0bd:0x5d4c16ee7a69f413?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Clean-Log : simplifiez-vous la logistique",
        "type": "Service logistique",
        "phone": "09 79 52 54 64",
        "address": "Monistrol-sur-Loire"
    },
    {
        "position": 18,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "2190807431440181591",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2190807431440181591&q=logistique+75&start=40",
        "lsig": "AB86z5WkeLZvtIF1-GW8GRHww-Sj",
        "provider_id": "/g/11h40zcv9g",
        "gps_coordinates": {
            "latitude": 49.898535700000004,
            "longitude": 3.734541299999999
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Htl+Haingue+Transports+Et+Logistique,+75+Rue+de+Verdun,+02120+Proisy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e9d45fc790adf9:0x1e674fc062472957?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Htl Haingue Transports Et Logistique",
        "type": "Société de transport routier",
        "address": "Proisy"
    },
    {
        "position": 19,
        "rating": 4,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "1247347617388884543",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1247347617388884543&q=logistique+75&start=40",
        "lsig": "AB86z5Vk3hdC9BFflBaGhz_RJGzZ",
        "provider_id": "/g/11btm8xjjb",
        "gps_coordinates": {
            "latitude": 45.7032372,
            "longitude": 5.0166664999999995
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Ajys+Transports+et+Logistique,+19+Av.+Gaspard+Monge,+69720+Saint-Bonnet-de-Mure/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4c5934262074d:0x114f780c9de4f23f?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Ajys Transports et Logistique",
        "type": "Société de transport routier",
        "phone": "09 66 88 66 75",
        "address": "Saint-Bonnet-de-Mure"
    },
    {
        "position": 20,
        "rating": 4.5,
        "reviews_original": "(19)",
        "reviews": 19,
        "place_id": "16506864446943472655",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16506864446943472655&q=logistique+75&start=40",
        "lsig": "AB86z5Uq242Cya6aDSevXqm1VgZC",
        "provider_id": "/g/11hbvvhn52",
        "gps_coordinates": {
            "latitude": 44.852196000000006,
            "longitude": 0.44960790000000006
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistique+Malaurie+Transports,+24100+Bergerac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aacfffcd5ebdb1:0xe51429c1e3972c0f?sa=X&ved=2ahUKEwj70cuMvY6CAxUGFmIAHbH3CQY4KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Logistique Malaurie Transports",
        "type": "Service logistique",
        "phone": "06 82 57 75 91",
        "address": "Bergerac",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 1,
        "place_id": "15169107484725991583",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15169107484725991583&q=logistique+75&start=60",
        "lsig": "AB86z5VBDdXiZuJACxOKMLzrOecF",
        "provider_id": "/g/11l2cqsb32",
        "gps_coordinates": {
            "latitude": 47.3616987,
            "longitude": -0.86054
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Brangeon+Transports+et+Logistique+-+B%C3%A2timent+logistique,+75+Rue+de+la+Loire+B%C3%A2timent+C,+49620+Mauges-sur-Loire/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4806257643eeed29:0xd2837ee352cfd89f?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Brangeon Transports et Logistique - Bâtiment logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "02 41 39 25 39",
        "address": "Mauges-sur-Loire",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 2,
        "rating": 3,
        "reviews_original": "(33)",
        "reviews": 33,
        "place_id": "405227585735509693",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=405227585735509693&q=logistique+75&start=60",
        "lsig": "AB86z5XaHorMMSXLgiEyewBL21id",
        "provider_id": "/g/1tywx7tf",
        "gps_coordinates": {
            "latitude": 49.04799,
            "longitude": 2.4954307
        },
        "links": {
            "website": "http://www.rlm.fr/",
            "directions": "https://www.google.fr/maps/dir//R.l.m,+4+Rue+de+la+Briqueterie,+95380+Louvres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e63f9881a38d53:0x59fa8579cf446bd?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "R.l.m",
        "type": "Société de transport routier",
        "phone": "09 71 57 75 46",
        "address": "Louvres"
    },
    {
        "position": 3,
        "rating": 3.9,
        "reviews_original": "(176)",
        "reviews": 176,
        "description": "\"La logistique est ici au top;\"",
        "place_id": "11587871059187497024",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11587871059187497024&q=logistique+75&start=60",
        "lsig": "AB86z5XHuSQJqCanNu1lt60At7QQ",
        "provider_id": "/g/1vr3chjy",
        "gps_coordinates": {
            "latitude": 49.3751651,
            "longitude": 3.37158
        },
        "links": {
            "website": "http://www.kuehne-nagel.fr/",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel,+Les+Etomelles+-+Avenue+Flandres+Dunkerque+1940,+02200+Villeneuve-Saint-Germain/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e859404d8bf069:0xa0d0635549e67840?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel",
        "type": "Service logistique",
        "phone": "03 23 75 61 00",
        "address": "Villeneuve-Saint-Germain"
    },
    {
        "position": 4,
        "rating": 4,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "5466632841780252646",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5466632841780252646&q=logistique+75&start=60",
        "lsig": "AB86z5V2a9k7PjAQ2ApYPhBg8DKm",
        "provider_id": "/g/11sc2zznx4",
        "gps_coordinates": {
            "latitude": 48.2626224,
            "longitude": 4.0486572
        },
        "links": {
            "website": "https://www.thiriet.com/",
            "directions": "https://www.google.fr/maps/dir//Plateforme+logistique+Maison+Thiriet,+35+Av.+Gabriel+Deheurles,+10430+Rosi%C3%A8res-pr%C3%A9s-Troyes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47ee9925ecaaf4c5:0x4bdd619b2bcbcfe6?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Plateforme logistique Maison Thiriet",
        "type": "Service logistique",
        "phone": "03 25 75 91 50",
        "address": "Rosières-prés-Troyes",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 5,
        "place_id": "11785267408530260667",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11785267408530260667&q=logistique+75&start=60",
        "lsig": "AB86z5XTxsGs9nQL7QH1tFJAeFZP",
        "provider_id": "/g/11kpqrt50k",
        "gps_coordinates": {
            "latitude": 46.5961822,
            "longitude": 0.34156949999999997
        },
        "links": {
            "website": "http://relais.pickup.fr/info.php?p=9645U",
            "directions": "https://www.google.fr/maps/dir//Relais+Pickup,+75+TER,+75+Rue+de+la+Vincenderie,+86000+Poitiers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47fdbdc6816048df:0xa38dae445c6f42bb?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Relais Pickup",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Poitiers",
        "hours": "Fermé ⋅ Ouvre à 09:30 lun."
    },
    {
        "position": 6,
        "rating": 3.8,
        "reviews_original": "(320)",
        "reviews": 320,
        "place_id": "15736245236068541678",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15736245236068541678&q=logistique+75&start=60",
        "lsig": "AB86z5XjHyCHa1BKvUP5l5fs4xwM",
        "provider_id": "/g/11b6d1njn2",
        "gps_coordinates": {
            "latitude": 49.1035587,
            "longitude": 2.7498548
        },
        "links": {
            "website": "https://www.stef.fr/",
            "directions": "https://www.google.fr/maps/dir//STEF+Plessis+Belleville,+Zi+Des+Meuniers,+19+Av.+des+Meuniers,+60330+Le+Plessis-Belleville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6241c81c6721d:0xda625fab024c64ee?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "STEF Plessis Belleville",
        "type": "Service logistique",
        "phone": "03 44 60 42 10",
        "address": "Ouvert actuellement"
    },
    {
        "position": 7,
        "place_id": "17142878272294977346",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17142878272294977346&q=logistique+75&start=60",
        "lsig": "AB86z5VgerQM_GYFBz-BQXJAk9ds",
        "provider_id": "/g/11h3__4b58",
        "gps_coordinates": {
            "latitude": 48.92583760000001,
            "longitude": 2.4067552
        },
        "links": {
            "website": "http://www.sigma-light.com/",
            "directions": "https://www.google.fr/maps/dir//Sigma+Light+-+Logistique,+75+Rue+Rateau+Batiment+C5,+93120+La+Courneuve/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66da8fde92fad:0xede7bcf637e77f42?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Sigma Light - Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société d'import-export",
        "phone": "01 45 42 74 25",
        "address": "La Courneuve",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 8,
        "rating": 3.8,
        "reviews_original": "(238)",
        "reviews": 238,
        "place_id": "6641166129557776383",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6641166129557776383&q=logistique+75&start=60",
        "lsig": "AB86z5Vx-19GEqdkGrL6LYHUtMSc",
        "provider_id": "/g/1hm1wcsxm",
        "gps_coordinates": {
            "latitude": 45.2620831,
            "longitude": 4.8413089
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ITM+LEMI+-+Entrep%C3%B4ts+Bricomarch%C3%A9+d'Albon,+1500+Rte+des+Fouillouses,+26140+Albon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53e9072e4581d:0x5c2a29688ea5a7ff?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "ITM LEMI - Entrepôts Bricomarché d'Albon",
        "type": "Service logistique",
        "phone": "04 75 03 75 03",
        "address": "Albon"
    },
    {
        "position": 9,
        "rating": 3.3,
        "reviews_original": "(45)",
        "reviews": 45,
        "place_id": "2086095302449545917",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2086095302449545917&q=logistique+75&start=60",
        "lsig": "AB86z5UBWp7IMXFu_AzMoUhLXN23",
        "provider_id": "/g/1tdklhjh",
        "gps_coordinates": {
            "latitude": 50.2773742,
            "longitude": 2.8716958999999997
        },
        "links": {
            "website": "http://www.mazet.com/",
            "directions": "https://www.google.fr/maps/dir//Mazet+Logistique,+650+All.+de+la+Gr%C3%A8ce,+62118+Monchy-le-Preux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47dd4a2980dfe6a9:0x1cf34c9ffe1dc2bd?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Mazet Logistique",
        "type": "Service logistique",
        "phone": "03 21 60 43 00",
        "address": "Monchy-le-Preux",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 10,
        "rating": 3,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "10714290039323499690",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10714290039323499690&q=logistique+75&start=60",
        "lsig": "AB86z5X4sWevSmdnG5c_Lz0Ju8gu",
        "provider_id": "/g/1thhjthw",
        "gps_coordinates": {
            "latitude": 48.918278199999996,
            "longitude": 2.6317508
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Art+Logistique+(Sarl),+Rue+d'Enfer,+77181+Le+Pin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e610bad422f057:0x94b0ce0626621caa?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Art Logistique (Sarl)",
        "type": "Société de transport routier",
        "phone": "01 75 73 80 31",
        "address": "Le Pin",
        "hours": "Fermé temporairement"
    },
    {
        "position": 11,
        "place_id": "6896506172053669616",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6896506172053669616&q=logistique+75&start=60",
        "lsig": "AB86z5W9EK5s5iD9EXaf2Hd_xHL1",
        "provider_id": "/g/11mwnygfm_",
        "gps_coordinates": {
            "latitude": 45.6324264,
            "longitude": 5.111568699999999
        },
        "links": {
            "website": "https://rt-globalsolution.com/",
            "directions": "https://www.google.fr/maps/dir//RT+Global+Solution,+29+boucles+de+la+ram%C3%A9e,+38070+Saint-Quentin-Fallavier/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4d3d8efc361bb:0x5fb54fd3008c46f0?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "RT Global Solution",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "04 76 72 83 75",
        "address": "Saint-Quentin-Fallavier",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 12,
        "rating": 4.2,
        "reviews_original": "(37)",
        "reviews": 37,
        "description": "\"Géant entrepôt de logistique\"",
        "place_id": "4673729769954448085",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4673729769954448085&q=logistique+75&start=60",
        "lsig": "AB86z5XsMxmHHubpFLCZ8WgbR6EE",
        "provider_id": "/g/11btmsl3xh",
        "gps_coordinates": {
            "latitude": 48.617367099999996,
            "longitude": 2.5867483
        },
        "links": {
            "website": "https://www.sc-2.com/en/sc-2-supply-chain/",
            "directions": "https://www.google.fr/maps/dir//Sc+2,+Prologis+Park+Moissy+2+Les+Chevrons,+Av.+Paul+Delouvrier+B%C3%A2timent+DC2,+77550+Moissy-Cramayel/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e37b13a242f5:0x40dc6c769a4d92d5?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Sc 2",
        "type": "Société de transport international de marchandises",
        "phone": "01 75 43 79 96",
        "address": "Moissy-Cramayel"
    },
    {
        "position": 13,
        "rating": 3.6,
        "reviews_original": "(32)",
        "reviews": 32,
        "place_id": "14330762825201516430",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14330762825201516430&q=logistique+75&start=60",
        "lsig": "AB86z5VhJpvSIzZjmxXpocmOCC2I",
        "provider_id": "/g/11h3lfpj9_",
        "gps_coordinates": {
            "latitude": 45.5102356,
            "longitude": 4.9446828
        },
        "links": {
            "website": "https://www.pslquerlioz.com/",
            "directions": "https://www.google.fr/maps/dir//Querlioz+Logistique,+Za+La+Craz,+640+Rte+de+la+Bougie,+38780+Estrablin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4d99689989431:0xc6e118dca4827f8e?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Querlioz Logistique",
        "type": "Service logistique",
        "phone": "04 74 58 00 75",
        "address": "Estrablin",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 14,
        "rating": 3.5,
        "reviews_original": "(325)",
        "reviews": 325,
        "place_id": "4351675132882982654",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4351675132882982654&q=logistique+75&start=60",
        "lsig": "AB86z5XhGfz4G7f49BCEAkfOzNt4",
        "provider_id": "/g/1w96g29y",
        "gps_coordinates": {
            "latitude": 45.646437399999996,
            "longitude": 5.1209627
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/?utm_source=GMB&utm_medium=GMB-FRANCE&utm_campaign=GMB-FRANCE",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel,+89+Rue+de+Malacombe,+38070+Saint-Quentin-Fallavier/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4cdf01e108ae3:0x3c64417a296416fe?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel",
        "type": "Service logistique",
        "phone": "04 74 94 52 46",
        "address": "Saint-Quentin-Fallavier",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 15,
        "rating": 4.2,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "13481529415497723519",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13481529415497723519&q=logistique+75&start=60",
        "lsig": "AB86z5VdeOJVru2AUrZBavqI4eIg",
        "provider_id": "/g/11clhs0dcn",
        "gps_coordinates": {
            "latitude": 45.6465658,
            "longitude": 5.1236518
        },
        "links": {
            "website": "http://www.sarl-stc.com/",
            "directions": "https://www.google.fr/maps/dir//STC+Global+Solutions+Transport,+75+Rue+de+Malacombe,+38070+Saint-Quentin-Fallavier/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4cdf1c4dc9acb:0xbb1803933fb8ae7f?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "STC Global Solutions Transport",
        "type": "Service de transport",
        "phone": "04 74 82 31 48",
        "address": "Saint-Quentin-Fallavier"
    },
    {
        "position": 16,
        "place_id": "9250459849167760875",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9250459849167760875&q=logistique+75&start=60",
        "lsig": "AB86z5UJ9-LRmr9vClnv4286jpWZ",
        "provider_id": "/g/11pzyfn177",
        "gps_coordinates": {
            "latitude": 47.3138836,
            "longitude": -2.171356
        },
        "links": {
            "website": "http://www.groupesf.fr/",
            "directions": "https://www.google.fr/maps/dir//Groupe+SF+-+Montoire+de+Bretagne+-+Transports+-+Logistique+-+S2F+-+LSF+-+TCP+-+SFV+-+TMC+-+ARGO+-+TSF+-+Distribution,+75+Rue+Henri+Gautier,+44550+Montoir-de-Bretagne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x480565fe05902be5:0x80603c38c6a86deb?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Groupe SF - Montoire de Bretagne - Transports - Logistique - S2F - LSF - TCP - SFV - TMC - ARGO - TSF - Distribution",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "02 40 90 40 10",
        "address": "Montoir-de-Bretagne",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 17,
        "rating": 3.3,
        "reviews_original": "(849)",
        "reviews": 849,
        "description": "\"Un centre logistique comme tant d'autres.\"",
        "place_id": "15940380297312955628",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15940380297312955628&q=logistique+75&start=60",
        "lsig": "AB86z5Ue6nn8ERAj6QEeXyaJw2oX",
        "provider_id": "/g/1v44pqb5",
        "gps_coordinates": {
            "latitude": 47.9365514,
            "longitude": 2.0042619999999998
        },
        "links": {
            "website": "http://europe.xpo.com/fr",
            "directions": "https://www.google.fr/maps/dir//GXO+Logistics,+165+Route+de+Pithiviers,+45760+Boigny-sur-Bionne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e4fd3f8cb5e1cd:0xdd379b6cb5f96cec?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "GXO Logistics",
        "type": "Service logistique",
        "phone": "02 38 75 99 99",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 18,
        "rating": 3.9,
        "reviews_original": "(16)",
        "reviews": 16,
        "place_id": "13161382968801767799",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13161382968801767799&q=logistique+75&start=60",
        "lsig": "AB86z5XKhJqJGyoyRkUiheI-E9c3",
        "provider_id": "/g/113k3zlhb",
        "gps_coordinates": {
            "latitude": 47.1973279,
            "longitude": -1.5909746
        },
        "links": {
            "website": "https://www.groupe-idea.com/fr",
            "directions": "https://www.google.fr/maps/dir//IDEA+-+Plateforme+logistique+de+Nantes,+20+Rue+Jules+Launey,+44100+Nantes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4805eb85f1bdf2e3:0xb6a6a014004e3177?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "IDEA - Plateforme logistique de Nantes",
        "type": "Service logistique",
        "phone": "02 40 43 82 56",
        "address": "Nantes",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 19,
        "rating": 5,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "15120407801421707577",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15120407801421707577&q=logistique+75&start=60",
        "lsig": "AB86z5Vu71BxUXoa1a8ECjjrdoDx",
        "provider_id": "/g/11trhz0x63",
        "gps_coordinates": {
            "latitude": 43.7245047,
            "longitude": 1.3803908
        },
        "links": {
            "website": "https://www.leroylogistique.com/agences/plateforme-logistique-toulouse/",
            "directions": "https://www.google.fr/maps/dir//Le+Roy+Logistique+Toulouse+1,+Chem.+de+Bordeneuve,+31150+Saint-Jory/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aea7b9fd27b675:0xd1d67ac8b6c93939?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Le Roy Logistique Toulouse 1",
        "type": "Service logistique",
        "phone": "05 62 75 81 80",
        "address": "Saint-Jory",
        "hours": "Ferme bientôt ⋅ 12:30"
    },
    {
        "position": 20,
        "rating": 3.9,
        "reviews_original": "(22)",
        "reviews": 22,
        "place_id": "1432151958895690860",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1432151958895690860&q=logistique+75&start=60",
        "lsig": "AB86z5XX9xkSP0usub5ObM8graYG",
        "provider_id": "/g/11ghsb4f1l",
        "gps_coordinates": {
            "latitude": 45.8507088,
            "longitude": 5.2785649
        },
        "links": {
            "website": "http://www.transports-astrin.com/",
            "directions": "https://www.google.fr/maps/dir//Astr'in+Logistique,+All%C3%A9e+Figue+et+Li%C3%A8vre,+All%C3%A9e+des+bergeries,+01150+Saint-Vulbas/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x478b4b456ea57725:0x13e0069e665b846c?sa=X&ved=2ahUKEwjQ2cqNvY6CAxUtTTABHeLnDvA4PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Astr'in Logistique",
        "type": "Service logistique",
        "phone": "04 69 75 10 20",
        "address": "Saint-Vulbas",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 1,
        "rating": 3.8,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "16340404063290656194",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16340404063290656194&q=logistique+75&start=80",
        "lsig": "AB86z5WD_kzulfiggasmga30GeZT",
        "provider_id": "/g/11strdldzp",
        "gps_coordinates": {
            "latitude": 48.7279706,
            "longitude": 2.8397771
        },
        "links": {
            "website": "https://www.delisle-sa.com/",
            "directions": "https://www.google.fr/maps/dir//Delisle+Logistique,+ZAC+DU+VAL+BREON+BATIEMENT+4.2,+77610+Ch%C3%A2tres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8ab908c4665a3:0xe2c4c6eb9eca05c2?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Delisle Logistique",
        "type": "Service logistique",
        "phone": "01 64 75 88 98",
        "address": "Châtres",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 3.7,
        "reviews_original": "(87)",
        "reviews": 87,
        "place_id": "9759731761436677461",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9759731761436677461&q=logistique+75&start=80",
        "lsig": "AB86z5XUkK3Vh2Atxvwht4KyR9Fa",
        "provider_id": "/g/11c60fr10_",
        "gps_coordinates": {
            "latitude": 48.8166185,
            "longitude": 2.6156032
        },
        "links": {
            "website": "http://www.dgroupe.fr/ServicesDistritec.php",
            "directions": "https://www.google.fr/maps/dir//Distritec,+37+Bd+de+Beaubourg,+77184+%C3%89merainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60f996b2ce659:0x87718853e787d555?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Distritec",
        "type": "Service logistique",
        "phone": "01 64 61 81 91",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 3,
        "rating": 3.8,
        "reviews_original": "(163)",
        "reviews": 163,
        "description": "\"Bon transit, logistique\"",
        "place_id": "16199277396004833160",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16199277396004833160&q=logistique+75&start=80",
        "lsig": "AB86z5VW9xA-0w1mdCW7onPqr8aF",
        "provider_id": "/g/11gfgdh4vc",
        "gps_coordinates": {
            "latitude": 48.7338844,
            "longitude": 2.3771171000000004
        },
        "links": {
            "website": "https://tass-transit-air-sea-service.webnode.fr/",
            "directions": "https://www.google.fr/maps/dir//TASS+Transit+Air+Sea+Service,+A%C3%A9roport+de+Paris-Orly,+Bat+287+,+Rue+du+N%C3%A9goce,+zone+de+fret,+94310+Orly/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e675cac35ae755:0xe0cf64f6d6e20788?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "TASS Transit Air Sea Service",
        "type": "Service logistique",
        "phone": "01 49 75 38 31",
        "address": "Orly",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 4,
        "rating": 3.8,
        "reviews_original": "(135)",
        "reviews": 135,
        "description": "\"Lieu de la base logistique de intermarcher\"",
        "place_id": "6534394837176993443",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6534394837176993443&q=logistique+75&start=80",
        "lsig": "AB86z5VniHVdIN7ikftwhPkEYLVF",
        "provider_id": "/g/1tcyndv_",
        "gps_coordinates": {
            "latitude": 44.360227900000005,
            "longitude": 4.7277642
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ITM+Logistique+Alimentaire+International,+ZI+du+tricastin,+26700+Pierrelatte/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b574b5229134a1:0x5aaed57bd414c6a3?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "ITM Logistique Alimentaire International",
        "type": "Service logistique",
        "phone": "04 75 96 26 26",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 5,
        "place_id": "5769098991780682122",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5769098991780682122&q=logistique+75&start=80",
        "lsig": "AB86z5XX7A-QhDCQOr0LORKvA-w0",
        "provider_id": "/g/11q8x07g68",
        "gps_coordinates": {
            "latitude": 44.9344306,
            "longitude": 4.9304383
        },
        "links": {
            "website": "http://www.groupebmv.com/",
            "directions": "https://www.google.fr/maps/dir//BMV+-+Valence+Logistique,+38+Chem.+de+Thabor,+26000+Valence/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f557e29ba0d1df:0x500ff4f78f26d98a?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "BMV - Valence Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "04 75 83 48 41",
        "address": "Valence",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 6,
        "place_id": "4548117557881708970",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4548117557881708970&q=logistique+75&start=80",
        "lsig": "AB86z5WGi8HumBt9jP_1Q0jUkBq7",
        "provider_id": "/g/11sv1ypzm7",
        "gps_coordinates": {
            "latitude": 44.8966042,
            "longitude": 1.4639752
        },
        "links": {
            "website": "http://relais.pickup.fr/info.php?p=8838U",
            "directions": "https://www.google.fr/maps/dir//Relais+Pickup,+75+Av.+de+Sarlat,+46200+Souillac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12acb75202fb6dab:0x3f1e28d26a41a1aa?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Relais Pickup",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Souillac",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 7,
        "rating": 4.2,
        "reviews_original": "(47)",
        "reviews": 47,
        "place_id": "7905814196470163418",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7905814196470163418&q=logistique+75&start=80",
        "lsig": "AB86z5WRh-DuHD8M72cvIq92TGoN",
        "provider_id": "/g/11b6dhk0vj",
        "gps_coordinates": {
            "latitude": 49.009607599999995,
            "longitude": 2.1644441
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Pantos+Logistics+France,+22+Ave.+Paul+Langevin,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6608fd9337383:0x6db7181ff8d827da?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Pantos Logistics France",
        "type": "Service logistique",
        "phone": "01 75 68 02 95",
        "address": "Herblay-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 8,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "14452994017544356488",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14452994017544356488&q=logistique+75&start=80",
        "lsig": "AB86z5V1jalm1bfNVAQS1TjTXO0U",
        "provider_id": "/g/11n657sn8y",
        "gps_coordinates": {
            "latitude": 45.6966271,
            "longitude": 4.8303123
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transporteo+International,+75+Chem.+d'Yvours,+69310+Pierre-B%C3%A9nite/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4e9551a6bef7d:0xc893597bd493c288?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Transporteo International",
        "type": "Service logistique",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 9,
        "rating": 4,
        "reviews_original": "(153)",
        "reviews": 153,
        "description": "\"Transport de toutes marchandises avec des stations de lavage au top\"",
        "place_id": "13231967984637177703",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13231967984637177703&q=logistique+75&start=80",
        "lsig": "AB86z5W3I2eT7lNTOTKdd3ISEu1n",
        "provider_id": "/g/1thw1hs4",
        "gps_coordinates": {
            "latitude": 45.2813592,
            "longitude": 4.8246798
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+XPO+Logistics,+Fouillouse+O,+26140+Saint-Rambert-d'Albon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53dd7334bd585:0xb7a164c6aba3ef67?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Transports XPO Logistics",
        "type": "Société de transport routier",
        "phone": "04 75 32 36 09",
        "address": "Saint-Rambert-d'Albon"
    },
    {
        "position": 10,
        "place_id": "16131498065378314447",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16131498065378314447&q=logistique+75&start=80",
        "lsig": "AB86z5XfO1bzzlyQFLwAVsSIWZNp",
        "provider_id": "/g/11c57rj584",
        "gps_coordinates": {
            "latitude": 45.7629478,
            "longitude": 4.827311100000001
        },
        "links": {
            "website": "http://expelog.com/",
            "directions": "https://www.google.fr/maps/dir//Expelog,+9+Rue+du+B%C5%93uf,+69005+Lyon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f4e9070fc866d7:0xdfde9805a9c688cf?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Expelog",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "04 75 23 83 27",
        "address": "Lyon"
    },
    {
        "position": 11,
        "rating": 4.9,
        "reviews_original": "(85)",
        "reviews": 85,
        "place_id": "12792468444923904513",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12792468444923904513&q=logistique+75&start=80",
        "lsig": "AB86z5XxKbEPfvDAKQYnHKWBH1Ti",
        "provider_id": "/g/1pty6njtg",
        "gps_coordinates": {
            "latitude": 48.814653299999996,
            "longitude": 2.2827558999999997
        },
        "links": {
            "website": "https://www.ventousage-75.fr/?utm_source=GMB&utm_medium=organic&utm_campaign=ventousage",
            "directions": "https://www.google.fr/maps/dir//Larosa+Ventousage+Paris,+35+Bd+de+Stalingrad,+92240+Malakoff/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67087c8c10a6d:0xb187fa45f4154201?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Larosa Ventousage Paris",
        "type": "Service logistique",
        "phone": "06 63 07 98 75",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 12,
        "place_id": "3307366584401525131",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3307366584401525131&q=logistique+75&start=80",
        "lsig": "AB86z5WjQM6R6b8bNm6Ln2QQwmca",
        "provider_id": "/g/1tc_djs6",
        "gps_coordinates": {
            "latitude": 50.1093675,
            "longitude": 1.8563460999999999
        },
        "links": {
            "website": "http://www.immoouest-transport.fr/",
            "directions": "https://www.google.fr/maps/dir//SAS+Immo+Ouest+Transport+Et+Logistique,+130+Rue+du+Ch%C3%A2teau+d'Eau,+80100+Abbeville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47dd8ced8b48642b:0x2de62062a53ff98b?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "SAS Immo Ouest Transport Et Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "03 22 20 42 75",
        "address": "Abbeville"
    },
    {
        "position": 13,
        "rating": 5,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "12508266476144948622",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12508266476144948622&q=logistique+75&start=80",
        "lsig": "AB86z5UuUO11VnmSTnh7RyMJcC6W",
        "provider_id": "/g/11tdrl8cnv",
        "gps_coordinates": {
            "latitude": 44.5260739,
            "longitude": 4.7415246
        },
        "links": {
            "website": "https://www.wurth.fr/fr/quincaillerie/contact/administratif/coordonnees-postales.php",
            "directions": "https://www.google.fr/maps/dir//W%C3%BCrth+-+Plate-forme+logistique+de+Mont%C3%A9limar,+Bd+Charles+Andr%C3%A9,+26200+Mont%C3%A9limar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b56d3a40729973:0xad964a16a28bf58e?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Würth - Plate-forme logistique de Montélimar",
        "type": "Service logistique",
        "phone": "04 75 00 83 00",
        "address": "Montélimar",
        "hours": "Ferme bientôt ⋅ 12:30"
    },
    {
        "position": 14,
        "rating": 3.7,
        "reviews_original": "(86)",
        "reviews": 86,
        "place_id": "2671479561851924624",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2671479561851924624&q=logistique+75&start=80",
        "lsig": "AB86z5XBnNbYTAAnD9fF0HmygTbS",
        "provider_id": "/g/11b6d63nyn",
        "gps_coordinates": {
            "latitude": 49.3497098,
            "longitude": 0.9796798
        },
        "links": {
            "website": "https://sifalogistics.com/sifa-rouen/",
            "directions": "https://www.google.fr/maps/dir//SIFA+ROUEN,+Vall%C3%A9e+de+Seine+Logistique,+11+Bd+de+l'%C3%8Ele+aux+Oiseaux,+76530+Grand-Couronne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e11e11afb78ef1:0x25130081e4e67090?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "SIFA ROUEN",
        "type": "Société de transport international de marchandises",
        "phone": "02 32 11 75 75",
        "address": "Grand-Couronne",
        "hours": "Fermé ⋅ Ouvre à 13:00"
    },
    {
        "position": 15,
        "rating": 1.7,
        "reviews_original": "(16)",
        "reviews": 16,
        "place_id": "10574534301476211072",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10574534301476211072&q=logistique+75&start=80",
        "lsig": "AB86z5V-2RlotoGG56BMrqCNVc5B",
        "provider_id": "/g/11gnprz9__",
        "gps_coordinates": {
            "latitude": 44.1871933,
            "longitude": 0.6382354
        },
        "links": {
            "website": "http://www.hi-auto47.com/",
            "directions": "https://www.google.fr/maps/dir//H.I.TRANSIT+logistique,+1325+Av.+d'Aquitaine,+47550+Bo%C3%A9/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12abb34c745c626b:0x92c04aebc0ac4980?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "H.I.TRANSIT logistique",
        "type": "Service logistique",
        "phone": "09 75 53 63 31",
        "address": "Boé",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 16,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "8779484712057064794",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8779484712057064794&q=logistique+75&start=80",
        "lsig": "AB86z5XssOpCeaCxcsnd7h2zntTj",
        "provider_id": "/g/11js_xt67h",
        "gps_coordinates": {
            "latitude": 44.4177939,
            "longitude": 4.8031542
        },
        "links": {
            "website": "https://www.durhoneservices.fr/nos-agences/",
            "directions": "https://www.google.fr/maps/dir//DRS,+18+Rue+Antoine+Becquerel,+26230+Valaurie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b5738f4e028081:0x79d6fed475224d5a?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "DRS",
        "type": "Service logistique",
        "phone": "04 75 58 84 25",
        "address": "Ouvert actuellement"
    },
    {
        "position": 17,
        "rating": 4,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "5827190976480653179",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5827190976480653179&q=logistique+75&start=80",
        "lsig": "AB86z5UG8UHPUyxVl82mX38r9p0L",
        "provider_id": "/g/1v7tks64",
        "gps_coordinates": {
            "latitude": 47.9249028,
            "longitude": -2.684882
        },
        "links": {
            "website": "https://www.lahaye-global-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//Lahaye+Global+Logistics,+Maigris,+56420+Bul%C3%A9on/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x480fd705ac7960a9:0x50de5751bf7daf7b?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Lahaye Global Logistics",
        "type": "Service logistique",
        "phone": "02 97 75 42 89",
        "address": "Buléon"
    },
    {
        "position": 18,
        "rating": 4,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "6870210142931438421",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6870210142931438421&q=logistique+75&start=80",
        "lsig": "AB86z5UEfLwVU48m6EpTMwnvv0kl",
        "provider_id": "/g/11h1r_cnl4",
        "gps_coordinates": {
            "latitude": 47.1802269,
            "longitude": 1.116952
        },
        "links": {
            "website": "https://www.clic-logistic.com/",
            "directions": "https://www.google.fr/maps/dir//CLIC+LOGISTIC,+La+V%C3%A9nerie,+37460+Genill%C3%A9/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47fcbce8d76ac3b3:0x5f57e3b99db6cb55?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "CLIC LOGISTIC",
        "type": "Service logistique",
        "phone": "02 47 59 53 75",
        "address": "Genillé",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 19,
        "rating": 4.8,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "5855798792006144554",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5855798792006144554&q=logistique+75&start=80",
        "lsig": "AB86z5Wm2hL_OU_8Zuykk6TzthYt",
        "provider_id": "/g/11sjfv30m8",
        "gps_coordinates": {
            "latitude": 44.913061899999995,
            "longitude": 4.973002
        },
        "links": {
            "website": "https://www.ideallis.com/",
            "directions": "https://www.google.fr/maps/dir//Id%C3%A9allis+-+Centre+de+formation+logistique+et+CACES+%C3%A0+Chabeuil+(proche+Valence),+955+Rte+des+Fondeurs,+26120+Chabeuil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f5571e4af0e013:0x5143f9f9d9b0122a?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Idéallis - Centre de formation logistique et CACES à Chabeuil (proche Valence)",
        "type": "Service logistique",
        "phone": "04 75 75 98 75",
        "address": "Chabeuil",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 20,
        "rating": 4.6,
        "reviews_original": "(87)",
        "reviews": 87,
        "description": "\"Super société de transport👌\"",
        "place_id": "11101427320192570459",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11101427320192570459&q=logistique+75&start=80",
        "lsig": "AB86z5XIwJX_ueHK88f1fq_r8ZOp",
        "provider_id": "/g/11b6dp80pk",
        "gps_coordinates": {
            "latitude": 44.7443211,
            "longitude": 4.7530193999999995
        },
        "links": {
            "website": "http://www.transport-sat.com/",
            "directions": "https://www.google.fr/maps/dir//S.A.T.+(Soci%C3%A9t%C3%A9+Ard%C3%A9choise+de+Transports),+1+rue+des+illons,+Chem.+de+la+ZI,+07250+Le+Pouzin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12b547dcb3b5271b:0x9a1031546fe5145b?sa=X&ved=2ahUKEwjnq9eOvY6CAxUJpokEHTGPDUc4UBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "S.A.T. (Société Ardéchoise de Transports)",
        "type": "Société de transport routier",
        "phone": "04 75 85 95 98",
        "address": "Le Pouzin",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 1,
        "rating": 4.6,
        "reviews_original": "(19)",
        "reviews": 19,
        "description": "\"Excellents services logistiques, un réel plaisir de travailler avec cette équipe qui allie professionnalisme, dynamisme et bonne humeur.\"",
        "place_id": "11012111611025351484",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11012111611025351484&q=logistique+77",
        "lsig": "AB86z5VaxVDWdA-Ikqu7MkkWxLRp",
        "provider_id": "/g/1tf0pxrv",
        "gps_coordinates": {
            "latitude": 48.762885999999995,
            "longitude": 2.6871442
        },
        "links": {
            "website": "http://axelogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Axe+Logistique,+20+Rue+Robert+Schuman,+77330+Ozoir-la-Ferri%C3%A8re/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6069b64485845:0x98d2e12a621ee33c?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "Axe Logistique",
        "type": "Service logistique",
        "phone": "01 64 43 69 69",
        "address": "Ozoir-la-Ferrière",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 2,
        "rating": 5,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "4444008165396011752",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4444008165396011752&q=logistique+77",
        "lsig": "AB86z5VBIMTnnwrTO1RtrE-lkGEZ",
        "provider_id": "/g/1hc458kvc",
        "gps_coordinates": {
            "latitude": 48.6656882,
            "longitude": 2.7783252999999997
        },
        "links": {
            "website": "http://lst-ontour.com/",
            "directions": "https://www.google.fr/maps/dir//Logistique+Services+Transports,+Rue+de+Jamard,+77390+Ozouer-le-Voulgis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5ff955713be1d:0x3dac49e18d5d5ae8?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIFRAA&hl=fr&gl=fr"
        },
        "title": "Logistique Services Transports",
        "type": "Société de transport routier",
        "phone": "01 64 07 65 16",
        "address": "Ozouer-le-Voulgis",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 3,
        "rating": 3.6,
        "reviews_original": "(49)",
        "reviews": 49,
        "place_id": "15114525661833830599",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15114525661833830599&q=logistique+77",
        "lsig": "AB86z5WqAOkujUf6ejGZjyqX_mfB",
        "provider_id": "/g/11btmb08p1",
        "gps_coordinates": {
            "latitude": 48.7067858,
            "longitude": 2.595274
        },
        "links": {
            "website": "http://eldtransports.com/",
            "directions": "https://www.google.fr/maps/dir//Europeenne+Logistique+Distribution,+RN19,+Zone+artisanale+du,+Le+Poirier+Penche,+77170+Servon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6084ea59c5789:0xd1c195025e21a0c7?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "Europeenne Logistique Distribution",
        "type": "Société de transport routier",
        "phone": "01 64 05 65 88",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 4,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "13523412677594536613",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13523412677594536613&q=logistique+77",
        "lsig": "AB86z5Xa4UknGjKVKfdJke0pJaFh",
        "provider_id": "/g/11bxc5t8bw",
        "gps_coordinates": {
            "latitude": 48.7350651,
            "longitude": 2.7298739999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//GIRARD+AGIDISS+77+LOGISTIC,+18+Rue+Gustave+Eiffel+16,+77220+Gretz-Armainvilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e601250ef0cac1:0xbbacd02e1f095aa5?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "GIRARD AGIDISS 77 LOGISTIC",
        "type": "Service logistique",
        "address": "Gretz-Armainvilliers"
    },
    {
        "position": 5,
        "place_id": "8081321383640170139",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8081321383640170139&q=logistique+77",
        "lsig": "AB86z5XxQwNHQ9_KJ8F58xj014Ih",
        "provider_id": "/g/11fk9lsv_2",
        "gps_coordinates": {
            "latitude": 48.6399982,
            "longitude": 2.572764
        },
        "links": {
            "website": "https://www.onet.fr/logistique/",
            "directions": "https://www.google.fr/maps/dir//Onet+Logistique+MELUN,+245+Av.+de+Rio+B%C3%A2timent+B1,+77550+Moissy-Cramayel/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615f06e0784db:0x70269efb53a3fe9b?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "Onet Logistique MELUN",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 34 04 70 20",
        "address": "Moissy-Cramayel",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 6,
        "rating": 3.5,
        "reviews_original": "(149)",
        "reviews": 149,
        "description": "\"Je suis le chef du ménage et travailler dans le plus grand site d Europe est un plaisir\"",
        "place_id": "15254164611138324049",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15254164611138324049&q=logistique+77",
        "lsig": "AB86z5V-MY2UB4Jl7i2mGoz-Q-2X",
        "provider_id": "/g/11h04nr5gn",
        "gps_coordinates": {
            "latitude": 48.7361145,
            "longitude": 2.7893149999999998
        },
        "links": {
            "website": "https://www.id-logistics.com/en/",
            "directions": "https://www.google.fr/maps/dir//Id+Logistics,+zi+de+la+terre+rouge,+Rte+de+Fontenay,+77220+Tournan-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60149aeeefa29:0xd3b1ade4d03c0651?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "Id Logistics",
        "type": "Service logistique",
        "address": "Tournan-en-Brie",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 7,
        "rating": 2.7,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "1502324943697743228",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1502324943697743228&q=logistique+77",
        "lsig": "AB86z5Wsh3ZghI5_LGfwhY-S_sdM",
        "provider_id": "/g/11h40zn3qn",
        "gps_coordinates": {
            "latitude": 48.8280633,
            "longitude": 2.6303323
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Polytrans+Logistique,+27+Rue+de+la+Maison+Rouge,+77185+Lognes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60f8b6e273343:0x14d954939e500d7c?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "Polytrans Logistique",
        "type": "Service logistique",
        "phone": "01 60 93 08 20",
        "address": "Lognes"
    },
    {
        "position": 8,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "2873079005832265519",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2873079005832265519&q=logistique+77",
        "lsig": "AB86z5XiXMC0Y8rxipQUxZ4RdEYm",
        "provider_id": "/g/11c2p946vz",
        "gps_coordinates": {
            "latitude": 48.8275419,
            "longitude": 2.6432086999999997
        },
        "links": {
            "website": "https://www.leroylogistique.com/agences/plateforme-logistique-paris-est/",
            "directions": "https://www.google.fr/maps/dir//Le+Roy+Logistique+Croissy-Beaubourg,+52+Rue+d'Emerainville+Z.A.+Pariest,+77183+Croissy-Beaubourg/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60567b03ceaeb:0x27df3a223243bf2f?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "Le Roy Logistique Croissy-Beaubourg",
        "type": "Service logistique",
        "phone": "01 64 80 63 90",
        "address": "Croissy-Beaubourg",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 9,
        "rating": 3.6,
        "reviews_original": "(870)",
        "reviews": 870,
        "place_id": "7914302175017027906",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7914302175017027906&q=logistique+77",
        "lsig": "AB86z5UwFyfKeGXah_iphMPI5AMt",
        "provider_id": "/g/1x5f9ph1",
        "gps_coordinates": {
            "latitude": 48.698308999999995,
            "longitude": 2.8849891
        },
        "links": {
            "website": "http://www.fmlogistic.fr/",
            "directions": "https://www.google.fr/maps/dir//FM+Logistic+Fontenay-Tr%C3%A9signy,+ZAC+de+Fregy,+Rue+de+Fr%C3%A9gy,+77610+Fontenay-Tr%C3%A9signy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8ab5d4658cdf7:0x6dd53fe57afdc942?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIDhAA&hl=fr&gl=fr"
        },
        "title": "FM Logistic Fontenay-Trésigny",
        "type": "Service logistique",
        "phone": "01 64 51 43 00",
        "address": "Fontenay-Trésigny",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 10,
        "rating": 4,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "7778715949410916712",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7778715949410916712&q=logistique+77",
        "lsig": "AB86z5Uc8SY3jWiOpCA5tBAHFsuT",
        "provider_id": "/g/11j74hdwn3",
        "gps_coordinates": {
            "latitude": 48.642239200000006,
            "longitude": 2.5446315
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Portmann+Logistique+Lieusaint+77,+50+Bd+d'Espagne,+77127+Lieusaint/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e3a5ec9d7de7:0x6bf38cf14d4d9968?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "Portmann Logistique Lieusaint 77",
        "type": "Dépôt",
        "address": "Lieusaint",
        "hours": "Ouvert ⋅ Ferme à 16:30"
    },
    {
        "position": 11,
        "rating": 3.8,
        "reviews_original": "(104)",
        "reviews": 104,
        "place_id": "5678955633104372446",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5678955633104372446&q=logistique+77",
        "lsig": "AB86z5XGm79k0PSIUqaGxbfs-1iX",
        "provider_id": "/g/11b6d5cqqf",
        "gps_coordinates": {
            "latitude": 48.261399999999995,
            "longitude": 2.719979
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+Logistique+NEMOURS,+4+Rue+des+Palis,+77140+Nemours/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e589a652403a17:0x4ecfb40f5663c2de?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQICxAA&hl=fr&gl=fr"
        },
        "title": "STEF Logistique NEMOURS",
        "type": "Service logistique",
        "phone": "01 60 51 50 00",
        "address": "Nemours"
    },
    {
        "position": 12,
        "rating": 4.4,
        "reviews_original": "(17)",
        "reviews": 17,
        "description": "\"Personnelle sympathique et rapide\"",
        "place_id": "1191793362973848685",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1191793362973848685&q=logistique+77",
        "lsig": "AB86z5UrkI1vxJy7Ks3xI9N6hzMB",
        "provider_id": "/g/11jmb8nwc0",
        "gps_coordinates": {
            "latitude": 48.6107826,
            "longitude": 2.6056155999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Base+leroy+merlin+logistique+reau,+2202+Rue+Denis+Papin,+77550/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e3c5cc0df869:0x108a19bfcdb9746d?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIChAA&hl=fr&gl=fr"
        },
        "title": "Base leroy merlin logistique reau",
        "type": "Service logistique",
        "address": "2202 Rue Denis Papin"
    },
    {
        "position": 13,
        "rating": 4,
        "reviews_original": "(41)",
        "reviews": 41,
        "place_id": "9796108193098725971",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9796108193098725971&q=logistique+77",
        "lsig": "AB86z5WmWkV68SEPqzsGS6vr9R0C",
        "provider_id": "/g/1tgs0710",
        "gps_coordinates": {
            "latitude": 48.9457543,
            "longitude": 2.6740803
        },
        "links": {
            "website": "https://transports-vigneron.fr/fiche-solutrans-logistique/",
            "directions": "https://www.google.fr/maps/dir//Solutrans+Logistique,+10+Rue+Victor+Baltard,+77410+Claye-Souilly/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e619943d99654b:0x87f2c47fe6f17a53?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Solutrans Logistique",
        "type": "Société de transport routier",
        "phone": "01 60 26 93 54",
        "address": "Claye-Souilly"
    },
    {
        "position": 14,
        "rating": 4.4,
        "reviews_original": "(53)",
        "reviews": 53,
        "place_id": "16284019394072184153",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16284019394072184153&q=logistique+77",
        "lsig": "AB86z5VuvF_c4IZefUU2zjogxO-B",
        "provider_id": "/g/1vq9llbc",
        "gps_coordinates": {
            "latitude": 48.8196856,
            "longitude": 2.6344931
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Ssdt+Transport+Logistique,+9+Bd+de+Beaubourg,+77183+Croissy-Beaubourg/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60562a8133745:0xe1fc755ccb3e8559?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQICBAA&hl=fr&gl=fr"
        },
        "title": "Ssdt Transport Logistique",
        "type": "Société de transport routier",
        "phone": "01 60 94 81 81",
        "address": "Croissy-Beaubourg",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 15,
        "rating": 3.5,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "14344114770808162901",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14344114770808162901&q=logistique+77",
        "lsig": "AB86z5UcuP0XkbNP95oUxmr9zkoW",
        "provider_id": "/g/11btmqzj_y",
        "gps_coordinates": {
            "latitude": 48.873191299999995,
            "longitude": 2.6710555000000005
        },
        "links": {
            "website": "http://sauerbrei-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//Sauerbrei+Logistics+France+SLF,+11+Rue+de+la+Marne,+77400+Saint-Thibault-des-Vignes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61ae8c2d37299:0xc7108862bb744a55?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIFBAA&hl=fr&gl=fr"
        },
        "title": "Sauerbrei Logistics France SLF",
        "type": "Service logistique",
        "phone": "01 60 07 26 15",
        "address": "Saint-Thibault-des-Vignes",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 16,
        "rating": 4.3,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "17926454950729762990",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17926454950729762990&q=logistique+77",
        "lsig": "AB86z5VbDisAo2csqui5PFaoMNK_",
        "provider_id": "/g/11bw2k4rft",
        "gps_coordinates": {
            "latitude": 48.8379416,
            "longitude": 2.7814467
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Auchan+logistique,+ZAC+Courtenois,+Rte+de+Meaux,+77700+Serris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e602da2642a957:0xf8c78fcc9c4a48ae?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "Auchan logistique",
        "type": "Service logistique",
        "address": "Serris"
    },
    {
        "position": 17,
        "rating": 4,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "17468608560062261819",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17468608560062261819&q=logistique+77",
        "lsig": "AB86z5U6ez4wYL4sYCjh5M4V-KBN",
        "provider_id": "/g/11f62h3bg2",
        "gps_coordinates": {
            "latitude": 48.984671,
            "longitude": 2.5479659999999997
        },
        "links": {
            "website": "https://transphil-express.fr/",
            "directions": "https://www.google.fr/maps/dir//Trans'phil+Express+-+logistique+%C3%A9v%C3%A9nementielle+-+soci%C3%A9t%C3%A9+de+transport+routier+77,+77+Rue+de+Roissy,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615dad2eb0add:0xf26cf6eec6dbea3b?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "Trans'phil Express - logistique événementielle - société de transport routier 77",
        "type": "Société de transport routier",
        "phone": "01 83 35 77 80",
        "address": "Tremblay-en-France",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 18,
        "rating": 3.4,
        "reviews_original": "(179)",
        "reviews": 179,
        "place_id": "7301993309070620950",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7301993309070620950&q=logistique+77",
        "lsig": "AB86z5W2SPjvU9Y126BPSDNg_CDh",
        "provider_id": "/g/1tgh28c2",
        "gps_coordinates": {
            "latitude": 48.698297,
            "longitude": 2.623703
        },
        "links": {
            "website": "https://www.pointp.fr/",
            "directions": "https://www.google.fr/maps/dir//POINT.P,+9+RUE+CHAPPE+GESSALIN+ZAC+MIDI+DU+BOIS+DE+LA+PLAINE,+Rte+de+Chevry,+77170+Brie-Comte-Robert/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e607fd432af9bb:0x6555e43a1b6ef916?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "POINT.P",
        "type": "Service logistique",
        "phone": "01 60 62 65 10",
        "address": "Ouvert actuellement"
    },
    {
        "position": 19,
        "place_id": "3888218386033325836",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3888218386033325836&q=logistique+77",
        "lsig": "AB86z5XjZ0zKOco8r__EzqLklMgH",
        "provider_id": "/g/1tcxchn5",
        "gps_coordinates": {
            "latitude": 48.861367699999995,
            "longitude": 2.6957217
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//MLV+Logistique,+1+Rue+la+Fontaine,+77400+Gouvernes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61b3b20ddbf81:0x35f5ba057ca8b70c?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "MLV Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 64 30 38 61",
        "address": "Gouvernes"
    },
    {
        "position": 20,
        "rating": 3.9,
        "reviews_original": "(365)",
        "reviews": 365,
        "place_id": "4487587010190968269",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4487587010190968269&q=logistique+77",
        "lsig": "AB86z5XqNcdNv4ze_TtqOPYjGXEc",
        "provider_id": "/g/11c6qhqlfd",
        "gps_coordinates": {
            "latitude": 48.2683142,
            "longitude": 2.7197872
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+Logistique+DARVAULT,+Z.A.C.+de+la+pierre+lev%C3%A9e+-+Lieudit+%22Les+Moines%22,+Route+de+Montereau,+77140+Darvault/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5899f270c1fb5:0x3e471c9c091705cd?sa=X&ved=2ahUKEwi9opqwvY6CAxUbIEQIHT8BAvsQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "STEF Logistique DARVAULT",
        "type": "Service logistique",
        "phone": "01 60 55 21 01",
        "address": "Darvault"
    },
    {
        "position": 1,
        "place_id": "4756497008179498986",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4756497008179498986&q=logistique+77&start=20",
        "lsig": "AB86z5Xk_DzIozK0scSsrx32YC2l",
        "provider_id": "/g/11r19m9f35",
        "gps_coordinates": {
            "latitude": 48.732744200000006,
            "longitude": 2.7352846
        },
        "links": {
            "website": "https://www.societe.com/societe/societe-generale-de-logistique-394718001.html",
            "directions": "https://www.google.fr/maps/dir//Soci%C3%A9t%C3%A9+g%C3%A9n%C3%A9rale+de+logistique+(Aldi),+Av.+Amp%C3%A8re,+77220+Gretz-Armainvilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6012ee0a40773:0x420278d3f3bf4fea?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Société générale de logistique (Aldi)",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Gretz-Armainvilliers"
    },
    {
        "position": 2,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "11743792894412622841",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11743792894412622841&q=logistique+77&start=20",
        "lsig": "AB86z5WSwIpd7_AmWhHLQm1x7mt9",
        "provider_id": "/g/1tf3yp51",
        "gps_coordinates": {
            "latitude": 48.8489882,
            "longitude": 2.6599706999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//T.T.L.M+Tous+Transports+Logistique+Mode,+All.+des+Epinettes,+77200+Torcy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6053586bf59a9:0xa2fa556a8b388bf9?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "T.T.L.M Tous Transports Logistique Mode",
        "type": "Société de transport routier",
        "phone": "01 64 11 15 15",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 3,
        "rating": 1.5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "11674329198847609448",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11674329198847609448&q=logistique+77&start=20",
        "lsig": "AB86z5UdqcaSq8VCxX0tY58vbDL0",
        "provider_id": "/g/11gxsplrpc",
        "gps_coordinates": {
            "latitude": 48.7132046,
            "longitude": 2.5752777
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//S.oci%C3%A9t%C3%A9+D.istribution+L.ogistique+T.ransporEuropeenne+Logistique+Distribution77170+Servon.,+4,+N19,+77170+Servon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e609e4e151fc73:0xa2038c8d98484a68?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "S.ociété D.istribution L.ogistique T.ransporEuropeenne Logistique Distribution77170 Servon.",
        "type": "Société de transport routier",
        "address": "Servon",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 4,
        "rating": 3.5,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "1803785742783615177",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1803785742783615177&q=logistique+77&start=20",
        "lsig": "AB86z5XYLg7cBrpLJGJ_hc2E-x4w",
        "provider_id": "/g/1tj4x_v_",
        "gps_coordinates": {
            "latitude": 48.7635718,
            "longitude": 2.6953945
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Logistique+Devies,+33+Av.+Henri+Beaudelet,+77330+Ozoir-la-Ferri%C3%A8re/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6069f253e3a5f:0x19085593818810c9?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Transports Logistique Devies",
        "type": "Société de transport routier",
        "phone": "01 60 02 94 19",
        "address": "Ozoir-la-Ferrière"
    },
    {
        "position": 5,
        "rating": 3.8,
        "reviews_original": "(53)",
        "reviews": 53,
        "place_id": "4388262940225098177",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4388262940225098177&q=logistique+77&start=20",
        "lsig": "AB86z5WDjzFWJpwUydDxzGan3D_F",
        "provider_id": "/g/11c1wznf6n",
        "gps_coordinates": {
            "latitude": 48.7381868,
            "longitude": 2.8712005
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//TBI+Logistique,+20+Chp+de+l'Alouette,+77610+La+Houssaye-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8abbc236f7ed3:0x3ce63de4e520d1c1?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "TBI Logistique",
        "type": "Service logistique",
        "address": "La Houssaye-en-Brie",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 6,
        "rating": 3.6,
        "reviews_original": "(93)",
        "reviews": 93,
        "place_id": "17672260452056713864",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17672260452056713864&q=logistique+77&start=20",
        "lsig": "AB86z5WUBvWVt_XK14LNRn5RMGRN",
        "provider_id": "/g/11bwflwl5b",
        "gps_coordinates": {
            "latitude": 48.375994999999996,
            "longitude": 3.0263315
        },
        "links": {
            "website": "http://www.fmlogistic.fr/",
            "directions": "https://www.google.fr/maps/dir//FM+Logistic,+ZA+du+Parc+de+St+Donain,+Rue+des+Taupes,+77130+Marolles-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47ef4215f52fc113:0xf5407b3fdf064a88?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "FM Logistic",
        "type": "Entrepôt",
        "phone": "01 64 70 94 10",
        "address": "Marolles-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 7,
        "place_id": "14544998560789728758",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14544998560789728758&q=logistique+77&start=20",
        "lsig": "AB86z5XMOCaBJvHsQljFYAfXuSNd",
        "provider_id": "/g/11f6d2d21c",
        "gps_coordinates": {
            "latitude": 48.682294399999996,
            "longitude": 2.6076191
        },
        "links": {
            "website": "http://sftl-transport.fr/",
            "directions": "https://www.google.fr/maps/dir//SFTL+-+Soci%C3%A9t%C3%A9+de+transports+77,+24+Rue+de+l'Esp%C3%A9rance,+77170+Brie-Comte-Robert/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e34becc285db:0xc9da3720da708df6?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "SFTL - Société de transports 77",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "01 67 46 27 46",
        "address": "Brie-Comte-Robert"
    },
    {
        "position": 8,
        "rating": 3.2,
        "reviews_original": "(260)",
        "reviews": 260,
        "place_id": "536502476280342187",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=536502476280342187&q=logistique+77&start=20",
        "lsig": "AB86z5W5sxy0pAgAtLvrWYXSJABM",
        "provider_id": "/g/11cs327r59",
        "gps_coordinates": {
            "latitude": 48.828289999999996,
            "longitude": 2.7115709
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/?utm_source=GMB&utm_medium=GMB-FRANCE&utm_campaign=GMB-FRANCE",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel,+2+Av.+Joseph+Paxton,+77164+Ferri%C3%A8res-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e604bdf0ebf583:0x7720a28dfcea6ab?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel",
        "type": "Service logistique",
        "phone": "01 64 76 12 12",
        "address": "Ferrières-en-Brie",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 9,
        "rating": 3.6,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "3258955878022387693",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3258955878022387693&q=logistique+77&start=20",
        "lsig": "AB86z5Vi3Ph4P-rXSjx5n2wcO78a",
        "provider_id": "/g/113k0gb_4",
        "gps_coordinates": {
            "latitude": 48.8029456,
            "longitude": 2.6328690999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//GXO+Logistics+France,+71+Av.+Joseph+Bodin+de+Boismortier,+77680+Roissy-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60586f990a131:0x2d3a231ab83217ed?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "GXO Logistics France",
        "type": "Service logistique",
        "phone": "01 64 40 23 77",
        "address": "Roissy-en-Brie",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 10,
        "rating": 4.4,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "1198131127310747162",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1198131127310747162&q=logistique+77&start=20",
        "lsig": "AB86z5U5UFFutHWN2wmMg53ppYTm",
        "provider_id": "/g/11htqgvhkt",
        "gps_coordinates": {
            "latitude": 48.710616099999996,
            "longitude": 2.5767887
        },
        "links": {
            "website": "https://raj-services.com/",
            "directions": "https://www.google.fr/maps/dir//Raj+Services+-+Centre+Logistique+Servon,+Z.A.C+de+L'Orme+Rond,+10+Rue+de+l'Ormeteau,+77170+Servon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e609933c953887:0x10a09de98db2061a?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Raj Services - Centre Logistique Servon",
        "type": "Service logistique",
        "phone": "01 70 33 02 09",
        "address": "Servon",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 11,
        "rating": 3.9,
        "reviews_original": "(80)",
        "reviews": 80,
        "place_id": "6792245665044974088",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6792245665044974088&q=logistique+77&start=20",
        "lsig": "AB86z5VgUaMEg6ALn0rOmP0Cpfd2",
        "provider_id": "/g/1tjcnshb",
        "gps_coordinates": {
            "latitude": 48.383411699999996,
            "longitude": 2.9785209
        },
        "links": {
            "website": "https://www.transports-capelle.fr/site-entrepots-stockage-logistique-montereau-fault-yonne-77",
            "directions": "https://www.google.fr/maps/dir//Transports+Capelle+-+Site+Logistique+Montereau,+30+Rue+de+la+Grande+Haie,+77130+Montereau-Fault-Yonne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47ef42ebbc74ebe1:0x5e42e7720c314a08?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Transports Capelle - Site Logistique Montereau",
        "type": "Service logistique",
        "phone": "01 60 57 57 80",
        "address": "Montereau-Fault-Yonne",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 12,
        "rating": 3.1,
        "reviews_original": "(206)",
        "reviews": 206,
        "place_id": "1724978670046136666",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1724978670046136666&q=logistique+77&start=20",
        "lsig": "AB86z5Wpgeg2mgPkVWzDFQ16EUtl",
        "provider_id": "/g/1v1skjb7",
        "gps_coordinates": {
            "latitude": 48.8249712,
            "longitude": 2.6209321000000005
        },
        "links": {
            "website": "http://www.sofrilog.com/",
            "directions": "https://www.google.fr/maps/dir//SOFRILOG+MARNE,+33+Bd+Courcerin+Z.I.+Pariest,+77185+Lognes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60f918f6eb9cd:0x17f05af60939c95a?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "SOFRILOG MARNE",
        "type": "Service logistique",
        "phone": "01 60 05 96 60",
        "address": "Lognes",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 13,
        "rating": 4.1,
        "reviews_original": "(47)",
        "reviews": 47,
        "place_id": "15609057639119622701",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15609057639119622701&q=logistique+77&start=20",
        "lsig": "AB86z5U3qLzhUcFq5VcrJqvzGTyJ",
        "provider_id": "/g/11f101ssvk",
        "gps_coordinates": {
            "latitude": 48.7395557,
            "longitude": 2.8716789
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//PRINTEMPS+entrep%C3%B4t,+1+Chp+de+l'Alouette,+77610+La+Houssaye-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8abbe91c26be3:0xd89e8338f252922d?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "PRINTEMPS entrepôt",
        "type": "Service logistique",
        "address": "La Houssaye-en-Brie"
    },
    {
        "position": 14,
        "rating": 4.4,
        "reviews_original": "(26)",
        "reviews": 26,
        "place_id": "6010388826317475479",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6010388826317475479&q=logistique+77&start=20",
        "lsig": "AB86z5XKPY1sfwy1-CnUpU6t0_xv",
        "provider_id": "/g/11fxqrzrg7",
        "gps_coordinates": {
            "latitude": 48.696651599999996,
            "longitude": 2.6286118
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logidis+Carrefour+(ID+Logistic+Site+3),+16+Chem.+de+Brie+%C3%A0+Cossigny,+77170+Brie-Comte-Robert/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e607fb60d9f0ad:0x536930cb0aa14e97?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Logidis Carrefour (ID Logistic Site 3)",
        "type": "Service logistique",
        "phone": "01 60 62 67 01",
        "address": "Brie-Comte-Robert"
    },
    {
        "position": 15,
        "rating": 3.7,
        "reviews_original": "(111)",
        "reviews": 111,
        "description": "\"Plate forme logistique\"",
        "place_id": "9006024261020503247",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9006024261020503247&q=logistique+77&start=20",
        "lsig": "AB86z5VkyqnczmotOkejJaH2g6Pb",
        "provider_id": "/g/11b6dfw98c",
        "gps_coordinates": {
            "latitude": 48.6470748,
            "longitude": 2.5460913
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/fr_fr/",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel,+Rue+de+l'Espace+Schengen,+77127+Lieusaint/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e3958a057139:0x7cfbd35974ad4ccf?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel",
        "type": "Service logistique",
        "phone": "01 60 34 26 30",
        "address": "Lieusaint"
    },
    {
        "position": 16,
        "place_id": "12929649999466925694",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12929649999466925694&q=logistique+77&start=20",
        "lsig": "AB86z5WPr_LLDHOaxTJrdWPgDEal",
        "provider_id": "/g/11rv3jtlqd",
        "gps_coordinates": {
            "latitude": 48.990868999999996,
            "longitude": 2.651741
        },
        "links": {
            "website": "https://www.logistics-operations.com/",
            "directions": "https://www.google.fr/maps/dir//Logistics+Operations,+41+Rue+Mercier,+77290+Compans/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6193dcb30c553:0xb36f582b985b0e7e?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Logistics Operations",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Compans",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 17,
        "rating": 3.8,
        "reviews_original": "(114)",
        "reviews": 114,
        "place_id": "12507594016587121221",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12507594016587121221&q=logistique+77&start=20",
        "lsig": "AB86z5UMddz0mvIYVTIQWTMQxL2O",
        "provider_id": "/g/11fwxrp9tp",
        "gps_coordinates": {
            "latitude": 48.7272258,
            "longitude": 2.7310893
        },
        "links": {
            "website": "https://cevalogistics.careers/fr/",
            "directions": "https://www.google.fr/maps/dir//Ceva+Logistics,+77220+Presles-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e601fb666820fb:0xad93e67d717a0245?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Ceva Logistics",
        "type": "Service logistique",
        "address": "Presles-en-Brie"
    },
    {
        "position": 18,
        "rating": 4.3,
        "reviews_original": "(127)",
        "reviews": 127,
        "description": "\"S'est un lieu de logistique magnifique\"",
        "place_id": "6678570186241554394",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6678570186241554394&q=logistique+77&start=20",
        "lsig": "AB86z5V6vQgOPPJqykukf-ufeV9K",
        "provider_id": "/g/11b6_cv172",
        "gps_coordinates": {
            "latitude": 48.8263168,
            "longitude": 2.7271985
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Entrep%C3%B4t+Decathlon+Logistics+Ferri%C3%A8res-en-Brie,+Av.+Joseph+Froelicher,+77164+Ferri%C3%A8res-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60498a2c2c801:0x5caf0c33267137da?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Entrepôt Decathlon Logistics Ferrières-en-Brie",
        "type": "Service logistique",
        "phone": "01 60 94 17 00",
        "address": "Ferrières-en-Brie",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 19,
        "rating": 2.4,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "11331391827693002114",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11331391827693002114&q=logistique+77&start=20",
        "lsig": "AB86z5Ue59NiLyRhhIxbqS7lmwfp",
        "provider_id": "/g/11pf2n082v",
        "gps_coordinates": {
            "latitude": 48.6446548,
            "longitude": 2.8180829999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//DK+LOGISTIQUE,+8+Rue+Denis+Papin,+77390+Verneuil-l'%C3%89tang/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47ef5548d1440013:0x9d4130d4bc67dd82?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "DK LOGISTIQUE",
        "type": "Service logistique",
        "phone": "07 84 24 97 20",
        "address": "Verneuil-l'Étang",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 20,
        "rating": 3.9,
        "reviews_original": "(46)",
        "reviews": 46,
        "place_id": "652595950647551572",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=652595950647551572&q=logistique+77&start=20",
        "lsig": "AB86z5WPi7fcwQBGa7Wc4jjX5tcq",
        "provider_id": "/g/1tfcmn4k",
        "gps_coordinates": {
            "latitude": 48.8709802,
            "longitude": 2.6724314
        },
        "links": {
            "website": "https://agence.aac-globe-express.com/2-aac-globe-express-saint-thibault-des-vignes",
            "directions": "https://www.google.fr/maps/dir//AAC+Globe+Express+Saint+Thibault+des+Vignes,+5+Rue+de+la+Marne,+77400+Saint-Thibault-des-Vignes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61ae87fb872dd:0x90e7c8f3c34a654?sa=X&ved=2ahUKEwilusWxvY6CAxW4STABHRYLBsY4FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "AAC Globe Express Saint Thibault des Vignes",
        "type": "Société de transport routier",
        "phone": "01 60 17 50 98",
        "address": "Saint-Thibault-des-Vignes",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 1,
        "rating": 3.6,
        "reviews_original": "(231)",
        "reviews": 231,
        "place_id": "17073630928255258244",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17073630928255258244&q=logistique+77&start=40",
        "lsig": "AB86z5U7wfJh41206OqOVLj0lrbG",
        "provider_id": "/g/1v_z86v0",
        "gps_coordinates": {
            "latitude": 48.7268386,
            "longitude": 2.8295657999999997
        },
        "links": {
            "website": "http://www.id-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//ID+Logistics+Castorama,+CH%C3%82TRES,+ZAC+du+Val+Br%C3%A9on,+2+Rue+Louis+Renaud,+77610+Ch%C3%A2tres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8aa7cf59e9285:0xecf1b8de88c70e84?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "ID Logistics Castorama, CHÂTRES",
        "type": "Service logistique",
        "phone": "01 64 42 10 40",
        "address": "Châtres"
    },
    {
        "position": 2,
        "rating": 3.9,
        "reviews_original": "(87)",
        "reviews": 87,
        "place_id": "10510800953693581881",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10510800953693581881&q=logistique+77&start=40",
        "lsig": "AB86z5VfI4QSH98EaFPM8e4vvRLK",
        "provider_id": "/g/1tj572tk",
        "gps_coordinates": {
            "latitude": 48.969578,
            "longitude": 2.915107
        },
        "links": {
            "website": "http://www.xn--groupe-barr-lbb.com/",
            "directions": "https://www.google.fr/maps/dir//BLS+-+BARR%C3%89+LOGISTIQUE+SERVICES,+Rue+des+Rochelles,+77470+Poincy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8a1864123b583:0x91ddddc75dbe3239?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "BLS - BARRÉ LOGISTIQUE SERVICES",
        "type": "Service logistique",
        "phone": "01 60 01 80 32",
        "address": "Poincy",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 3,
        "place_id": "8355711861136290136",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8355711861136290136&q=logistique+77&start=40",
        "lsig": "AB86z5UQgLXM12VoBoAm5hqrFT4k",
        "provider_id": "/g/1tfdcslb",
        "gps_coordinates": {
            "latitude": 48.9639737,
            "longitude": 2.9120863999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Crosslog,+7+Rue+des+Fr%C3%A8res+Lumi%C3%A8re,+77100+Meaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8a1786d79b6bd:0x73f573aad08bf158?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Crosslog",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 60 23 22 05",
        "address": "Meaux"
    },
    {
        "position": 4,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "11551436699363163986",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11551436699363163986&q=logistique+77&start=40",
        "lsig": "AB86z5VYbwGbQwjtfnaCJ33uPyW9",
        "provider_id": "/g/11thhkgx76",
        "gps_coordinates": {
            "latitude": 48.8521138,
            "longitude": 2.7861615
        },
        "links": {
            "website": "https://www.ftl-express.com/",
            "directions": "https://www.google.fr/maps/dir//FTL+EXPRESS+77,+3+Cr+de+la+Garonne,+77700+Serris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61dd6ef082699:0xa04ef279d6f3bf52?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "FTL EXPRESS 77",
        "type": "Société de transport international de marchandises",
        "phone": "01 64 17 62 98",
        "address": "Serris",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 5,
        "rating": 3.8,
        "reviews_original": "(27)",
        "reviews": 27,
        "place_id": "16097576657624293069",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16097576657624293069&q=logistique+77&start=40",
        "lsig": "AB86z5V3Ho2lIof3pXWwIX6gDEfa",
        "provider_id": "/g/11b6d3kvqj",
        "gps_coordinates": {
            "latitude": 48.826606700000006,
            "longitude": 2.6388762
        },
        "links": {
            "website": "https://cpi.site-solocal.com/",
            "directions": "https://www.google.fr/maps/dir//CPI+Transports,+4+All.+du+1er+Mai+Za+Parisest,+77183+Croissy-Beaubourg/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6056196222fc5:0xdf6614ae7650decd?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "CPI Transports",
        "type": "Service logistique",
        "phone": "01 64 26 92 40",
        "address": "Croissy-Beaubourg",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 6,
        "rating": 4.5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "5222308615520948542",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5222308615520948542&q=logistique+77&start=40",
        "lsig": "AB86z5UuldloPadjPASJSje6mUPZ",
        "provider_id": "/g/11dz1kcrz1",
        "gps_coordinates": {
            "latitude": 48.865097,
            "longitude": 2.6740987
        },
        "links": {
            "website": "http://www.serviaplus.fr/",
            "directions": "https://www.google.fr/maps/dir//Serviaplus+-+Entreprise+logistique+Ile+de+France,+16+Rue+Paul+Henri+Spaak,+77400+Saint-Thibault-des-Vignes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6055f888ce0f1:0x48795e044f96913e?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Serviaplus - Entreprise logistique Ile de France",
        "type": "Service logistique",
        "phone": "01 60 37 07 77",
        "address": "Saint-Thibault-des-Vignes",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 7,
        "rating": 4.2,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "11079471475612194178",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11079471475612194178&q=logistique+77&start=40",
        "lsig": "AB86z5W4rPSVMihzHYOQgWeByybp",
        "provider_id": "/g/11fkstbn21",
        "gps_coordinates": {
            "latitude": 48.6289978,
            "longitude": 2.5744268
        },
        "links": {
            "website": "http://www.bansard.com/",
            "directions": "https://www.google.fr/maps/dir//Bansard+International+Moissy-Cramayel,+Parc+cantaloup,+2000+RD+57+B%C3%A2timent+2,+77550+Moissy-Cramayel/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e3042d98ab17:0x99c2309b02f01582?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Bansard International Moissy-Cramayel",
        "type": "Service logistique",
        "phone": "01 64 19 22 10",
        "address": "Moissy-Cramayel",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 8,
        "rating": 3.3,
        "reviews_original": "(83)",
        "reviews": 83,
        "description": "\"Super transporteur et personnel sympas\"",
        "place_id": "3104826670057883866",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3104826670057883866&q=logistique+77&start=40",
        "lsig": "AB86z5W6-B_kbHpFIvOSN2F6U-1V",
        "provider_id": "/g/11c5bs_q9k",
        "gps_coordinates": {
            "latitude": 48.7023103,
            "longitude": 2.6182464
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Portmann,+All.+des+Pleus,+77170+Brie-Comte-Robert/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6080ed242d059:0x2b168f6805f588da?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Portmann",
        "type": "Service logistique",
        "address": "Brie-Comte-Robert",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 9,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "9869697646409718196",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9869697646409718196&q=logistique+77&start=40",
        "lsig": "AB86z5VM70VqTDRCa7tyQlehvYKx",
        "provider_id": "/g/1tgs06_s",
        "gps_coordinates": {
            "latitude": 48.8451789,
            "longitude": 2.6061411999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Paolino+Logistique,+51+All.+Robert+Desnos,+77420+Champs-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60fdbd0f91eb9:0x88f835b7aec299b4?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Paolino Logistique",
        "type": "Société de livraison",
        "phone": "01 64 68 92 80",
        "address": "Champs-sur-Marne"
    },
    {
        "position": 10,
        "rating": 3.6,
        "reviews_original": "(352)",
        "reviews": 352,
        "description": "\"Bonne entreprise de transport\"",
        "place_id": "17767118860076423720",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17767118860076423720&q=logistique+77&start=40",
        "lsig": "AB86z5XGCcOXAOd5HYWyRrZ0tkNA",
        "provider_id": "/g/11b6dpmmr2",
        "gps_coordinates": {
            "latitude": 48.8244097,
            "longitude": 2.6177591
        },
        "links": {
            "website": "https://www.dhl.com/fr-fr/home/nos-divisions/fret/nous-contacter.html",
            "directions": "https://www.google.fr/maps/dir//DHL+Freight+France+SAS,+19+Bd+Courcerin,+77185+Lognes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60f94005b7281:0xf6917c7810ff9a28?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "DHL Freight France SAS",
        "type": "Service logistique",
        "phone": "0 806 00 99 50",
        "address": "Lognes",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 11,
        "place_id": "789785061350378993",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=789785061350378993&q=logistique+77&start=40",
        "lsig": "AB86z5UVX0VyVzdMsgbDxoOIJkhG",
        "provider_id": "/g/11pcrvk6r9",
        "gps_coordinates": {
            "latitude": 48.642327200000004,
            "longitude": 2.5436692
        },
        "links": {
            "website": "https://www.stef.com/",
            "directions": "https://www.google.fr/maps/dir//STEF+Lieusaint,+Boulevard+d'Espagne+ZAC+des+Hauldres+Paris+Sud+2,+77127+Lieusaint/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e37ab5e4ff5d:0xaf5e1542eb30df1?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "STEF Lieusaint",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Lieusaint",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 12,
        "rating": 4.3,
        "reviews_original": "(25)",
        "reviews": 25,
        "place_id": "15943569449580440707",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15943569449580440707&q=logistique+77&start=40",
        "lsig": "AB86z5VP2lqGeQblFAcG0J5LNXXz",
        "provider_id": "/g/11gy0tnhvn",
        "gps_coordinates": {
            "latitude": 49.031861899999996,
            "longitude": 2.8040388
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Perez+Logistique,+Av.+du+Montboulon,+77165+Saint-Soupplets/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6205ac1e92cc7:0xdd42eff116032c83?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Perez Logistique",
        "type": "Société de livraison",
        "address": "Saint-Soupplets",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 13,
        "rating": 3.6,
        "reviews_original": "(79)",
        "reviews": 79,
        "place_id": "13410164444719640580",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13410164444719640580&q=logistique+77&start=40",
        "lsig": "AB86z5UYZss8mv8agkvW9IJys18O",
        "provider_id": "/g/1tkbxjf6",
        "gps_coordinates": {
            "latitude": 49.021448,
            "longitude": 2.5952777
        },
        "links": {
            "website": "http://www.sedlogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Sed,+35+Rue+de+Guivry,+77990+Le+Mesnil-Amelot/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e63d858273fcbf:0xba1a79832b167004?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Sed",
        "type": "Service logistique",
        "phone": "01 60 54 55 70",
        "address": "Le Mesnil-Amelot",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 14,
        "rating": 5,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "17525446363081502060",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17525446363081502060&q=logistique+77&start=40",
        "lsig": "AB86z5XjtKBhNEcgkOykRKdOsdCP",
        "provider_id": "/g/11p5tg6g54",
        "gps_coordinates": {
            "latitude": 49.031233199999996,
            "longitude": 2.8026312000000004
        },
        "links": {
            "website": "https://bougeardlogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Bougeard+Logistique,+19+Av.+du+Montboulon,+77165+Saint-Soupplets/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6213a8ce1b27b:0xf336e49d09a26d6c?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Bougeard Logistique",
        "type": "Service logistique",
        "phone": "01 60 01 49 80",
        "address": "Saint-Soupplets",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 15,
        "rating": 4.6,
        "reviews_original": "(23)",
        "reviews": 23,
        "place_id": "9434572425680537922",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9434572425680537922&q=logistique+77&start=40",
        "lsig": "AB86z5XbveNz-fTtJoJwJ1ovKKQo",
        "provider_id": "/g/11gdkwygm0",
        "gps_coordinates": {
            "latitude": 48.7396202,
            "longitude": 2.7826812
        },
        "links": {
            "website": "http://www.transports-charvin.eu/",
            "directions": "https://www.google.fr/maps/dir//Charvin+Logistique,+11+Rue+Auguste+Perdonnet,+77220+Tournan-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e601b8def87af3:0x82ee55a278624942?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Charvin Logistique",
        "type": "Société de transport routier",
        "phone": "01 87 30 00 50",
        "address": "Tournan-en-Brie"
    },
    {
        "position": 16,
        "rating": 3.4,
        "reviews_original": "(175)",
        "reviews": 175,
        "place_id": "16109229479819149095",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16109229479819149095&q=logistique+77&start=40",
        "lsig": "AB86z5XFs5505Xdt1wkI_lDZjhk_",
        "provider_id": "/g/1tf23cv6",
        "gps_coordinates": {
            "latitude": 48.9902381,
            "longitude": 2.6554078999999997
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "https://www.warning.fr/",
            "directions": "https://www.google.fr/maps/dir//Warning%2B+Compans,+41+rue+Ernest+Mercier,+77290+Compans/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61789d4542e05:0xdf8f7adc8ddeff27?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Warning+ Compans",
        "type": "Service logistique",
        "address": "Compans",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 17,
        "rating": 3.6,
        "reviews_original": "(137)",
        "reviews": 137,
        "place_id": "14796996234250231830",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14796996234250231830&q=logistique+77&start=40",
        "lsig": "AB86z5UEfM7Kpb_I1UFbjJcav_XZ",
        "provider_id": "/g/1tlwdyxd",
        "gps_coordinates": {
            "latitude": 48.9840782,
            "longitude": 2.6526408
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/fr_fr/",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel,+4+Rue+Albert+Caquot,+77290+Mitry-Mory/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61826e28d9ed1:0xcd597dad5d472016?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel",
        "type": "Service logistique",
        "phone": "01 60 21 21 21",
        "address": "Mitry-Mory"
    },
    {
        "position": 18,
        "rating": 3.3,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "11879127809401836249",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11879127809401836249&q=logistique+77&start=40",
        "lsig": "AB86z5X6afqZzxDZ8iUeiVHBBrm0",
        "provider_id": "/g/11h7bj8d75",
        "gps_coordinates": {
            "latitude": 48.9446295,
            "longitude": 2.8580573
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Vital+Froid,+415+Rue+Henri+de+France,+Villenoy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61ba17a0a3541:0xa4db23cde8dc52d9?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Vital Froid",
        "type": "Société de transport routier",
        "phone": "01 64 67 86 00",
        "address": "Villenoy",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 19,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "9900321449839504434",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9900321449839504434&q=logistique+77&start=40",
        "lsig": "AB86z5V5ERm6nQlxyQj8GDTqiSRH",
        "gps_coordinates": {
            "latitude": 48.838371200000005,
            "longitude": 2.8013732
        },
        "links": {
            "website": "http://kerlam.fr/"
        },
        "title": "KERLAM",
        "type": "Société de transport routier",
        "phone": "07 64 16 22 22"
    },
    {
        "position": 20,
        "rating": 3.7,
        "reviews_original": "(18)",
        "reviews": 18,
        "place_id": "9900393860045729170",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9900393860045729170&q=logistique+77&start=40",
        "lsig": "AB86z5UFn8oZEJy60oYTKwlD3GdB",
        "provider_id": "/g/11jjw39c0m",
        "gps_coordinates": {
            "latitude": 48.83837,
            "longitude": 2.8013732
        },
        "links": {
            "website": "http://www.dgroupe.fr/index.php",
            "directions": "https://www.google.fr/maps/dir//Distrilog+%2F+Distritec+%2F+Distridirect,+6+Av.+Johannes+Gutenberg+B%C3%A2timent+Goodman,+77700+Bailly-Romainvilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e603af8814f6cd:0x896543c2dc7bed92?sa=X&ved=2ahUKEwizuq-yvY6CAxU_D1kFHeyiB_E4KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Distrilog / Distritec / Distridirect",
        "type": "Service logistique",
        "address": "Bailly-Romainvilliers",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 1,
        "rating": 4,
        "reviews_original": "(13)",
        "reviews": 13,
        "description": "\"Bonne société logistique.\"",
        "place_id": "10200273828938979100",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10200273828938979100&q=logistique+77&start=60",
        "lsig": "AB86z5Xu91ChLBKJMR66jq9V_d5y",
        "provider_id": "/g/11hdq8qc42",
        "gps_coordinates": {
            "latitude": 48.8726196,
            "longitude": 2.6713726
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ARC,+9+Rue+de+la+Marne,+77400+Saint-Thibault-des-Vignes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61b88e83f1921:0x8d8ea701099f171c?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "ARC",
        "type": "Société de transport routier",
        "address": "Saint-Thibault-des-Vignes"
    },
    {
        "position": 2,
        "rating": 3.8,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "10484445387865324203",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10484445387865324203&q=logistique+77&start=60",
        "lsig": "AB86z5Xe67XbnGHP-EpJEjAKof8i",
        "provider_id": "/g/11j4sqyhpj",
        "gps_coordinates": {
            "latitude": 48.232685,
            "longitude": 2.7060874999999998
        },
        "links": {
            "website": "http://www.jokerlog.fr/",
            "directions": "https://www.google.fr/maps/dir//Joker+Log+Bagneaux+1,+6+Rue+du+G%C3%A2tinais,+77167+Bagneaux-sur-Loing/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e58946bd10c7e5:0x91803b8802b1faab?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Joker Log Bagneaux 1",
        "type": "Service logistique",
        "phone": "01 64 78 06 74",
        "address": "Bagneaux-sur-Loing",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 3,
        "rating": 4.2,
        "reviews_original": "(38)",
        "reviews": 38,
        "place_id": "6314740756778802640",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6314740756778802640&q=logistique+77&start=60",
        "lsig": "AB86z5VY_1Y8ovNQyNM5EwmFDXUP",
        "provider_id": "/g/1hc12jscv",
        "gps_coordinates": {
            "latitude": 48.980701499999995,
            "longitude": 2.6468388999999997
        },
        "links": {
            "website": "http://www.lamaisondusol.com/",
            "directions": "https://www.google.fr/maps/dir//LMS+Mitry+Mory+-+La+Maison+du+Sol,+ZI+de+Compans,+5+Rue+Isaac+Newton+3,+77290+Mitry-Mory/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6178880ed608b:0x57a27742e87b5dd0?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "LMS Mitry Mory - La Maison du Sol",
        "type": "Service logistique",
        "address": "Mitry-Mory",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 4,
        "rating": 3.1,
        "reviews_original": "(187)",
        "reviews": 187,
        "description": "\"Je recommande ce service à toutes les plates-formes logistique.\"",
        "place_id": "16687579037574227563",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16687579037574227563&q=logistique+77&start=60",
        "lsig": "AB86z5X0zNYGF5krpLz9wBwSarN7",
        "provider_id": "/g/11g_qmkwzs",
        "gps_coordinates": {
            "latitude": 48.735119,
            "longitude": 2.7889763999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Entrep%C3%B4t+Conforama,+2+Rte+de+Fontenay,+77220+Tournan-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e601967e80d647:0xe79630b857dde66b?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Entrepôt Conforama",
        "type": "Service logistique",
        "address": "Ouvert actuellement"
    },
    {
        "position": 5,
        "rating": 3.4,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "15895546851354390563",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15895546851354390563&q=logistique+77&start=60",
        "lsig": "AB86z5V4S-irfxNYaTJtQc8gdH94",
        "provider_id": "/g/1th232sr",
        "gps_coordinates": {
            "latitude": 48.9919011,
            "longitude": 2.6506912
        },
        "links": {
            "website": "https://www.leroylogistique.com/",
            "directions": "https://www.google.fr/maps/dir//Le+Roy+Logistique+Mitry,+16+Rue+Jean+Mermoz+z.a.c.+de+la+feuch%C3%A8re,+77290+Compans/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6181e27214427:0xdc9853a4a18eb023?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Le Roy Logistique Mitry",
        "type": "Société de livraison",
        "phone": "01 60 27 12 70",
        "address": "Compans",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 6,
        "rating": 3.7,
        "reviews_original": "(87)",
        "reviews": 87,
        "place_id": "9759731761436677461",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9759731761436677461&q=logistique+77&start=60",
        "lsig": "AB86z5XUkK3Vh2Atxvwht4KyR9Fa",
        "provider_id": "/g/11c60fr10_",
        "gps_coordinates": {
            "latitude": 48.8166185,
            "longitude": 2.6156032
        },
        "links": {
            "website": "http://www.dgroupe.fr/ServicesDistritec.php",
            "directions": "https://www.google.fr/maps/dir//Distritec,+37+Bd+de+Beaubourg,+77184+%C3%89merainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60f996b2ce659:0x87718853e787d555?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Distritec",
        "type": "Service logistique",
        "phone": "01 64 61 81 91",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 7,
        "place_id": "11163965122124618706",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11163965122124618706&q=logistique+77&start=60",
        "lsig": "AB86z5UXgSIDkh_ndg0QE7oZjld2",
        "provider_id": "/g/11btm8vk52",
        "gps_coordinates": {
            "latitude": 48.8182499,
            "longitude": 3.0879767
        },
        "links": {
            "website": "http://interfretexpress.fr/",
            "directions": "https://www.google.fr/maps/dir//Interfret+Express,+16+Av.+Jehan+de+Brie,+77120+Aulnoy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8b0caac905065:0x9aee5f211d169bd2?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Interfret Express",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "01 64 75 01 32",
        "address": "Aulnoy"
    },
    {
        "position": 8,
        "place_id": "2537152805107310436",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2537152805107310436&q=logistique+77&start=60",
        "lsig": "AB86z5V0pc0kSl8AtEeSL_8GgM9W",
        "provider_id": "/g/11q252d9f7",
        "gps_coordinates": {
            "latitude": 48.8248636,
            "longitude": 2.7247453
        },
        "links": {
            "website": "https://www.germondgrossisteprint.fr/",
            "directions": "https://www.google.fr/maps/dir//Germond+Grossiste+Partenaire+-+Plateforme+Logistique,+ZAC+de+Bel+Air,+17+Av.+Joseph+Froelicher,+77164+Ferri%C3%A8res-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6058773568d6f:0x2335c708a94e9f64?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Germond Grossiste Partenaire - Plateforme Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 60 54 66 77",
        "address": "Ferrières-en-Brie",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 9,
        "rating": 3.4,
        "reviews_original": "(122)",
        "reviews": 122,
        "description": "\"Parfois un peu d'attente, ouvre tard pour une société de logistique\"",
        "place_id": "16889344270992279415",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16889344270992279415&q=logistique+77&start=60",
        "lsig": "AB86z5Xezi_WRGEeS5P5dBbzGF16",
        "provider_id": "/g/1tdkw_n7",
        "gps_coordinates": {
            "latitude": 48.966538899999996,
            "longitude": 2.9164483999999997
        },
        "links": {
            "website": "http://www.daher.com/",
            "directions": "https://www.google.fr/maps/dir//Daher,+40+Av.+de+Meaux,+77470+Poincy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8a22a7fa6ec9b:0xea63012181c60777?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Daher",
        "type": "Société de transport routier",
        "phone": "01 60 44 49 40",
        "address": "Poincy",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 10,
        "rating": 4.3,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "11376384514350843924",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11376384514350843924&q=logistique+77&start=60",
        "lsig": "AB86z5X6D6h04xmO_N2T9eMO_HHw",
        "provider_id": "/g/11g8ktm14j",
        "gps_coordinates": {
            "latitude": 48.73207,
            "longitude": 2.7348708
        },
        "links": {
            "website": "http://www.aldi.fr/",
            "directions": "https://www.google.fr/maps/dir//Leader+Price+Distribution,+17+Av.+Amp%C3%A8re,+77220+Gretz-Armainvilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60123df114a67:0x9de10970ee230814?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Leader Price Distribution",
        "type": "Service logistique",
        "address": "Gretz-Armainvilliers",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 11,
        "rating": 3.4,
        "reviews_original": "(122)",
        "reviews": 122,
        "place_id": "1480930866034657321",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1480930866034657321&q=logistique+77&start=60",
        "lsig": "AB86z5W1k7q25btwjrMfeNyNjJB_",
        "provider_id": "/g/1hm4cym60",
        "gps_coordinates": {
            "latitude": 48.832833099999995,
            "longitude": 2.6991560999999997
        },
        "links": {
            "website": "https://groupe-bbl.com/",
            "directions": "https://www.google.fr/maps/dir//BBL+TRANSPORT+PARIS+BUSSY+77,+35+Av.+Graham+Bell+CS+20766,+77608+Bussy-Saint-Georges+Cedex/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e604c6ca888997:0x148d52c6bee84829?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "BBL TRANSPORT PARIS BUSSY 77",
        "type": "Service de transport",
        "phone": "01 79 94 82 00",
        "address": "Bussy-Saint-Georges",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 12,
        "rating": 1,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "4695967317552283577",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4695967317552283577&q=logistique+77&start=60",
        "lsig": "AB86z5X8-ThknAn9m0fiNYp9A_Gp",
        "provider_id": "/g/11q962jsxd",
        "gps_coordinates": {
            "latitude": 48.8136726,
            "longitude": 2.9850156
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//H2l+logistique,+Rue+Etienne+de+Montgolfier,+77515+Pommeuse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8afdf82175bf5:0x412b6d651f8c3fb9?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "H2l logistique",
        "type": "Entrepôt",
        "address": "Pommeuse"
    },
    {
        "position": 13,
        "rating": 4.2,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "6727849343391470135",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6727849343391470135&q=logistique+77&start=60",
        "lsig": "AB86z5VryZ2N7mV_ql9slr14lY1x",
        "provider_id": "/g/11n__wwbxt",
        "gps_coordinates": {
            "latitude": 48.8311042,
            "longitude": 2.7153386999999998
        },
        "links": {
            "website": "http://www.bomigroup.com/",
            "directions": "https://www.google.fr/maps/dir//BOMI+FRANCE,+6+Av.+de+l'Europe,+77600+Bussy-Saint-Georges/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6054671633685:0x5d5e1f5507319237?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "BOMI FRANCE",
        "type": "Service logistique",
        "phone": "01 86 33 05 21",
        "address": "Bussy-Saint-Georges",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 14,
        "rating": 3.7,
        "reviews_original": "(41)",
        "reviews": 41,
        "description": "\"Retrait marchandise dans le dépôt la responsable et super sympathique .😎\"",
        "place_id": "11805019471875001875",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11805019471875001875&q=logistique+77&start=60",
        "lsig": "AB86z5VPmAtE5yanSQo9JJofdhVc",
        "provider_id": "/g/11bzv3_l4s",
        "gps_coordinates": {
            "latitude": 48.535594499999995,
            "longitude": 2.6914066
        },
        "links": {
            "website": "https://geodis.com/fr/activite/distribution-et-express",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Distribution+%26+Express,+495+Rue+des+3+Tilleuls,+77000+Vaux-le-P%C3%A9nil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5fa049ae71f63:0xa3d3daa9fbadce13?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Distribution & Express",
        "type": "Service logistique",
        "phone": "0 892 05 28 28",
        "address": "Vaux-le-Pénil",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 15,
        "rating": 3.7,
        "reviews_original": "(21)",
        "reviews": 21,
        "place_id": "4401193668384117218",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4401193668384117218&q=logistique+77&start=60",
        "lsig": "AB86z5Vbh0J53sTuXbRQ0-GIfeGD",
        "provider_id": "/g/11sy1h_sws",
        "gps_coordinates": {
            "latitude": 48.7273673,
            "longitude": 2.8417760999999997
        },
        "links": {
            "website": "http://www.rhenus.group/fr/en",
            "directions": "https://www.google.fr/maps/dir//Rhenus+Logistics+-+Ch%C3%A2tres,+Avenue+Louis+Renault+Batiment+6+ZAC+du+Val+Br%C3%A9on,+77610+Ch%C3%A2tres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8ab86b95e7347:0x3d142e52a7bbd1e2?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Rhenus Logistics - Châtres",
        "type": "Service logistique",
        "phone": "04 74 94 60 00",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 16,
        "rating": 4.2,
        "reviews_original": "(60)",
        "reviews": 60,
        "place_id": "441577276440005706",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=441577276440005706&q=logistique+77&start=60",
        "lsig": "AB86z5Xw6KJ-yfoLzlddyW6KzT34",
        "provider_id": "/g/1vk6yjzv",
        "gps_coordinates": {
            "latitude": 48.964533599999996,
            "longitude": 2.9066817
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Vandemoortele+(Panalog),+5+Rue+Isaac+Newton,+77100+Meaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8a177ccce796f:0x620cc317f174c4a?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Vandemoortele (Panalog)",
        "type": "Société de transport routier",
        "phone": "01 60 09 69 00",
        "address": "Meaux"
    },
    {
        "position": 17,
        "place_id": "7798825133268357905",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7798825133268357905&q=logistique+77&start=60",
        "lsig": "AB86z5VZCipOFu2ejaVsHWVAKbB2",
        "provider_id": "/g/11hd6zgskn",
        "gps_coordinates": {
            "latitude": 48.382412099999996,
            "longitude": 3.0213229999999998
        },
        "links": {
            "website": "http://www.tlr.fr/",
            "directions": "https://www.google.fr/maps/dir//TLR,+6+Rue+de+la+Croix+Saint-Jacques,+77130+Marolles-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47ef423f0e55274f:0x6c3afe2385d95311?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "TLR",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 60 57 56 56",
        "address": "Marolles-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 18,
        "rating": 3.4,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "2929543417663754090",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2929543417663754090&q=logistique+77&start=60",
        "lsig": "AB86z5WBras2YEZlb_5096QCzNrL",
        "provider_id": "/g/11f4ldz39v",
        "gps_coordinates": {
            "latitude": 48.8283977,
            "longitude": 2.6370785999999997
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/fr_fr/",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel,+All.+du+1er+Mai,+77183+Croissy-Beaubourg/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6056042d7c8ad:0x28a7d4378bee8f6a?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel",
        "type": "Service logistique",
        "address": "Croissy-Beaubourg"
    },
    {
        "position": 19,
        "rating": 4.3,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "9502594749470267677",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9502594749470267677&q=logistique+77&start=60",
        "lsig": "AB86z5UAgTV73pVCOVQsLCx4D12g",
        "provider_id": "/g/11d_8c9tks",
        "gps_coordinates": {
            "latitude": 49.0319268,
            "longitude": 2.6848348
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//goodman+logistic,+77230+Saint-Mard/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e622ece682e03d:0x83dfff93e6aad91d?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "goodman logistic",
        "type": "Service logistique",
        "address": "Saint-Mard"
    },
    {
        "position": 20,
        "rating": 2.9,
        "reviews_original": "(223)",
        "reviews": 223,
        "place_id": "15707466937760659433",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15707466937760659433&q=logistique+77&start=60",
        "lsig": "AB86z5VIgg664NYreRo1YUUw6TrC",
        "provider_id": "/g/11bbt5j57_",
        "gps_coordinates": {
            "latitude": 48.8908233,
            "longitude": 2.5992538000000005
        },
        "links": {
            "website": "https://www.viapost.fr/",
            "directions": "https://www.google.fr/maps/dir//VIAPOST,+ZAE+DE+LA+TUILERIE,+2+Rue+des+Nonettes,+77500+Chelles/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e610ff5764beef:0xd9fc21f54a6ab7e9?sa=X&ved=2ahUKEwis1JazvY6CAxX7nWoFHdaUAg84PBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "VIAPOST",
        "type": "Service logistique",
        "phone": "01 64 26 87 00",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 1,
        "rating": 3.6,
        "reviews_original": "(28)",
        "reviews": 28,
        "place_id": "15113497682075743292",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15113497682075743292&q=logistique+77&start=80",
        "lsig": "AB86z5Uu5f5FUQ2wR60jerXWLADP",
        "provider_id": "/g/11gfdl6pr7",
        "gps_coordinates": {
            "latitude": 48.8688323,
            "longitude": 2.6754919
        },
        "links": {
            "website": "https://www.viapost.fr/",
            "directions": "https://www.google.fr/maps/dir//VIAPOST,+8+Av.+de+la+Courtilli%C3%A8re,+77400+Saint-Thibault-des-Vignes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61ae780473b3b:0xd1bdee112dd0743c?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "VIAPOST",
        "type": "Service logistique",
        "phone": "01 60 36 00 10",
        "address": "Saint-Thibault-des-Vignes",
        "hours": "Ouvert ⋅ Ferme à 05:00 mer."
    },
    {
        "position": 2,
        "rating": 3.7,
        "reviews_original": "(63)",
        "reviews": 63,
        "place_id": "7412545157414134788",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7412545157414134788&q=logistique+77&start=80",
        "lsig": "AB86z5XWEWVozVaCR2Ns1NVkqiwa",
        "provider_id": "/g/1ts1rjml",
        "gps_coordinates": {
            "latitude": 48.735006399999996,
            "longitude": 2.7806599999999997
        },
        "links": {
            "website": "https://transports-caillot.fr/",
            "directions": "https://www.google.fr/maps/dir//Transports+Caillot,+4+Rue+de+l'Industrie,+77220+Tournan-en-Brie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e601b7678e6e35:0x66dea68c1d362404?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "Transports Caillot",
        "type": "Société de transport routier",
        "phone": "01 64 42 13 50",
        "address": "Tournan-en-Brie"
    },
    {
        "position": 3,
        "rating": 4.1,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "15746448480227734733",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15746448480227734733&q=logistique+77&start=80",
        "lsig": "AB86z5UT8qfgA356FK-1ExjN920R",
        "provider_id": "/g/11c54d5d_9",
        "gps_coordinates": {
            "latitude": 48.8435966,
            "longitude": 2.6605984
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//G+S+A+Global,+8-14+Rue+des+Epinettes,+77200+Bussy-Saint-Martin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6053612e78ab9:0xda869f76e9f6b4cd?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "G S A Global",
        "type": "Service logistique",
        "address": "Bussy-Saint-Martin",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 4,
        "rating": 3.8,
        "reviews_original": "(90)",
        "reviews": 90,
        "description": "\"Bonjour c est un entrepôt logistique\"",
        "place_id": "15646694341213661959",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15646694341213661959&q=logistique+77&start=80",
        "lsig": "AB86z5VrUwD7rlSdIjCNFwRFg4Nr",
        "provider_id": "/g/11f00crn7q",
        "gps_coordinates": {
            "latitude": 48.7263948,
            "longitude": 2.8295623
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Castorama+-+Delivery,+77610+Ch%C3%A2tres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8aa5fc4e15921:0xd924399a8527ab07?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Castorama - Delivery",
        "type": "Service logistique",
        "address": "Châtres"
    },
    {
        "position": 5,
        "rating": 3.6,
        "reviews_original": "(106)",
        "reviews": 106,
        "description": "\"Très bonne expérience logistique, bravo aux employés de Sézanne...\"",
        "place_id": "6977902476921013328",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6977902476921013328&q=logistique+77&start=80",
        "lsig": "AB86z5WWuLmU7v5WH0pesv2h6Cgg",
        "provider_id": "/g/1tqf_nmq",
        "gps_coordinates": {
            "latitude": 48.7273711,
            "longitude": 2.8222601
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/fr_fr/",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel-+B%C3%A2timent+1,+Zone+d'am%C3%A9nagement+concert%C3%A9+Val+Breon,+77610+Ch%C3%A2tres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8aa7cf59e9285:0x60d67d550e320450?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel- Bâtiment 1",
        "type": "Service logistique",
        "phone": "01 64 07 91 66",
        "address": "Châtres",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 6,
        "rating": 3.5,
        "reviews_original": "(218)",
        "reviews": 218,
        "place_id": "8283307849332326605",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8283307849332326605&q=logistique+77&start=80",
        "lsig": "AB86z5Vw_xQPXLpDNnOe-BDTXBrp",
        "provider_id": "/g/11hzfcm1vp",
        "gps_coordinates": {
            "latitude": 48.8354504,
            "longitude": 2.7884330999999998
        },
        "links": {
            "website": "https://www.dbschenker.com/fr-fr",
            "directions": "https://www.google.fr/maps/dir//DB+SCHENKER,+Zac+du+Couternois,+3+Av.+Louise-Am%C3%A9lie+Leblois,+77700+Serris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e603c350aca5f3:0x72f4389a24a880cd?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "DB SCHENKER",
        "type": "Service logistique",
        "phone": "01 61 10 78 20",
        "address": "Serris",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 7,
        "rating": 1.9,
        "reviews_original": "(65)",
        "reviews": 65,
        "place_id": "10155558772398746334",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10155558772398746334&q=logistique+77&start=80",
        "lsig": "AB86z5UfOiKQPlsDalCqlCtVUQwq",
        "provider_id": "/g/11f62h4zw0",
        "gps_coordinates": {
            "latitude": 48.870731299999996,
            "longitude": 2.6758959
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Neolog+%22saint+Thibault+%22,+8+Av.+de+la+Courtilli%C3%A8re,+77400+Saint-Thibault-des-Vignes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61add7fe07517:0x8cefcae5a46deade?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Neolog \"saint Thibault \"",
        "type": "Service logistique",
        "address": "Saint-Thibault-des-Vignes",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 8,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "12296837005630978492",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12296837005630978492&q=logistique+77&start=80",
        "lsig": "AB86z5VGweOCRUerfYSNHkiFQvET",
        "provider_id": "/g/11fsmtwtmk",
        "gps_coordinates": {
            "latitude": 48.837396,
            "longitude": 2.782129
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Auchan+Retail+Logistique,+4+Av.+Bernard+de+Jussieu,+77700+Serris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e602d06cef1191:0xaaa7241aed8339bc?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Auchan Retail Logistique",
        "type": "Service logistique",
        "address": "Serris",
        "hours": "Fermé temporairement"
    },
    {
        "position": 9,
        "rating": 4.1,
        "reviews_original": "(45)",
        "reviews": 45,
        "place_id": "12199762666675765384",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12199762666675765384&q=logistique+77&start=80",
        "lsig": "AB86z5Wv2K2x6b-d6KKnV-anObEX",
        "provider_id": "/g/11c1s_9rlk",
        "gps_coordinates": {
            "latitude": 48.7008178,
            "longitude": 2.6115212999999997
        },
        "links": {
            "website": "http://psp-transports.fr/",
            "directions": "https://www.google.fr/maps/dir//PSP+Transports,+24+All.+des+Ormeteaux,+77170+Brie-Comte-Robert/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e608101f460af9:0xa94e43821b480088?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "PSP Transports",
        "type": "Siège social",
        "phone": "01 60 29 40 73",
        "address": "Brie-Comte-Robert",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 10,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "17889750685561425523",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17889750685561425523&q=logistique+77&start=80",
        "lsig": "AB86z5XScWI31trBbNgcn-Hs2RoX",
        "provider_id": "/g/11twk6cm_q",
        "gps_coordinates": {
            "latitude": 48.9696265,
            "longitude": 2.9150845999999997
        },
        "links": {
            "website": "https://www.dsv.com/fr-fr/",
            "directions": "https://www.google.fr/maps/dir//DSV,+1+Rue+des+Rochelles,+77470+Poincy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8a1beee0590af:0xf8452976ed308e73?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "DSV",
        "type": "Service logistique",
        "phone": "0 800 00 51 93",
        "address": "Poincy",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 11,
        "rating": 4.1,
        "reviews_original": "(16)",
        "reviews": 16,
        "place_id": "4962540909197993495",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4962540909197993495&q=logistique+77&start=80",
        "lsig": "AB86z5Un6WPLKcCUrRgRumUuXKff",
        "provider_id": "/g/11nygt7r1_",
        "gps_coordinates": {
            "latitude": 48.8284988,
            "longitude": 2.6368055
        },
        "links": {
            "website": "https://www.malherbe.fr/",
            "directions": "https://www.google.fr/maps/dir//MALHERBE,+23+All.+du+1er+Mai,+77183+Croissy-Beaubourg/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6056d868e6527:0x44de7caa0c172617?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "MALHERBE",
        "type": "Service de transport",
        "phone": "02 31 71 30 30",
        "address": "Croissy-Beaubourg"
    },
    {
        "position": 12,
        "rating": 3.3,
        "reviews_original": "(363)",
        "reviews": 363,
        "description": "\"Service logistique de haute qualité.\"",
        "place_id": "6637954155200629396",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6637954155200629396&q=logistique+77&start=80",
        "lsig": "AB86z5W0ndPR-pe7MOQmtNDkreZD",
        "provider_id": "/g/11gf9ds_7g",
        "gps_coordinates": {
            "latitude": 48.979147999999995,
            "longitude": 2.6360546
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Dhl+Mitry+Mory+Metro+Cash,+2+Rue+Marie+Curie,+77290+Mitry-Mory/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6179ae8971171:0x5c1ec022800fca94?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Dhl Mitry Mory Metro Cash",
        "type": "Service logistique",
        "phone": "06 29 78 00 00",
        "address": "Mitry-Mory"
    },
    {
        "position": 13,
        "rating": 3.3,
        "reviews_original": "(156)",
        "reviews": 156,
        "description": "\"Je suis venu retirer un colis.\"",
        "place_id": "18209346798490607474",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18209346798490607474&q=logistique+77&start=80",
        "lsig": "AB86z5XAa_JLIoGMxA05xkGFkatm",
        "provider_id": "/g/1tfn20kn",
        "gps_coordinates": {
            "latitude": 48.830425,
            "longitude": 2.671484
        },
        "links": {
            "website": "https://geodis.com/fr/activite/distribution-et-express",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Distribution+%26+Express,+33+All.+du+Clos+des+Charmes,+77615/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60522f314696b:0xfcb4986f9beddf72?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Distribution & Express",
        "type": "Service logistique",
        "phone": "0 892 05 28 28",
        "address": "33 All. du Clos des Charmes",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 14,
        "rating": 2.8,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "1409506727111736126",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1409506727111736126&q=logistique+77&start=80",
        "lsig": "AB86z5WaxcD0ffkn_RQrUAjvplcR",
        "provider_id": "/g/11swmvbxhx",
        "gps_coordinates": {
            "latitude": 48.994201999999994,
            "longitude": 2.6504125
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Sas+Easysent,+Zac+de+la+Feuch%C3%A8re,+8+Rue+Jean+Mermoz+B%C3%A2timent+9,+77290+Compans/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e617446d1f0c65:0x138f92e68204bb3e?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Sas Easysent",
        "type": "Service logistique",
        "phone": "01 55 85 84 98",
        "address": "Compans",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 15,
        "rating": 4.1,
        "reviews_original": "(157)",
        "reviews": 157,
        "place_id": "11132463239691578659",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11132463239691578659&q=logistique+77&start=80",
        "lsig": "AB86z5Vey6kpiSXy_WvBHeL7SiEg",
        "provider_id": "/g/1tdzw034",
        "gps_coordinates": {
            "latitude": 48.934252099999995,
            "longitude": 2.6668355
        },
        "links": {
            "website": "http://www.delisle-sa.com/",
            "directions": "https://www.google.fr/maps/dir//Delisle+Logistique,+Rte+de+Chelles,+77410+Claye-Souilly/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e619f4b582ca93:0x9a7e74558ce92d23?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Delisle Logistique",
        "type": "Service logistique",
        "phone": "01 60 26 59 80",
        "address": "Claye-Souilly",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 16,
        "rating": 3.8,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "5287713067606974491",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5287713067606974491&q=logistique+77&start=80",
        "lsig": "AB86z5XdVg1uFCMst6nf6hXcBos-",
        "provider_id": "/g/11h7cl_hlw",
        "gps_coordinates": {
            "latitude": 48.4625567,
            "longitude": 2.7030439
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//LOGISTO,+ZAC+les,+Rue+des+Marchais,+77590+Bois-le-Roi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5f73c8c2068d3:0x4961bb04fce7a01b?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "LOGISTO",
        "type": "Service logistique",
        "address": "Bois-le-Roi",
        "hours": "Fermé temporairement"
    },
    {
        "position": 17,
        "rating": 4.8,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "16602798945445588653",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16602798945445588653&q=logistique+77&start=80",
        "lsig": "AB86z5VL7-Nicy67qo_t2N2hz_7Y",
        "provider_id": "/g/11c57jt6_5",
        "gps_coordinates": {
            "latitude": 48.8661941,
            "longitude": 3.2327876
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//O.C.A.I,+31+La+Boy%C3%A8re,+77510+Rebais/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8c6528d5c52a1:0xe668fdacec83aead?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "O.C.A.I",
        "type": "Service logistique",
        "address": "Rebais"
    },
    {
        "position": 18,
        "rating": 3.9,
        "reviews_original": "(15)",
        "reviews": 15,
        "place_id": "3166236280796846882",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3166236280796846882&q=logistique+77&start=80",
        "lsig": "AB86z5Wt1RKqA-zP8a-Q6xdwCkUK",
        "provider_id": "/g/11ghpp302h",
        "gps_coordinates": {
            "latitude": 48.7350709,
            "longitude": 2.7304538999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistic+26,+16+Rue+Gustave+Eiffel,+77220+Gretz-Armainvilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6012503eae301:0x2bf0bb1f37d99b22?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Logistic 26",
        "type": "Entrepôt",
        "phone": "01 64 42 82 55",
        "address": "Gretz-Armainvilliers",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 19,
        "rating": 4.2,
        "reviews_original": "(283)",
        "reviews": 283,
        "description": "\"Chargement chez delisle logistique ici sur rdv.\"",
        "place_id": "13001006904587764144",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13001006904587764144&q=logistique+77&start=80",
        "lsig": "AB86z5VBzXaP-Bj5UdsvJRBMFEm7",
        "provider_id": "/g/11btm7nsb0",
        "gps_coordinates": {
            "latitude": 48.777390499999996,
            "longitude": 3.2950052999999997
        },
        "links": {
            "website": "http://www.delisle-sa.com/",
            "directions": "https://www.google.fr/maps/dir//Delisle+SAS,+BP25+Anc.+Chem.+de+Provins,+77320+La+Fert%C3%A9-Gaucher/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e8cef2204c6895:0xb46cdae5be5ac1b0?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Delisle SAS",
        "type": "Société de transport routier",
        "phone": "01 64 75 88 88",
        "address": "La Ferté-Gaucher",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 20,
        "rating": 3.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "17259810500629006382",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17259810500629006382&q=logistique+77&start=80",
        "lsig": "AB86z5VajzKfW1PpQSvOQ1nTHil_",
        "provider_id": "/g/11p07khnbb",
        "gps_coordinates": {
            "latitude": 48.9823903,
            "longitude": 2.6496098
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//HIDEM,+12+Rue+Marc+Seguin,+77290+Mitry-Mory/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61961233e158d:0xef872a34348c882e?sa=X&ved=2ahUKEwiMsqu0vY6CAxWzRzABHTDgAbY4UBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "HIDEM",
        "type": "Service logistique",
        "phone": "01 60 26 78 66",
        "address": "Mitry-Mory",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 1,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "12692826272430595862",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12692826272430595862&q=logistique+78",
        "lsig": "AB86z5VB1p5zZvUpm93NNx4Mkheu",
        "gps_coordinates": {
            "latitude": 48.7646066,
            "longitude": 1.9877415999999999
        },
        "title": "TLS LOGISTIQUE",
        "type": "Société de transport routier",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 2.8,
        "reviews_original": "(106)",
        "reviews": 106,
        "place_id": "17699881172229220012",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17699881172229220012&q=logistique+78",
        "lsig": "AB86z5UVU8mOYepi4Ktv8jVrd6GA",
        "provider_id": "/g/11h_788yy5",
        "gps_coordinates": {
            "latitude": 48.7671712,
            "longitude": 1.9973389
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Auchan+Logistique+-+Saint+Quentin+en+Yvelines,+27+Av.+Roger+Hennequin,+78990+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683e9d095e121:0xf5a29c25ed58e6ac?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "Auchan Logistique - Saint Quentin en Yvelines",
        "type": "Service logistique",
        "address": "Trappes"
    },
    {
        "position": 3,
        "place_id": "16292659627345362090",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16292659627345362090&q=logistique+78",
        "lsig": "AB86z5UE1ysjESkLHpg7gimOujd3",
        "provider_id": "/g/11td3ffjr_",
        "gps_coordinates": {
            "latitude": 48.9871749,
            "longitude": 1.8904726
        },
        "links": {
            "website": "http://www.yls-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//YLS-Logistique,+8+bis+Rue+Denis+Papin,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2a980cd6fd979297:0xe21b279bde44bcaa?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "YLS-Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 85 83 03 95",
        "address": "Trappes",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 4,
        "rating": 3.3,
        "reviews_original": "(116)",
        "reviews": 116,
        "place_id": "1797322853843383805",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1797322853843383805&q=logistique+78",
        "lsig": "AB86z5WGtzcZWYn-BORsVasIHxxG",
        "provider_id": "/g/1tf2rk1d",
        "gps_coordinates": {
            "latitude": 48.8006697,
            "longitude": 2.0101469
        },
        "links": {
            "website": "http://www.id-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//ID+Logistics,+3+Rue+de+la+Nouvelle+France,+78130+Les+Mureaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e692f8eff28bdd:0x18f15f9cea06b5fd?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "ID Logistics",
        "type": "Service logistique",
        "phone": "01 34 92 61 42",
        "address": "Les Mureaux",
        "hours": "Ouvert ⋅ Ferme à 20:30"
    },
    {
        "position": 5,
        "rating": 5,
        "reviews_original": "(3)",
        "reviews": 3,
        "description": "\"Équipe professionnelle, rapide et efficace !\"",
        "place_id": "8518376850405025643",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8518376850405025643&q=logistique+78",
        "lsig": "AB86z5U68jci61dswzXJ0FRSI-UZ",
        "provider_id": "/g/11r9cn4q_f",
        "gps_coordinates": {
            "latitude": 48.76434,
            "longitude": 1.9865492999999999
        },
        "links": {
            "website": "https://tnet-logistics.com/fr/contacts",
            "directions": "https://www.google.fr/maps/dir//Tnet+Logistics,+Parc+Melies,+1+Rue+Georges+M%C3%A9li%C3%A8s,+78390+Bois-d'Arcy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e687fcfb7efd57:0x76375a9cf74d676b?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "Tnet Logistics",
        "type": "Société de transport international de marchandises",
        "phone": "01 73 13 69 99",
        "address": "Bois-d'Arcy",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 6,
        "rating": 1.3,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "7836285397352605727",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7836285397352605727&q=logistique+78",
        "lsig": "AB86z5Wv7T9p7TUEBLOY4IB1hZoR",
        "provider_id": "/g/11dym9s0w9",
        "gps_coordinates": {
            "latitude": 48.718092,
            "longitude": 1.7574741999999999
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Base+auchan+%2F+GXO+Logistics+France,+73+Av.+Roger+Hennequin,+78990+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683e8301f83d7:0x6cc0140cebc8681f?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "Base auchan / GXO Logistics France",
        "type": "Service logistique",
        "address": "Trappes",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 7,
        "rating": 2,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "3780135521657439011",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3780135521657439011&q=logistique+78",
        "lsig": "AB86z5VoIBWlJveEHR_1_7jQP1dA",
        "gps_coordinates": {
            "latitude": 48.7607797,
            "longitude": 1.976518
        },
        "title": "Tilt- Livraison Collaborative & Solidaire",
        "type": "Service logistique",
        "phone": "06 84 42 82 53",
        "hours": "Ouvert 24h/24"
    },
    {
        "position": 8,
        "place_id": "16615396276323172245",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16615396276323172245&q=logistique+78",
        "lsig": "AB86z5U_p1V1D4CLaBCNeDYVdXzK",
        "provider_id": "/g/1v6l6tj_",
        "gps_coordinates": {
            "latitude": 48.7597375,
            "longitude": 1.9846248
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Gl+Trans,+15+Chem.+de+Montpas,+78610+Saint-L%C3%A9ger-en-Yvelines/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e69fc2fee06f61:0xe695bee194973f95?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "Gl Trans",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 34 86 31 12",
        "address": "Saint-Léger-en-Yvelines"
    },
    {
        "position": 9,
        "rating": 4.2,
        "reviews_original": "(10)",
        "reviews": 10,
        "description": "\"Sérieux et Efficaces.\"",
        "place_id": "6773924766440672662",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6773924766440672662&q=logistique+78",
        "lsig": "AB86z5XayQYKV_BprD8hz4RRKAW6",
        "provider_id": "/g/11fj25yfn5",
        "gps_coordinates": {
            "latitude": 48.942033599999995,
            "longitude": 2.0495493
        },
        "links": {
            "website": "https://www.sovatex.com/",
            "directions": "https://www.google.fr/maps/dir//Sovatex,+65+Av.+Georges+Politzer+cellule+15%2F16,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683e0af01a205:0x5e01d0af6eeacd96?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIDRAA&hl=fr&gl=fr"
        },
        "title": "Sovatex",
        "type": "Service logistique",
        "phone": "01 30 57 99 12",
        "address": "Trappes",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 10,
        "rating": 3.5,
        "reviews_original": "(127)",
        "reviews": 127,
        "place_id": "13769457648922203312",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13769457648922203312&q=logistique+78",
        "lsig": "AB86z5Wid9gLvgl-CIIQ1fN_1WW4",
        "provider_id": "/g/1vcq6xzy",
        "gps_coordinates": {
            "latitude": 48.7054748,
            "longitude": 1.8591149999999996
        },
        "links": {
            "website": "http://www.sofrilog.com/",
            "directions": "https://www.google.fr/maps/dir//SOFRILOG+TRAPPES,+7+avenue+enrico+fermi+Z.I+Trappes+Elancourt,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68395417f301d:0xbf16f0c729cb14b0?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIDhAA&hl=fr&gl=fr"
        },
        "title": "SOFRILOG TRAPPES",
        "type": "Service logistique",
        "phone": "01 30 50 76 02",
        "address": "Trappes",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 11,
        "rating": 1,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "4114815929406307399",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4114815929406307399&q=logistique+78",
        "lsig": "AB86z5WiW1kbC6SahZ_Km_RxPW10",
        "provider_id": "/g/11p65sdtx4",
        "gps_coordinates": {
            "latitude": 48.764908899999995,
            "longitude": 2.1261274
        },
        "links": {
            "website": "http://www.viapost.fr/",
            "directions": "https://www.google.fr/maps/dir//%C3%89QUIPE+LOGISTIQUE+INT%C3%89GR%C3%89E+VIAPOST+DE+POISSY,+PPDC+MFA+DE+POISSY+1+ROUTE+D30,+Chem.+de+Rocourt,+78300+Poissy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6897347da1a6f:0x391ac3495c61bc47?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQICxAA&hl=fr&gl=fr"
        },
        "title": "ÉQUIPE LOGISTIQUE INTÉGRÉE VIAPOST DE POISSY",
        "type": "Service logistique",
        "address": "Poissy",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 12,
        "rating": 3.9,
        "reviews_original": "(65)",
        "reviews": 65,
        "description": "\"Personnel efficace et à l'heure\"",
        "place_id": "17057698026538751253",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17057698026538751253&q=logistique+78",
        "lsig": "AB86z5XFliHoLO5RmFahBCPKOKZA",
        "provider_id": "/g/1tj20v7l",
        "gps_coordinates": {
            "latitude": 48.7955708,
            "longitude": 1.9770052
        },
        "links": {
            "website": "http://www.transports-toussaint.fr/",
            "directions": "https://www.google.fr/maps/dir//Transports+Toussaint,+33+Rue+du+Chemin+Vert,+78610+Le+Perray-en-Yvelines/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e4277cfd995899:0xecb91dfac5b95515?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQICBAA&hl=fr&gl=fr"
        },
        "title": "Transports Toussaint",
        "type": "Service logistique",
        "phone": "01 34 84 69 99",
        "address": "Le Perray-en-Yvelines",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 13,
        "rating": 4.4,
        "reviews_original": "(11)",
        "reviews": 11,
        "place_id": "13644964415962856884",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13644964415962856884&q=logistique+78",
        "lsig": "AB86z5XjbaUFBbudi6-n8sQIaviD",
        "provider_id": "/g/1tds6083",
        "gps_coordinates": {
            "latitude": 48.7588322,
            "longitude": 1.9787222999999998
        },
        "links": {
            "website": "https://www.endurancelogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Endurance+Logistique,+537+Rue+H%C3%A9l%C3%A8ne+Boucher,+78530+Buc/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67e68cf69d205:0xbd5ca6d79a4fbdb4?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Endurance Logistique",
        "type": "Service logistique",
        "phone": "01 39 56 15 09",
        "address": "Buc",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 14,
        "rating": 4,
        "reviews_original": "(34)",
        "reviews": 34,
        "place_id": "11738706380195737511",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11738706380195737511&q=logistique+78",
        "lsig": "AB86z5WTMia9Ig5mHaGLHfopLtVK",
        "provider_id": "/g/1tcxn_6b",
        "gps_coordinates": {
            "latitude": 48.9911616,
            "longitude": 2.073175
        },
        "links": {
            "website": "https://www.urban-group.com/",
            "directions": "https://www.google.fr/maps/dir//Urban+Logistique,+2+Rue+du+Groupe+Manouchian,+78990+%C3%89lancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6846c325a3e6f:0xa2e843422a2dafa7?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "Urban Logistique",
        "type": "Société de services logistiques",
        "phone": "01 30 68 54 00",
        "address": "Élancourt",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 15,
        "rating": 3.2,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "18223288334562901479",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18223288334562901479&q=logistique+78",
        "lsig": "AB86z5Xz8IjPPqTs7sSdepMTVTxz",
        "provider_id": "/g/1tmqfjjp",
        "gps_coordinates": {
            "latitude": 48.7609326,
            "longitude": 1.976653
        },
        "links": {
            "website": "http://www.veolog.fr/",
            "directions": "https://www.google.fr/maps/dir//Veolog,+All.+du+Ruisseau+de+Gironde,+78990+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683c3fe4f09a3:0xfce620306d243de7?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "Veolog",
        "type": "Service logistique",
        "phone": "01 30 62 83 52",
        "address": "Ouvert actuellement"
    },
    {
        "position": 16,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "5465004013908453195",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5465004013908453195&q=logistique+78",
        "lsig": "AB86z5XTmnhMewAQ393-BDcR5YEe",
        "provider_id": "/g/11pzp6_375",
        "gps_coordinates": {
            "latitude": 48.7637832,
            "longitude": 2.1238392
        },
        "links": {
            "website": "https://pointp.fr/",
            "directions": "https://www.google.fr/maps/dir//POINT.P+-+Plateforme+logistique+Conflans,+3+Quai+du+Confluent,+78700+Conflans-Sainte-Honorine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68b82a4b8eda9:0x4bd798322118e74b?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "POINT.P - Plateforme logistique Conflans",
        "type": "Service logistique",
        "phone": "06 43 35 60 69",
        "address": "Conflans-Sainte-Honorine",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 17,
        "rating": 2.9,
        "reviews_original": "(1,6 k)",
        "reviews": 1600,
        "description": "\"Il semble cependant complet.\"",
        "place_id": "9474834818051632999",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9474834818051632999&q=logistique+78",
        "lsig": "AB86z5WIWRgqLOwwY__FDpA7unrV",
        "provider_id": "/g/1v7pxszh",
        "gps_coordinates": {
            "latitude": 48.7646369,
            "longitude": 1.9828663999999998
        },
        "links": {
            "website": "https://gls-group.eu/FR/fr/home",
            "directions": "https://www.google.fr/maps/dir//GLS+Trappes,+Z.A.+de+Trappes+Elancourt,+65+Av.+Georges+Politzer,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68156e8eed36f:0x837d601133786f67?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "GLS Trappes",
        "type": "Service logistique",
        "phone": "09 74 91 09 10",
        "address": "Trappes",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 18,
        "place_id": "1036967139562647493",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1036967139562647493&q=logistique+78",
        "lsig": "AB86z5WbHU3m9il5dviNNGub2YtZ",
        "provider_id": "/g/11xlbb86q",
        "gps_coordinates": {
            "latitude": 48.785774200000006,
            "longitude": 1.97196
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SOS+STOCKAGE,+537+Rue+H%C3%A9l%C3%A8ne+Boucher,+78530+Buc/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67e68cf69d205:0xe640c1e8d626fc5?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "SOS STOCKAGE",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 39 56 15 09",
        "address": "Buc",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 19,
        "rating": 4.5,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "1349491147462677633",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1349491147462677633&q=logistique+78",
        "lsig": "AB86z5UPq1XkMrsNsG8x9IHkCPie",
        "provider_id": "/g/1thcrnnv",
        "gps_coordinates": {
            "latitude": 48.764637,
            "longitude": 1.9828664
        },
        "links": {
            "website": "https://www.manudem-idf78.com/?utm_source=gmb",
            "directions": "https://www.google.fr/maps/dir//BOVIS+MANUDEM+ILE+DE+France,+47+Av.+Georges+Politzer,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683ebaa79fba5:0x12ba5b0c780c1481?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "BOVIS MANUDEM ILE DE France",
        "type": "Société de transport routier",
        "phone": "01 30 66 08 30",
        "address": "Trappes",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 20,
        "rating": 4.4,
        "reviews_original": "(15)",
        "reviews": 15,
        "description": "\"équipe très gentille et serviable.\"",
        "place_id": "11483231426424387287",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11483231426424387287&q=logistique+78",
        "lsig": "AB86z5WiXDK7RbLSDAuYkTZsPgj1",
        "provider_id": "/g/1hc82pmt2",
        "gps_coordinates": {
            "latitude": 48.785774,
            "longitude": 1.97196
        },
        "links": {
            "website": "https://www.legendre.fr/",
            "directions": "https://www.google.fr/maps/dir//SAS+LEGENDRE,+2%2F4+Av.+Jean+Rostand,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68477ab072fc5:0x9f5ca2243da0b6d7?sa=X&ved=2ahUKEwiqxL_DvY6CAxU0D1kFHVGEDAAQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "SAS LEGENDRE",
        "type": "Société de transport routier",
        "phone": "01 30 13 01 60",
        "address": "Trappes",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 1,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "3724784033730878294",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3724784033730878294&q=logistique+78&start=20",
        "lsig": "AB86z5XH_6jSgdSfY0RJwNFPoXWQ",
        "provider_id": "/g/11g4jh2jjc",
        "gps_coordinates": {
            "latitude": 48.7652672,
            "longitude": 1.8314908
        },
        "links": {
            "website": "https://tap-shop.fr/",
            "directions": "https://www.google.fr/maps/dir//TAP+France+-+Base+logistique+NORD,+ZA+les+Godigny,+Chem.+Ferr%C3%A9,+78490/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e69d2df1eb6625:0x33b117580b935b56?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "TAP France - Base logistique NORD",
        "type": "Fournisseur d'équipement de manutention",
        "phone": "01 85 53 99 03",
        "address": "ZA les Godigny, Chem. Ferré",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 2,
        "rating": 4.9,
        "reviews_original": "(49)",
        "reviews": 49,
        "description": "\"Ont toujours une solution et adaptée.\"",
        "place_id": "7386199729820024762",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7386199729820024762&q=logistique+78&start=20",
        "lsig": "AB86z5XgIkIYJU6-zZXd-LPoGj1H",
        "provider_id": "/g/11f04xp7h4",
        "gps_coordinates": {
            "latitude": 48.8433857,
            "longitude": 2.1327933999999997
        },
        "links": {
            "website": "http://www.simple2ship78.fr/",
            "directions": "https://www.google.fr/maps/dir//B%26B+Express+Solutions+(Simple2Ship+Yvelines),+28+All.+des+Pelouses,+78170+La+Celle-Saint-Cloud/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67d230f40e537:0x66810d8540023fba?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "B&B Express Solutions (Simple2Ship Yvelines)",
        "type": "Service logistique",
        "phone": "01 75 93 59 93",
        "address": "La Celle-Saint-Cloud",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 3,
        "place_id": "6868094688217478828",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6868094688217478828&q=logistique+78&start=20",
        "lsig": "AB86z5Xax_QPebwaSh0jZM22NWdn",
        "provider_id": "/g/11hyl69gs6",
        "gps_coordinates": {
            "latitude": 48.938926099999996,
            "longitude": 2.1343972
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Sos+Logistique,+14+Av.+Marceau,+78600+Le+Mesnil-le-Roi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6622705c6976f:0x5f505fbaeef336ac?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Sos Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service de livraison",
        "address": "Le Mesnil-le-Roi",
        "hours": "Fermé temporairement"
    },
    {
        "position": 4,
        "place_id": "16555057180492874201",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16555057180492874201&q=logistique+78&start=20",
        "lsig": "AB86z5V6cxTv645fuButg4Mfj3A5",
        "provider_id": "/g/11flt3cssj",
        "gps_coordinates": {
            "latitude": 48.819331,
            "longitude": 1.949306
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transport+Xpress+Logistique,+12+Rue+de+l'Avignou,+78370+Plaisir/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e684e34688f46d:0xe5bf60cb0f8ec1d9?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Transport Xpress Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de livraison",
        "address": "Plaisir",
        "hours": "Fermé temporairement"
    },
    {
        "position": 5,
        "place_id": "9150361225427642313",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9150361225427642313&q=logistique+78&start=20",
        "lsig": "AB86z5XuJSMsOzAD_r9numqtUsFu",
        "provider_id": "/g/11bymy38fc",
        "gps_coordinates": {
            "latitude": 48.8947222,
            "longitude": 2.0725409
        },
        "links": {
            "website": "http://www.ed-trans.com/",
            "directions": "https://www.google.fr/maps/dir//ED-TRANS+78,+18+Rue+Saint-Vincent,+78100+Saint-Germain-en-Laye/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6884ed1f08435:0x7efc9d0dc81f67c9?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "ED-TRANS 78",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "01 85 76 16 00",
        "address": "Saint-Germain-en-Laye",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 6,
        "place_id": "9201149809292802771",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9201149809292802771&q=logistique+78&start=20",
        "lsig": "AB86z5UN9ugqyvS9JepXwKNhB8IQ",
        "provider_id": "/g/11t4w_qvyp",
        "gps_coordinates": {
            "latitude": 48.6517106,
            "longitude": 1.8362487
        },
        "links": {
            "website": "https://www.legendre.fr/",
            "directions": "https://www.google.fr/maps/dir//Legendre+Rambouillet,+1+Rue+de+Clairefontaine,+78120+Rambouillet/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e4274637472b61:0x7fb10d00740cfad3?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Legendre Rambouillet",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 34 85 23 50",
        "address": "Rambouillet"
    },
    {
        "position": 7,
        "rating": 3.8,
        "reviews_original": "(50)",
        "reviews": 50,
        "place_id": "11495631126908229903",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11495631126908229903&q=logistique+78&start=20",
        "lsig": "AB86z5Xk_pGsLoTsL6auqt5ggSA0",
        "provider_id": "/g/11g9n38y7f",
        "gps_coordinates": {
            "latitude": 48.967515899999995,
            "longitude": 1.8476174
        },
        "links": {
            "website": "http://allardlogistics.com/",
            "directions": "https://www.google.fr/maps/dir//Allard+Logistics+78,+Rue+du+Clos+Reine,+78410+Aubergenville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6938d15ff7ab9:0x9f88af9a7c49d90f?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Allard Logistics 78",
        "type": "Service de transport",
        "phone": "01 30 95 02 95",
        "address": "Aubergenville",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 8,
        "rating": 4.3,
        "reviews_original": "(34)",
        "reviews": 34,
        "place_id": "17931483947143181212",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17931483947143181212&q=logistique+78&start=20",
        "lsig": "AB86z5VqnHF5_Tea_gGp4qjv2p2U",
        "provider_id": "/g/11b6d2d2bx",
        "gps_coordinates": {
            "latitude": 48.770471199999996,
            "longitude": 1.9951618
        },
        "links": {
            "website": "https://www.legendre.fr/",
            "directions": "https://www.google.fr/maps/dir//SAS+LEGENDRE,+6+Av.+Georges+Politzer,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683e4fadd33df:0xf8d96da51516b39c?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "SAS LEGENDRE",
        "type": "Société de transport routier",
        "phone": "01 30 66 59 90",
        "address": "Trappes",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 9,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "1457082428186369409",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1457082428186369409&q=logistique+78&start=20",
        "lsig": "AB86z5Ubyp5UHDLd0OOKWcMFcc_t",
        "provider_id": "/g/11f2635psm",
        "gps_coordinates": {
            "latitude": 48.774914599999995,
            "longitude": 2.0055584
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ATLAS+SERVICE+78,+22+Rue+Pierre+Semard,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68156ff515555:0x143898bf9c831d81?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "ATLAS SERVICE 78",
        "type": "Société d'import-export",
        "phone": "06 52 03 75 96",
        "address": "Trappes",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 10,
        "rating": 3.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "7321100599588762917",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7321100599588762917&q=logistique+78&start=20",
        "lsig": "AB86z5VFfI6AYX3X4hiaUyXL8g1h",
        "provider_id": "/g/1tj7_8tk",
        "gps_coordinates": {
            "latitude": 48.7404483,
            "longitude": 1.9197677000000002
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transval+S.A.S.,+36+Rue+des+Osiers,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683294c151e75:0x6599c634db633525?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Transval S.A.S.",
        "type": "Société de transport routier",
        "phone": "01 30 69 70 79",
        "address": "Coignières",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 11,
        "place_id": "10894196518612563973",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10894196518612563973&q=logistique+78&start=20",
        "lsig": "AB86z5WaBs5jOTk0gSRJdYU4BXlj",
        "provider_id": "/g/11fgm1p347",
        "gps_coordinates": {
            "latitude": 48.9801541,
            "longitude": 1.803509
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//XPO+LOGISTIQUE,+Gargenville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e695dc8d9aaca1:0x972ff6038532f805?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "XPO LOGISTIQUE",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Gargenville",
        "hours": "Fermé temporairement"
    },
    {
        "position": 12,
        "rating": 4.6,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "15290477989368786917",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15290477989368786917&q=logistique+78&start=20",
        "lsig": "AB86z5V3RxwpqeIn9u3HhQNeo5Q2",
        "provider_id": "/g/11b6027t0h",
        "gps_coordinates": {
            "latitude": 48.7976598,
            "longitude": 1.9780882
        },
        "links": {
            "website": "http://www.traitduniontransport.fr/",
            "directions": "https://www.google.fr/maps/dir//Trait+d'union+transport,+16+Rue+du+Mar%C3%A9chal+de+Lattre+de+Tassigny,+78990+%C3%89lancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e680c31dc1b69f:0xd432b0b80a416fe5?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Trait d'union transport",
        "type": "Service de transport",
        "phone": "09 70 72 10 47",
        "address": "Élancourt",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 13,
        "rating": 4.3,
        "reviews_original": "(57)",
        "reviews": 57,
        "place_id": "15977278305051959012",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15977278305051959012&q=logistique+78&start=20",
        "lsig": "AB86z5USVdU_aliMf7ptOmbtEhXY",
        "provider_id": "/g/11c5z9m5yz",
        "gps_coordinates": {
            "latitude": 48.7552885,
            "longitude": 1.9237443
        },
        "links": {
            "website": "https://www.merkancia-france.com/",
            "directions": "https://www.google.fr/maps/dir//MERKANCIA+FRANCE-Service+de+transport,+22+Rue+Augustin+Fresnel,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6833a8c6bf13b:0xddbab1f79a2d5ee4?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "MERKANCIA FRANCE-Service de transport",
        "type": "Service de transport",
        "phone": "09 74 56 05 62",
        "address": "Coignières",
        "hours": "Ouvert ⋅ Ferme à 22:00"
    },
    {
        "position": 14,
        "place_id": "11144220004062238022",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11144220004062238022&q=logistique+78&start=20",
        "lsig": "AB86z5XHSKdC-dkUCWotkQEcsf_n",
        "provider_id": "/g/11jb7k1vcc",
        "gps_coordinates": {
            "latitude": 48.977332700000005,
            "longitude": 1.8638009999999998
        },
        "links": {
            "website": "http://www.captrain.fr/",
            "directions": "https://www.google.fr/maps/dir//CAPTRAIN+Proximit%C3%A9_+site+de+FLINS,+2+Rte+Renault,+78410+Flins-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6936e46858153:0x9aa8390c90ee9546?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "CAPTRAIN Proximité_ site de FLINS",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 18 78 88 06",
        "address": "Flins-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 09:00 mer."
    },
    {
        "position": 15,
        "place_id": "8919138493932574596",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8919138493932574596&q=logistique+78&start=20",
        "lsig": "AB86z5XazLLP_WcQNQnJdNjex1OQ",
        "provider_id": "/g/1th0m6dq",
        "gps_coordinates": {
            "latitude": 48.8565265,
            "longitude": 1.8728625
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//La+Force+d'Une+Bonne+Logistique,+8+Rue+de+la+R%C3%A9publique,+78650+Beynes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e69a7d11695a37:0x7bc72534615d1784?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "La Force d'Une Bonne Logistique",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 34 91 07 87",
        "address": "Beynes",
        "hours": "Fermé temporairement"
    },
    {
        "position": 16,
        "rating": 2.9,
        "reviews_original": "(105)",
        "reviews": 105,
        "description": "\"Tres bonne societe de transports avec beaucoup de sérieux\"",
        "place_id": "3640061863335084619",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3640061863335084619&q=logistique+78&start=20",
        "lsig": "AB86z5X5OTiUxrM9J3H590L9QZ3E",
        "provider_id": "/g/1td2ysrm",
        "gps_coordinates": {
            "latitude": 48.7399182,
            "longitude": 1.9179978999999996
        },
        "links": {
            "website": "https://www.dbschenker.com/fr-fr",
            "directions": "https://www.google.fr/maps/dir//DB+SCHENKER,+38%2F40+Rue+des+Osiers,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6833af244401f:0x328418fa9488c24b?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "DB SCHENKER",
        "type": "Service logistique",
        "phone": "01 30 05 13 20",
        "address": "Coignières",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 17,
        "rating": 4.1,
        "reviews_original": "(7)",
        "reviews": 7,
        "description": "\"Société et personnel très sympathique je recommande\"",
        "place_id": "5036275196766870417",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5036275196766870417&q=logistique+78&start=20",
        "lsig": "AB86z5VynWLsbw6CGnQA314GtbtQ",
        "provider_id": "/g/11btltf2sq",
        "gps_coordinates": {
            "latitude": 48.840367699999994,
            "longitude": 1.9120111
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Flash+2+Transport,+Rue+Jean-Jacques+Champion,+78850+Thiverval-Grignon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6848d99edd74b:0x45e4719bae665b91?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Flash 2 Transport",
        "type": "Société de transport routier",
        "phone": "01 30 57 92 58",
        "address": "Thiverval-Grignon",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 18,
        "rating": 5,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "17442072409588613360",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17442072409588613360&q=logistique+78&start=20",
        "lsig": "AB86z5WVcWaH3z_szCyb4H8AMfxB",
        "gps_coordinates": {
            "latitude": 48.90374320000001,
            "longitude": 2.1150662
        },
        "service_options": {
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "http://www.transportpro.fr/"
        },
        "title": "TRANSPORT PRO",
        "type": "Société de transport routier",
        "phone": "06 26 34 02 01",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 19,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "4165545410605492894",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4165545410605492894&q=logistique+78&start=20",
        "lsig": "AB86z5UFC_xQVFSaAmNtqHelF1mn",
        "provider_id": "/g/11pznkg40r",
        "gps_coordinates": {
            "latitude": 48.9367728,
            "longitude": 2.1472044
        },
        "links": {
            "website": "http://sweetlogistic.com/",
            "directions": "https://www.google.fr/maps/dir//Actsyst,+66+route+de+Sartrouville,+Parc+des+%C3%89rables+B%C3%A2t+3,+78230+Le+Pecq/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66263ca25b885:0x39cefd7b1ee62a9e?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Actsyst",
        "type": "Service logistique",
        "phone": "01 30 09 11 16",
        "address": "Le Pecq",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 20,
        "place_id": "14875880278848314733",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14875880278848314733&q=logistique+78&start=20",
        "lsig": "AB86z5Ws9NAjy-W7hAZqaSlYu1dB",
        "provider_id": "/g/11flt3qwfq",
        "gps_coordinates": {
            "latitude": 48.93677,
            "longitude": 2.1472044
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Societe+Locations+Transports+78,+3+Rue+Nungesser,+78500+Sartrouville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6622b6a8fca2b:0xce71be4c3dfe1d6d?sa=X&ved=2ahUKEwjjrsPEvY6CAxVuGVkFHXOtA7A4FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Societe Locations Transports 78",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "address": "Sartrouville",
        "hours": "Fermé temporairement"
    },
    {
        "position": 1,
        "rating": 1,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "525033412502306948",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=525033412502306948&q=logistique+78&start=40",
        "lsig": "AB86z5U232OJ5JkX75dD139j3erd",
        "provider_id": "/g/11b6d7h14x",
        "gps_coordinates": {
            "latitude": 48.761753399999996,
            "longitude": 1.9261750999999998
        },
        "links": {
            "website": "https://www.aac-globe-express.com/",
            "directions": "https://www.google.fr/maps/dir//Association+Autonome+de+Camionnage+Globe+Express+(A.A.C+Globe+Express),+18+Rue+Claude+Bernard,+78310+Maurepas/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683385b6675b1:0x7494b1b5f694084?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Association Autonome de Camionnage Globe Express (A.A.C Globe Express)",
        "type": "Service de transport",
        "phone": "01 30 62 32 00",
        "address": "Maurepas"
    },
    {
        "position": 2,
        "rating": 4.6,
        "reviews_original": "(38)",
        "reviews": 38,
        "place_id": "4499357706418369919",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4499357706418369919&q=logistique+78&start=40",
        "lsig": "AB86z5V0_pEenp7sOST_4XZz__WW",
        "provider_id": "/g/1tr8kx2t",
        "gps_coordinates": {
            "latitude": 48.72521,
            "longitude": 1.8953096999999999
        },
        "links": {
            "website": "http://www.eurotrans78.com/",
            "directions": "https://www.google.fr/maps/dir//Euro+Trans+78,+5+r+Georges+Pompidou+78690,+Les+Essarts-le-Roi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e69d38585f590b:0x3e70edfed07bb57f?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Euro Trans 78",
        "type": "Services de déménagement et de stockage",
        "phone": "01 30 46 40 80",
        "address": "Les Essarts-le-Roi",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 3,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "15351317946549159745",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15351317946549159745&q=logistique+78&start=40",
        "lsig": "AB86z5VmqNI8x6r5QfkB-DAJkQZR",
        "provider_id": "/g/11j8wvlpwr",
        "gps_coordinates": {
            "latitude": 48.735465,
            "longitude": 1.911679
        },
        "links": {
            "website": "http://www.transports-toussaint.fr/",
            "directions": "https://www.google.fr/maps/dir//Transports+Toussaint,+58+Rue+des+Osiers,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683f765c81f53:0xd50ad6566e244741?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Transports Toussaint",
        "type": "Service logistique",
        "phone": "01 61 06 22 60",
        "address": "Coignières",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 4,
        "rating": 2.5,
        "reviews_original": "(267)",
        "reviews": 267,
        "description": "\"Excellent prestataire pour transport Express en B2B\"",
        "place_id": "8109941433222904088",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8109941433222904088&q=logistique+78&start=40",
        "lsig": "AB86z5X510jY5ZQ0KO6AJeF8-YW8",
        "provider_id": "/g/1vnnhq8v",
        "gps_coordinates": {
            "latitude": 48.7670752,
            "longitude": 1.9956686
        },
        "links": {
            "website": "https://geodis.com/fr/activite/distribution-et-express",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Distribution+%26+Express,+8+Rue+Albert+Einstein,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683e166d639f1:0x708c4cc3e4793918?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Distribution & Express",
        "type": "Service logistique",
        "phone": "0 892 05 28 28",
        "address": "Trappes",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 5,
        "place_id": "11071985417013014798",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11071985417013014798&q=logistique+78&start=40",
        "lsig": "AB86z5UQkjWnmDpg7FKgI_Y6lLek",
        "gps_coordinates": {
            "latitude": 48.757313499999995,
            "longitude": 1.9832946
        },
        "title": "SYNCHROTRUCK",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 76 50 98 76"
    },
    {
        "position": 6,
        "rating": 4.1,
        "reviews_original": "(27)",
        "reviews": 27,
        "place_id": "6663271224132911846",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6663271224132911846&q=logistique+78&start=40",
        "lsig": "AB86z5Vyx8btA2qjmvEC0dEMGAxy",
        "provider_id": "/g/11gbldkf4r",
        "gps_coordinates": {
            "latitude": 48.9798182,
            "longitude": 1.9800787
        },
        "links": {
            "website": "https://www.legendre.fr/",
            "directions": "https://www.google.fr/maps/dir//SAS+LEGENDRE,+48+Av.+des+Fr%C3%A8res+Lumi%C3%A8re,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683c135f03a47:0x5c78b1dff48642e6?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "SAS LEGENDRE",
        "type": "Société de transport routier",
        "phone": "01 30 16 06 94",
        "address": "Trappes",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 7,
        "rating": 4,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "5853616950023856195",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5853616950023856195&q=logistique+78&start=40",
        "lsig": "AB86z5UVQ2VvFMjfQmIC_BT5dyvS",
        "provider_id": "/g/11btmb321s",
        "gps_coordinates": {
            "latitude": 48.7692741,
            "longitude": 1.9995208999999998
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Euralog,+61+Av.+du+Ch%C3%A2teau,+78480+Verneuil-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68c56dc0d4c89:0x513c399a2d60a043?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Euralog",
        "type": "Société de transport routier",
        "phone": "09 67 14 04 78",
        "address": "Verneuil-sur-Seine",
        "hours": "Fermé temporairement"
    },
    {
        "position": 8,
        "rating": 3.6,
        "reviews_original": "(41)",
        "reviews": 41,
        "place_id": "8183568035190426853",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8183568035190426853&q=logistique+78&start=40",
        "lsig": "AB86z5UuAxaTj5EgRSNR-GXkP2Bh",
        "provider_id": "/g/11bzs4b0h3",
        "gps_coordinates": {
            "latitude": 48.994459899999995,
            "longitude": 1.6881572999999999
        },
        "links": {
            "website": "https://www.groupe2llogistics.fr/",
            "directions": "https://www.google.fr/maps/dir//Rotalys,+7+Av.+Roger+Hennequin,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683e3a6fc690f:0x7191dfc504c44ce5?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Rotalys",
        "type": "Service logistique",
        "phone": "01 30 81 10 04",
        "address": "Trappes",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 9,
        "place_id": "6490376797273484040",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6490376797273484040&q=logistique+78&start=40",
        "lsig": "AB86z5VFXZr_PABBYKBEsAo8TjVw",
        "provider_id": "/g/1td4tlrj",
        "gps_coordinates": {
            "latitude": 48.7689753,
            "longitude": 2.0016085
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STL,+19+Rue+de+Buchelay,+78200+Mantes-la-Jolie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6bf195b230383:0x5a12734f43ec6b08?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "STL",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 34 79 93 11",
        "address": "Mantes-la-Jolie"
    },
    {
        "position": 10,
        "place_id": "17721712151655791637",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17721712151655791637&q=logistique+78&start=40",
        "lsig": "AB86z5UbgknHve4J7cLJZW26uw0c",
        "provider_id": "/g/1wk6z275",
        "gps_coordinates": {
            "latitude": 48.7926001,
            "longitude": 2.0368136999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Sotradis,+2+Rue+Albert+Einstein,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683e27508709d:0xf5f02b4eeb2abc15?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Sotradis",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 50 80 30",
        "address": "Trappes"
    },
    {
        "position": 11,
        "place_id": "17985367311889312885",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17985367311889312885&q=logistique+78&start=40",
        "lsig": "AB86z5U4jEfatK9Kj6OcP9qeUvly",
        "provider_id": "/g/119x5htfp",
        "gps_coordinates": {
            "latitude": 48.7582488,
            "longitude": 1.9844619000000001
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//L4+Epsilon,+6+Rue+Jean+Pierre+Timbaud,+78180+Montigny-le-Bretonneux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e686c54229cc2b:0xf998dc479415ac75?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "L4 Epsilon",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 81 88 07 32",
        "address": "Montigny-le-Bretonneux",
        "hours": "Fermé temporairement"
    },
    {
        "position": 12,
        "rating": 3.7,
        "reviews_original": "(27)",
        "reviews": 27,
        "place_id": "17139362500631380703",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17139362500631380703&q=logistique+78&start=40",
        "lsig": "AB86z5XV_b3okTbUeUtaGu3C6uPW",
        "gps_coordinates": {
            "latitude": 48.8238798,
            "longitude": 1.7810741
        },
        "links": {
            "website": "http://www.dilitrans.com/"
        },
        "title": "Dilitrans",
        "type": "Service de transport",
        "phone": "01 30 13 00 50",
        "hours": "Ouvert 24h/24"
    },
    {
        "position": 13,
        "place_id": "9269171479335047416",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9269171479335047416&q=logistique+78&start=40",
        "lsig": "AB86z5VVjv7quGaDg3mX3JY18ffn",
        "gps_coordinates": {
            "latitude": 48.9579898,
            "longitude": 1.8190446
        },
        "title": "OUM GROUPE",
        "reviews_original": "Aucun avis",
        "type": "Services aux entreprises",
        "phone": "0 890 17 70 57"
    },
    {
        "position": 14,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "3982900904440833471",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3982900904440833471&q=logistique+78&start=40",
        "lsig": "AB86z5VAXIevfU8wU2-oHfnAjfQZ",
        "provider_id": "/g/11fnnyqjwk",
        "gps_coordinates": {
            "latitude": 48.785156099999995,
            "longitude": 1.9745808999999996
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Group,+46+Av.+des+Fr%C3%A8res+Lumi%C3%A8re,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6832933975d01:0x37461b4530c725bf?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Group",
        "type": "Société de transport routier",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 15,
        "place_id": "16540849272986989144",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16540849272986989144&q=logistique+78&start=40",
        "lsig": "AB86z5UK8TOi0GoRQckD61Y5mTgh",
        "provider_id": "/g/11h2p4jzhk",
        "gps_coordinates": {
            "latitude": 48.7992284,
            "longitude": 1.6678351
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//BoxforYou,+5+Rte+de+Boissy,+78890+Garanci%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6994d37ff9309:0xe58ce6c6cfaaf258?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "BoxforYou",
        "reviews_original": "Aucun avis",
        "type": "Services de déménagement et de stockage",
        "phone": "06 12 68 57 90",
        "address": "Garancières",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 16,
        "place_id": "15130533713463045917",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15130533713463045917&q=logistique+78&start=40",
        "lsig": "AB86z5WRn_VLwsNHiip8raz-1ON2",
        "gps_coordinates": {
            "latitude": 48.763324,
            "longitude": 1.9119579999999998
        },
        "title": "Transports Loheac de L Ouest Parisien",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 95 63 73",
        "address": "Épône",
        "hours": "Fermé temporairement"
    },
    {
        "position": 17,
        "rating": 4.6,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "469779457135639046",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=469779457135639046&q=logistique+78&start=40",
        "lsig": "AB86z5WWRsturQP6kglPQppvjOz8",
        "provider_id": "/g/1hc8p90pt",
        "gps_coordinates": {
            "latitude": 48.7442673,
            "longitude": 1.9238898999999998
        },
        "service_options": {
            "services_sur_place": true
        },
        "links": {
            "website": "http://www.tftcourses.com/",
            "directions": "https://www.google.fr/maps/dir//T.F.T+Transports,+5+Av.+Ivan+Petrovitch+Pavlov,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68476f6aee977:0x684fded61587a06?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "T.F.T Transports",
        "type": "Société de transport routier",
        "phone": "01 30 57 04 01",
        "address": "Trappes",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 18,
        "rating": 4.3,
        "reviews_original": "(36)",
        "reviews": 36,
        "place_id": "16292429497819214467",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16292429497819214467&q=logistique+78&start=40",
        "lsig": "AB86z5Xcb6rXZrhmpB3ZkWBEZRAC",
        "provider_id": "/g/1trxjllp",
        "gps_coordinates": {
            "latitude": 48.79923,
            "longitude": 1.6678351
        },
        "links": {
            "website": "https://www.euromat78.com/",
            "directions": "https://www.google.fr/maps/dir//Euro+Mat,+11+Chem.+de+la+Foss%C3%A9,+78550+Bazainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6a3e8f9e24fa3:0xe21a564ea99c3283?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Euro Mat",
        "type": "Société de transport routier",
        "phone": "01 34 87 62 63",
        "address": "Bazainville",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 19,
        "rating": 2.9,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "7351826030483657282",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7351826030483657282&q=logistique+78&start=40",
        "lsig": "AB86z5Wmnx10iCT4TSIAYkNmbE4d",
        "provider_id": "/g/11g6bk7n8c",
        "gps_coordinates": {
            "latitude": 48.763325,
            "longitude": 1.911958
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Bluedistrib,+6+Av.+Louis+Pasteur+Batiment+38,+78310+Maurepas/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e664d8b5eb55f1:0x6606eed2b572d242?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Bluedistrib",
        "type": "Service logistique",
        "phone": "01 84 14 63 80",
        "address": "Maurepas",
        "hours": "Fermé temporairement"
    },
    {
        "position": 20,
        "rating": 4.5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "2654493326031830675",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2654493326031830675&q=logistique+78&start=40",
        "lsig": "AB86z5XnWhxKTdjRzHt8ORGbUKrO",
        "provider_id": "/g/1hc2bj243",
        "gps_coordinates": {
            "latitude": 48.744267,
            "longitude": 1.9238899
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//S%C3%A9mat,+28+Rue+des+Osiers,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e682d799b31bf1:0x24d6a79dacc5be93?sa=X&ved=2ahUKEwjevZPFvY6CAxV2mmoFHS9JAM44KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Sémat",
        "type": "Société de transport routier",
        "phone": "01 30 05 31 21",
        "address": "Coignières"
    },
    {
        "position": 1,
        "place_id": "1114195365783599735",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1114195365783599735&q=logistique+78&start=60",
        "lsig": "AB86z5VJhXEXILGEBwiVhNVENy_H",
        "provider_id": "/g/11h40zmfhd",
        "gps_coordinates": {
            "latitude": 48.8225261,
            "longitude": 1.9545671000000002
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Krs+Transport,+7+All.+Saint-Just,+78370+Plaisir/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e684fded48710b:0xf766ac82beafa77?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Krs Transport",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "address": "Plaisir"
    },
    {
        "position": 2,
        "rating": 3.7,
        "reviews_original": "(18)",
        "reviews": 18,
        "place_id": "14701050983454932707",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14701050983454932707&q=logistique+78&start=60",
        "lsig": "AB86z5VbyJKLqqIpjQU31TOMKcpJ",
        "provider_id": "/g/11btm3j5_f",
        "gps_coordinates": {
            "latitude": 48.9679145,
            "longitude": 2.029807
        },
        "links": {
            "website": "http://www.ebsesperance.fr/",
            "directions": "https://www.google.fr/maps/dir//EBS+Esperance,+10+Rue+Panhard+et+Levassor,+78570+Chanteloup-les-Vignes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68b93d7f44e59:0xcc049ffaddbcfee3?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "EBS Esperance",
        "type": "Service logistique",
        "phone": "01 39 74 43 43",
        "address": "Chanteloup-les-Vignes",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 3,
        "place_id": "4969486074184236252",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4969486074184236252&q=logistique+78&start=60",
        "lsig": "AB86z5VTFKmji7WzVnkxNOMpGIcc",
        "provider_id": "/g/1hc1kc0gy",
        "gps_coordinates": {
            "latitude": 48.7603517,
            "longitude": 1.9916357999999996
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Trans+routiere,+28+Av.+des+Fr%C3%A8res+Lumi%C3%A8re,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683c3fef441af:0x44f7294148007cdc?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Trans routiere",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 49 93 48",
        "address": "Trappes"
    },
    {
        "position": 4,
        "rating": 3.8,
        "reviews_original": "(87)",
        "reviews": 87,
        "place_id": "5199035925064888163",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5199035925064888163&q=logistique+78&start=60",
        "lsig": "AB86z5XTC784zse91rwrw-dbtCmu",
        "provider_id": "/g/11c1sjwcl2",
        "gps_coordinates": {
            "latitude": 48.7445528,
            "longitude": 1.9268470999999998
        },
        "links": {
            "website": "http://www.transports-help.com/",
            "directions": "https://www.google.fr/maps/dir//Transports+Help+Service,+9+Rue+des+Osiers,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683278f673ab5:0x4826afa0cffcaf63?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Transports Help Service",
        "type": "Société de transport routier",
        "phone": "01 30 23 44 15",
        "address": "Coignières"
    },
    {
        "position": 5,
        "place_id": "10828118932417279350",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10828118932417279350&q=logistique+78&start=60",
        "lsig": "AB86z5W1AYukmFskCbK086KZAv14",
        "provider_id": "/g/11rxylhy9j",
        "gps_coordinates": {
            "latitude": 48.762318,
            "longitude": 2.034231
        },
        "links": {
            "website": "https://www.ups.com/fr/fr/services/e-commerce/access-point-network.page",
            "directions": "https://www.google.fr/maps/dir//UPS+Access+Point,+30+Av.+Erik+Satie,+78180+Montigny-le-Bretonneux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68102fd6efdb3:0x964534cc9869f576?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "UPS Access Point",
        "reviews_original": "Aucun avis",
        "type": "Services d'expédition et de livraison",
        "address": "Montigny-le-Bretonneux",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 6,
        "place_id": "9980999626255508750",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9980999626255508750&q=logistique+78&start=60",
        "lsig": "AB86z5UGDooJPCN1B8i8coexulN7",
        "provider_id": "/g/11h40zzk9w",
        "gps_coordinates": {
            "latitude": 48.6907918,
            "longitude": 1.8452856000000002
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//E.m.i.+Loc,+64+Pt+Rue+Verte,+78610+Le+Perray-en-Yvelines/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e42769125b0f6b:0x8a83a2474a44250e?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "E.m.i. Loc",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "address": "Le Perray-en-Yvelines",
        "hours": "Fermé temporairement"
    },
    {
        "position": 7,
        "rating": 2.8,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "18175549892247506389",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18175549892247506389&q=logistique+78&start=60",
        "lsig": "AB86z5U7xyrDqOHT0ifN6Twvk8mW",
        "provider_id": "/g/11f5vb2hdv",
        "gps_coordinates": {
            "latitude": 48.757615699999995,
            "longitude": 1.9311372
        },
        "links": {
            "website": "https://www.ups.com/fr/fr/services/e-commerce/access-point-network.page",
            "directions": "https://www.google.fr/maps/dir//UPS+Access+Point,+4+Rue+Marie+Curie,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6838be03c04d1:0xfc3c86542ccd4dd5?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "UPS Access Point",
        "type": "Services d'expédition et de livraison",
        "address": "Coignières",
        "hours": "Ouvert ⋅ Ferme à 20:30"
    },
    {
        "position": 8,
        "rating": 4.3,
        "reviews_original": "(76)",
        "reviews": 76,
        "place_id": "16267623311097020781",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16267623311097020781&q=logistique+78&start=60",
        "lsig": "AB86z5Xp7xrpR5klVYwq6G0FHA00",
        "provider_id": "/g/11cmy4zx33",
        "gps_coordinates": {
            "latitude": 48.786759499999995,
            "longitude": 2.0462481
        },
        "service_options": {
            "devis_en_ligne": true
        },
        "links": {
            "website": "https://www.takademenager.com/",
            "directions": "https://www.google.fr/maps/dir//Takademenager+78+Transporteur+D%C3%A9m%C3%A9nageur+Nacelle+Monte+Meubles+Stockage+D%C3%A9m%C3%A9nagement+D%E2%80%99entreprises,+11+Av.+de+la+Gare,+78180+Montigny-le-Bretonneux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e686d67139760d:0xe1c235363dcd416d?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Takademenager 78 Transporteur Déménageur Nacelle Monte Meubles Stockage Déménagement D’entreprises",
        "type": "Déménageur",
        "phone": "01 30 60 00 72",
        "address": "Montigny-le-Bretonneux",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 9,
        "place_id": "18151028760086568482",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18151028760086568482&q=logistique+78&start=60",
        "lsig": "AB86z5WhcwvuBngEBWqHq9Bj-OI6",
        "provider_id": "/g/11fj8303m1",
        "gps_coordinates": {
            "latitude": 48.803387300000004,
            "longitude": 1.6652265000000002
        },
        "links": {
            "website": "http://tilt-import.com/",
            "directions": "https://www.google.fr/maps/dir//TILT-IMPORT,+6+Rte+du+Breuil,+78550+Bazainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6a3ec114bd1af:0xfbe5687d30dbde22?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "TILT-IMPORT",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 34 87 75 89",
        "address": "Bazainville"
    },
    {
        "position": 10,
        "rating": 3.5,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "4207100225442931996",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4207100225442931996&q=logistique+78&start=60",
        "lsig": "AB86z5UmUNuNX5hKrRr7ai0ZbGZ-",
        "provider_id": "/g/11fd44bhsc",
        "gps_coordinates": {
            "latitude": 48.760444799999995,
            "longitude": 1.9862707000000002
        },
        "links": {
            "website": "https://www.legendre.fr/",
            "directions": "https://www.google.fr/maps/dir//SAS+LEGENDRE,+27+ter+Av.+Roger+Hennequin,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68317101e784d:0x3a629f5d67fde51c?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "SAS LEGENDRE",
        "type": "Société de transport routier",
        "phone": "01 39 30 95 87",
        "address": "Trappes",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 11,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "2811078811047948571",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2811078811047948571&q=logistique+78&start=60",
        "lsig": "AB86z5V0bhxJXvb5OHsY4O9orvvH",
        "gps_coordinates": {
            "latitude": 48.830726399999996,
            "longitude": 1.9599936000000002
        },
        "links": {
            "website": "https://trokeur-debarras.fr/debarras-pro-maison-78/"
        },
        "title": "Trokeur Débarras",
        "type": "Services de déménagement et de stockage",
        "phone": "09 80 61 58 30",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 12,
        "place_id": "6240445476539362985",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6240445476539362985&q=logistique+78&start=60",
        "lsig": "AB86z5X65jvlzZrPICs-bYF2DlS9",
        "provider_id": "/g/11vb3lmwsp",
        "gps_coordinates": {
            "latitude": 48.7621332,
            "longitude": 1.9934303000000002
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Bo%C3%AEte+%C3%A0+lettres,+78+Bd+L%C3%A9on+Blum,+78370+Plaisir/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68543be519345:0x569a8418fd526ea9?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Boîte à lettres",
        "reviews_original": "Aucun avis",
        "type": "Service postal",
        "address": "Plaisir"
    },
    {
        "position": 13,
        "rating": 4.5,
        "reviews_original": "(19)",
        "reviews": 19,
        "description": "\"Personnel très sympa service très rapide\"",
        "place_id": "1934792939910809941",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1934792939910809941&q=logistique+78&start=60",
        "lsig": "AB86z5UXnpzGx3rfdx31TYbo6v9t",
        "provider_id": "/g/11h40_3bc1",
        "gps_coordinates": {
            "latitude": 48.7530363,
            "longitude": 1.9288598000000001
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Dilitrans,+22+Av.+des+Fr%C3%A8res+Lumi%C3%A8re,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683dd9ef5e1ab:0x1ad9c3ed89514955?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Dilitrans",
        "type": "Société de transport routier",
        "phone": "01 30 80 22 92",
        "address": "Trappes"
    },
    {
        "position": 14,
        "place_id": "2069450406832132113",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2069450406832132113&q=logistique+78&start=60",
        "lsig": "AB86z5WDRfOmb-kvv1bq34WKoI4m",
        "provider_id": "/g/1tk1yc6_",
        "gps_coordinates": {
            "latitude": 48.828347,
            "longitude": 1.9515715999999999
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Tlc,+13+Rue+Ren%C3%A9+Laennec,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68324aa035139:0x1cb82a2e3b845011?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Tlc",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 49 19 64",
        "address": "Coignières"
    },
    {
        "position": 15,
        "place_id": "11424523506094130316",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11424523506094130316&q=logistique+78&start=60",
        "lsig": "AB86z5UkWCmpM94R6exofUdkZtPT",
        "provider_id": "/g/11f6dm118k",
        "gps_coordinates": {
            "latitude": 48.829076,
            "longitude": 2.1185277
        },
        "links": {
            "website": "http://www.atomeurope.fr/contact-international-moving/",
            "directions": "https://www.google.fr/maps/dir//Atom+Europe+Service,+47+Rue+des+Ebisoires,+78370+Plaisir/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68504a8100001:0x9e8c0f995cd7448c?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Atom Europe Service",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 80 82 50 20",
        "address": "Plaisir",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 16,
        "place_id": "8107604598315133784",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8107604598315133784&q=logistique+78&start=60",
        "lsig": "AB86z5W-gWxZywDz0_ffwMpEbvNK",
        "provider_id": "/g/11b6cjc1w1",
        "gps_coordinates": {
            "latitude": 48.7489721,
            "longitude": 1.9307241000000002
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Labo+Express,+6+Av.+Charles+de+Gaulle,+78150/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x410be8d7aeb6bcb7:0x7083ff6d1de5ab58?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Labo Express",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 39 43 78 78",
        "address": "6 Av. Charles de Gaulle"
    },
    {
        "position": 17,
        "place_id": "9130192787026803519",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9130192787026803519&q=logistique+78&start=60",
        "lsig": "AB86z5W5ipxzxc-vtKjvX5dlTlkA",
        "gps_coordinates": {
            "latitude": 48.800168899999996,
            "longitude": 1.9916167999999996
        },
        "links": {
            "website": "https://mbhglobalservices.business.site/?utm_source=gmb&utm_medium=referral"
        },
        "title": "MBHGLOBALSERVICES",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 30 78 19 94",
        "hours": "Ouvert ⋅ Ferme à 19:30"
    },
    {
        "position": 18,
        "rating": 4.6,
        "reviews_original": "(5)",
        "reviews": 5,
        "description": "\"Logistique au top , je recommande fortement.\"",
        "place_id": "11347761477428162158",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11347761477428162158&q=logistique+78&start=60",
        "lsig": "AB86z5UWeCZI86M_hwwaQKV2IpCB",
        "provider_id": "/g/11hj9hbjz9",
        "gps_coordinates": {
            "latitude": 48.799329099999994,
            "longitude": 1.9520757
        },
        "links": {
            "website": "https://www.daher.com/",
            "directions": "https://www.google.fr/maps/dir//Daher+Technologies,+Rue+du+Mesnil+Saint-Denis,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68387da77db1f:0x9d7b58f0d1f7ae6e?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Daher Technologies",
        "type": "Société de transport routier",
        "address": "Coignières",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 19,
        "place_id": "1611655630873695733",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1611655630873695733&q=logistique+78&start=60",
        "lsig": "AB86z5Uso5uY-E9UZoGBtNPHV6fh",
        "provider_id": "/g/1hc3qn3sj",
        "gps_coordinates": {
            "latitude": 48.800167,
            "longitude": 1.9916168
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Mentre+Denis,+3+Chem.+de+la+Bretechelle+au+Puits+%C3%80+Loup,+78340+Les+Clayes-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68417a133557b:0x165dc041e27c15f5?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Mentre Denis",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "09 65 39 41 70",
        "address": "Les Clayes-sous-Bois"
    },
    {
        "position": 20,
        "rating": 2.6,
        "reviews_original": "(119)",
        "reviews": 119,
        "place_id": "8545802962586677787",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8545802962586677787&q=logistique+78&start=60",
        "lsig": "AB86z5Wh984_CMhcOR1qctcmJO7E",
        "provider_id": "/g/11b_1z47vn",
        "gps_coordinates": {
            "latitude": 48.799328,
            "longitude": 1.9520757
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Agence+Relais+Colis+Plaisir,+98+Rue+des+P%C3%AAchers,+78370+Plaisir/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6848c387e0815:0x7698ca845175b21b?sa=X&ved=2ahUKEwjT0fLFvY6CAxU2CnkGHVt4Cks4PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Agence Relais Colis Plaisir",
        "type": "Société de transport international de marchandises",
        "phone": "01 30 79 25 44",
        "address": "Plaisir",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 1,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "15881297218802373065",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15881297218802373065&q=logistique+78&start=80",
        "lsig": "AB86z5X55tjDKo-x3DhtWHmXRTnn",
        "provider_id": "/g/11f404d4hy",
        "gps_coordinates": {
            "latitude": 48.697158599999995,
            "longitude": 1.8628375000000001
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ERNPM,+19+Rue+de+l'%C3%89tang,+78610+Le+Perray-en-Yvelines/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e427788d39dcf1:0xdc65b3ad831d51c9?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "ERNPM",
        "type": "Service de débarras de maison",
        "phone": "06 09 04 80 81",
        "address": "Le Perray-en-Yvelines",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 4.3,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "15357669662263606660",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15357669662263606660&q=logistique+78&start=80",
        "lsig": "AB86z5VLhEtJj8KX6m1j0IDYybHQ",
        "provider_id": "/g/1hc2qf78j",
        "gps_coordinates": {
            "latitude": 49.0540369,
            "longitude": 2.1691249999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Slt+78,+16+Chem.+des+B%C5%93ufs,+95540+M%C3%A9ry-sur-Oise/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65e5a343c3b0d:0xd52167307d03fd84?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Slt 78",
        "type": "Société de transport routier",
        "phone": "09 50 39 00 16",
        "address": "Méry-sur-Oise"
    },
    {
        "position": 3,
        "rating": 3.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "11322237300315784092",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11322237300315784092&q=logistique+78&start=80",
        "lsig": "AB86z5Vfd1Hc71YfX4dshdqWPMtw",
        "provider_id": "/g/1tg4w4m_",
        "gps_coordinates": {
            "latitude": 48.799686799999996,
            "longitude": 2.013887
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Stel,+4+Rue+Charlie+Chaplin,+78390+Bois-d'Arcy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e686c005cef26f:0x9d20aad63c00039c?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Stel",
        "type": "Société de transport routier",
        "phone": "01 34 60 68 65",
        "address": "Bois-d'Arcy",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 4,
        "rating": 4.2,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "1096009367201604964",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1096009367201604964&q=logistique+78&start=80",
        "lsig": "AB86z5Xyc9uoTNIHeDQ6uNpYzGZE",
        "provider_id": "/g/1tqt8_6g",
        "gps_coordinates": {
            "latitude": 48.7173631,
            "longitude": 1.6494893
        },
        "links": {
            "website": "http://www.ate78.fr/",
            "directions": "https://www.google.fr/maps/dir//ATE+-+DCS,+12+Bruy%C3%A8re+des+Vall%C3%A9es,+78113+Adainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6a0b2083155e1:0xf35ceb66a8d6564?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "ATE - DCS",
        "type": "Société de transport routier",
        "phone": "01 34 87 02 75",
        "address": "Adainville",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 5,
        "rating": 4.2,
        "reviews_original": "(36)",
        "reviews": 36,
        "place_id": "16735440613077115239",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16735440613077115239&q=logistique+78&start=80",
        "lsig": "AB86z5XPny97bqKrQfwBp3Ht2WB5",
        "provider_id": "/g/11b6dhlf92",
        "gps_coordinates": {
            "latitude": 48.992783599999996,
            "longitude": 1.7113264
        },
        "links": {
            "website": "https://www.exceldem.fr/?UTM_source=GMB_listing&UTM_medium=organic",
            "directions": "https://www.google.fr/maps/dir//Exceldem,+d%C3%A9m%C3%A9nagement+78+et+Garde-Meubles,+44+Rue+d'Alsace,+78200+Mantes-la-Jolie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6be4d3b009d51:0xe8403a91c61b6167?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Exceldem, déménagement 78 et Garde-Meubles",
        "type": "Déménageur",
        "phone": "01 34 79 14 67",
        "address": "Mantes-la-Jolie",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 6,
        "place_id": "11465711932992392662",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11465711932992392662&q=logistique+78&start=80",
        "lsig": "AB86z5W2myRtqAXdYTGDBgf3kdJ_",
        "provider_id": "/g/1tvw47ql",
        "gps_coordinates": {
            "latitude": 48.7561355,
            "longitude": 1.8773758
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Societe+Des+Transports+Laroche,+3+Rue+de+la+Charlaine,+78690+Saint-R%C3%A9my-l'Honor%C3%A9/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e69cf1ad015a9f:0x9f1e64414ef80dd6?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Societe Des Transports Laroche",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 34 87 90 44",
        "address": "Saint-Rémy-l'Honoré"
    },
    {
        "position": 7,
        "rating": 4.9,
        "reviews_original": "(34)",
        "reviews": 34,
        "place_id": "4406369998456428774",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4406369998456428774&q=logistique+78&start=80",
        "lsig": "AB86z5XvuO5e6Myk6zjyvlLpcr3R",
        "provider_id": "/g/11gzryhjg",
        "gps_coordinates": {
            "latitude": 48.753026299999995,
            "longitude": 1.9270456999999999
        },
        "links": {
            "website": "https://www.cargo.rent/les-agences-cargo/cargo-drive-coignieres",
            "directions": "https://www.google.fr/maps/dir//CarGo+Coigni%C3%A8res+Location+de+voitures+et+camions%2F+Service+carte+grise+fran%C3%A7aise+et+%C3%A9trang%C3%A8re,+18+Bis+Rue+des+Louveries,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68324cdcd7ca9:0x3d26922aeaef18e6?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "CarGo Coignières Location de voitures et camions/ Service carte grise française et étrangère",
        "type": "Agence de location de voitures",
        "phone": "01 30 60 00 72",
        "address": "Coignières",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 8,
        "place_id": "1206130961973882115",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1206130961973882115&q=logistique+78&start=80",
        "lsig": "AB86z5W2PE5jj8mwTeHES3tv3z9n",
        "provider_id": "/g/11b6djrhb6",
        "gps_coordinates": {
            "latitude": 48.792165,
            "longitude": 2.145524
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logis+Sa,+93+Rue+des+Chantiers,+78000+Versailles/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67c3101d1bc5b:0x10bd09b8350dad03?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Logis Sa",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "01 39 53 06 61",
        "address": "Versailles",
        "hours": "Fermé temporairement"
    },
    {
        "position": 9,
        "place_id": "12039538958444766735",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12039538958444766735&q=logistique+78&start=80",
        "lsig": "AB86z5Xxn7EDaPYdogALUGonGQoD",
        "provider_id": "/g/1thfdrs7",
        "gps_coordinates": {
            "latitude": 48.780518099999995,
            "longitude": 1.8898762
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Ramos,+14+Rue+de+Coigni%C3%A8res,+78760+Jouars-Pontchartrain/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e69c9f174ed53f:0xa71508e4fd93a60f?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Transports Ramos",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 34 87 93 47",
        "address": "Jouars-Pontchartrain",
        "hours": "Fermé temporairement"
    },
    {
        "position": 10,
        "place_id": "5310418267319677749",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5310418267319677749&q=logistique+78&start=80",
        "lsig": "AB86z5V6prIPCaGZtn5aVc1Q1zRd",
        "provider_id": "/g/1tkv924r",
        "gps_coordinates": {
            "latitude": 48.7523122,
            "longitude": 1.9265841
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Vaba,+18+Rue+des+Louveries,+78310+Coigni%C3%A8res/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e68324e0621bc9:0x49b265474055b335?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Transports Vaba",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 66 19 95",
        "address": "Coignières",
        "hours": "Fermé temporairement"
    },
    {
        "position": 11,
        "place_id": "15614658573174392233",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15614658573174392233&q=logistique+78&start=80",
        "lsig": "AB86z5XxtsJssZFs016mJ4XdSwb_",
        "provider_id": "/g/1tslj0tz",
        "gps_coordinates": {
            "latitude": 48.95464820000001,
            "longitude": 1.8232650000000001
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Chartier,+2+Rte+de+la+Falaise,+78680+%C3%89p%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6941af1a444c7:0xd8b2693e071145a9?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Transports Chartier",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 91 17 58",
        "address": "Épône",
        "hours": "Fermé temporairement"
    },
    {
        "position": 12,
        "place_id": "2758202425299768224",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2758202425299768224&q=logistique+78&start=80",
        "lsig": "AB86z5XPkDmjHkzO2Um1CAqBlLdi",
        "provider_id": "/g/11h40zryly",
        "gps_coordinates": {
            "latitude": 48.8228322,
            "longitude": 2.1315223
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transport+Sd,+45+Rue+de+Glatigny,+78150+Le+Chesnay-Rocquencourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67d0655b91427:0x26471a7e029d13a0?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Transport Sd",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "address": "Le Chesnay-Rocquencourt",
        "hours": "Fermé temporairement"
    },
    {
        "position": 13,
        "place_id": "14087000996386090287",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14087000996386090287&q=logistique+78&start=80",
        "lsig": "AB86z5VJynpB-mjzA2VCyLn7bxNj",
        "provider_id": "/g/11ph0vs_z8",
        "gps_coordinates": {
            "latitude": 48.7695795,
            "longitude": 1.9960813
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SDIS78-+Service+Technique+et+Logistique,+5+Rue+Denis+Papin,+78190+Trappes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e683fc692c8139:0xc37f14c5242aad2f?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "SDIS78- Service Technique et Logistique",
        "reviews_original": "Aucun avis",
        "type": "Académie de pompiers",
        "address": "Trappes",
        "hours": "Fermé temporairement"
    },
    {
        "position": 14,
        "place_id": "3009037772618714907",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3009037772618714907&q=logistique+78&start=80",
        "lsig": "AB86z5XDTlPX-4as4RF5-M_A4A3k",
        "provider_id": "/g/1th1tcc9",
        "gps_coordinates": {
            "latitude": 48.819421399999996,
            "longitude": 1.9697000999999998
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//T.m.g,+11+All.+des+Archi%C3%A8res,+78340+Les+Clayes-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e684524949ecad:0x29c23fe960abcf1b?sa=X&ved=2ahUKEwjQvPDHvY6CAxWjjokEHd4FBbg4UBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "T.m.g",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 30 54 27 94",
        "address": "Les Clayes-sous-Bois",
        "hours": "Fermé temporairement"
    },
    {
        "position": 1,
        "place_id": "13146608232599228362",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13146608232599228362&q=logistique+91",
        "lsig": "AB86z5W8d_d52BKE0zeC0AclyU3a",
        "provider_id": "/g/11btmqk62c",
        "gps_coordinates": {
            "latitude": 48.6899363,
            "longitude": 2.5119496
        },
        "links": {
            "website": "http://www.tlsweb.fr/",
            "directions": "https://www.google.fr/maps/dir//Transport+Logistique+Service+91,+6+Rue+Jean+Jaur%C3%A8s,+91860+%C3%89pinay-sous-S%C3%A9nart/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e1e6d4a5e58d:0xb6722288a94d8fca?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "Transport Logistique Service 91",
        "address": "Épinay-sous-Sénart",
        "type": "Service logistique",
        "phone": "01 72 16 56 20",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 2,
        "place_id": "15987319897336546927",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15987319897336546927&q=logistique+91",
        "lsig": "AB86z5WdmOj-XJOIUrcm_rwD2ugp",
        "provider_id": "/g/11b6d5k0y_",
        "gps_coordinates": {
            "latitude": 48.6434722,
            "longitude": 2.5401027
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+Logistique+TIGERY,+4,+boulevard+des+Pays-Bas,+Parc+d'Activit%C3%A9s+de+Parisud,+91250+Tigery/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e3cfb8725b29:0xddde5ebdff47866f?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "STEF Logistique TIGERY",
        "address": "Tigery",
        "type": "Service logistique",
        "phone": "01 69 13 81 00"
    },
    {
        "position": 3,
        "place_id": "13482203040421214384",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13482203040421214384&q=logistique+91",
        "lsig": "AB86z5VtzlAUDRyOZo2xNK-xtExO",
        "provider_id": "/g/11ghpp3r7y",
        "gps_coordinates": {
            "latitude": 48.674552299999995,
            "longitude": 2.2807119
        },
        "links": {
            "website": "https://www.compagnie-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Compagnie+Logistique+Express,+6+Rte+de+Saulx+les+Chartreux,+91160+Ballainvilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677fa6cad0a4d:0xbb1a683bc5ff78b0?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "Compagnie Logistique Express",
        "address": "Ballainvilliers",
        "type": "Service logistique",
        "phone": "01 69 33 19 19",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 4,
        "place_id": "16842101774008348137",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16842101774008348137&q=logistique+91",
        "lsig": "AB86z5URjClT6fZWZ2aX1oc2mNRk",
        "provider_id": "/g/11ddx1pysl",
        "gps_coordinates": {
            "latitude": 48.684003999999995,
            "longitude": 2.2090019
        },
        "links": {
            "website": "https://www.leroylogistique.com/agences/plateforme-logistique-paris-sud/",
            "directions": "https://www.google.fr/maps/dir//Le+Roy+Logistique+Paris+Sud,+32+avenue+de+l'oc%C3%A9anie,+Chem.+de+Courtaboeuf+zi+de,+91140+Villejust/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d63994599b1d:0xe9bb2a5486be6de9?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIFRAA&hl=fr&gl=fr"
        },
        "title": "Le Roy Logistique Paris Sud",
        "address": "Villejust",
        "type": "Service logistique",
        "phone": "01 60 92 34 40",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 5,
        "place_id": "10549440432420014305",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10549440432420014305&q=logistique+91",
        "lsig": "AB86z5Wxqy3u8mgVOpaU2LVAmvfV",
        "provider_id": "/g/1tfbs5h_",
        "gps_coordinates": {
            "latitude": 48.684055099999995,
            "longitude": 2.2078791000000004
        },
        "links": {
            "website": "http://www.ltm-services.com/",
            "directions": "https://www.google.fr/maps/dir//Logistique+Transport+Management,+ZA+Courtaboeuf+3,+32+Av.+de+l'Oc%C3%A9anie+B%C3%A2timent+1,+91940+Les+Ulis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d63916eb736d:0x9267242e1189c8e1?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "Logistique Transport Management",
        "address": "Les Ulis",
        "type": "Société de transport routier",
        "phone": "01 69 74 18 33",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 6,
        "place_id": "9756411140022832749",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9756411140022832749&q=logistique+91",
        "lsig": "AB86z5Xaoa08ZOsHAR9ZGc6E9xy5",
        "provider_id": "/g/1hc38wr_9",
        "gps_coordinates": {
            "latitude": 48.5643343,
            "longitude": 2.1665541
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//C.T.L+Cheutin+Transports+Logistique,+37+Rte+de+Dourdan,+91650+Breuillet/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d18996dccd93:0x8765bc3d7bb98e6d?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "C.T.L Cheutin Transports Logistique",
        "address": "Breuillet",
        "type": "Société de transport routier",
        "phone": "01 64 58 62 62"
    },
    {
        "position": 7,
        "place_id": "12142998397331493305",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12142998397331493305&q=logistique+91",
        "lsig": "AB86z5VM7S3Nq2zl3Rc8jrEQNO-u",
        "provider_id": "/g/1tgtdtlf",
        "gps_coordinates": {
            "latitude": 48.7037336,
            "longitude": 2.3434182
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Europe+Logistique+Service,+44+Av.+de+Champagne,+91420+Morangis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67605303ede5f:0xa88498b4bd14d1b9?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "Europe Logistique Service",
        "address": "Morangis",
        "type": "Société de transport routier",
        "phone": "01 64 54 92 92"
    },
    {
        "position": 8,
        "place_id": "1343734170196124343",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1343734170196124343&q=logistique+91",
        "lsig": "AB86z5XyGIqfZd5KILL5UayZxPv3",
        "provider_id": "/g/1tjpps_n",
        "gps_coordinates": {
            "latitude": 48.607166199999995,
            "longitude": 2.4398637
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ID+Logistics+-+Lisses,+Rue+Thomas+Edison,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e7521f128b4d:0x12a5e71bbf1822b7?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "ID Logistics - Lisses",
        "address": "Lisses",
        "type": "Service logistique",
        "phone": "01 69 22 86 00",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 9,
        "place_id": "7065409891314195686",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7065409891314195686&q=logistique+91",
        "lsig": "AB86z5U8eGWZyLHqEkTEWAWOEmzy",
        "provider_id": "/g/11b8jcrmmd",
        "gps_coordinates": {
            "latitude": 48.6222389,
            "longitude": 2.3551223
        },
        "links": {
            "website": "https://recrute.carrefour.fr/liste-des-metiers/supply-chain-production/entrepot",
            "directions": "https://www.google.fr/maps/dir//Carrefour+Supply+Chain+-+Fleury-M%C3%A9rogis,+20+Rue+Cl%C3%A9ment+Ader,+91700+Fleury-M%C3%A9rogis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5deaef75ce47f:0x620d60dcac505ce6?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIDhAA&hl=fr&gl=fr"
        },
        "title": "Carrefour Supply Chain - Fleury-Mérogis",
        "address": "Fleury-Mérogis",
        "type": "Service logistique",
        "phone": "01 69 72 15 80"
    },
    {
        "position": 10,
        "place_id": "13558870337595366238",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13558870337595366238&q=logistique+91",
        "lsig": "AB86z5XSTVwwGavRgbFfxBz1WlPq",
        "provider_id": "/g/1tncs5w4",
        "gps_coordinates": {
            "latitude": 48.6171891,
            "longitude": 2.3292766
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistique+Transport+Service+France,+6+Rue+du+Bicentenaire+de+la+R%C3%A9volution,+91220+Le+Plessis-P%C3%A2te/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d95f3bebfd85:0xbc2ac8bbebf3db5e?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQICxAA&hl=fr&gl=fr"
        },
        "title": "Logistique Transport Service France",
        "address": "Le Plessis-Pâte",
        "type": "Société de transport routier",
        "phone": "09 64 49 35 88"
    },
    {
        "position": 11,
        "place_id": "4633494290065844757",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4633494290065844757&q=logistique+91",
        "lsig": "AB86z5WdyOJHzGLExCycWtu9lcfn",
        "provider_id": "/g/11q1p3zfzp",
        "gps_coordinates": {
            "latitude": 48.5904077,
            "longitude": 2.438062
        },
        "links": {
            "website": "https://www.aac-globe-express.com/",
            "directions": "https://www.google.fr/maps/dir//GLOBE+LOGISTICS+91,+Rue+des+44+Arpents,+91100+Villab%C3%A9/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e729436b5571:0x404d7a81ec2cea15?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "GLOBE LOGISTICS 91",
        "address": "Villabé",
        "type": "Service logistique",
        "phone": "01 80 85 97 00",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 12,
        "place_id": "18114369285199374676",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18114369285199374676&q=logistique+91",
        "lsig": "AB86z5X7aNf9ZnGPEWpbmuWoow2t",
        "provider_id": "/g/11gfngzn30",
        "gps_coordinates": {
            "latitude": 48.584347099999995,
            "longitude": 2.2954871
        },
        "links": {
            "website": "https://www.id-logistics.com/fr/groupe/",
            "directions": "https://www.google.fr/maps/dir//Id+Logistics+-+Br%C3%A9tigny-sur-Orge,+60+Av.+de+la+Commune+de+Paris,+91220+Br%C3%A9tigny-sur-Orge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5da524ed62657:0xfb632ae40e8e2954?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIChAA&hl=fr&gl=fr"
        },
        "title": "Id Logistics - Brétigny-sur-Orge",
        "address": "Brétigny-sur-Orge",
        "type": "Service logistique",
        "hours": "Ouvert 24h/24"
    },
    {
        "position": 13,
        "place_id": "1337317433691829668",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1337317433691829668&q=logistique+91",
        "lsig": "AB86z5WDudE0S6zfpOvpCyGwNa6c",
        "provider_id": "/g/11sq8qmnxk",
        "gps_coordinates": {
            "latitude": 48.6054958,
            "longitude": 2.3588004
        },
        "links": {
            "website": "https://transports-raud.jetransporte.com/",
            "directions": "https://www.google.fr/maps/dir//Logistique+Parisienne+de+la+Menuiserie+(LPM)+-+Transports+RAUD,+1+Av.+de+la+Tremblaie,+91220+Le+Plessis-P%C3%A2te/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5df1acd9f82b5:0x128f1b1edb2375a4?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Logistique Parisienne de la Menuiserie (LPM) - Transports RAUD",
        "address": "Le Plessis-Pâte",
        "type": "Société de transport routier",
        "phone": "01 46 86 74 35"
    },
    {
        "position": 14,
        "place_id": "4437186174784884374",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4437186174784884374&q=logistique+91",
        "lsig": "AB86z5VHAvcMNhDxpcHVYjbq3Do9",
        "provider_id": "/g/11csq25z72",
        "gps_coordinates": {
            "latitude": 48.6170197,
            "longitude": 2.3948785999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+Bondoufle,+3+Rue+D%C3%A9sir+Pr%C3%A9vost+Z.A.C.+de+la+Marini%C3%A8re,+91070+Bondoufle/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5de7f019a0425:0x3d940d511653ce96?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "STEF Bondoufle",
        "address": "Bondoufle",
        "type": "Service logistique",
        "phone": "01 40 74 28 28"
    },
    {
        "position": 15,
        "place_id": "13341020614574782368",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13341020614574782368&q=logistique+91",
        "lsig": "AB86z5VF7YXcolv2riV7eYb7mh67",
        "provider_id": "/g/11fgkjhcm0",
        "gps_coordinates": {
            "latitude": 48.6227867,
            "longitude": 2.3614199
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Base+Logistique,+9+Rue+Cl%C3%A9ment+Ader,+91700+Fleury-M%C3%A9rogis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dea4fe86ceb7:0xb924d390b0e4b7a0?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIFBAA&hl=fr&gl=fr"
        },
        "title": "Base Logistique",
        "address": "Fleury-Mérogis",
        "type": "Service logistique"
    },
    {
        "position": 16,
        "place_id": "5051366757603406753",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5051366757603406753&q=logistique+91",
        "lsig": "AB86z5Vodk9UVDjgm_X6J5L-N4dx",
        "provider_id": "/g/1tj6t3k5",
        "gps_coordinates": {
            "latitude": 48.620379899999996,
            "longitude": 2.3173908
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//T.P.N.+LOGISTIQUE,+Z.A.+de+Rosi%C3%A8re,+5+chemin+de+l'Ancien+Parc,+91220+Br%C3%A9tigny-sur-Orge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d962e61ce7dd:0x461a0f4d812af3a1?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "T.P.N. LOGISTIQUE",
        "address": "Brétigny-sur-Orge",
        "type": "Société de transport routier",
        "phone": "01 69 88 19 19",
        "hours": "Ouvert 24h/24"
    },
    {
        "position": 17,
        "place_id": "5761500649229109152",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5761500649229109152&q=logistique+91",
        "lsig": "AB86z5WfdNTm3iWQEPDcDQmROV-C",
        "provider_id": "/g/11lkd0phqj",
        "gps_coordinates": {
            "latitude": 48.5661169,
            "longitude": 2.4635476
        },
        "links": {
            "website": "https://www.id-logistics.com/fr/groupe/",
            "directions": "https://www.google.fr/maps/dir//ID+LOGISTICS,+Rue+des+Haies+Blanches,+91830+Le+Coudray-Montceaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e73f3786b161:0x4ff4f650927bc7a0?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "ID LOGISTICS",
        "address": "Le Coudray-Montceaux",
        "type": "Service logistique",
        "hours": "Ouvert 24h/24"
    },
    {
        "position": 18,
        "place_id": "16739863033255465809",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16739863033255465809&q=logistique+91",
        "lsig": "AB86z5WsYwDYqDEtHrF6hx5FGO6l",
        "provider_id": "/g/11jr_nqvvp",
        "gps_coordinates": {
            "latitude": 48.6229636,
            "longitude": 2.3559498
        },
        "links": {
            "website": "https://gxo.com/",
            "directions": "https://www.google.fr/maps/dir//GXO+Logistics,+39+Rue+Cl%C3%A9ment+Ader,+91700+Fleury-M%C3%A9rogis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5df3b91e62a45:0xe84ff0bcb5e29351?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "GXO Logistics",
        "address": "Fleury-Mérogis",
        "type": "Service logistique",
        "hours": "Ouvert actuellement"
    },
    {
        "position": 19,
        "place_id": "11423747790365302936",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11423747790365302936&q=logistique+91",
        "lsig": "AB86z5Umd47FJW7NXGZ7F4TJc5PL",
        "provider_id": "/g/11gb3n0jw0",
        "gps_coordinates": {
            "latitude": 48.5918934,
            "longitude": 2.4310186
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Compagnie+De+Logistique+(CDL),+27+Rue+des+Cerisiers,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dd8ae1aca241:0x9e894e16f860a098?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "Compagnie De Logistique (CDL)",
        "address": "Lisses",
        "type": "Service logistique"
    },
    {
        "position": 20,
        "place_id": "7415214470760261149",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7415214470760261149&q=logistique+91",
        "lsig": "AB86z5XWdSWEqlUJpm0CuusNHElf",
        "provider_id": "/g/1td9pvps",
        "gps_coordinates": {
            "latitude": 48.718516799999996,
            "longitude": 2.2961749
        },
        "links": {
            "website": "http://www.fnac.fr/",
            "directions": "https://www.google.fr/maps/dir//Fnac+Logistique,+2+Rue+des+Champarts,+91300+Massy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677bf53fc8271:0x66e822460f00661d?sa=X&ved=2ahUKEwjQ9MDYvY6CAxUfMVkFHZq7A-MQ48ADegQICBAA&hl=fr&gl=fr"
        },
        "title": "Fnac Logistique",
        "address": "Massy",
        "type": "Service logistique",
        "phone": "01 55 21 57 93",
        "hours": "Ouvert ⋅ Ferme à 22:00"
    },
    {
        "position": 1,
        "rating": 4.5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "11085080030517104668",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11085080030517104668&q=logistique+91&start=20",
        "lsig": "AB86z5VBFYyekXrCbP72UtBVrPLM",
        "provider_id": "/g/11rk29kczv",
        "gps_coordinates": {
            "latitude": 48.5841393,
            "longitude": 2.2971445999999998
        },
        "links": {
            "website": "https://www.skipper-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//Skipper+Groupe+-+Plateforme+logistique+-+Br%C3%A9tigny,+90+Av.+de+la+Commune+de+Paris,+91220+Br%C3%A9tigny-sur-Orge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5db70fc028787:0x99d61d8e75bf901c?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Skipper Groupe - Plateforme logistique - Brétigny",
        "type": "Service logistique",
        "phone": "01 73 20 96 21",
        "address": "Brétigny-sur-Orge",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 2,
        "rating": 3,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "13453184277025668865",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13453184277025668865&q=logistique+91&start=20",
        "lsig": "AB86z5VXf_TB6UJfgFDzDbU29sgA",
        "provider_id": "/g/11fj1_4byy",
        "gps_coordinates": {
            "latitude": 48.7068011,
            "longitude": 2.2577111
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Fox+Ten+Logistique,+2+Voie+de+la+Cardon,+91120+Palaiseau/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67804cd096007:0xbab34fd269fc3f01?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Fox Ten Logistique",
        "type": "Service logistique",
        "address": "Palaiseau"
    },
    {
        "position": 3,
        "rating": 2.8,
        "reviews_original": "(650)",
        "reviews": 650,
        "description": "\"Entrepôt logistique avec personnel sympathique\"",
        "place_id": "13588326059716390972",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13588326059716390972&q=logistique+91&start=20",
        "lsig": "AB86z5UTF-3lkq_QLwchPsU96gLR",
        "provider_id": "/g/1hc2j4fk6",
        "gps_coordinates": {
            "latitude": 48.563541699999995,
            "longitude": 2.4603802999999997
        },
        "links": {
            "website": "https://europe.xpo.com/fr/",
            "directions": "https://www.google.fr/maps/dir//GXO+Logistics+-+Coudray-Montceaux,+9-11+Rue+des+Haies+Blanches,+91830+Le+Coudray-Montceaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e7aea3cbf50d:0xbc936e8ea994303c?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "GXO Logistics - Coudray-Montceaux",
        "type": "Service logistique",
        "phone": "01 69 90 70 29",
        "address": "Le Coudray-Montceaux",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 4,
        "rating": 4.4,
        "reviews_original": "(26)",
        "reviews": 26,
        "place_id": "17456752807547254792",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17456752807547254792&q=logistique+91&start=20",
        "lsig": "AB86z5VbdMs5nOv9T-zEw4eluSWw",
        "provider_id": "/g/1v6p3l8p",
        "gps_coordinates": {
            "latitude": 48.6794891,
            "longitude": 2.1970849
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "https://www.facebook.com/ISO-Partner-105810167836721",
            "directions": "https://www.google.fr/maps/dir//ISO+PARTNER,+ZA+DE+COURTABOEUF,+4+Av.+du+Parana,+91940+Les+Ulis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d63fcd68deaf:0xf242d83049a83808?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "ISO PARTNER",
        "type": "Service logistique",
        "phone": "01 64 49 58 58",
        "address": "Les Ulis",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 5,
        "rating": 3.6,
        "reviews_original": "(396)",
        "reviews": 396,
        "place_id": "5113458737866911091",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5113458737866911091&q=logistique+91&start=20",
        "lsig": "AB86z5UwnVu1L8TgzCcx8ky94U2_",
        "provider_id": "/g/11bw5szshs",
        "gps_coordinates": {
            "latitude": 48.581649,
            "longitude": 2.2985870999999998
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Geodis+Logistic,+72+Av.+de+la+Commune+de+Paris,+91220+Br%C3%A9tigny-sur-Orge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5da52d868b54f:0x46f6a7a13c2cad73?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Geodis Logistic",
        "type": "Service logistique",
        "phone": "01 69 88 33 11",
        "address": "Brétigny-sur-Orge",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 6,
        "rating": 3.3,
        "reviews_original": "(113)",
        "reviews": 113,
        "place_id": "11360822339969633924",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11360822339969633924&q=logistique+91&start=20",
        "lsig": "AB86z5X0TN5itEzuX2l2hdvGdObx",
        "provider_id": "/g/11bx6gm0sc",
        "gps_coordinates": {
            "latitude": 48.6017553,
            "longitude": 2.3678296999999997
        },
        "links": {
            "website": "https://europe.xpo.com/fr/",
            "directions": "https://www.google.fr/maps/dir//XPO+Distribution+France,+3+Rue+des+Bordes,+91070+Bondoufle/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dc1625db1a77:0x9da9bfb9da364e84?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "XPO Distribution France",
        "type": "Service logistique",
        "phone": "01 69 53 50 00",
        "address": "Ouvert actuellement"
    },
    {
        "position": 7,
        "rating": 3.9,
        "reviews_original": "(283)",
        "reviews": 283,
        "place_id": "15755249574529418651",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15755249574529418651&q=logistique+91&start=20",
        "lsig": "AB86z5UJPNwmIwlwrJGZRYdp80Hz",
        "provider_id": "/g/11btltcz_c",
        "gps_coordinates": {
            "latitude": 48.603358799999995,
            "longitude": 2.4424723999999998
        },
        "links": {
            "website": "https://geodis.com/?utm_campaign=Google%20My%20Business--LG--lpCON--ALL--ALL--CORP--NA--NA--NA--NA--NA--2021-09&utm_source=google&utm_medium=gmb&utm_content=Evry",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Contract+Logistics+(FMCG+Retail),+ZI+DE+LA+REMISE,+146+Rue+de+Corbeil,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5de1b67cab297:0xdaa5e4035d73459b?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Contract Logistics (FMCG Retail)",
        "type": "Service logistique",
        "address": "Lisses",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 8,
        "rating": 4.7,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "10766782001613131544",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10766782001613131544&q=logistique+91&start=20",
        "lsig": "AB86z5UIjMoOpmsKfWHmMMClOU-L",
        "provider_id": "/g/11h565mp88",
        "gps_coordinates": {
            "latitude": 48.680419799999996,
            "longitude": 2.1970098
        },
        "links": {
            "website": "http://www.groupe-idea.com/",
            "directions": "https://www.google.fr/maps/dir//IDEA+-+Plateforme+logistique+Les+Ulis,+4+avenue+de+Parana+Parc+d%E2%80%99Activit%C3%A9s+de+Courtab%C5%93uf,+91940+Les+Ulis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d749e9868e09:0x956b4b2f84384f18?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "IDEA - Plateforme logistique Les Ulis",
        "type": "Service logistique",
        "phone": "01 69 29 99 27",
        "address": "Les Ulis",
        "hours": "Fermé ⋅ Ouvre à 13:15"
    },
    {
        "position": 9,
        "place_id": "18147875124255174864",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18147875124255174864&q=logistique+91&start=20",
        "lsig": "AB86z5Vg35MWJKRB_dZFcqqn9ecI",
        "provider_id": "/g/11btm56035",
        "gps_coordinates": {
            "latitude": 48.7280716,
            "longitude": 2.333306
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Trans+Cargo+Logistique,+27+Rte+de+Paray,+91320+Wissous/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6765d784b7fe1:0xfbda34462160b0d0?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Trans Cargo Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "01 60 11 77 56",
        "address": "Wissous"
    },
    {
        "position": 10,
        "rating": 3.9,
        "reviews_original": "(15)",
        "reviews": 15,
        "place_id": "5218937906712357189",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5218937906712357189&q=logistique+91&start=20",
        "lsig": "AB86z5X9ZgQ9KAvFzLBDr0dJxMBE",
        "provider_id": "/g/11gfp9brcw",
        "gps_coordinates": {
            "latitude": 48.7485184,
            "longitude": 2.2810991
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SFERIS+base+logistique,+2+Rue+de+la+Viorme,+91370+Verri%C3%A8res-le-Buisson/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6776fbc5c025f:0x486d646002692945?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "SFERIS base logistique",
        "type": "Service logistique",
        "address": "Verrières-le-Buisson",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 11,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "15423814650554835187",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15423814650554835187&q=logistique+91&start=20",
        "lsig": "AB86z5XixJ5TQdDAA2rjauoAcpio",
        "provider_id": "/g/11pcpr6z30",
        "gps_coordinates": {
            "latitude": 48.7169168,
            "longitude": 2.3027064999999998
        },
        "links": {
            "website": "https://www.egetra.com/",
            "directions": "https://www.google.fr/maps/dir//Charvin+Logistics+Chilly+(ex-egetra),+ZAC+de+la+Butte+aux+Bergers,+8+Rue+Jacqueline+Auriol,+91380+Chilly-Mazarin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677e8c04ab9d1:0xd60c65b4afc960f3?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Charvin Logistics Chilly (ex-egetra)",
        "type": "Service logistique",
        "address": "Chilly-Mazarin",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 12,
        "rating": 3,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "2634373678519578815",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2634373678519578815&q=logistique+91&start=20",
        "lsig": "AB86z5UUTZ9B9OSYP6uJoaVHI2Pi",
        "provider_id": "/g/1thd12p9",
        "gps_coordinates": {
            "latitude": 48.564258200000005,
            "longitude": 2.4333339
        },
        "service_options": {
            "devis_en_ligne": true,
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "website": "http://www.vt-logistics.fr/",
            "directions": "https://www.google.fr/maps/dir//VT+Logistics,+29+Rue+de+Milly,+91540+Mennecy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5de11a7dce25d:0x248f2ce731cc70bf?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "VT Logistics",
        "type": "Société de transport routier",
        "phone": "01 60 91 16 21",
        "address": "Mennecy",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 13,
        "rating": 3.8,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "11743266558522120398",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11743266558522120398&q=logistique+91&start=20",
        "lsig": "AB86z5UW9nDgKq79YY-vzkaUh_p0",
        "provider_id": "/g/11sjd18jy0",
        "gps_coordinates": {
            "latitude": 48.598585199999995,
            "longitude": 2.3417787
        },
        "links": {
            "website": "https://www.id-logistics.com/fr/groupe/",
            "directions": "https://www.google.fr/maps/dir//H8XR%2BQV+ID+Logistics+-+Plessis-P%C3%A2t%C3%A9,+91220+Le+Plessis-P%C3%A2te/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5db9c0a5ea1a7:0xa2f876b76b6f58ce?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "ID Logistics - Plessis-Pâté",
        "type": "Service logistique",
        "address": "Le Plessis-Pâte"
    },
    {
        "position": 14,
        "rating": 2.8,
        "reviews_original": "(186)",
        "reviews": 186,
        "description": "\"Ce n est plus kuehne et nagel cest xpo logistique\"",
        "place_id": "12436949272713702709",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12436949272713702709&q=logistique+91&start=20",
        "lsig": "AB86z5WUJ_-yjsbv8mJO2CJavZZt",
        "provider_id": "/g/11b7lhbl1z",
        "gps_coordinates": {
            "latitude": 48.5635276,
            "longitude": 2.4603562
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/fr_fr/",
            "directions": "https://www.google.fr/maps/dir//GXO+(Carrefour)+-+le+Coudray-Montceaux,+4+Rue+des+Verts+Buissons,+91830+Le+Coudray-Montceaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e650c2db493f:0xac98eb7841a72d35?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "GXO (Carrefour) - le Coudray-Montceaux",
        "type": "Service logistique",
        "phone": "01 60 79 69 70",
        "address": "Le Coudray-Montceaux"
    },
    {
        "position": 15,
        "place_id": "15672805558054755176",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15672805558054755176&q=logistique+91&start=20",
        "lsig": "AB86z5Xf-Rq6sdlOAGTHEhobnvf9",
        "provider_id": "/g/1v3gr6q4",
        "gps_coordinates": {
            "latitude": 48.713617500000005,
            "longitude": 2.3680317
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//L.T.T+Logistique+Location,+8+Rue+de+Kruft,+91550+Paray-Vieille-Poste/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e675e840ceb03f:0xd980fd9df19f1b68?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "L.T.T Logistique Location",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 69 57 94 46",
        "address": "Paray-Vieille-Poste"
    },
    {
        "position": 16,
        "rating": 2.7,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "17625647609305360937",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17625647609305360937&q=logistique+91&start=20",
        "lsig": "AB86z5ULRrd5PDPpBue4H_z_Tz-q",
        "provider_id": "/g/11h2f8_qt1",
        "gps_coordinates": {
            "latitude": 48.566235,
            "longitude": 2.4650988
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//XPO+Transport+Solution+ex+N.+Dentressangle,+11+Rue+des+Haies+Blanches,+91830+Le+Coudray-Montceaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e7a5968cb173:0xf49ae11db0dbea29?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "XPO Transport Solution ex N. Dentressangle",
        "type": "Service logistique",
        "address": "Le Coudray-Montceaux"
    },
    {
        "position": 17,
        "place_id": "4396769032673390213",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4396769032673390213&q=logistique+91&start=20",
        "lsig": "AB86z5WVfOoHgm5z5g4wdHxPvdUt",
        "gps_coordinates": {
            "latitude": 48.5937482,
            "longitude": 2.4326803
        },
        "title": "Groupe A Fret",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 60 78 33 18",
        "hours": "Ouvert 24h/24"
    },
    {
        "position": 18,
        "rating": 4.3,
        "reviews_original": "(41)",
        "reviews": 41,
        "place_id": "7536232474612049017",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7536232474612049017&q=logistique+91&start=20",
        "lsig": "AB86z5XRVdeJTVxaz8ehKKziMAPd",
        "provider_id": "/g/11csbs5vft",
        "gps_coordinates": {
            "latitude": 48.5480977,
            "longitude": 2.2143208
        },
        "links": {
            "website": "http://www.jokerlog.fr/",
            "directions": "https://www.google.fr/maps/dir//Joker+Log,+Rue+des+Cerisiers,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5ddf5373b792b:0x68961381ca03a479?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Joker Log",
        "type": "Service logistique",
        "address": "Lisses",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 19,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "8516665518627530888",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8516665518627530888&q=logistique+91&start=20",
        "lsig": "AB86z5XlocirG8cxlfk3Y9-xnoUU",
        "provider_id": "/g/11jd9wllkv",
        "gps_coordinates": {
            "latitude": 48.6431723,
            "longitude": 2.3945222999999998
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//France+alliance,+91790+Boissy-sous-Saint-Yon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d14294a6f0a5:0x7631462a7c9ca888?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "France alliance",
        "type": "Service logistique",
        "address": "Boissy-sous-Saint-Yon"
    },
    {
        "position": 20,
        "rating": 3.3,
        "reviews_original": "(94)",
        "reviews": 94,
        "place_id": "18358052985252523762",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18358052985252523762&q=logistique+91&start=20",
        "lsig": "AB86z5Xb3Pakt97bgb-bcmhHWwtO",
        "provider_id": "/g/11g8_1llgm",
        "gps_coordinates": {
            "latitude": 48.643173,
            "longitude": 2.3945222
        },
        "links": {
            "website": "http://www.l4-logistics.fr/",
            "directions": "https://www.google.fr/maps/dir//L4+Logistics,+44+Av.+Paul+Langevin,+91130+Ris-Orangis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5de5803d11119:0xfec4e7ecc9c6aef2?sa=X&ved=2ahUKEwir84_bvY6CAxWwk2oFHRreDeU4FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "L4 Logistics",
        "type": "Service logistique",
        "phone": "01 69 02 86 00",
        "address": "Ris-Orangis"
    },
    {
        "position": 1,
        "rating": 3.1,
        "reviews_original": "(15)",
        "reviews": 15,
        "description": "\"Transport de colis sfr\"",
        "place_id": "17010549257784380062",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17010549257784380062&q=logistique+91&start=40",
        "lsig": "AB86z5WsRUpkPkeStk55Rc5CKG8c",
        "provider_id": "/g/11c55b_c8v",
        "gps_coordinates": {
            "latitude": 48.5875097,
            "longitude": 2.4433634
        },
        "links": {
            "website": "http://www.log-ins.fr/",
            "directions": "https://www.google.fr/maps/dir//Log'ins,+Rue+des+44+Arpents,+91100+Villab%C3%A9/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e7667741126b:0xec119c6c9885ca9e?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Log'ins",
        "type": "Service logistique",
        "phone": "06 26 22 05 90",
        "address": "Villabé"
    },
    {
        "position": 2,
        "place_id": "14861016119904189822",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14861016119904189822&q=logistique+91&start=40",
        "lsig": "AB86z5UKe5rcsovy0ZQn3ZvDFO0J",
        "gps_coordinates": {
            "latitude": 48.6015924,
            "longitude": 2.3708527999999998
        },
        "title": "ravp logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 08 60 86 60",
        "hours": "Fermé ⋅ Ouvre à 08:00 mer."
    },
    {
        "position": 3,
        "rating": 4.5,
        "reviews_original": "(16)",
        "reviews": 16,
        "place_id": "3219916127315082267",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3219916127315082267&q=logistique+91&start=40",
        "lsig": "AB86z5VQzG0qGsAT-Kq72AYrsVzq",
        "provider_id": "/g/11gj19r1q2",
        "gps_coordinates": {
            "latitude": 48.6347628,
            "longitude": 2.5034012999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//BOVIS+STOCKAGE+INTEGRATION,+Bondoufle/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5ddc8ae55eaf1:0x2caf70a86f2abc1b?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "BOVIS STOCKAGE INTEGRATION",
        "type": "Service logistique",
        "address": "Bondoufle"
    },
    {
        "position": 4,
        "rating": 4.1,
        "reviews_original": "(130)",
        "reviews": 130,
        "place_id": "9709130064693600478",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9709130064693600478&q=logistique+91&start=40",
        "lsig": "AB86z5V1Wysb6i_RixPc-hOznFHY",
        "provider_id": "/g/11cn5p19qt",
        "gps_coordinates": {
            "latitude": 48.5935376,
            "longitude": 2.437324
        },
        "links": {
            "website": "http://www.dispam.fr/",
            "directions": "https://www.google.fr/maps/dir//Dispam+Tigery,+ZAC+des+Foss%C3%A9s+Neufs,+11+Rue+du+Parc+des+Vergers,+91250+Tigery/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e1150a209c33:0x86bdc25a4820a0de?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Dispam Tigery",
        "type": "Société de transport routier",
        "phone": "01 60 91 80 35",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 5,
        "rating": 4.5,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "550635400011909502",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=550635400011909502&q=logistique+91&start=40",
        "lsig": "AB86z5Xmb7c-k0BdULmu5KZoDchb",
        "provider_id": "/g/1tfgj3hx",
        "gps_coordinates": {
            "latitude": 48.7062327,
            "longitude": 2.2949037999999997
        },
        "links": {
            "website": "http://www.tologistiques.com/",
            "directions": "https://www.google.fr/maps/dir//T.o+Logistiques+Tol,+3+Rue+de+la+Closerie,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e75e411e4dd7:0x7a43ffa9a77097e?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "T.o Logistiques Tol",
        "type": "Société de livraison",
        "phone": "01 69 11 55 60",
        "address": "Lisses",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 6,
        "rating": 3,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "11726126816121056212",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11726126816121056212&q=logistique+91&start=40",
        "lsig": "AB86z5WImY6lmbkkI0FET9Cw2FKQ",
        "provider_id": "/g/11tsr2n2df",
        "gps_coordinates": {
            "latitude": 48.6614139,
            "longitude": 2.4128038
        },
        "links": {
            "website": "https://www.delanchy.com/",
            "directions": "https://www.google.fr/maps/dir//DELANCHY+Prestations+de+Services+91+BIO,+36+Rte+de+Longjumeau+B%C3%A2timent+A,+91380+Chilly-Mazarin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677b11b9837a5:0xa2bb92362a13ebd4?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "DELANCHY Prestations de Services 91 BIO",
        "type": "Société de transport routier",
        "phone": "01 69 10 17 30",
        "address": "Chilly-Mazarin"
    },
    {
        "position": 7,
        "place_id": "7723874065749929027",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7723874065749929027&q=logistique+91&start=40",
        "lsig": "AB86z5VtfF6oTvcs-URRaqZNkQmZ",
        "provider_id": "/g/1wf37xhw",
        "gps_coordinates": {
            "latitude": 48.610876499999996,
            "longitude": 2.3805986999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Agms+TMP+Logistique,+1+Av.+Mac+Cormick,+91130+Ris-Orangis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dfb6a652542f:0x6b30b68a3ae06c43?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Agms TMP Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 69 46 50 21",
        "address": "Ris-Orangis"
    },
    {
        "position": 8,
        "place_id": "7807728559088990965",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7807728559088990965&q=logistique+91&start=40",
        "lsig": "AB86z5VtFivVLwZ2NV2s9iRpqhS1",
        "provider_id": "/g/1td7sh54",
        "gps_coordinates": {
            "latitude": 48.7450027,
            "longitude": 2.3629819999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Cinram+Logistics+France,+Rue+de+la+Garenne,+91070+Bondoufle/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5ddd5fac850c9:0x6c5a9fc1e32bfaf5?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Cinram Logistics France",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 60 86 43 34",
        "address": "Bondoufle"
    },
    {
        "position": 9,
        "rating": 3.8,
        "reviews_original": "(235)",
        "reviews": 235,
        "place_id": "17387505213036546603",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17387505213036546603&q=logistique+91&start=40",
        "lsig": "AB86z5Uc9wOChNhHQPMWdoJwI_Sc",
        "provider_id": "/g/1tdmpcgk",
        "gps_coordinates": {
            "latitude": 48.6230124,
            "longitude": 2.3271322
        },
        "links": {
            "website": "http://www.delanchy.com/",
            "directions": "https://www.google.fr/maps/dir//Delanchy,+1+Av.+de+l'Europe,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677daec414e89:0xf14cd3de494bca2b?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Delanchy",
        "type": "Service logistique",
        "phone": "01 69 10 17 30",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 10,
        "rating": 3.7,
        "reviews_original": "(138)",
        "reviews": 138,
        "description": "\"Très bonne boîte logistique\"",
        "place_id": "16154452451805095990",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16154452451805095990&q=logistique+91&start=40",
        "lsig": "AB86z5XklAc5fCC4-oT7pg886cZH",
        "provider_id": "/g/1yfj6fdx6",
        "gps_coordinates": {
            "latitude": 48.607371699999995,
            "longitude": 2.443202
        },
        "links": {
            "website": "https://www.xpo.com/",
            "directions": "https://www.google.fr/maps/dir//GXO+Logistics+France,+19+Av.+Condorcet,+91240+Saint-Michel-sur-Orge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d95d7107b2eb:0xe03024ea3ac7e836?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "GXO Logistics France",
        "type": "Service logistique",
        "address": "Saint-Michel-sur-Orge",
        "hours": "Fermé ⋅ Ouvre à 01:30 mer."
    },
    {
        "position": 11,
        "rating": 4.4,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "5646512501976565417",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5646512501976565417&q=logistique+91&start=40",
        "lsig": "AB86z5USLEFvzE6AAnlfuIiRo0JN",
        "provider_id": "/g/11fnqjvgrv",
        "gps_coordinates": {
            "latitude": 48.7269052,
            "longitude": 2.3145450999999997
        },
        "links": {
            "website": "http://www.dgroupe.fr/ServicesDistrilog.php",
            "directions": "https://www.google.fr/maps/dir//Distrilog,+Distrilog+zac+la+piece+de+la+remise+prologis+park+Evry,+Rue+Thomas+Edison,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e779577acbb5:0x4e5c71343c1d86a9?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Distrilog",
        "type": "Service logistique",
        "address": "Lisses"
    },
    {
        "position": 12,
        "rating": 3.7,
        "reviews_original": "(18)",
        "reviews": 18,
        "place_id": "13050722402263359396",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13050722402263359396&q=logistique+91&start=40",
        "lsig": "AB86z5W7M1ExVSTaJFM0uoAnR18m",
        "provider_id": "/g/1tq4qdk5",
        "gps_coordinates": {
            "latitude": 48.588842,
            "longitude": 2.3012494
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Sotralog,+14+Bd+Arago,+91320+Wissous/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6765220b48395:0xb51d7ae11123dfa4?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Sotralog",
        "type": "Service logistique",
        "phone": "01 69 30 74 08",
        "address": "Wissous"
    },
    {
        "position": 13,
        "rating": 3.3,
        "reviews_original": "(18)",
        "reviews": 18,
        "place_id": "10984709510017041761",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10984709510017041761&q=logistique+91&start=40",
        "lsig": "AB86z5UElU7bsfpAyf5MsmPI0Aqj",
        "provider_id": "/g/11bzyprw11",
        "gps_coordinates": {
            "latitude": 48.67759220000001,
            "longitude": 2.2814877
        },
        "links": {
            "website": "https://geodis.com/?utm_campaign=Google%20My%20Business--LG--lpCON--ALL--ALL--CORP--NA--NA--NA--NA--NA--2021-09&utm_source=google&utm_medium=gmb&utm_content=Bretigny-Orge",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Contract+Logistics+(FMCG+Retail),+Av.+de+la+Commune+de+Paris,+91220+Br%C3%A9tigny-sur-Orge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66fcc02e4944b:0x98718719916bc561?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Contract Logistics (FMCG Retail)",
        "type": "Service logistique",
        "phone": "01 69 88 33 11",
        "address": "Brétigny-sur-Orge",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 14,
        "place_id": "17539266412076506656",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17539266412076506656&q=logistique+91&start=40",
        "lsig": "AB86z5WdftFCR0JfyiI0hALt71iF",
        "provider_id": "/g/11hcw4fsfd",
        "gps_coordinates": {
            "latitude": 48.689851499999996,
            "longitude": 2.5120242
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Abbas+logistique,+2-44+Rte+d'Orl%C3%A9ans,+91160+Ballainvilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d815979bf1eb:0xf367fddff0c29e20?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Abbas logistique",
        "reviews_original": "Aucun avis",
        "type": "Fournisseur de palettes",
        "address": "Ballainvilliers",
        "hours": "Fermé ⋅ Ouvre à 05:30 mer."
    },
    {
        "position": 15,
        "place_id": "14629356570186720721",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14629356570186720721&q=logistique+91&start=40",
        "lsig": "AB86z5XinAruzOTvWvn41afqNDFe",
        "provider_id": "/g/1whdhn9l",
        "gps_coordinates": {
            "latitude": 48.6060942,
            "longitude": 2.3645765
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Synergie+Logistique+Epinay,+6+Rue+Jean+Jaur%C3%A8s,+91860+%C3%89pinay-sous-S%C3%A9nart/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e1e100e7f475:0xcb05ea4a7a81a5d1?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Synergie Logistique Epinay",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 69 39 12 55",
        "address": "Épinay-sous-Sénart"
    },
    {
        "position": 16,
        "rating": 3.3,
        "reviews_original": "(30)",
        "reviews": 30,
        "place_id": "6719943055240134840",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6719943055240134840&q=logistique+91&start=40",
        "lsig": "AB86z5XEA08pDMcVSV8RVUjcWcOl",
        "provider_id": "/g/11bbx15fq_",
        "gps_coordinates": {
            "latitude": 48.543306699999995,
            "longitude": 2.378413
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Ellipse+Logistic+CPP,+13+Rue+Henri+Dunant,+91070+Bondoufle/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dc19b3b015c3:0x5d42089ade7100b8?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Ellipse Logistic CPP",
        "type": "Service logistique",
        "phone": "01 60 86 72 52",
        "address": "Ouvert actuellement"
    },
    {
        "position": 17,
        "rating": 2.7,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "12344777602456753566",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12344777602456753566&q=logistique+91&start=40",
        "lsig": "AB86z5X9ls8npKIry9hxYwPL3DvG",
        "provider_id": "/g/11flt3hl2j",
        "gps_coordinates": {
            "latitude": 48.6284255,
            "longitude": 2.3983173
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Bio+Congel,+Entrepot+chez+SUPERGEL91,+8+Rte+de+Fontenay,+91610+Ballancourt-sur-Essonne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dcd40b8bdb99:0xab5175d2f1a2159e?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Bio Congel",
        "type": "Service logistique",
        "phone": "06 69 48 34 98",
        "address": "Ballancourt-sur-Essonne",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 18,
        "rating": 3.9,
        "reviews_original": "(11)",
        "reviews": 11,
        "place_id": "13529275945134860136",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13529275945134860136&q=logistique+91&start=40",
        "lsig": "AB86z5XkC0K488DKSaiWucpKpB2Y",
        "provider_id": "/g/11hxn54b11",
        "gps_coordinates": {
            "latitude": 48.4416365,
            "longitude": 2.4592798
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//PRISME,+2+Bis+Av.+du+Front+populaire,+91130+Ris-Orangis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dfa22b7e133d:0xbbc1a4ca7a002768?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "PRISME",
        "type": "Service logistique",
        "phone": "01 75 25 50 10",
        "address": "Ris-Orangis",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 19,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "10832956825856833293",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10832956825856833293&q=logistique+91&start=40",
        "lsig": "AB86z5UE1ILaF4GB_Y4VTlU3bsyp",
        "provider_id": "/g/1tggmytg",
        "gps_coordinates": {
            "latitude": 48.6009591,
            "longitude": 2.4088843
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Boscher+Ren%C3%A9+Logistique,+49+Rue+du+Souvenir,+91490+Moigny-sur-%C3%89cole/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5ea31eb8aecd3:0x965664d67056f70d?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Transports Boscher René Logistique",
        "type": "Société de transport routier",
        "phone": "01 64 98 48 09",
        "address": "Moigny-sur-École"
    },
    {
        "position": 20,
        "place_id": "16581132176047460605",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16581132176047460605&q=logistique+91&start=40",
        "lsig": "AB86z5XIzOeaZAfQvowf1aldlR3P",
        "provider_id": "/g/11ryh3qsrc",
        "gps_coordinates": {
            "latitude": 48.60096,
            "longitude": 2.4088843
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//AVENIR+LOGISTIC+CONSEIL+Group,+10+Rue+L%C3%A9onard+de+Vinci,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5ddd80364a957:0xe61c03dd0f1bd0fd?sa=X&ved=2ahUKEwj2xJjcvY6CAxWilGoFHTnFDeU4KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "AVENIR LOGISTIC CONSEIL Group",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 60 78 93 91",
        "address": "Lisses",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 1,
        "rating": 3.8,
        "reviews_original": "(93)",
        "reviews": 93,
        "place_id": "3572418772307860850",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3572418772307860850&q=logistique+91&start=60",
        "lsig": "AB86z5V-FOkH9kvUuj5ImcBG4TkA",
        "provider_id": "/g/11f103rcjf",
        "gps_coordinates": {
            "latitude": 48.568259499999996,
            "longitude": 2.4662431
        },
        "links": {
            "website": "http://www.livrer-auchan.net/entrepots/liste.php",
            "directions": "https://www.google.fr/maps/dir//Auchan+logistique+Entrep%C3%B4t+kuehne+Et+Nagel,+91830+Le+Coudray-Montceaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e7a8a4fa22d5:0x3193c7f22858dd72?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Auchan logistique Entrepôt kuehne Et Nagel",
        "type": "Service logistique",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 2,
        "rating": 4.1,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "13540161007913400460",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13540161007913400460&q=logistique+91&start=60",
        "lsig": "AB86z5WiNZNijTJOdvVdkrm1N0XI",
        "provider_id": "/g/1tj2b9bp",
        "gps_coordinates": {
            "latitude": 48.681558300000006,
            "longitude": 2.1959888
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Gondrand+Fr%C3%A8res+SA,+3+Av.+d'Amazonie,+91940+Les+Ulis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d63f215462a9:0xbbe850b2a645f88c?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "Gondrand Frères SA",
        "type": "Société de transport routier",
        "phone": "01 69 18 80 70",
        "address": "Les Ulis"
    },
    {
        "position": 3,
        "rating": 3.8,
        "reviews_original": "(11)",
        "reviews": 11,
        "place_id": "242332374898899863",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=242332374898899863&q=logistique+91&start=60",
        "lsig": "AB86z5XEhPxbixvUgCuT4phYDzQD",
        "provider_id": "/g/1tjjnpjx",
        "gps_coordinates": {
            "latitude": 48.70596760000001,
            "longitude": 2.2956966999999997
        },
        "links": {
            "website": "http://www.delanchy.com/",
            "directions": "https://www.google.fr/maps/dir//BSA+International,+36+Rte+de+Longjumeau+B%C3%A2timent+A,+91380+Chilly-Mazarin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677daec414eb5:0x35cf002d36cfb97?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "BSA International",
        "type": "Société de transport routier",
        "phone": "01 69 10 17 15",
        "address": "Chilly-Mazarin",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 4,
        "rating": 3.8,
        "reviews_original": "(265)",
        "reviews": 265,
        "place_id": "11394187457015486591",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11394187457015486591&q=logistique+91&start=60",
        "lsig": "AB86z5XvSV8dEnZ4M6pgplsxoE4-",
        "provider_id": "/g/11bxdyyd5r",
        "gps_coordinates": {
            "latitude": 48.721897999999996,
            "longitude": 2.4077341
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+PARIS+ATHIS,+17+Rue+des+Guyards+Bp9+Cd118,+91200+Athis-Mons/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6750f204f7be3:0x9e20491f879e987f?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "STEF PARIS ATHIS",
        "type": "Service logistique",
        "phone": "01 49 75 33 66",
        "address": "Ouvert actuellement"
    },
    {
        "position": 5,
        "place_id": "6205796032866664380",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6205796032866664380&q=logistique+91&start=60",
        "lsig": "AB86z5XAz2UVtfTsT9Wns7YyJ3Ai",
        "provider_id": "/g/11khzp1r53",
        "gps_coordinates": {
            "latitude": 48.5282998,
            "longitude": 2.3682922
        },
        "links": {
            "website": "https://a-kaz.com/",
            "directions": "https://www.google.fr/maps/dir//Akaz,+14+Imp.+Hector+Berlioz,+91610+Ballancourt-sur-Essonne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5c33148795555:0x561f6a9cb78bbfbc?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Akaz",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "07 66 16 26 56",
        "address": "Ballancourt-sur-Essonne"
    },
    {
        "position": 6,
        "rating": 2.5,
        "reviews_original": "(71)",
        "reviews": 71,
        "place_id": "8795028833426201965",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8795028833426201965&q=logistique+91&start=60",
        "lsig": "AB86z5UjQ9HcfeM2dDULt8p7V1MW",
        "provider_id": "/g/11f7r7kg56",
        "gps_coordinates": {
            "latitude": 48.5855496,
            "longitude": 2.4401024
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//geodis+auchan,+Rue+des+44+Arpents,+91100+Villab%C3%A9/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e7fe0b5331f3:0x7a0e38203dafdd6d?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "geodis auchan",
        "type": "Société de livraison",
        "address": "Villabé",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 7,
        "rating": 3.2,
        "reviews_original": "(676)",
        "reviews": 676,
        "description": "\"Plate-forme logistique du célèbre groupe de e commerce international.\"",
        "place_id": "6028686274461543048",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6028686274461543048&q=logistique+91&start=60",
        "lsig": "AB86z5Vud_--LHh7Vp7XPggdlkK3",
        "provider_id": "/g/11j1t74cfj",
        "gps_coordinates": {
            "latitude": 48.598582699999994,
            "longitude": 2.3172216999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Amazon+ORY4,+Essais+en+Vol,+2+Rue+du+Centre,+91220+Br%C3%A9tigny-sur-Orge/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dbbb8c9537b7:0x53aa3239ab8daa88?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Amazon ORY4",
        "type": "Entrepôt",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 8,
        "rating": 3.9,
        "reviews_original": "(98)",
        "reviews": 98,
        "description": "\"Très bonne société efficace et rapide pour dechargement de marchandises\"",
        "place_id": "2804222933266542874",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2804222933266542874&q=logistique+91&start=60",
        "lsig": "AB86z5XEoUEJabM5X1JIagPH3FS9",
        "provider_id": "/g/1vzg1kln",
        "gps_coordinates": {
            "latitude": 48.721124499999995,
            "longitude": 2.3406841
        },
        "links": {
            "website": "https://www.stg-logistique.fr/",
            "directions": "https://www.google.fr/maps/dir//STG+Wissous,+Rue+du+Berger,+91320+Wissous/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67656bb31beb3:0x26ea99e6805b311a?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "STG Wissous",
        "type": "Service logistique",
        "phone": "01 60 13 45 96",
        "address": "Wissous",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 9,
        "rating": 4.8,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "8673476974615388207",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8673476974615388207&q=logistique+91&start=60",
        "lsig": "AB86z5VxQGbL7jekEdo4qp3xN8m_",
        "provider_id": "/g/11g03lqr2n",
        "gps_coordinates": {
            "latitude": 48.606764299999995,
            "longitude": 2.4466286
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Agidra,+1+Rue+Thomas+Edison,+91090+Lisses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e751e0175427:0x785e615ab77ae02f?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Agidra",
        "type": "Service logistique",
        "address": "Lisses"
    },
    {
        "position": 10,
        "rating": 3.6,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "2032133185692462366",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2032133185692462366&q=logistique+91&start=60",
        "lsig": "AB86z5XWg4wkjBntHjdgVM971UC2",
        "provider_id": "/g/11fsmv6rw5",
        "gps_coordinates": {
            "latitude": 48.728957799999996,
            "longitude": 2.3219718
        },
        "links": {
            "website": "http://www.dartess.fr/",
            "directions": "https://www.google.fr/maps/dir//Dartess+-+Ile-de-France,+14+Av.+Amp%C3%A8re,+91320+Wissous/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67650be200ed9:0x1c33965d9d7b6d1e?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Dartess - Ile-de-France",
        "type": "Service logistique",
        "phone": "01 88 10 01 08",
        "address": "Wissous",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 11,
        "rating": 3.2,
        "reviews_original": "(38)",
        "reviews": 38,
        "place_id": "3354843230201097919",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3354843230201097919&q=logistique+91&start=60",
        "lsig": "AB86z5Xzr4MrohNHyCNZWJwjW_s1",
        "provider_id": "/g/1tftdmgb",
        "gps_coordinates": {
            "latitude": 48.647976899999996,
            "longitude": 2.3960349
        },
        "links": {
            "website": "https://uls-transport.com/",
            "directions": "https://www.google.fr/maps/dir//Transport+ULS,+28+Av.+Paul+Langevin,+91130+Ris-Orangis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5de4a50834713:0x2e8ecc24a542aebf?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Transport ULS",
        "type": "Société de transport routier",
        "phone": "01 69 21 00 00",
        "address": "Ris-Orangis",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 12,
        "rating": 3.2,
        "reviews_original": "(38)",
        "reviews": 38,
        "description": "\"Entreprise de commerce international très sérieuse, offrant un service de qualité.\"",
        "place_id": "13191891264049772484",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13191891264049772484&q=logistique+91&start=60",
        "lsig": "AB86z5USQvIcwpZ98k_TNyFkHUi6",
        "provider_id": "/g/12ll2dryj",
        "gps_coordinates": {
            "latitude": 48.6838282,
            "longitude": 2.2190498
        },
        "links": {
            "website": "https://sifalogistics.com/",
            "directions": "https://www.google.fr/maps/dir//SIFA,+8+Rue+du+Z%C3%A9phyr,+91140+Villejust/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d62cf3ba8469:0xb71303360543f7c4?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "SIFA",
        "type": "Service logistique",
        "phone": "01 69 59 89 89",
        "address": "Villejust"
    },
    {
        "position": 13,
        "rating": 4.1,
        "reviews_original": "(36)",
        "reviews": 36,
        "place_id": "2937185100151501581",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2937185100151501581&q=logistique+91&start=60",
        "lsig": "AB86z5Vk3nZdUyx9ibCc5RthzAzZ",
        "provider_id": "/g/11b6dth318",
        "gps_coordinates": {
            "latitude": 48.632480199999996,
            "longitude": 2.5052733
        },
        "links": {
            "website": "https://www.jokerlog.fr/",
            "directions": "https://www.google.fr/maps/dir//Joker+Log,+Tigery/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e16af7eb6f9f:0x28c2fa496619b30d?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Joker Log",
        "type": "Service logistique",
        "phone": "01 60 78 60 27",
        "address": "Tigery",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 14,
        "rating": 1.9,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "16385153631242123726",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16385153631242123726&q=logistique+91&start=60",
        "lsig": "AB86z5U6XUtcI_wodujiP9tP6WC0",
        "provider_id": "/g/11h2djzblg",
        "gps_coordinates": {
            "latitude": 48.6229194,
            "longitude": 2.3336715
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transport+Sgb,+4+Rue+Lucien+Sampaix,+91700+Sainte-Genevi%C3%A8ve-des-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d95a55500001:0xe363c26a546379ce?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Transport Sgb",
        "type": "Société de transport routier",
        "phone": "06 98 16 91 93",
        "address": "Sainte-Geneviève-des-Bois",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 15,
        "rating": 3.6,
        "reviews_original": "(23)",
        "reviews": 23,
        "place_id": "3472112241473234291",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3472112241473234291&q=logistique+91&start=60",
        "lsig": "AB86z5XbLpEz92MhfCXW9twODLii",
        "provider_id": "/g/11c55kwf27",
        "gps_coordinates": {
            "latitude": 48.7227708,
            "longitude": 2.3417116
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//DLP,+1549+Rue+du+Berger,+94390+Wissous/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6766bce51c151:0x302f6bb0054c2573?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "DLP",
        "type": "Service logistique",
        "address": "Wissous",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 16,
        "place_id": "984664338384499379",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=984664338384499379&q=logistique+91&start=60",
        "lsig": "AB86z5UluFrXR7w5kEky1AFXOfVi",
        "provider_id": "/g/1td7sh4b",
        "gps_coordinates": {
            "latitude": 48.3240653,
            "longitude": 2.1055422
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Gemathe+Logistique,+Rue+du+Clos+de+la+Chaume,+91660/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5b45f27848ce1:0xdaa3affb06732b3?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Gemathe Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 64 95 09 41",
        "address": "Rue du Clos de la Chaume",
        "hours": "Fermé temporairement"
    },
    {
        "position": 17,
        "rating": 4.8,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "14762551851758262574",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14762551851758262574&q=logistique+91&start=60",
        "lsig": "AB86z5WQalajHz4HsHqZBLIteDup",
        "provider_id": "/g/11f0k_6f20",
        "gps_coordinates": {
            "latitude": 48.647948899999996,
            "longitude": 2.3788844
        },
        "links": {
            "website": "http://www.ezytail.com/",
            "directions": "https://www.google.fr/maps/dir//Ezytail,+9+Rue+Jean+Jacques+Rousseau,+91350+Grigny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5de578ffdf95b:0xccdf1eb19e56192e?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Ezytail",
        "type": "Service logistique",
        "phone": "01 89 40 09 00",
        "address": "Grigny",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 18,
        "rating": 3.1,
        "reviews_original": "(44)",
        "reviews": 44,
        "place_id": "7172154232795972613",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7172154232795972613&q=logistique+91&start=60",
        "lsig": "AB86z5UDtXpo2wvLd9bBF8R5qe1W",
        "provider_id": "/g/1tk62dvz",
        "gps_coordinates": {
            "latitude": 48.6071057,
            "longitude": 2.3558178
        },
        "links": {
            "website": "http://www.france-express.com/essonne-@/fr/view-10301-agency.html",
            "directions": "https://www.google.fr/maps/dir//FRANCE+EXPRESS+ESSONNE,+6+Rue+de+la+Mare+%C3%80+Blot,+91220+Le+Plessis-P%C3%A2te/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5dc0529c3da0d:0x63889c46681e4405?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "FRANCE EXPRESS ESSONNE",
        "type": "Société de transport routier",
        "phone": "01 73 30 96 01",
        "address": "Le Plessis-Pâte",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 19,
        "place_id": "11568978424626053371",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11568978424626053371&q=logistique+91&start=60",
        "lsig": "AB86z5X8q8qfmeks5x8DziI-f3SR",
        "provider_id": "/g/11h40zsxdm",
        "gps_coordinates": {
            "latitude": 48.6084676,
            "longitude": 2.4867364
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Services+Transports+Et+Logistiques,+10+Rue+Antoine+Bourdelle,+91100+Corbeil-Essonnes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5e6d3929be4cf:0xa08d449505fe80fb?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Services Transports Et Logistiques",
        "reviews_original": "Aucun avis",
        "type": "Service de livraison",
        "address": "Corbeil-Essonnes",
        "hours": "Fermé temporairement"
    },
    {
        "position": 20,
        "place_id": "17549560620025380684",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17549560620025380684&q=logistique+91&start=60",
        "lsig": "AB86z5XFj9No3ccp5miJE-MKOIPN",
        "provider_id": "/g/1ts3dynv",
        "gps_coordinates": {
            "latitude": 48.7136676,
            "longitude": 2.2540089
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Azur+Emballage+Logistics,+1+All.+des+Garays,+91120+Palaiseau/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e678174259fdc5:0xf38c906700cbff4c?sa=X&ved=2ahUKEwjrwrTdvY6CAxU8IDQIHYVWApE4PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Azur Emballage Logistics",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 69 30 74 59",
        "address": "Palaiseau",
        "hours": "Fermé temporairement"
    },
    {
        "position": 1,
        "place_id": "10399512462980564992",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10399512462980564992&q=logistique+92",
        "lsig": "AB86z5UGz_rUogOZ-Z1yS995gtRg",
        "provider_id": "/g/11b6dpvbh0",
        "gps_coordinates": {
            "latitude": 48.9362202,
            "longitude": 2.2683686
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Trans+Express+Logistique,+60+Rte+Principale+du+Port,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665e24f38d6d5:0x90527d7c71344800?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "Trans Express Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "01 47 33 67 22",
        "address": "Gennevilliers"
    },
    {
        "position": 2,
        "place_id": "6438256946702735111",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6438256946702735111&q=logistique+92",
        "lsig": "AB86z5UJZlUmRESmKDWPPs2e8VeP",
        "provider_id": "/g/11spxmqsnb",
        "gps_coordinates": {
            "latitude": 48.901098,
            "longitude": 2.3177155
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//bag+logistique,+92-98+Bd+Victor+Hugo,+92110+Clichy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66fa6dd72e8f7:0x59594894e8e85707?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIFBAA&hl=fr&gl=fr"
        },
        "title": "bag logistique",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "06 10 97 53 51",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 3,
        "place_id": "2822046429268992361",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2822046429268992361&q=logistique+92",
        "lsig": "AB86z5X8lKRmyl8lO3fUxKgFZiAQ",
        "provider_id": "/g/11hz8r_0yb",
        "gps_coordinates": {
            "latitude": 48.8857444,
            "longitude": 2.2275921999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistiaa,+110+Av.+du+Pr%C3%A9sident+Wilson,+92000+Nanterre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66505a4868471:0x2729ec468c3ce169?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "Logistiaa",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "01 46 23 60 03",
        "address": "Nanterre"
    },
    {
        "position": 4,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "2459550854399074535",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2459550854399074535&q=logistique+92",
        "lsig": "AB86z5WT4c9sJBNWN4GENhZYBcoi",
        "provider_id": "/g/1hm566cd0",
        "gps_coordinates": {
            "latitude": 48.9362202,
            "longitude": 2.2683686
        },
        "links": {
            "website": "http://www.greensupplychain.fr/",
            "directions": "https://www.google.fr/maps/dir//Green+Supply+Chain,+60+Rte+Principale+du+Port,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665e2515af777:0x22221478877720e7?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "Green Supply Chain",
        "type": "Service logistique",
        "phone": "01 41 11 92 59",
        "address": "Gennevilliers"
    },
    {
        "position": 5,
        "rating": 4.3,
        "reviews_original": "(67)",
        "reviews": 67,
        "description": "\"J’ai une société de transport plus 3.5t .\"",
        "place_id": "8748854447777584485",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8748854447777584485&q=logistique+92",
        "lsig": "AB86z5VQ4-8kV2DbdNUJ81Ap6Pb0",
        "provider_id": "/g/11b634pvl9",
        "gps_coordinates": {
            "latitude": 48.941142199999994,
            "longitude": 2.2770666999999998
        },
        "links": {
            "website": "http://www.transportsgranger.com/",
            "directions": "https://www.google.fr/maps/dir//Transports+GRANGER,+9+Rte+du+M%C3%B4le+2+et+3,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f3accb733e1:0x796a2cc44f611565?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "Transports GRANGER",
        "type": "Société de transport routier",
        "phone": "01 41 32 29 71",
        "address": "Gennevilliers",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 6,
        "rating": 4.3,
        "reviews_original": "(23)",
        "reviews": 23,
        "place_id": "6892539829503203550",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6892539829503203550&q=logistique+92",
        "lsig": "AB86z5UdbjY2zju3b-9Wtd99AS95",
        "provider_id": "/g/11h033h5pr",
        "gps_coordinates": {
            "latitude": 48.943990799999995,
            "longitude": 2.3204396
        },
        "links": {
            "website": "https://www.axdispro.com/",
            "directions": "https://www.google.fr/maps/dir//AXDIS+PRO+-+Base+logistique+Villeneuve,+7+-+9+Av.+de+la+Redoute,+92390+Villeneuve-la-Garenne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6697b317b5aed:0x5fa73874e9c518de?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "AXDIS PRO - Base logistique Villeneuve",
        "type": "Dépôt",
        "phone": "01 55 02 10 23",
        "address": "Villeneuve-la-Garenne",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 7,
        "rating": 2.7,
        "reviews_original": "(168)",
        "reviews": 168,
        "description": "\"Mais ils me cherchent quand même ma commande.\"",
        "place_id": "15722090143011463659",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15722090143011463659&q=logistique+92",
        "lsig": "AB86z5Wwe0CIAqeJ-VjAyjOyJh2Z",
        "provider_id": "/g/11fhps9xzt",
        "gps_coordinates": {
            "latitude": 48.923663999999995,
            "longitude": 2.3089869
        },
        "links": {
            "website": "https://fr.gefco.net/",
            "directions": "https://www.google.fr/maps/dir//GEFCO+Gennevilliers,+134-190+Rue+des+Caboeufs+BP+153,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66fb0d83c0851:0xda3015af94de61eb?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "GEFCO Gennevilliers",
        "type": "Service logistique",
        "phone": "01 46 88 46 88",
        "address": "Ouvert actuellement"
    },
    {
        "position": 8,
        "rating": 4.1,
        "reviews_original": "(34)",
        "reviews": 34,
        "description": "\"C'est le meilleur de monde\"",
        "place_id": "18409018729206360941",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18409018729206360941&q=logistique+92",
        "lsig": "AB86z5U-61qB2bTlbHGVDm2ZWPTP",
        "provider_id": "/g/11b727rhz3",
        "gps_coordinates": {
            "latitude": 48.881149799999996,
            "longitude": 2.2450949
        },
        "links": {
            "website": "https://www.bollore-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//Bollore+Logistics,+Tour+Bollor%C3%A9,+31-32+Quai+de+Dion+Bouton,+92800+Puteaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665177d265a6d:0xff79f8ffc1dbab6d?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "Bollore Logistics",
        "type": "Service logistique",
        "phone": "01 46 96 44 33",
        "address": "Puteaux",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 9,
        "rating": 3,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "13867803171944176947",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13867803171944176947&q=logistique+92",
        "lsig": "AB86z5U2xt8METikJ6RAwlqi8ymN",
        "provider_id": "/g/11p4hmmz58",
        "gps_coordinates": {
            "latitude": 48.941544799999996,
            "longitude": 2.2969858
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//LOGISTICA,+10+Rte+Principale+du+Port,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6697c92dba201:0xc074558296c49d33?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIDRAA&hl=fr&gl=fr"
        },
        "title": "LOGISTICA",
        "type": "Service logistique",
        "address": "Gennevilliers",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 10,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "5993740376170590269",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5993740376170590269&q=logistique+92",
        "lsig": "AB86z5UqVa_zBHF42fJsTuwPGvbB",
        "provider_id": "/g/11fjs3twtf",
        "gps_coordinates": {
            "latitude": 48.837918699999996,
            "longitude": 2.2455241999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//TFL+Transport+de+personne+taxis%2Fvtc,+8+Rue+de+l'Est,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67b0500b7d2fb:0x532e0b1dad90703d?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIDhAA&hl=fr&gl=fr"
        },
        "title": "TFL Transport de personne taxis/vtc",
        "type": "Service de chauffeur privé",
        "address": "Boulogne-Billancourt"
    },
    {
        "position": 11,
        "rating": 5,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "13955950132566792252",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13955950132566792252&q=logistique+92",
        "lsig": "AB86z5UeBupw8oEkSLdLhHsCBPAl",
        "provider_id": "/g/11btlvkzwr",
        "gps_coordinates": {
            "latitude": 48.91990620000001,
            "longitude": 2.3106568999999997
        },
        "links": {
            "website": "http://www.autotrans.fr/",
            "directions": "https://www.google.fr/maps/dir//Autotrans+Logistics,+167+Av.+des+Gr%C3%A9sillons,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f3ef6a3c373:0xc1ad7eb42ab5983c?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIChAA&hl=fr&gl=fr"
        },
        "title": "Autotrans Logistics",
        "type": "Service logistique",
        "phone": "01 41 32 27 40",
        "address": "Gennevilliers",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 12,
        "rating": 1,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "13742151905144590905",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13742151905144590905&q=logistique+92",
        "lsig": "AB86z5VoktmSfrWXm_JRpu8c5Zg8",
        "provider_id": "/g/11ll22mzn1",
        "gps_coordinates": {
            "latitude": 48.910088599999995,
            "longitude": 2.2345619
        },
        "links": {
            "website": "https://fr.gefco.net/",
            "directions": "https://www.google.fr/maps/dir//GEFCO+France+(Si%C3%A8ge),+15+Bd+Charles+de+Gaulle,+92700+Colombes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665f8dfccf8d3:0xbeb5ee594399d239?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "GEFCO France (Siège)",
        "type": "Service logistique",
        "phone": "01 49 05 21 21",
        "address": "Colombes"
    },
    {
        "position": 13,
        "rating": 2.9,
        "reviews_original": "(3,3 k)",
        "reviews": 3300,
        "description": "\"Livreur professionnel et serviable.\"",
        "place_id": "9542498008896829740",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9542498008896829740&q=logistique+92",
        "lsig": "AB86z5Xepsoe_B1Q6crOPOFLpxAa",
        "provider_id": "/g/1tcydsc0",
        "gps_coordinates": {
            "latitude": 48.9372517,
            "longitude": 2.2657597
        },
        "links": {
            "website": "https://gls-group.eu/FR/fr/home",
            "directions": "https://www.google.fr/maps/dir//GLS+Gennevilliers,+Port+autonome+de+Gennevilliers,+3+Route+annexe+du+bassin+no1,+62+Rte+Principale+du+Port,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f35c46d402d:0x846dc3617a2af92c?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQICxAA&hl=fr&gl=fr"
        },
        "title": "GLS Gennevilliers",
        "type": "Service logistique",
        "phone": "09 74 91 09 10",
        "address": "Gennevilliers",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 14,
        "place_id": "15645185884707787548",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15645185884707787548&q=logistique+92",
        "lsig": "AB86z5XldDTMqMpt_eo42jGrRau4",
        "provider_id": "/g/11jt3961xv",
        "gps_coordinates": {
            "latitude": 48.74812,
            "longitude": 2.3543
        },
        "links": {
            "website": "https://atalian.fr/",
            "directions": "https://www.google.fr/maps/dir//ATALIAN+LOGISTIQUE+ILE-DE-FRANCE+SUD,+2+Pl.+Gustave+Eiffel,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677f7983ad917:0xd91eddab9ef6931c?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "ATALIAN LOGISTIQUE ILE-DE-FRANCE SUD",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 46 86 56 55",
        "address": "Rungis",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 15,
        "place_id": "5915101847994293347",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5915101847994293347&q=logistique+92",
        "lsig": "AB86z5X__r_OzTT92_JVgbcj4TTN",
        "provider_id": "/g/1vxdxlhq",
        "gps_coordinates": {
            "latitude": 48.9384565,
            "longitude": 2.2674187
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Normandie+Logistique+0,+Rte+du+Bass.+Num%C3%A9ro+1,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66609fda2e5e3:0x5216a9ca8bf4dc63?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "Normandie Logistique 0",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 41 47 92 60",
        "address": "Gennevilliers",
        "hours": "Fermé temporairement"
    },
    {
        "position": 16,
        "rating": 4.1,
        "reviews_original": "(20)",
        "reviews": 20,
        "place_id": "870580880879823694",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=870580880879823694&q=logistique+92",
        "lsig": "AB86z5WrPOQ7AKz-54Ik4ED6t-U4",
        "provider_id": "/g/11c609j7sq",
        "gps_coordinates": {
            "latitude": 48.9005497,
            "longitude": 2.1893377
        },
        "links": {
            "website": "https://www.nexans.fr/",
            "directions": "https://www.google.fr/maps/dir//Centre+Logistique+%26+Solutions+(CLS)+Nexans+Nanterre,+100+Bd+du+G%C3%A9n%C3%A9ral+Leclerc,+92000+Nanterre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e663803e1afc99:0xc14ecb2d916ab4e?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "Centre Logistique & Solutions (CLS) Nexans Nanterre",
        "type": "Service logistique",
        "address": "Nanterre",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 17,
        "place_id": "4086077199871864501",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4086077199871864501&q=logistique+92",
        "lsig": "AB86z5W_UBw7AVK2cqSeyrrljI1x",
        "provider_id": "/g/1tmbvfgx",
        "gps_coordinates": {
            "latitude": 48.832448199999995,
            "longitude": 2.2402821
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//PELICAN+TRANSPORT+-+DEFENSE+2000,+21+Av.+du+G%C3%A9n%C3%A9ral+Leclerc,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67ae5e88a49e5:0x38b4a990772f6eb5?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "PELICAN TRANSPORT - DEFENSE 2000",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "01 47 61 07 79",
        "address": "Boulogne-Billancourt",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 18,
        "rating": 5,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "1479242535107064078",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1479242535107064078&q=logistique+92",
        "lsig": "AB86z5XQXBXDtjZcFHrOhevpLiDd",
        "provider_id": "/g/11b6dhck59",
        "gps_coordinates": {
            "latitude": 48.888582799999995,
            "longitude": 2.306245
        },
        "links": {
            "website": "https://www.proexpress92.fr/",
            "directions": "https://www.google.fr/maps/dir//Professional+Express+92,+126+Rue+de+Tocqueville,+75017+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66fa36b3f256f:0x1487533f91b4710e?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Professional Express 92",
        "type": "Société de transport routier",
        "phone": "01 43 18 20 00",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 19:30"
    },
    {
        "position": 19,
        "place_id": "210450610427416863",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=210450610427416863&q=logistique+92",
        "lsig": "AB86z5U1t45mJ3p6gvBBpcTV4U5V",
        "provider_id": "/g/11rq1z7wzb",
        "gps_coordinates": {
            "latitude": 48.9276747,
            "longitude": 2.2170275
        },
        "service_options": {
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "website": "https://carre-das-logistics.business.site/?utm_source=gmb&utm_medium=referral",
            "directions": "https://www.google.fr/maps/dir//Carr%C3%A9+d'AS+Logistics,+Rue+Gis%C3%A8le+Halimi,+95870+Bezons/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4eef01323873d4df:0x2ebabb7154a511f?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "Carré d'AS Logistics",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "07 49 92 63 69",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 20,
        "rating": 3.9,
        "reviews_original": "(15)",
        "reviews": 15,
        "place_id": "5218937906712357189",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5218937906712357189&q=logistique+92",
        "lsig": "AB86z5X9ZgQ9KAvFzLBDr0dJxMBE",
        "provider_id": "/g/11gfp9brcw",
        "gps_coordinates": {
            "latitude": 48.7485184,
            "longitude": 2.2810991
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SFERIS+base+logistique,+2+Rue+de+la+Viorme,+91370+Verri%C3%A8res-le-Buisson/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6776fbc5c025f:0x486d646002692945?sa=X&ved=2ahUKEwj-3uzpvY6CAxW3kIkEHZclBWAQ48ADegQICBAA&hl=fr&gl=fr"
        },
        "title": "SFERIS base logistique",
        "type": "Service logistique",
        "address": "Verrières-le-Buisson",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 1,
        "rating": 4.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "2556168344849589510",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2556168344849589510&q=logistique+92&start=20",
        "lsig": "AB86z5WCzRhYQibXCfba0kYblEk0",
        "gps_coordinates": {
            "latitude": 48.941978500000005,
            "longitude": 2.3111336
        },
        "links": {
            "website": "https://www.amstransport.fr/"
        },
        "title": "AMS TRANSPORT",
        "type": "Société de transport routier",
        "phone": "01 79 75 05 75",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 3,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "4888363192369312923",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4888363192369312923&q=logistique+92&start=20",
        "lsig": "AB86z5WHTQV0l5C19A39sIPkIocj",
        "provider_id": "/g/11c575jbdp",
        "gps_coordinates": {
            "latitude": 48.8190135,
            "longitude": 2.3002067999999998
        },
        "links": {
            "website": "https://geodis.com/fr/",
            "directions": "https://www.google.fr/maps/dir//Geodis,+10+Rue+du+Commandant+d'Estienne+d'Orves,+92390+Villeneuve-la-Garenne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e668cbec1f3ba1:0x43d6f46c7e44749b?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Geodis",
        "type": "Service logistique",
        "address": "Villeneuve-la-Garenne",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 3,
        "place_id": "3209807591146424467",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3209807591146424467&q=logistique+92&start=20",
        "lsig": "AB86z5U8Lb_Sc5UrIwDgrZ5nuBd9",
        "provider_id": "/g/11gtg8jy6h",
        "gps_coordinates": {
            "latitude": 48.9167746,
            "longitude": 2.3095311
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Ariane+92+Transport+Sanitaire,+1+Av.+Augustin+Dumont,+92240+Malakoff/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6705f1b9c8e0d:0x2c8b86ff73a28893?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Ariane 92 Transport Sanitaire",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "address": "Malakoff"
    },
    {
        "position": 4,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "7849597199380420051",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7849597199380420051&q=logistique+92&start=20",
        "lsig": "AB86z5Vh5sVejdnwucKyoNeS30n1",
        "provider_id": "/g/11gy1bk57f",
        "gps_coordinates": {
            "latitude": 48.9370006,
            "longitude": 2.2813401
        },
        "links": {
            "website": "https://yanos-transport.fr/",
            "directions": "https://www.google.fr/maps/dir//Yanos+Transport+de+Marchandises+Ile+de+France,+4+Av.+Laurent+C%C3%A9ly,+92600+Asni%C3%A8res-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6671bf08bd09d:0x6cef5f105af895d3?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Yanos Transport de Marchandises Ile de France",
        "type": "Société de transport routier",
        "phone": "01 81 93 16 81",
        "address": "Asnières-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 5,
        "rating": 3.2,
        "reviews_original": "(317)",
        "reviews": 317,
        "description": "\"Plate forme logistique pour le transport aérien.\"",
        "place_id": "12491290340784351867",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12491290340784351867&q=logistique+92&start=20",
        "lsig": "AB86z5UV9f4OhOt5XD7hDWsqUIYE",
        "provider_id": "/g/1tmxvx8b",
        "gps_coordinates": {
            "latitude": 48.9453953,
            "longitude": 2.3002477999999997
        },
        "links": {
            "website": "https://www.dbschenker.com/fr-fr",
            "directions": "https://www.google.fr/maps/dir//DB+SCHENKER,+37+Rte+Principale+du+Port,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665ffd20e2a07:0xad59fa621cb82a7b?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "DB SCHENKER",
        "type": "Service logistique",
        "phone": "01 41 85 46 46",
        "address": "Gennevilliers",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 6,
        "rating": 3.3,
        "reviews_original": "(340)",
        "reviews": 340,
        "place_id": "16258326160321924262",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16258326160321924262&q=logistique+92&start=20",
        "lsig": "AB86z5U4_jQ10-09oMaKkO3prm13",
        "provider_id": "/g/11bw7flv62",
        "gps_coordinates": {
            "latitude": 48.892850100000004,
            "longitude": 2.175969
        },
        "links": {
            "website": "https://www.dsv.com/fr-fr/",
            "directions": "https://www.google.fr/maps/dir//DSV,+19%2F23+Chem.+des+Petits+Marais,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665e2197beb35:0xe1a12d80a46dcca6?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "DSV",
        "type": "Service logistique",
        "phone": "01 47 91 78 78",
        "address": "Gennevilliers",
        "hours": "Ouvert ⋅ Ferme à 23:00"
    },
    {
        "position": 7,
        "rating": 4.5,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "195472745633835527",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=195472745633835527&q=logistique+92&start=20",
        "lsig": "AB86z5VhxSWioFmBIlDQ09Mp4pfb",
        "provider_id": "/g/1w345xzf",
        "gps_coordinates": {
            "latitude": 48.8879565,
            "longitude": 2.3002911
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Coursier+MSP+92,+17+Rue+du+Port,+92000+Nanterre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6637a60bed6d7:0x2b6756d2ec66a07?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Coursier MSP 92",
        "type": "Service de transport",
        "phone": "01 47 48 98 41",
        "address": "Nanterre",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 8,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "12369083097745887306",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12369083097745887306&q=logistique+92&start=20",
        "lsig": "AB86z5UNif04lOMhDjrWqjI1pM-a",
        "provider_id": "/g/1vlz9nzf",
        "gps_coordinates": {
            "latitude": 48.7037336,
            "longitude": 2.3434182
        },
        "links": {
            "website": "http://logistic-services.com/",
            "directions": "https://www.google.fr/maps/dir//LOGISTIC+SERVICES,+31+Bd+Berthier,+75017+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f983b73f537:0xaba7cf8b0e6e904a?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "LOGISTIC SERVICES",
        "type": "Service logistique",
        "phone": "01 47 03 67 67",
        "address": "Paris"
    },
    {
        "position": 9,
        "place_id": "12142998397331493305",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12142998397331493305&q=logistique+92&start=20",
        "lsig": "AB86z5VM7S3Nq2zl3Rc8jrEQNO-u",
        "provider_id": "/g/1tgtdtlf",
        "gps_coordinates": {
            "latitude": 48.8383537,
            "longitude": 2.2260372
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Europe+Logistique+Service,+44+Av.+de+Champagne,+91420+Morangis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67605303ede5f:0xa88498b4bd14d1b9?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Europe Logistique Service",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 64 54 92 92",
        "address": "Morangis"
    },
    {
        "position": 10,
        "place_id": "7706891292854985453",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7706891292854985453&q=logistique+92&start=20",
        "lsig": "AB86z5V1du6B6qCmVk6b4XhLhOL3",
        "provider_id": "/g/11fr3kz7pb",
        "gps_coordinates": {
            "latitude": 48.89232810000001,
            "longitude": 2.3158588
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Compagnie+D'affretement+Et+De+Transport,+49+Quai+Alphonse+le+Gallo,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67b1f58fe3d97:0x6af460cc492c22ed?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Compagnie D'affretement Et De Transport",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "address": "Boulogne-Billancourt"
    },
    {
        "position": 11,
        "place_id": "6796099708073457494",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6796099708073457494&q=logistique+92&start=20",
        "lsig": "AB86z5V1EDl1NOS1djR8Wi0pHEm-",
        "provider_id": "/g/11smmpcd_c",
        "gps_coordinates": {
            "latitude": 48.9355173,
            "longitude": 2.2750117999999997
        },
        "links": {
            "website": "http://www.francelogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//France+Logistique,+Immeuble+le,+8+Rue+Bernard+Buffet,+Rue+Cardinet,+75017+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f5d86d362a7:0x5e5098ad5ddab756?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "France Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 53 68 40 87",
        "address": "Paris"
    },
    {
        "position": 12,
        "rating": 3,
        "reviews_original": "(333)",
        "reviews": 333,
        "description": "\"Accueil chaleureux, travail correct, sécurité, rapidité je suis satisfait\"",
        "place_id": "6910007504235784226",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6910007504235784226&q=logistique+92&start=20",
        "lsig": "AB86z5U2WnLaCyQXnq4nM8t2m_TN",
        "provider_id": "/g/1wl4pxdj",
        "gps_coordinates": {
            "latitude": 48.9089666,
            "longitude": 2.2102325
        },
        "links": {
            "website": "https://geodis.com/fr/activite/distribution-et-express",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Distribution+%26+Express,+7%2F9+Rte+des+Merci%C3%A8res,+92631+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665fddcc80af1:0x5fe54736dd41e822?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Distribution & Express",
        "type": "Service logistique",
        "phone": "0 892 05 28 28",
        "address": "Gennevilliers",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 13,
        "place_id": "15964288485968544999",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15964288485968544999&q=logistique+92&start=20",
        "lsig": "AB86z5XmT2pOGsfMdc52jdq2HYVI",
        "provider_id": "/g/1vnnhpv5",
        "gps_coordinates": {
            "latitude": 48.820695099999995,
            "longitude": 2.2530786
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//S.N.C.F+Autres+Services,+Rue+Jean+Perrin,+92000+Nanterre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66467d2a97c77:0xdd8c8bcbaa0384e7?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "S.N.C.F Autres Services",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 47 80 89 92",
        "address": "Nanterre"
    },
    {
        "position": 14,
        "rating": 5,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "2054638468814655555",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2054638468814655555&q=logistique+92&start=20",
        "lsig": "AB86z5Wo6HeKTZtI5S3w-OVHbgNG",
        "gps_coordinates": {
            "latitude": 48.8529315,
            "longitude": 2.2130476999999997
        },
        "title": "France Déménagement Logistique",
        "type": "Services de déménagement et de stockage",
        "phone": "06 07 70 14 55",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 15,
        "place_id": "17060910237662288936",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17060910237662288936&q=logistique+92&start=20",
        "lsig": "AB86z5Vp6KPzPPcVItE0eIFH2Lji",
        "provider_id": "/g/11r8yzqrp",
        "gps_coordinates": {
            "latitude": 48.7852463,
            "longitude": 2.2458906000000005
        },
        "links": {
            "website": "https://demenagement-issy.fr/",
            "directions": "https://www.google.fr/maps/dir//Demenagement+Issy-les-Moulineaux+Chrono,+4+Cr+Saint-Vincent,+92130+Issy-les-Moulineaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f746abc2d43:0xecc48777f4af9c28?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Demenagement Issy-les-Moulineaux Chrono",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 84 20 29 08",
        "address": "Issy-les-Moulineaux",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 16,
        "place_id": "1411092431322780753",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1411092431322780753&q=logistique+92&start=20",
        "lsig": "AB86z5UCGDLkZToaR8m9bNmArVho",
        "provider_id": "/g/11c58q304d",
        "gps_coordinates": {
            "latitude": 48.912105399999994,
            "longitude": 2.2121608999999998
        },
        "links": {
            "website": "https://www.faq-logistique-conseil.com/",
            "directions": "https://www.google.fr/maps/dir//FAQ+Logistique+Conseil,+17+Rue+Marie+Bonaparte,+92210+Saint-Cloud/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67b3733bc610f:0x139535170a3c9451?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "FAQ Logistique Conseil",
        "reviews_original": "Aucun avis",
        "type": "Conseil",
        "phone": "06 23 92 09 25",
        "address": "Saint-Cloud"
    },
    {
        "position": 17,
        "rating": 3.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "11448207155455224419",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11448207155455224419&q=logistique+92&start=20",
        "lsig": "AB86z5W-x2lVfNvjBcCaT81fPuZK",
        "provider_id": "/g/11hfpx9jqv",
        "gps_coordinates": {
            "latitude": 48.8978496,
            "longitude": 2.2213293
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Ism+transport+d%C3%A9m%C3%A9nagement,+22+Rue+de+Champagne,+92140+Clamart/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67b8b49bc1077:0x9ee033c0affe6a63?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Ism transport déménagement",
        "type": "Déménageur",
        "phone": "06 46 73 28 53",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 18,
        "rating": 3.4,
        "reviews_original": "(27)",
        "reviews": 27,
        "description": "\"Merci à Hand pour le suivi en continu.\"",
        "place_id": "12526844086278514747",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12526844086278514747&q=logistique+92&start=20",
        "lsig": "AB86z5Xuxltu3S0WYKedayuXWFdt",
        "provider_id": "/g/11sq_l5fyk",
        "gps_coordinates": {
            "latitude": 48.7715755,
            "longitude": 2.3124967
        },
        "links": {
            "website": "http://www.wave-transport.fr/",
            "directions": "https://www.google.fr/maps/dir//Wave+Transport,+41+Rue+des+Peupliers,+92000+Nanterre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6657a98bdf0b1:0xadd84a538f55683b?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Wave Transport",
        "type": "Société de transport routier",
        "phone": "01 81 93 68 92",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 19,
        "rating": 5,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "8131446978999647439",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8131446978999647439&q=logistique+92&start=20",
        "lsig": "AB86z5VcJnBQjBrSg9f0-_CEcwJ8",
        "provider_id": "/g/1tdy8c9y",
        "gps_coordinates": {
            "latitude": 48.89785,
            "longitude": 2.2213292
        },
        "links": {
            "website": "http://www.tpi-paris.com/",
            "directions": "https://www.google.fr/maps/dir//Transport+Paris+International+T.P.I,+1+Bd+des+Bouvets+3,+92000+Nanterre/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e664f635723679:0x70d8b3f1f5327ccf?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Transport Paris International T.P.I",
        "type": "Société de transport international de marchandises",
        "phone": "01 47 29 20 38",
        "address": "Nanterre",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 20,
        "rating": 3.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "8800426923700842651",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8800426923700842651&q=logistique+92&start=20",
        "lsig": "AB86z5VhqzpbHawQaL3_Fs5NXEKb",
        "provider_id": "/g/11btxj1lby",
        "gps_coordinates": {
            "latitude": 48.771576,
            "longitude": 2.3124967
        },
        "links": {
            "website": "https://www.gb12-demenagement.com/",
            "directions": "https://www.google.fr/maps/dir//GB12+D%C3%A9m%C3%A9nagement+-+92,+34+Av.+Raymond+Aron,+92160+Antony/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6772bd4d59581:0x7a2165a912f8f09b?sa=X&ved=2ahUKEwiios3qvY6CAxWBEVkFHVlQD5c4FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "GB12 Déménagement - 92",
        "type": "Déménageur",
        "phone": "06 08 33 53 50",
        "address": "Antony",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 1,
        "rating": 4.9,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "1543462803539448486",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1543462803539448486&q=logistique+92&start=40",
        "lsig": "AB86z5X5ifYPuqHcvs-GJw5E_Yx5",
        "provider_id": "/g/1xfsn1n3",
        "gps_coordinates": {
            "latitude": 48.84016,
            "longitude": 2.2451282999999997
        },
        "links": {
            "website": "https://handirect.com/nos-agences/boulogne-ile-de-france/",
            "directions": "https://www.google.fr/maps/dir//Handirect+Boulogne-Billancourt,+50+Rue+de+Paris,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67aec6c0851f5:0x156b7b3e00ff52a6?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Handirect Boulogne-Billancourt",
        "type": "Services aux entreprises",
        "phone": "01 55 20 02 00",
        "address": "Boulogne-Billancourt",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 5,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "5876867599980784814",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5876867599980784814&q=logistique+92&start=40",
        "lsig": "AB86z5URJVyORTO9JhOC0_tYYx3S",
        "provider_id": "/g/11h4kvbxvp",
        "gps_coordinates": {
            "latitude": 48.814487299999996,
            "longitude": 2.1409615
        },
        "links": {
            "website": "http://www.paris-service-voiturier.com/ventousage",
            "directions": "https://www.google.fr/maps/dir//Ventousage+Paris+-+Ile-de-France,+37+Rue+du+Parc+de+Clagny,+78000+Versailles/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67d2b4980be1f:0x518ed3f1f8db6cae?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Ventousage Paris - Ile-de-France",
        "type": "Service logistique",
        "phone": "06 50 92 67 73",
        "address": "Versailles",
        "hours": "Ouvert ⋅ Ferme à 21:30"
    },
    {
        "position": 3,
        "place_id": "18108425565526002305",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18108425565526002305&q=logistique+92&start=40",
        "lsig": "AB86z5V_ItPv69uktwoP14Dm5Wkx",
        "provider_id": "/g/11j1fcn9vz",
        "gps_coordinates": {
            "latitude": 48.8863884,
            "longitude": 2.1771883
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Totem+Transports,+23+Rue+Charles+Gounod,+92500+Rueil-Malmaison/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e663c151ec37ef:0xfb4e0d1bfac78a81?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Totem Transports",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "06 79 41 20 14",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 4,
        "rating": 3.8,
        "reviews_original": "(32)",
        "reviews": 32,
        "place_id": "16221991431226467863",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16221991431226467863&q=logistique+92&start=40",
        "lsig": "AB86z5XjsrDus2r4V0DvEuLGpRWC",
        "provider_id": "/g/11b6ds1h7d",
        "gps_coordinates": {
            "latitude": 48.862355,
            "longitude": 2.2247241000000004
        },
        "links": {
            "website": "https://www.groupecat.com/",
            "directions": "https://www.google.fr/maps/dir//Groupe+CAT,+5-7+Rue+Fr%C3%A9d%C3%A9ric+Clavel,+92150+Suresnes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67b1f58fe3d97:0xe120174247af2617?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Groupe CAT",
        "type": "Service logistique",
        "phone": "01 47 12 80 00",
        "address": "Suresnes"
    },
    {
        "position": 5,
        "rating": 4.9,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "1964444223831976743",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1964444223831976743&q=logistique+92&start=40",
        "lsig": "AB86z5X3rJLuAaWTRbgWrY0e5nsO",
        "provider_id": "/g/11fzfdlsdl",
        "gps_coordinates": {
            "latitude": 48.7896682,
            "longitude": 2.2237266
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "https://www.demenex.fr/",
            "directions": "https://www.google.fr/maps/dir//DEMENEX,+Centre+commercial+du+Moulin,+73+Rue+de+la+Roseraie,+92360+Meudon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67a22f6f19a61:0x1b431b9d0e92ab27?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "DEMENEX",
        "type": "Société de transport international de marchandises",
        "phone": "01 84 60 76 50",
        "address": "Meudon",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 6,
        "rating": 2.9,
        "reviews_original": "(8)",
        "reviews": 8,
        "description": "\"Equipe à l'écoute de mes besoins, prestataire logistique fiable et innovant\"",
        "place_id": "16680943340329528219",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16680943340329528219&q=logistique+92&start=40",
        "lsig": "AB86z5UlqjV4Q4h593EIb2GgYeby",
        "provider_id": "/g/11h84qyzwz",
        "gps_coordinates": {
            "latitude": 48.751388,
            "longitude": 2.361069
        },
        "links": {
            "website": "http://www.urbanhub.fr/",
            "directions": "https://www.google.fr/maps/dir//Urbanhub,+1+place+de+la+logistique,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673b1c10ea975:0xe77e9d96aec26b9b?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Urbanhub",
        "type": "Service logistique",
        "phone": "01 85 53 97 30",
        "address": "Rungis",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 7,
        "rating": 3.7,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "12998002632356878831",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12998002632356878831&q=logistique+92&start=40",
        "lsig": "AB86z5XTZsE352PwT0FAbC-ynu_S",
        "provider_id": "/g/1tnbkfwq",
        "gps_coordinates": {
            "latitude": 48.794709999999995,
            "longitude": 2.2857016
        },
        "links": {
            "website": "http://www.paris-cab.com/",
            "directions": "https://www.google.fr/maps/dir//MARKIZ,+15+Rue+Blanchard,+92260+Fontenay-aux-Roses/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e670bcf9afe06f:0xb4622e871b3959ef?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "MARKIZ",
        "type": "Société de transport routier",
        "phone": "01 46 61 25 64",
        "address": "Fontenay-aux-Roses",
        "hours": "Fermé temporairement"
    },
    {
        "position": 8,
        "rating": 4.6,
        "reviews_original": "(11)",
        "reviews": 11,
        "description": "\"Une équipe très professionnelle avec beaucoup de sérieux.\"",
        "place_id": "11594329745924136266",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11594329745924136266&q=logistique+92&start=40",
        "lsig": "AB86z5XdA0Rl_OcXL_RnI-m46t2R",
        "provider_id": "/g/1tl8k06d",
        "gps_coordinates": {
            "latitude": 48.881235499999995,
            "longitude": 2.329497
        },
        "links": {
            "website": "http://www.logistique2000.com/",
            "directions": "https://www.google.fr/maps/dir//Logistique+2000,+7+Rue+du+Cardinal+Mercier,+75009+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66e4bfd6fac6b:0xa0e755797a8d9d4a?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Logistique 2000",
        "type": "Société de transport international de marchandises",
        "phone": "01 42 81 43 80",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 9,
        "rating": 5,
        "reviews_original": "(109)",
        "reviews": 109,
        "place_id": "13338787139785702756",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13338787139785702756&q=logistique+92&start=40",
        "lsig": "AB86z5U6eSuJscYmh6LjglWPChZp",
        "provider_id": "/g/11r3mmxw6v",
        "gps_coordinates": {
            "latitude": 48.8234724,
            "longitude": 2.2607782
        },
        "service_options": {
            "devis_en_ligne": true,
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "website": "http://scsdemenagement.fr/",
            "directions": "https://www.google.fr/maps/dir//SCS+-+TRANSPORT+%2F+D%C3%89M%C3%89NAGEMENT+%2F+D%C3%89BARRAS+-+HAUTS+DE+SEINE+92,+12+Rue+Ren%C3%A9+Jacques,+92130+Issy-les-Moulineaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67ba2fcea1063:0xb91ce43b5179bd64?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "SCS - TRANSPORT / DÉMÉNAGEMENT / DÉBARRAS - HAUTS DE SEINE 92",
        "type": "Déménageur",
        "phone": "07 61 92 70 94",
        "address": "Issy-les-Moulineaux",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 10,
        "rating": 4.7,
        "reviews_original": "(20)",
        "reviews": 20,
        "place_id": "8214889121290161939",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8214889121290161939&q=logistique+92&start=40",
        "lsig": "AB86z5UbnLYo4HPKdQW8OClGmYlA",
        "provider_id": "/g/11qfsnjdp5",
        "gps_coordinates": {
            "latitude": 48.9293507,
            "longitude": 2.2892566999999997
        },
        "links": {
            "website": "https://knt-transport.fr/",
            "directions": "https://www.google.fr/maps/dir//KNT+Transport,+32+Rue+Eug%C3%A9nie,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f5608795389:0x72012621a7b88f13?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "KNT Transport",
        "type": "Service de transport",
        "phone": "01 47 93 28 53",
        "address": "Gennevilliers",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 11,
        "rating": 4.7,
        "reviews_original": "(160)",
        "reviews": 160,
        "place_id": "10037906132360718374",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10037906132360718374&q=logistique+92&start=40",
        "lsig": "AB86z5VKvT01hip80Y7ELd4kteOY",
        "provider_id": "/g/11b6cq715g",
        "gps_coordinates": {
            "latitude": 48.8231927,
            "longitude": 2.2734472
        },
        "service_options": {
            "rendez_vous_en_ligne": true,
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "website": "https://www.ltdem.fr/",
            "directions": "https://www.google.fr/maps/dir//LTD+d%C3%A9m%C3%A9nagement+92+Hauts+de+Seine,+Rue+Auguste+Gervais+13+Bis+-+15,+92130+Issy-les-Moulineaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67a9a58bd619b:0x8b4dce71bc136826?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "LTD déménagement 92 Hauts de Seine",
        "type": "Déménageur",
        "phone": "01 64 40 49 19",
        "address": "Issy-les-Moulineaux",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 12,
        "rating": 4.3,
        "reviews_original": "(97)",
        "reviews": 97,
        "place_id": "76785564112877377",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=76785564112877377&q=logistique+92&start=40",
        "lsig": "AB86z5VURrHvuWOCnoUQV_uCpnJ9",
        "provider_id": "/g/11c48t96lp",
        "gps_coordinates": {
            "latitude": 48.8367505,
            "longitude": 2.3208406999999998
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "http://www.idrismans.com/",
            "directions": "https://www.google.fr/maps/dir//IdrisMans+Transit,+15+Rue+Jules+Guesde,+75014+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e671caa97b1145:0x110cc1050d37741?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "IdrisMans Transit",
        "type": "Service logistique",
        "phone": "06 95 72 49 85",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 22:00"
    },
    {
        "position": 13,
        "place_id": "16435732816390543127",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16435732816390543127&q=logistique+92&start=40",
        "lsig": "AB86z5UgjoY_2UJjSde3y8cOsMl1",
        "provider_id": "/g/11cs3_7hc4",
        "gps_coordinates": {
            "latitude": 48.9195986,
            "longitude": 2.2617073999999997
        },
        "links": {
            "website": "https://hexagone-demenagement.fr/",
            "directions": "https://www.google.fr/maps/dir//Simply+DEM+Soci%C3%A9t%C3%A9+de+D%C3%A9m%C3%A9nagement+92+Hauts-de-Seine+-+IDF+%26+Paris,+129+Rue+du+Mar%C3%A9chal+Joffre,+92700+Colombes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665eae8be96bb:0xe41773ea90305717?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Simply DEM Société de Déménagement 92 Hauts-de-Seine - IDF & Paris",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "06 16 53 49 86",
        "address": "Colombes",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 14,
        "rating": 4.4,
        "reviews_original": "(11)",
        "reviews": 11,
        "place_id": "13644964415962856884",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13644964415962856884&q=logistique+92&start=40",
        "lsig": "AB86z5XjbaUFBbudi6-n8sQIaviD",
        "provider_id": "/g/1tds6083",
        "gps_coordinates": {
            "latitude": 48.764908899999995,
            "longitude": 2.1261274
        },
        "links": {
            "website": "https://www.endurancelogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Endurance+Logistique,+537+Rue+H%C3%A9l%C3%A8ne+Boucher,+78530+Buc/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67e68cf69d205:0xbd5ca6d79a4fbdb4?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Endurance Logistique",
        "type": "Service logistique",
        "phone": "01 39 56 15 09",
        "address": "Buc",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 15,
        "rating": 4.2,
        "reviews_original": "(37)",
        "reviews": 37,
        "description": "\"très arrangeant, sérieux délais respectée prix correcte.\"",
        "place_id": "128819714336912930",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=128819714336912930&q=logistique+92&start=40",
        "lsig": "AB86z5UR1r16BwUA5kYMAv3Ll5NH",
        "provider_id": "/g/1tfk3r3q",
        "gps_coordinates": {
            "latitude": 48.935543599999995,
            "longitude": 2.2686602
        },
        "links": {
            "website": "http://francomarocaine.com/",
            "directions": "https://www.google.fr/maps/dir//Franco+Marocaine+de+Transport,+51+Rte+Principale+du+Port,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665e2fc2d62b7:0x1c9a8d9011e7622?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Franco Marocaine de Transport",
        "type": "Société de transport routier",
        "phone": "01 47 92 78 40",
        "address": "Gennevilliers"
    },
    {
        "position": 16,
        "place_id": "6563104876274431082",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6563104876274431082&q=logistique+92&start=40",
        "lsig": "AB86z5VoSXjjaeQU_3_wHOqbXYTf",
        "gps_coordinates": {
            "latitude": 48.684003999999995,
            "longitude": 2.2090019
        },
        "title": "DUHAMEL Déménagement 92",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 46 03 45 97",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 17,
        "rating": 5,
        "reviews_original": "(3)",
        "reviews": 3,
        "description": "\"Meilleur transporteur que je connais .\"",
        "place_id": "16842101774008348137",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16842101774008348137&q=logistique+92&start=40",
        "lsig": "AB86z5URjClT6fZWZ2aX1oc2mNRk",
        "provider_id": "/g/11ddx1pysl",
        "gps_coordinates": {
            "latitude": 48.793589499999996,
            "longitude": 2.3852531999999997
        },
        "links": {
            "website": "https://www.leroylogistique.com/agences/plateforme-logistique-paris-sud/",
            "directions": "https://www.google.fr/maps/dir//Le+Roy+Logistique+Paris+Sud,+32+avenue+de+l'oc%C3%A9anie,+Chem.+de+Courtaboeuf+zi+de,+91140+Villejust/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e5d63994599b1d:0xe9bb2a5486be6de9?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Le Roy Logistique Paris Sud",
        "type": "Service logistique",
        "phone": "01 60 92 34 40",
        "address": "Villejust",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 18,
        "rating": 4.3,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "14905951296595186757",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14905951296595186757&q=logistique+92&start=40",
        "lsig": "AB86z5Vluui1548UFt90R8jKTiwj",
        "provider_id": "/g/1tdm30qb",
        "gps_coordinates": {
            "latitude": 48.818022199999994,
            "longitude": 2.2503325
        },
        "links": {
            "website": "http://www.allofret.fr/",
            "directions": "https://www.google.fr/maps/dir//Allo+Fret,+13+Av.+Eug%C3%A8ne+Pelletan,+94400+Vitry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e670f941d093f5:0xcedc93baa8d45445?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Allo Fret",
        "type": "Service logistique",
        "phone": "01 46 55 88 80",
        "address": "Vitry-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 19,
        "place_id": "8556435344463520798",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8556435344463520798&q=logistique+92&start=40",
        "lsig": "AB86z5XIarQOBUmZ2zfSL8-vTmPp",
        "title": "Livraison de Chicha 92",
        "reviews_original": "Aucun avis",
        "type": "Service de livraison",
        "phone": "07 45 30 90 23",
        "hours": "Ouvert 24h/24"
    },
    {
        "position": 20,
        "place_id": "7884792752680693328",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7884792752680693328&q=logistique+92&start=40",
        "lsig": "AB86z5VxJGXZQUQHlIi16feolTxU",
        "provider_id": "/g/1tdnw6nr",
        "gps_coordinates": {
            "latitude": 48.818024,
            "longitude": 2.2503326
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STO+TRANSPORT,+172+Av.+de+Verdun,+92130+Issy-les-Moulineaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67af559cdadc5:0x6d6c693baf1b6e50?sa=X&ved=2ahUKEwjh_7jrvY6CAxU7D1kFHXUoCKQ4KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "STO TRANSPORT",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "01 45 29 28 14",
        "address": "Issy-les-Moulineaux",
        "hours": "Ouvert ⋅ Ferme à 23:30"
    },
    {
        "position": 1,
        "rating": 3.7,
        "reviews_original": "(95)",
        "reviews": 95,
        "place_id": "12770245397275536330",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12770245397275536330&q=logistique+92&start=60",
        "lsig": "AB86z5UvpMleuxu5sC-m3HAvdVQe",
        "provider_id": "/g/11b6d2bkn2",
        "gps_coordinates": {
            "latitude": 48.9025495,
            "longitude": 2.2566215000000005
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//T.R.V+Soci%C3%A9t%C3%A9+de+D%C3%A9m%C3%A9nagement+92+Hauts-de-Seine+%26+Paris,+3+Rue+Joseph+Rivi%C3%A8re,+92400+Courbevoie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665a193ddcdf5:0xb1390687772cebca?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "T.R.V Société de Déménagement 92 Hauts-de-Seine & Paris",
        "type": "Société de transport routier",
        "phone": "06 27 51 26 45",
        "address": "Courbevoie",
        "hours": "Ouvert ⋅ Ferme à 19:30"
    },
    {
        "position": 2,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "3100884067051130998",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3100884067051130998&q=logistique+92&start=60",
        "lsig": "AB86z5WQXVLiEdzPkc3Idl0jLWa0",
        "provider_id": "/g/1pp2wwvv6",
        "gps_coordinates": {
            "latitude": 48.838183099999995,
            "longitude": 2.2332812
        },
        "links": {
            "website": "http://www.coursier-paris-92.fr/",
            "directions": "https://www.google.fr/maps/dir//Pick+n+Drop,+83+Av.+Andr%C3%A9+Morizet,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66e468f247c97:0x2b088da13a405076?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Pick n Drop",
        "type": "Service de livraison",
        "phone": "01 45 26 70 42",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 3,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "12438457726898062916",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12438457726898062916&q=logistique+92&start=60",
        "lsig": "AB86z5VevCQ7CvsGFvxbj1iSyyUa",
        "gps_coordinates": {
            "latitude": 48.865248199999996,
            "longitude": 2.2047971
        },
        "service_options": {
            "devis_en_ligne": true
        },
        "title": "Harold's Trucks déménagement 92",
        "type": "Déménageur",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 4,
        "rating": 3,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "750893337582651957",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=750893337582651957&q=logistique+92&start=60",
        "lsig": "AB86z5URaDM3t6YEYGA3EC2gBlFM",
        "provider_id": "/g/11b6dqctsy",
        "gps_coordinates": {
            "latitude": 48.8869676,
            "longitude": 2.2351084
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Boutringain+Actadem,+165+Av.+du+18+Juin+1940,+92500+Rueil-Malmaison/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e664b134b5350f:0xa6bb5831ad24a35?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Boutringain Actadem",
        "type": "Déménageur",
        "phone": "01 39 33 60 30",
        "address": "Rueil-Malmaison",
        "hours": "Fermé ⋅ Ouvre à 14:30"
    },
    {
        "position": 5,
        "place_id": "12599734494785460870",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12599734494785460870&q=logistique+92&start=60",
        "lsig": "AB86z5VD56-GaW_IRUtqD1DFRt5c",
        "provider_id": "/g/11flt2n84m",
        "gps_coordinates": {
            "latitude": 48.783858599999995,
            "longitude": 2.2443442
        },
        "links": {
            "website": "https://demenageur-puteaux92.fr/",
            "directions": "https://www.google.fr/maps/dir//Demenagement+Puteaux+Tradition2,+19+Rue+Lavoisier,+92800+Puteaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47fb0987df8999fb:0xaedb3fc449ec5a86?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Demenagement Puteaux Tradition2",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 84 20 25 92",
        "address": "Puteaux",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 6,
        "rating": 4.2,
        "reviews_original": "(108)",
        "reviews": 108,
        "description": "\"Personnel fort sympathique.\"",
        "place_id": "4239337472451121575",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4239337472451121575&q=logistique+92&start=60",
        "lsig": "AB86z5V1QT0AsTaTxEpI0EQz9vxm",
        "provider_id": "/g/11r6sh8_54",
        "gps_coordinates": {
            "latitude": 48.831480000000006,
            "longitude": 2.2466687999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Point+Services,+3+Rue+de+Bretagne,+92140+Clamart/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67b5438e797d9:0x3ad526f8607391a7?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Point Services",
        "type": "Service logistique",
        "phone": "01 40 94 12 76",
        "address": "Clamart",
        "hours": "Ouvert ⋅ Ferme à 14:00"
    },
    {
        "position": 7,
        "rating": 3.2,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "2690433685673317481",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2690433685673317481&q=logistique+92&start=60",
        "lsig": "AB86z5UB4MYO0PjD0EJ55CteMe2I",
        "provider_id": "/g/1tgy_xk2",
        "gps_coordinates": {
            "latitude": 48.8612451,
            "longitude": 2.2236502
        },
        "links": {
            "website": "http://www.plustek-store.com/",
            "directions": "https://www.google.fr/maps/dir//ARCHIBALD+INTERNATIONAL,+86+Rue+du+D%C3%B4me,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67aee9c0147f1:0x2556572ebe4d9469?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "ARCHIBALD INTERNATIONAL",
        "type": "Société d'import-export",
        "phone": "01 47 61 18 48",
        "address": "Boulogne-Billancourt",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 8,
        "rating": 5,
        "reviews_original": "(100)",
        "reviews": 100,
        "description": "Accès : Ouvert ⋅ Ferme à 23:00",
        "place_id": "15232211923727941801",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15232211923727941801&q=logistique+92&start=60",
        "lsig": "AB86z5Va5aRlTAKAaAO4P4TPKGK1",
        "provider_id": "/g/11sg800725",
        "gps_coordinates": {
            "latitude": 48.9059816,
            "longitude": 2.2812006
        },
        "links": {
            "website": "https://www.lockall.fr/suresnes?utm_campaign=gmb&utm_medium=gmb&utm_source=GMBsuresnes",
            "directions": "https://www.google.fr/maps/dir//LOCKALL+Suresnes+-+Box+et+Garde+meuble,+5+Rue+Marcel+Monge,+92150+Suresnes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6658ecf3fb67d:0xd363b00a794600a9?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "LOCKALL Suresnes - Box et Garde meuble",
        "type": "Service logistique",
        "phone": "01 89 43 19 79",
        "address": "Suresnes",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 9,
        "rating": 3.7,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "10597944569186720807",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10597944569186720807&q=logistique+92&start=60",
        "lsig": "AB86z5U5kF026zuTrFZpnwf6QxG_",
        "provider_id": "/g/11bw477n8y",
        "gps_coordinates": {
            "latitude": 48.9172433,
            "longitude": 2.3068141
        },
        "links": {
            "website": "https://www.demenagement-letendre.fr/",
            "directions": "https://www.google.fr/maps/dir//Demenagement+75+,+92+,+95+%7C+Letendre,+34+Av.+de+la+Marne,+92600+Asni%C3%A8res-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f7d62fe6123:0x9313766f73a79c27?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Demenagement 75 , 92 , 95 | Letendre",
        "type": "Déménageur",
        "phone": "01 47 33 46 56",
        "address": "Asnières-sur-Seine",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 10,
        "rating": 4.9,
        "reviews_original": "(74)",
        "reviews": 74,
        "place_id": "16978638309265776820",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16978638309265776820&q=logistique+92&start=60",
        "lsig": "AB86z5UrcraGiaQY2fn3W-t3ytQQ",
        "provider_id": "/g/11h_wp5pjt",
        "gps_coordinates": {
            "latitude": 48.8939798,
            "longitude": 2.3597223000000005
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "http://mobi92.site-solocal.com/",
            "directions": "https://www.google.fr/maps/dir//Mobi+92D%C3%A9m%C3%A9nagement,+4+Rue+de+la+Sabli%C3%A8re,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f1b94c1cf5f:0xeba03d95e9a020b4?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Mobi 92Déménagement",
        "type": "Services de déménagement et de stockage",
        "phone": "06 02 15 27 38",
        "address": "Gennevilliers",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 11,
        "rating": 3.9,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "4373466863395346809",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4373466863395346809&q=logistique+92&start=60",
        "lsig": "AB86z5VaE4G0F1cIHzdLKIkm9-A6",
        "provider_id": "/g/1hhgqfj3k",
        "gps_coordinates": {
            "latitude": 48.8723403,
            "longitude": 2.2285687
        },
        "links": {
            "website": "http://www.sogaris.fr/",
            "directions": "https://www.google.fr/maps/dir//Hotel+logistique+Chapelle+Internation+de+Sogaris,+61+Rue+de+la+Chapelle,+75018+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66e628306e7c3:0x3cb1acf0cd9f1979?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Hotel logistique Chapelle Internation de Sogaris",
        "type": "Service logistique",
        "phone": "01 45 12 72 00",
        "address": "Paris"
    },
    {
        "position": 12,
        "rating": 5,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "7557447966377219147",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7557447966377219147&q=logistique+92&start=60",
        "lsig": "AB86z5UFdnxyYnxmtj5WHN2DT3R2",
        "provider_id": "/g/1pv27l1q1",
        "gps_coordinates": {
            "latitude": 48.924402,
            "longitude": 2.267843
        },
        "service_options": {
            "devis_en_ligne": true
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//1devisrapide+-+d%C3%A9m%C3%A9nagement+pas+cher,+27+Ter+Rue+de+Verdun,+92150+Suresnes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60cde9f90cc89:0x68e172e26469944b?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "1devisrapide - déménagement pas cher",
        "type": "Services de déménagement et de stockage",
        "phone": "06 18 73 07 08",
        "address": "Suresnes",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 13,
        "rating": 2.8,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "11542156020141394543",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11542156020141394543&q=logistique+92&start=60",
        "lsig": "AB86z5U1FZ4-zgV_Vw08D6Mg1wkT",
        "provider_id": "/g/1td8yf28",
        "gps_coordinates": {
            "latitude": 48.9045833,
            "longitude": 2.2607885999999997
        },
        "links": {
            "website": "https://guillemot.mon-gd.com/",
            "directions": "https://www.google.fr/maps/dir//D%C3%A9m%C3%A9nagement+Guillemot+(92),+45+Rue+Tilly,+92700+Colombes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665c9d2f8a3cf:0xa02df9bf52aa0a6f?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Déménagement Guillemot (92)",
        "type": "Déménageur",
        "phone": "01 42 42 04 70",
        "address": "Colombes",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 14,
        "rating": 4.5,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "1675230632006263711",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1675230632006263711&q=logistique+92&start=60",
        "lsig": "AB86z5WOfj2nT0h77K9b2z6dQdiD",
        "provider_id": "/g/11c6t0nfsg",
        "gps_coordinates": {
            "latitude": 48.868779599999996,
            "longitude": 2.1580649
        },
        "links": {
            "website": "http://optimea.fr/",
            "directions": "https://www.google.fr/maps/dir//Optimea,+34+Rue+du+Moulin+des+Bruy%C3%A8res,+92400+Courbevoie/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665993e55d3ff:0x173f9d625196239f?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Optimea",
        "type": "Service logistique",
        "phone": "01 80 87 50 12",
        "address": "Courbevoie",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 15,
        "place_id": "1867631503163452972",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1867631503163452972&q=logistique+92&start=60",
        "lsig": "AB86z5U3ZIU9dj3hEjc7VYIPVd0n",
        "provider_id": "/g/11f3wl65dx",
        "gps_coordinates": {
            "latitude": 48.817055499999995,
            "longitude": 2.2973288
        },
        "links": {
            "website": "http://www.suitedesoins.fr/",
            "directions": "https://www.google.fr/maps/dir//Suite+de+Soins,+3+bis+Chem.+de+la+Jonch%C3%A8re,+92500+Rueil-Malmaison/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6633062448c37:0x19eb28f4fd62ee2c?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Suite de Soins",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "09 71 52 37 86",
        "address": "Rueil-Malmaison",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 16,
        "place_id": "14900297433774266889",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14900297433774266889&q=logistique+92&start=60",
        "lsig": "AB86z5XFP-uKR9ajjOZBrWxRfN86",
        "gps_coordinates": {
            "latitude": 48.9234301,
            "longitude": 2.3060269
        },
        "title": "Débarras92",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 46 44 02 07",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 17,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "16877861011000515979",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16877861011000515979&q=logistique+92&start=60",
        "lsig": "AB86z5VujxY6ReW0BY_ktGQQb8ai",
        "provider_id": "/g/11p154jmxd",
        "gps_coordinates": {
            "latitude": 48.8786208,
            "longitude": 2.3149728
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Sasu+Global+D%C3%A9m%C3%A9nagement+France,+5+Rue+Jean+Lur%C3%A7at,+92240+Malakoff/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e671a580de8589:0xea3a352ab119dd8b?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Sasu Global Déménagement France",
        "type": "Services de déménagement et de stockage",
        "phone": "06 03 12 15 18",
        "address": "Malakoff",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 18,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "186565401045203346",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=186565401045203346&q=logistique+92&start=60",
        "lsig": "AB86z5VCkT-vBEoLe7nPhZJ_ZKEB",
        "provider_id": "/g/11hyl6bl1n",
        "gps_coordinates": {
            "latitude": 48.8428895,
            "longitude": 2.2441842999999997
        },
        "links": {
            "website": "https://www.clickngo.fr/",
            "directions": "https://www.google.fr/maps/dir//Click'n'go,+7+Rue+du+Foss%C3%A9+Blanc,+92230+Gennevilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6661ec8004f65:0x296d03e68ad7992?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Click'n'go",
        "type": "Coursier",
        "phone": "01 47 33 83 42",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 19,
        "rating": 3.8,
        "reviews_original": "(26)",
        "reviews": 26,
        "place_id": "4434459229585856401",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4434459229585856401&q=logistique+92&start=60",
        "lsig": "AB86z5W_WBLzWmPkoBz3Sy3KSLVg",
        "provider_id": "/g/1tvw47fp",
        "gps_coordinates": {
            "latitude": 48.87862,
            "longitude": 2.3149729
        },
        "links": {
            "website": "http://www.stef.com/",
            "directions": "https://www.google.fr/maps/dir//Stef+SA,+93+Bd+Malesherbes,+75008+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66fb7b6e02855:0x3d8a5d2cae6ad791?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Stef SA",
        "type": "Service logistique",
        "phone": "01 40 74 29 00",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 20,
        "rating": 5,
        "reviews_original": "(29)",
        "reviews": 29,
        "place_id": "8434225963598597675",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8434225963598597675&q=logistique+92&start=60",
        "lsig": "AB86z5XOApsq0N4IZ8JIGUua3Yfx",
        "provider_id": "/g/11c1v1b5x4",
        "gps_coordinates": {
            "latitude": 48.842888,
            "longitude": 2.2441843
        },
        "links": {
            "website": "https://demenagement-boulogne92.fr/",
            "directions": "https://www.google.fr/maps/dir//D%C3%A9m%C3%A9nagement+Boulogne+chrono,+75+Rue+du+Ch%C3%A2teau,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66369b7b89d2d:0x750c63d3d3abce2b?sa=X&ved=2ahUKEwjPv4vsvY6CAxX-GVkFHfSDBBA4PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Déménagement Boulogne chrono",
        "type": "Déménageur",
        "phone": "01 84 19 08 90",
        "address": "Boulogne-Billancourt",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 1,
        "rating": 4.9,
        "reviews_original": "(181)",
        "reviews": 181,
        "place_id": "4976873827108293750",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4976873827108293750&q=logistique+92&start=80",
        "lsig": "AB86z5X17wA49_0z6pwvKK1-51Mi",
        "provider_id": "/g/11lq3cg5qh",
        "gps_coordinates": {
            "latitude": 48.8923114,
            "longitude": 2.2337613
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "https://www.luxecodemenagement.com/",
            "directions": "https://www.google.fr/maps/dir//LUXECO+I+AGENCE+DE+D%C3%89M%C3%89NAGEMENT,+7+Cr+Valmy,+92800+Puteaux/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6658a82d67223:0x451168608cba8c76?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "LUXECO I AGENCE DE DÉMÉNAGEMENT",
        "type": "Services de déménagement et de stockage",
        "phone": "01 87 53 62 20",
        "address": "Puteaux",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 2,
        "rating": 4,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "15386306245282507185",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15386306245282507185&q=logistique+92&start=80",
        "lsig": "AB86z5VuwRCEPXBvKtFK59ajy3Np",
        "provider_id": "/g/11nxcdp2rw",
        "gps_coordinates": {
            "latitude": 48.914964,
            "longitude": 2.2024458
        },
        "links": {
            "website": "http://www.mauffrey.com/",
            "directions": "https://www.google.fr/maps/dir//Mauffrey+Ampliroll+Services,+3+Rue+de+la+Rivi%C3%A8re,+78420+Carri%C3%A8res-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6651a2d7400b7:0xd58724028b7029b1?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Mauffrey Ampliroll Services",
        "type": "Société de transport routier",
        "address": "Carrières-sur-Seine"
    },
    {
        "position": 3,
        "rating": 4,
        "reviews_original": "(21)",
        "reviews": 21,
        "place_id": "11797266154127115829",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11797266154127115829&q=logistique+92&start=80",
        "lsig": "AB86z5Xwe_0Qf930R5S9j-abwXtW",
        "provider_id": "/g/1tdc4jy9",
        "gps_coordinates": {
            "latitude": 48.784109,
            "longitude": 2.2510836
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//D%C3%A9m%C3%A9nagements+Delacquis+SARL,+10+Voie+d'Igny,+92350+Le+Plessis-Robinson/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67a18ec94c1c5:0xa3b84f10057c4635?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Déménagements Delacquis SARL",
        "type": "Déménageur",
        "phone": "01 46 32 37 00",
        "address": "Le Plessis-Robinson",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 4,
        "rating": 3,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "3101006472964261395",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3101006472964261395&q=logistique+92&start=80",
        "lsig": "AB86z5X8Q34ChJQGPXkNuHIAXYq8",
        "provider_id": "/g/1tr8kx0b",
        "gps_coordinates": {
            "latitude": 48.8325183,
            "longitude": 2.2513163
        },
        "links": {
            "website": "https://demenageur-stt.com/demenagement-rapid-transport-92",
            "directions": "https://www.google.fr/maps/dir//Rapid+Transports,+38+Bd+de+la+R%C3%A9publique,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67aec989e5d39:0x2b08fcf51338c613?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Rapid Transports",
        "type": "Déménageur",
        "phone": "01 46 20 50 15",
        "address": "Boulogne-Billancourt",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 5,
        "rating": 4.9,
        "reviews_original": "(31)",
        "reviews": 31,
        "place_id": "12313664677220923099",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12313664677220923099&q=logistique+92&start=80",
        "lsig": "AB86z5WIUKw8M526n9cAa9rYv817",
        "provider_id": "/g/11fhyntvfs",
        "gps_coordinates": {
            "latitude": 48.880564799999995,
            "longitude": 2.2771995
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//LCEDEM+-+Entreprise+de+d%C3%A9m%C3%A9nagement+Agence+Neuilly+sur+Seine,+3+Rue+du+Commandant+Pilot,+92200+Neuilly-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6655577edbee1:0xaae2ecc8890736db?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "LCEDEM - Entreprise de déménagement Agence Neuilly sur Seine",
        "type": "Déménageur",
        "address": "Neuilly-sur-Seine",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 6,
        "rating": 4.8,
        "reviews_original": "(8)",
        "reviews": 8,
        "description": "\"Un professionnel des logistiques\"",
        "place_id": "10321660093922787682",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10321660093922787682&q=logistique+92&start=80",
        "lsig": "AB86z5XTMhB_oD4_ACYw0YsJwlh2",
        "provider_id": "/g/11fjs9l_13",
        "gps_coordinates": {
            "latitude": 49.0087027,
            "longitude": 2.1659927
        },
        "links": {
            "website": "http://www.mylog.fr/",
            "directions": "https://www.google.fr/maps/dir//MYLOG,+22+Ave.+Paul+Langevin,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6618dd747645d:0x8f3de72b3e97c162?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "MYLOG",
        "type": "Service logistique",
        "phone": "01 39 60 29 35",
        "address": "Herblay-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 7,
        "place_id": "16939927069503697024",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16939927069503697024&q=logistique+92&start=80",
        "lsig": "AB86z5UtyZ5bF6AYPa2bsdAl-Xhk",
        "provider_id": "/g/1tfsm98s",
        "gps_coordinates": {
            "latitude": 48.810231300000005,
            "longitude": 2.2465158
        },
        "links": {
            "website": "http://www.emerod.com/",
            "directions": "https://www.google.fr/maps/dir//Emerod,+4+Rue+Henri+Barbusse,+92190+Meudon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67a5c8bcc5f67:0xeb16b5eb0acab080?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Emerod",
        "reviews_original": "Aucun avis",
        "type": "Société d'import-export",
        "phone": "06 26 54 92 22",
        "address": "Meudon"
    },
    {
        "position": 8,
        "rating": 4.5,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "10019525598763297598",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10019525598763297598&q=logistique+92&start=80",
        "lsig": "AB86z5UWwB6KR9eMAcEHH6WktKxy",
        "provider_id": "/g/11c75w2ds9",
        "gps_coordinates": {
            "latitude": 48.8080458,
            "longitude": 2.3995775
        },
        "links": {
            "website": "http://www.stellae.us.com/",
            "directions": "https://www.google.fr/maps/dir//Stellae+International+France,+47+Bis+Rue+Ernest+Renan+Bloc+C1+-+Capstone,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673aedd6a8fd7:0x8b0c817244382b3e?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Stellae International France",
        "type": "Service logistique",
        "phone": "01 53 14 10 34",
        "address": "Ivry-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 9,
        "place_id": "6779485907159128870",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6779485907159128870&q=logistique+92&start=80",
        "lsig": "AB86z5V4Zze4anytlli56NWeS9Mi",
        "provider_id": "/g/11sv5ljmj_",
        "gps_coordinates": {
            "latitude": 48.890167399999996,
            "longitude": 2.3614886
        },
        "links": {
            "website": "http://relais.pickup.fr/info.php?p=3053S",
            "directions": "https://www.google.fr/maps/dir//Relais+Pickup,+92+Rue+Riquet,+75018+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66fe15a48fb19:0x5e15928367fc9b26?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Relais Pickup",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 10,
        "place_id": "10403723674845929074",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10403723674845929074&q=logistique+92&start=80",
        "lsig": "AB86z5VxaHsLxkuVhVrnqTsYw2RR",
        "provider_id": "/g/1tzvvw3n",
        "gps_coordinates": {
            "latitude": 48.9668545,
            "longitude": 2.5630854
        },
        "links": {
            "website": "https://www.onet.fr/logistique/",
            "directions": "https://www.google.fr/maps/dir//Onet+Logistique+ILE+DE+FRANCE+DISTRIBUTION,+11+Rue+Henri+Farman,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6168412d334cd:0x9061738f9c835e72?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Onet Logistique ILE DE FRANCE DISTRIBUTION",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 34 04 70 20",
        "address": "Tremblay-en-France",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 11,
        "place_id": "5186770182252442275",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5186770182252442275&q=logistique+92&start=80",
        "lsig": "AB86z5WSQl7i1aDYuEW_NOjKFtAh",
        "provider_id": "/g/11b6dpryr3",
        "gps_coordinates": {
            "latitude": 48.9477987,
            "longitude": 2.471723
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistique+Holding,+2+Rue+Nicolas+Copernic,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b16bcf24f5:0x47fb1c0004beb2a3?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Logistique Holding",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 49 39 68 54",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 12,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "2391616770164724072",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2391616770164724072&q=logistique+92&start=80",
        "lsig": "AB86z5VUr_rt43wF_KGajfoQ1i2D",
        "gps_coordinates": {
            "latitude": 48.915752,
            "longitude": 2.2775556
        },
        "links": {
            "website": "http://debarras92.business.site/"
        },
        "title": "Débarras 92",
        "type": "Services de déménagement et de stockage",
        "phone": "06 77 84 18 65",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 13,
        "place_id": "10470917914321842170",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10470917914321842170&q=logistique+92&start=80",
        "lsig": "AB86z5UuM1wKyVVk6ESSVQab-wR4",
        "provider_id": "/g/11qpy8lyzf",
        "gps_coordinates": {
            "latitude": 48.7678557,
            "longitude": 2.2537928
        },
        "links": {
            "website": "https://www.demenagement-92.fr/",
            "directions": "https://www.google.fr/maps/dir//Les+Artistes+Du+D%C3%A9m%C3%A9nagement+-+D%C3%A9m%C3%A9nagement+Asni%C3%A8res+-+D%C3%A9m%C3%A9nagement+Hauts+De+Seine+-+D%C3%A9m%C3%A9nagement+92,+116+Rue+de+Colombes,+92600+Asni%C3%A8res-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e665c1ad2f58fd:0x91502c5da36d6ffa?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Les Artistes Du Déménagement - Déménagement Asnières - Déménagement Hauts De Seine - Déménagement 92",
        "reviews_original": "Aucun avis",
        "type": "Services de déménagement et de stockage",
        "phone": "01 85 76 60 14",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 14,
        "rating": 4.3,
        "reviews_original": "(61)",
        "reviews": 61,
        "place_id": "691001409601950759",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=691001409601950759&q=logistique+92&start=80",
        "lsig": "AB86z5Wm59wWFDr1zug6hdR5ObzR",
        "provider_id": "/g/1td29n7d",
        "gps_coordinates": {
            "latitude": 48.8419774,
            "longitude": 2.2203013
        },
        "links": {
            "website": "https://www.demenagements-guillaume.fr/",
            "directions": "https://www.google.fr/maps/dir//D%C3%A9m%C3%A9nagements+Guillaume,+6+Rue+Sint%C3%A8s,+92290+Ch%C3%A2tenay-Malabry/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e679f1fb36e30d:0x996ee1ef69e5427?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Déménagements Guillaume",
        "type": "Déménageur",
        "phone": "01 46 30 48 25",
        "address": "Châtenay-Malabry",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 15,
        "place_id": "13516285007965978828",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13516285007965978828&q=logistique+92&start=80",
        "lsig": "AB86z5X5WqXLpRmg6EWA2XAUti63",
        "provider_id": "/g/11btlv6332",
        "gps_coordinates": {
            "latitude": 48.896695,
            "longitude": 2.2865457
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Odas,+Bureaux+de+la+Colline+339,+92210+Saint-Cloud/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67b3b572d78b9:0xbb937d9a36c000cc?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Odas",
        "reviews_original": "Aucun avis",
        "type": "Société d'import-export",
        "phone": "01 41 12 23 23",
        "address": "Saint-Cloud"
    },
    {
        "position": 16,
        "place_id": "13475255927073301253",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13475255927073301253&q=logistique+92&start=80",
        "lsig": "AB86z5WDSkH2QD-AdwXzRilQ5WYO",
        "provider_id": "/g/11v00bxj49",
        "gps_coordinates": {
            "latitude": 48.870661399999996,
            "longitude": 2.225947
        },
        "links": {
            "website": "http://www.aperomood.com/",
            "directions": "https://www.google.fr/maps/dir//Ap%C3%A9ro+Mood+-+Livraison+Alcool+92,+110+Rue+du+Pr%C3%A9sident+Wilson,+92300+Levallois-Perret/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f65004b05fd:0xbb01b9dee6ae6305?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Apéro Mood - Livraison Alcool 92",
        "reviews_original": "Aucun avis",
        "type": "Service de livraison",
        "phone": "07 66 77 17 10",
        "address": "Levallois-Perret",
        "hours": "Fermé ⋅ Ouvre à 22:30"
    },
    {
        "position": 17,
        "rating": 5,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "8711918175485940862",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8711918175485940862&q=logistique+92&start=80",
        "lsig": "AB86z5WTRCHsmOm9JSYNngpHJa8M",
        "provider_id": "/g/11j0j5lbx8",
        "gps_coordinates": {
            "latitude": 48.8054883,
            "longitude": 2.4047207999999998
        },
        "service_options": {
            "devis_en_ligne": true,
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "website": "http://www.luxurydemenagement.com/",
            "directions": "https://www.google.fr/maps/dir//LUXURY+DEMENAGEMENT,+16+Rue+du+Mont+Val%C3%A9rien,+92150+Suresnes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6651308d15283:0x78e6f36c421bd47e?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "LUXURY DEMENAGEMENT",
        "type": "Déménageur",
        "phone": "01 85 73 50 59",
        "address": "Suresnes",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 18,
        "place_id": "5345859708284000142",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5345859708284000142&q=logistique+92&start=80",
        "lsig": "AB86z5VVM4BdCyItsD78nNEIYjdi",
        "provider_id": "/g/1w96g1cb",
        "gps_coordinates": {
            "latitude": 48.882418,
            "longitude": 2.1871834999999997
        },
        "links": {
            "website": "http://www.distripaq.com/",
            "directions": "https://www.google.fr/maps/dir//Distripaq,+32+Rue+Robert+Witchitz,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673a8c0f06203:0x4a304f14c357578e?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Distripaq",
        "reviews_original": "Aucun avis",
        "type": "Coursier",
        "phone": "0 820 82 19 01",
        "address": "Ivry-sur-Seine"
    },
    {
        "position": 19,
        "place_id": "6794831266078947068",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6794831266078947068&q=logistique+92&start=80",
        "lsig": "AB86z5V4oR6Gpmg7KR_pbTKq700i",
        "provider_id": "/g/1tdc931j",
        "gps_coordinates": {
            "latitude": 48.843485199999996,
            "longitude": 2.2471055
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ACTADEM+ABE,+66+Av.+Paul+Doumer,+92500+Rueil-Malmaison/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66361ae7b6935:0x5e4c1709335a76fc?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "ACTADEM ABE",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 39 86 88 25",
        "address": "Rueil-Malmaison"
    },
    {
        "position": 20,
        "place_id": "8287205871652907120",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8287205871652907120&q=logistique+92&start=80",
        "lsig": "AB86z5XrGyB7GYtEcgLxVoOxsI-3",
        "provider_id": "/g/1tff2btk",
        "gps_coordinates": {
            "latitude": 48.843487,
            "longitude": 2.2471056
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//d%C3%A9m%C3%A9nagement+versaillaise,+55+Rue+du+Ch%C3%A2teau,+92100+Boulogne-Billancourt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6884c8983bf7d:0x730211d530672870?sa=X&ved=2ahUKEwi9lIjtvY6CAxVHSTABHSvNDZo4UBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "déménagement versaillaise",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "address": "Boulogne-Billancourt"
    },
    {
        "position": 1,
        "place_id": "6943405577960343341",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6943405577960343341&q=logistique+93",
        "lsig": "AB86z5XK58l1p8HGopFgzrb6VcnF",
        "provider_id": "/g/11h6rn74b2",
        "gps_coordinates": {
            "latitude": 48.95755260000001,
            "longitude": 2.4699019
        },
        "links": {
            "website": "https://www.groupe-maisonhaute.fr/",
            "directions": "https://www.google.fr/maps/dir//Maisonhaute+Logistics+PARIS,+Garonor+Est,+Bat+13,+Cellule+H,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61592e4b90461:0x605bee95ddcac72d?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "Maisonhaute Logistics PARIS",
        "address": "Aulnay-sous-Bois",
        "type": "Service logistique",
        "phone": "01 86 33 00 33",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 2,
        "place_id": "9148097548654089309",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9148097548654089309&q=logistique+93",
        "lsig": "AB86z5UOgJ2Ducvb_cQt9Y5mlZ-D",
        "gps_coordinates": {
            "latitude": 48.8935616,
            "longitude": 2.439479
        },
        "title": "CRi - Logistique",
        "address": "Service logistique",
        "phone": "01 48 44 80 71",
        "extensions": [
            "Ouvert ⋅ Ferme à 17:00"
        ]
    },
    {
        "position": 3,
        "place_id": "15791990598597792267",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15791990598597792267&q=logistique+93",
        "lsig": "AB86z5VIPE1J8HbAg19l_yQYUsNx",
        "provider_id": "/g/1tdl5fj7",
        "gps_coordinates": {
            "latitude": 48.9475784,
            "longitude": 2.4725297999999998
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//M.d+Logistique,+8+Rue+de+la+Pointe,+93130+Noisy-le-Sec/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d206c7cdbef:0xdb286bc7a5bad20b?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "M.d Logistique",
        "address": "Noisy-le-Sec",
        "type": "Société de transport routier",
        "phone": "09 81 93 62 52"
    },
    {
        "position": 4,
        "place_id": "14756481476367965947",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14756481476367965947&q=logistique+93",
        "lsig": "AB86z5UhRLCk0n-8z4B0r4_l9FWK",
        "provider_id": "/g/1tj1rcm4",
        "gps_coordinates": {
            "latitude": 48.8996693,
            "longitude": 2.4111387
        },
        "links": {
            "website": "http://www.logfret.com/",
            "directions": "https://www.google.fr/maps/dir//Logfr%C3%AAt+Logistique+fr%C3%AAt,+2+Rue+Nicolas+Copernic,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b1683cbe71:0xccc98db8358b5efb?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "Logfrêt Logistique frêt",
        "address": "Aulnay-sous-Bois",
        "type": "Société de transport routier",
        "phone": "01 49 39 68 00",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 5,
        "place_id": "14366725284112119488",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14366725284112119488&q=logistique+93",
        "lsig": "AB86z5VT3XBBK4ra54-JtYYTVBnh",
        "provider_id": "/g/1hf2q8z6v",
        "gps_coordinates": {
            "latitude": 48.8993986,
            "longitude": 2.3953596
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Pantin+Logistique,+110+bis+Avenue+du+G%C3%A9n%C3%A9ral+Leclerc,+93500+Pantin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c567590e8ab:0xc760dc87192036c0?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "Pantin Logistique",
        "address": "Pantin",
        "type": "Service logistique",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 6,
        "place_id": "6107511114371750009",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6107511114371750009&q=logistique+93",
        "lsig": "AB86z5VC7Y9Mov2KQqhRC1tMXxE1",
        "provider_id": "/g/11btltjjst",
        "gps_coordinates": {
            "latitude": 48.957520699999996,
            "longitude": 2.4691112
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//France+Logistique,+17+Rue+du+Chemin+de+Fer,+93500+Pantin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c4a39009e43:0x54c23cffe1e0d879?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "France Logistique",
        "address": "Pantin",
        "type": "Société de transport routier",
        "phone": "01 48 45 98 12"
    },
    {
        "position": 7,
        "place_id": "8647118261508582717",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8647118261508582717&q=logistique+93",
        "lsig": "AB86z5V5yX9Jagj1PaCL0qPJHcS5",
        "provider_id": "/g/1tlncr9c",
        "gps_coordinates": {
            "latitude": 48.903100599999995,
            "longitude": 2.4192121
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Excell+Team+Logistique,+ZI+Garonor+Batiment+batiment,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caec066783:0x7800bc3e94032d3d?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "Excell Team Logistique",
        "address": "Aulnay-sous-Bois",
        "type": "Société de transport routier",
        "phone": "01 49 89 01 36",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 8,
        "place_id": "12777233505391557204",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12777233505391557204&q=logistique+93",
        "lsig": "AB86z5UdkYzop_4WHsVnyV5XWnWf",
        "provider_id": "/g/11f6kvrv6p",
        "gps_coordinates": {
            "latitude": 48.9529985,
            "longitude": 2.4766773
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//HM+FRET+26+Transport+Logistique,+17+Chem.+des+Vignes,+93000+Bobigny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66dcb1f8af491:0xb151da2d2d153a54?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIDhAA&hl=fr&gl=fr"
        },
        "title": "HM FRET 26 Transport Logistique",
        "address": "Bobigny",
        "type": "Service logistique",
        "phone": "06 67 89 92 30",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 9,
        "place_id": "5590251191673052190",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5590251191673052190&q=logistique+93",
        "lsig": "AB86z5Vi3AYaaRziLlLOEkHuB90x",
        "provider_id": "/g/11h0spqn3g",
        "gps_coordinates": {
            "latitude": 48.9477987,
            "longitude": 2.471723
        },
        "links": {
            "website": "https://www.logistib.com/",
            "directions": "https://www.google.fr/maps/dir//Logistib,+4+Rue+Louis+Saillant,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d3596a4162b:0x4d948fd724e05c1e?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "Logistib",
        "address": "Aulnay-sous-Bois",
        "type": "Service logistique",
        "phone": "06 34 66 24 88",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 10,
        "place_id": "5186770182252442275",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5186770182252442275&q=logistique+93",
        "lsig": "AB86z5WSQl7i1aDYuEW_NOjKFtAh",
        "provider_id": "/g/11b6dpryr3",
        "gps_coordinates": {
            "latitude": 48.9539237,
            "longitude": 2.4684512
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistique+Holding,+2+Rue+Nicolas+Copernic,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b16bcf24f5:0x47fb1c0004beb2a3?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQICxAA&hl=fr&gl=fr"
        },
        "title": "Logistique Holding",
        "address": "Aulnay-sous-Bois",
        "type": "Société de transport routier",
        "phone": "01 49 39 68 54"
    },
    {
        "position": 11,
        "place_id": "17899423938676127372",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17899423938676127372&q=logistique+93",
        "lsig": "AB86z5XdakklPWIkmGjGdyvnSG8G",
        "provider_id": "/g/11b6dpr325",
        "gps_coordinates": {
            "latitude": 48.9080114,
            "longitude": 2.4263481
        },
        "links": {
            "website": "http://www.marichal.fr/",
            "directions": "https://www.google.fr/maps/dir//XF3C%2B22+Marichal+Logistics+-+Groupe+BBL,+Zone+Garonor+Building,+Rue+Robert+Br%C3%A9mond+B08,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caf25c77ab:0xf867873cace9f68c?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Marichal Logistics - Groupe BBL",
        "address": "Aulnay-sous-Bois",
        "type": "Service logistique",
        "phone": "01 45 91 77 80",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 12,
        "place_id": "18035326069877050989",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18035326069877050989&q=logistique+93",
        "lsig": "AB86z5Vu232G-AksjE0kssq2r0ky",
        "provider_id": "/g/11gxjwkqnl",
        "gps_coordinates": {
            "latitude": 48.955881999999995,
            "longitude": 2.467877
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ORGANISATION+LOGISTIQUE+TRANSPORT,+45+Av.+Henri+Barbusse,+93000+Bobigny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d5656a1519d:0xfa4a59815b5d0e6d?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIChAA&hl=fr&gl=fr"
        },
        "title": "ORGANISATION LOGISTIQUE TRANSPORT",
        "address": "Bobigny",
        "type": "Société de transport routier",
        "phone": "01 41 50 00 00",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 13,
        "place_id": "15278613587821242347",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15278613587821242347&q=logistique+93",
        "lsig": "AB86z5VKmCOvvbRMa3Td7AFlZ5_1",
        "gps_coordinates": {
            "latitude": 48.9650148,
            "longitude": 2.5606166
        },
        "title": "Maes Logistique France",
        "address": "Société de transport international de marchandises",
        "phone": "01 45 91 00 58",
        "hours": "Aulnay-sous-Bois"
    },
    {
        "position": 14,
        "place_id": "7416051527038038802",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7416051527038038802&q=logistique+93",
        "lsig": "AB86z5XXcGybuB5J4pFQitgZgu7c",
        "provider_id": "/g/11tsd9s7zh",
        "gps_coordinates": {
            "latitude": 48.9481876,
            "longitude": 2.4717243
        },
        "links": {
            "website": "https://www.hlogistics.fr/",
            "directions": "https://www.google.fr/maps/dir//Hlogistics+-+Logistique+et+d%C3%A9m%C3%A9nagement%E2%80%8B,+39+Av.+Marcel+Paul,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6179955149713:0x66eb1b9269187312?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQICBAA&hl=fr&gl=fr"
        },
        "title": "Hlogistics - Logistique et déménagement​",
        "address": "Tremblay-en-France",
        "type": "Service logistique",
        "phone": "01 49 47 03 18",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 15,
        "place_id": "16444062995926858279",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16444062995926858279&q=logistique+93",
        "lsig": "AB86z5UmX_9BWynau1P528sHKyim",
        "provider_id": "/g/11c5wmnxpz",
        "gps_coordinates": {
            "latitude": 48.924841,
            "longitude": 2.3694547999999998
        },
        "links": {
            "website": "https://www.pointp.fr/",
            "directions": "https://www.google.fr/maps/dir//Point.P+Plateforme+Logistique+Aulnay,+1+Rue+Nicolas+Copernic,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b16823e837:0xe4350c2ba05dba27?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "Point.P Plateforme Logistique Aulnay",
        "address": "Aulnay-sous-Bois",
        "type": "Service logistique",
        "phone": "01 45 91 60 80",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 16,
        "place_id": "5790315400499798816",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5790315400499798816&q=logistique+93",
        "lsig": "AB86z5VHuDkLjNHA4viE3XzOCAqB",
        "provider_id": "/g/11b6dd8yh_",
        "gps_coordinates": {
            "latitude": 48.958214899999994,
            "longitude": 2.4690802
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//BSM+Trans-logistique,+113+Rue+de+la+Barbacane,+93200+Saint-Denis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66ea6499c9247:0x505b552da843a320?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "BSM Trans-logistique",
        "address": "Saint-Denis",
        "type": "Société de transport routier",
        "phone": "06 51 86 46 98"
    },
    {
        "position": 17,
        "place_id": "5693162728978616691",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5693162728978616691&q=logistique+93",
        "lsig": "AB86z5UF503DWJrjh7OkFySoCUwS",
        "provider_id": "/g/11flt3r8tr",
        "gps_coordinates": {
            "latitude": 48.971873599999995,
            "longitude": 2.507611
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Alliance+Transport+Logistique,+Garonor+BATIMENT+13,+CELLULE+C,+93150+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b3486bf83ed:0x4f022d569d439173?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "Alliance Transport Logistique",
        "address": "Aulnay-sous-Bois",
        "type": "Service logistique",
        "phone": "01 56 96 09 02",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 18,
        "place_id": "14843871703351730600",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14843871703351730600&q=logistique+93",
        "lsig": "AB86z5WEO2jf7EAeR_YB5mb7Ck8W",
        "provider_id": "/g/1v93_cb2",
        "gps_coordinates": {
            "latitude": 48.972141,
            "longitude": 2.490013
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//FC+Logistique,+22+Av.+des+Nations,+93420+Villepinte/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615980956da8b:0xce0006ab01c0a1a8?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "FC Logistique",
        "address": "Villepinte",
        "type": "Société de transport routier",
        "phone": "01 49 19 89 89",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 19,
        "place_id": "7399233320770087710",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7399233320770087710&q=logistique+93",
        "lsig": "AB86z5WTnkaxKc6S7AdZQJf0z_65",
        "provider_id": "/g/11j7l39rrv",
        "gps_coordinates": {
            "latitude": 48.915893,
            "longitude": 2.4695647999999997
        },
        "links": {
            "website": "https://www.stef.com/",
            "directions": "https://www.google.fr/maps/dir//STEF+Logistique+AULNAY-SOUS-BOIS,+47+Bd+Andr%C3%A9+Citro%C3%ABn,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614c1810c93f5:0x66af5b809ebc2b1e?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "STEF Logistique AULNAY-SOUS-BOIS",
        "address": "Aulnay-sous-Bois",
        "type": "Service logistique",
        "phone": "01 41 84 60 00"
    },
    {
        "position": 20,
        "place_id": "12654075756546903605",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12654075756546903605&q=logistique+93",
        "lsig": "AB86z5Uu8t3HwHErVnLFaN6FEvIk",
        "provider_id": "/g/11nxc5wppp",
        "gps_coordinates": {
            "latitude": 48.915894,
            "longitude": 2.469565
        },
        "service_options": {
            "rendez_vous_en_ligne": true,
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//TRANSPLAISIR+DEMENAGEMENT+ET+LOGISTIQUE,+13+R%C3%A9s+Robespierre,+93700+Drancy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61387cee5c4e7:0xaf9c4edb3ddc4e35?sa=X&ved=2ahUKEwjPzO2Avo6CAxWqAjQIHaCrD7gQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "TRANSPLAISIR DEMENAGEMENT ET LOGISTIQUE",
        "address": "Drancy",
        "type": "Société de transport routier",
        "phone": "06 95 47 74 05",
        "hours": "Ouvert ⋅ Ferme à 18:00",
        "extensions": [
            ""
        ]
    },
    {
        "position": 1,
        "rating": 2.3,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "14843871703351730600",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14843871703351730600&q=logistique+93&start=20",
        "lsig": "AB86z5WEO2jf7EAeR_YB5mb7Ck8W",
        "provider_id": "/g/1v93_cb2",
        "gps_coordinates": {
            "latitude": 48.971873599999995,
            "longitude": 2.507611
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//FC+Logistique,+22+Av.+des+Nations,+93420+Villepinte/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615980956da8b:0xce0006ab01c0a1a8?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "FC Logistique",
        "type": "Société de transport routier",
        "phone": "01 49 19 89 89",
        "address": "Villepinte",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "place_id": "580446731945084310",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=580446731945084310&q=logistique+93&start=20",
        "lsig": "AB86z5WPwoT7UTcPZj3kAdMgYTou",
        "provider_id": "/g/11b6dr_kjd",
        "gps_coordinates": {
            "latitude": 48.9526331,
            "longitude": 2.4751361
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//LTR+Logistique,+24+Rue+Germain+Planque,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b7bf4910fb:0x80e293a349f8596?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "LTR Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 45 91 96 45",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 3,
        "rating": 3.6,
        "reviews_original": "(67)",
        "reviews": 67,
        "place_id": "7399233320770087710",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7399233320770087710&q=logistique+93&start=20",
        "lsig": "AB86z5WTnkaxKc6S7AdZQJf0z_65",
        "provider_id": "/g/11j7l39rrv",
        "gps_coordinates": {
            "latitude": 48.972141,
            "longitude": 2.490013
        },
        "links": {
            "website": "https://www.stef.com/",
            "directions": "https://www.google.fr/maps/dir//STEF+Logistique+AULNAY-SOUS-BOIS,+47+Bd+Andr%C3%A9+Citro%C3%ABn,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614c1810c93f5:0x66af5b809ebc2b1e?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "STEF Logistique AULNAY-SOUS-BOIS",
        "type": "Service logistique",
        "phone": "01 41 84 60 00",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 4,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "12654075756546903605",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12654075756546903605&q=logistique+93&start=20",
        "lsig": "AB86z5Uu8t3HwHErVnLFaN6FEvIk",
        "provider_id": "/g/11nxc5wppp",
        "gps_coordinates": {
            "latitude": 48.915893,
            "longitude": 2.4695647999999997
        },
        "service_options": {
            "rendez_vous_en_ligne": true,
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//TRANSPLAISIR+DEMENAGEMENT+ET+LOGISTIQUE,+13+R%C3%A9s+Robespierre,+93700+Drancy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61387cee5c4e7:0xaf9c4edb3ddc4e35?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "TRANSPLAISIR DEMENAGEMENT ET LOGISTIQUE",
        "type": "Société de transport routier",
        "phone": "06 95 47 74 05",
        "address": "Drancy",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 5,
        "rating": 3.1,
        "reviews_original": "(93)",
        "reviews": 93,
        "place_id": "1126553833933788018",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1126553833933788018&q=logistique+93&start=20",
        "lsig": "AB86z5UzPhWjwai3Urdl_3a2tS-c",
        "provider_id": "/g/11d_9j4vy3",
        "gps_coordinates": {
            "latitude": 48.954177800000004,
            "longitude": 2.4532189
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Vente-priv%C3%A9e+Logistique,+5-9+Rue+des+Fr%C3%A8res+Lumi%C3%A8re,+93150+Le+Blanc-Mesnil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b47e368dcf9:0xfa252be43fa5372?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Vente-privée Logistique",
        "type": "Service logistique",
        "address": "Le Blanc-Mesnil"
    },
    {
        "position": 6,
        "rating": 4.9,
        "reviews_original": "(122)",
        "reviews": 122,
        "place_id": "6529589712085335758",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6529589712085335758&q=logistique+93&start=20",
        "lsig": "AB86z5WVHOsxCURwJZpcyZ6BYo_w",
        "provider_id": "/g/1tfwct2t",
        "gps_coordinates": {
            "latitude": 48.86117,
            "longitude": 2.4593669
        },
        "service_options": {
            "devis_en_ligne": true,
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "website": "http://www.globalsolutionlogistique.fr/",
            "directions": "https://www.google.fr/maps/dir//Global+Solution+Logistique,+43+Rue+Lenain+de+Tillemont,+93100+Montreuil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e612af2ae75065:0x5a9dc33f75e43ece?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Global Solution Logistique",
        "type": "Service logistique",
        "phone": "06 26 87 04 29",
        "address": "Montreuil",
        "hours": "Ouvert ⋅ Ferme à 20:00"
    },
    {
        "position": 7,
        "rating": 2.9,
        "reviews_original": "(278)",
        "reviews": 278,
        "description": "\"Je suis routier et je participe au transport de \"c'est colis\".\"",
        "place_id": "3598659437890434003",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3598659437890434003&q=logistique+93&start=20",
        "lsig": "AB86z5VMZO0f2ag_2b5MwUh9ir39",
        "provider_id": "/g/11g8wdztyz",
        "gps_coordinates": {
            "latitude": 48.9545831,
            "longitude": 2.4584593
        },
        "links": {
            "website": "http://amazon.fr/amzl",
            "directions": "https://www.google.fr/maps/dir//Amazon+DIF4,+1+Rue+Robert+Br%C3%A9mond,+93150+Le+Blanc-Mesnil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b49e40fcb19:0x31f101b13710f3d3?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Amazon DIF4",
        "type": "Service logistique",
        "phone": "0 805 10 14 20",
        "address": "Le Blanc-Mesnil",
        "hours": "Ouvert ⋅ Ferme à 00:00"
    },
    {
        "position": 8,
        "place_id": "10403723674845929074",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10403723674845929074&q=logistique+93&start=20",
        "lsig": "AB86z5VxaHsLxkuVhVrnqTsYw2RR",
        "provider_id": "/g/1tzvvw3n",
        "gps_coordinates": {
            "latitude": 48.9668545,
            "longitude": 2.5630854
        },
        "links": {
            "website": "https://www.onet.fr/logistique/",
            "directions": "https://www.google.fr/maps/dir//Onet+Logistique+ILE+DE+FRANCE+DISTRIBUTION,+11+Rue+Henri+Farman,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6168412d334cd:0x9061738f9c835e72?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Onet Logistique ILE DE FRANCE DISTRIBUTION",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 34 04 70 20",
        "address": "Tremblay-en-France",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 9,
        "rating": 4.8,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "12271975685210712401",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12271975685210712401&q=logistique+93&start=20",
        "lsig": "AB86z5WVI1a7dv3htfFUJSDiyZMD",
        "provider_id": "/g/11btlqh3s3",
        "gps_coordinates": {
            "latitude": 48.9394983,
            "longitude": 2.4439317
        },
        "links": {
            "website": "http://servexlogistique.wixsite.com/servexlogistique",
            "directions": "https://www.google.fr/maps/dir//Servex+Logistique,+9+Rue+Iqbal+Masih,+93150+Le+Blanc-Mesnil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b5e7a26ab55:0xaa4ed0ddb1372951?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Servex Logistique",
        "type": "Société de transport routier",
        "phone": "01 48 65 14 88",
        "address": "Le Blanc-Mesnil"
    },
    {
        "position": 10,
        "place_id": "7116808547052965052",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7116808547052965052&q=logistique+93&start=20",
        "lsig": "AB86z5XtAlPZ5fMYW8osfgnYe-RO",
        "gps_coordinates": {
            "latitude": 48.955410900000004,
            "longitude": 2.4719091
        },
        "title": "CD93",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 74 71 95 31"
    },
    {
        "position": 11,
        "rating": 2.6,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "15949429657686191456",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15949429657686191456&q=logistique+93&start=20",
        "lsig": "AB86z5VxtZ41X15gLPZvHjZMjCmM",
        "provider_id": "/g/11btlrh1kw",
        "gps_coordinates": {
            "latitude": 48.9801097,
            "longitude": 2.5317933
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Inter-concept+Logistics,+Garonor,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caf25c77ab:0xdd57c1c51c772d60?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Inter-concept Logistics",
        "type": "Société de transport international de marchandises",
        "phone": "01 48 65 52 71",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 12,
        "rating": 4.1,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "11321386683668884885",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11321386683668884885&q=logistique+93&start=20",
        "lsig": "AB86z5XcouR6_of2800pxNz_Xca5",
        "provider_id": "/g/11qs8g0zq2",
        "gps_coordinates": {
            "latitude": 48.968581199999996,
            "longitude": 2.4955274999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//FC+LOGISTIQUE,+10+Av.+du+Valquiou,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615c3158693d3:0x9d1da5349cebed95?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "FC LOGISTIQUE",
        "type": "Service logistique",
        "address": "Tremblay-en-France",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 13,
        "rating": 3,
        "reviews_original": "(162)",
        "reviews": 162,
        "description": "\"Plateforme logistique Carrefour\"",
        "place_id": "9978480682983600474",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9978480682983600474&q=logistique+93&start=20",
        "lsig": "AB86z5XrjW_E96GGRBgcTaU7Ab37",
        "provider_id": "/g/1hc33f5vd",
        "gps_coordinates": {
            "latitude": 48.9391519,
            "longitude": 2.4280771
        },
        "links": {
            "website": "http://www.id-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//ID+Logistics+Plateforme+Carrefour,+47+Bd+Andr%C3%A9+Citro%C3%ABn,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caf25bf2b3:0x8a7aaf501b55b15a?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "ID Logistics Plateforme Carrefour",
        "type": "Service logistique",
        "phone": "01 49 47 48 21",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 14,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "355788348163030181",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=355788348163030181&q=logistique+93&start=20",
        "lsig": "AB86z5WAALKCqB5Nyg8yaoLO9_RH",
        "provider_id": "/g/11fj2db4rl",
        "gps_coordinates": {
            "latitude": 48.9579765,
            "longitude": 2.374745
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transplaisir+Demenagement+Et+Logistique,+6+B+Rue+du+Commandant+Baroche,+93350+Le+Bourget/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b7c8dca598b:0x4f0039e1b7afca5?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Transplaisir Demenagement Et Logistique",
        "type": "Déménageur",
        "phone": "06 95 47 74 05",
        "address": "Le Bourget",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 15,
        "rating": 3.8,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "3035227225352675798",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3035227225352675798&q=logistique+93&start=20",
        "lsig": "AB86z5WQxNtHsZRCb9B6AIRO0_Cj",
        "provider_id": "/g/11btltdhbk",
        "gps_coordinates": {
            "latitude": 48.953628699999996,
            "longitude": 2.4696352
        },
        "links": {
            "website": "http://www.kitlogistiques.fr/",
            "directions": "https://www.google.fr/maps/dir//Kit+Logistiques,+38+Av.+du+Colonel+Rol-Tanguy,+93240+Stains/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66bdf8b377bc7:0x2a1f4b1483bda1d6?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Kit Logistiques",
        "type": "Service de transport",
        "phone": "01 48 23 96 02",
        "address": "Stains"
    },
    {
        "position": 16,
        "rating": 3.8,
        "reviews_original": "(68)",
        "reviews": 68,
        "description": "\"Rien à dire excellent\"",
        "place_id": "4951496721021618397",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4951496721021618397&q=logistique+93&start=20",
        "lsig": "AB86z5XFM_bqJICGDoIXieAtbGEL",
        "provider_id": "/g/1v3kmcfz",
        "gps_coordinates": {
            "latitude": 48.9533369,
            "longitude": 2.4561428
        },
        "links": {
            "website": "https://www.groupe-logipresse.com/",
            "directions": "https://www.google.fr/maps/dir//Logipresse+Garonor,+Garonor,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caec066783:0x44b740089b0148dd?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Logipresse Garonor",
        "type": "Service logistique",
        "phone": "01 48 14 91 30",
        "address": "Aulnay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 16:45"
    },
    {
        "position": 17,
        "rating": 4.3,
        "reviews_original": "(44)",
        "reviews": 44,
        "description": "\"Enfin un professionnel sympa dans la logistique !\"",
        "place_id": "13630385295331950656",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13630385295331950656&q=logistique+93&start=20",
        "lsig": "AB86z5Vv4kvFMvMMwJ5YXNvAqLvm",
        "provider_id": "/g/11h00d2j79",
        "gps_coordinates": {
            "latitude": 48.9560685,
            "longitude": 2.4717314
        },
        "links": {
            "website": "http://www.gefco.net/",
            "directions": "https://www.google.fr/maps/dir//GEFCO,+Rue+Anatole+Sigonneau,+93150+Le+Blanc-Mesnil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b23670f0243:0xbd28db358ff80040?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "GEFCO",
        "type": "Service logistique",
        "phone": "01 85 60 03 61",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 18,
        "rating": 4.2,
        "reviews_original": "(16)",
        "reviews": 16,
        "description": "\"Transport de vitrine frigorifique pour magasin.. super équipe très sympa...\"",
        "place_id": "14225798652839784136",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14225798652839784136&q=logistique+93&start=20",
        "lsig": "AB86z5UvAoJkoW9eo_L-jJxouQKx",
        "provider_id": "/g/1vfn5z74",
        "gps_coordinates": {
            "latitude": 48.9204617,
            "longitude": 2.3435649
        },
        "links": {
            "website": "http://www.teamtransportslogistics.com/",
            "directions": "https://www.google.fr/maps/dir//Team+Transports+Logistics,+13+Garonor,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caec066783:0xc56c3080d4beeec8?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Team Transports Logistics",
        "type": "Société de transport routier",
        "phone": "01 55 81 12 21",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 19,
        "place_id": "11237424852342898646",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11237424852342898646&q=logistique+93&start=20",
        "lsig": "AB86z5VzuLJNMoWCKPK_BdvyG6qI",
        "provider_id": "/g/11ghpp4crx",
        "gps_coordinates": {
            "latitude": 48.957887799999995,
            "longitude": 2.4694629
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Edf+Trading+Logistics,+1+Pl.+Pleyel,+93200+Saint-Denis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66ec11affffff:0x9bf35a5d620b7fd6?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Edf Trading Logistics",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 43 69 27 53",
        "address": "Saint-Denis",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 20,
        "rating": 3.8,
        "reviews_original": "(78)",
        "reviews": 78,
        "description": "\"Merci Mr Arfa Schili Merci SKT Logistique\"",
        "place_id": "11769755479396555456",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11769755479396555456&q=logistique+93&start=20",
        "lsig": "AB86z5VVt9KCWRgr-KE6EV3Xi7AC",
        "provider_id": "/g/11fj48nddm",
        "gps_coordinates": {
            "latitude": 48.95789,
            "longitude": 2.4694629
        },
        "links": {
            "website": "http://skt-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//SKT+LOGISTIQUE,+GARONOR+BATIMENT+13F,+93600,+Garonor,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615bb859c4037:0xa356923feaa39ac0?sa=X&ved=2ahUKEwiDm_CBvo6CAxVTl4kEHQB8DqM4FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "SKT LOGISTIQUE",
        "type": "Société de livraison",
        "phone": "09 83 44 34 14",
        "address": "Aulnay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 1,
        "rating": 3.9,
        "reviews_original": "(147)",
        "reviews": 147,
        "description": "\"Merci aux équipes de NST pour leur efficacité tout c’est parfaitement déroulé\"",
        "place_id": "7493923878107956617",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7493923878107956617&q=logistique+93&start=40",
        "lsig": "AB86z5WrA_oz0v0362aAgu8lV857",
        "provider_id": "/g/11ggklbfpr",
        "gps_coordinates": {
            "latitude": 48.9092784,
            "longitude": 2.3576018999999997
        },
        "links": {
            "website": "http://nordsudtransit.com/",
            "directions": "https://www.google.fr/maps/dir//Nord+Sud+Transit,+145+Av.+du+Pr%C3%A9sident+Wilson,+93210+Saint-Denis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66ea1aaaaaaab:0x67ffc41008714589?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Nord Sud Transit",
        "type": "Service de transport",
        "phone": "01 42 43 67 39",
        "address": "Saint-Denis",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 3.5,
        "reviews_original": "(20)",
        "reviews": 20,
        "place_id": "1299469407847769735",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1299469407847769735&q=logistique+93&start=40",
        "lsig": "AB86z5VadmY_7VAdKHxb3eg30URU",
        "provider_id": "/g/1td1_kqx",
        "gps_coordinates": {
            "latitude": 48.9013819,
            "longitude": 2.4176466999999997
        },
        "links": {
            "website": "http://www.id-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//ID+LOGISTICS,+110+bis+Av.+du+G%C3%A9n%C3%A9ral+Leclerc,+93500+Pantin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c5259654e85:0x1208a48aa340e687?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "ID LOGISTICS",
        "type": "Service logistique",
        "address": "Pantin"
    },
    {
        "position": 3,
        "place_id": "5865770577429953513",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5865770577429953513&q=logistique+93&start=40",
        "lsig": "AB86z5UcAVM1hZwetvEcWrFHgMMm",
        "provider_id": "/g/11pctknrh1",
        "gps_coordinates": {
            "latitude": 48.8865102,
            "longitude": 2.4929433
        },
        "links": {
            "website": "https://geodis.com/fr/",
            "directions": "https://www.google.fr/maps/dir//Geodis,+7+Rue+Cugnot,+93250+Villemomble/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61318154a8a27:0x5167674311a67be9?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Geodis",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Villemomble"
    },
    {
        "position": 4,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "13493071920676190041",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13493071920676190041&q=logistique+93&start=40",
        "lsig": "AB86z5Xr5DSl9_cyDE6_QXi_fHAD",
        "provider_id": "/g/1td_4gwr",
        "gps_coordinates": {
            "latitude": 48.953657299999996,
            "longitude": 2.4694249999999998
        },
        "links": {
            "website": "http://snelogistique.com/",
            "directions": "https://www.google.fr/maps/dir//SNEL,+Garonor+Est+Batiment,+N2,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47fa21b36c8d581f:0xbb41056c28b3b759?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "SNEL",
        "type": "Service logistique",
        "phone": "09 70 35 51 86",
        "address": "Aulnay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 5,
        "rating": 4.4,
        "reviews_original": "(45)",
        "reviews": 45,
        "place_id": "1311356966665491615",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1311356966665491615&q=logistique+93&start=40",
        "lsig": "AB86z5XpVtytopeTBsNL_TBWE6cO",
        "provider_id": "/g/1thwzr8z",
        "gps_coordinates": {
            "latitude": 48.9553416,
            "longitude": 2.4691389999999998
        },
        "links": {
            "website": "https://www.transport-setam.com/",
            "directions": "https://www.google.fr/maps/dir//Soci%C3%A9t%C3%A9+Exploitation+de+Transport+et+d'Affr%C3%A8tement+M%C3%A9nage+(S.E.T.A.M),+Garonor,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caec066783:0x1232e0369bd4949f?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "Société Exploitation de Transport et d'Affrètement Ménage (S.E.T.A.M)",
        "type": "Société de transport routier",
        "phone": "01 48 67 52 52",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 6,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "6480298438963929811",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6480298438963929811&q=logistique+93&start=40",
        "lsig": "AB86z5VF44c4B8rRM2U2uanbJmEn",
        "provider_id": "/g/11bycg5ysr",
        "gps_coordinates": {
            "latitude": 48.9306945,
            "longitude": 2.4146774
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Mory+Logidis,+93120+La+Courneuve/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c7e9b5d7bed:0x59eea5189cf6a2d3?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Mory Logidis",
        "type": "Service logistique",
        "phone": "06 44 62 45 00",
        "address": "La Courneuve",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 7,
        "rating": 5,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "3481615948246174248",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3481615948246174248&q=logistique+93&start=40",
        "lsig": "AB86z5WlE-_fK6He1dt_KXw8YAIt",
        "provider_id": "/g/11r96_f6ll",
        "gps_coordinates": {
            "latitude": 48.9013819,
            "longitude": 2.4176466999999997
        },
        "links": {
            "website": "https://www.croix-rouge.fr/La-Croix-Rouge/Croix-Rouge-insertion/Filiales/Vif-!-Transport-logistique",
            "directions": "https://www.google.fr/maps/dir//Vif!+transport+%26+logistique,+2,+110+bis+Av.+du+G%C3%A9n%C3%A9ral+Leclerc+BATIMENT+13+NIVEAU,+93500+Pantin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66dd13c77afb1:0x30512f422f8c4a28?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Vif! transport & logistique",
        "type": "Service logistique",
        "phone": "01 48 44 80 71",
        "address": "Pantin",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 8,
        "rating": 3.3,
        "reviews_original": "(213)",
        "reviews": 213,
        "place_id": "5788707041973379506",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5788707041973379506&q=logistique+93&start=40",
        "lsig": "AB86z5WUipyQkZcfH7q1vDxnjq2J",
        "provider_id": "/g/1wh4f4pf",
        "gps_coordinates": {
            "latitude": 48.9514862,
            "longitude": 2.4547048
        },
        "links": {
            "website": "http://www.rhenus.com/",
            "directions": "https://www.google.fr/maps/dir//Rhenus+Freight+Logistics,+Garonor+B%C3%A2timent+22,+Garonor,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caec066783:0x50559e6281a021b2?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Rhenus Freight Logistics",
        "type": "Service logistique",
        "phone": "01 48 65 39 05",
        "address": "Aulnay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 9,
        "rating": 3.3,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "11201248210427653118",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11201248210427653118&q=logistique+93&start=40",
        "lsig": "AB86z5VMNW1ILMBmJ-aI2TZ9IcWg",
        "provider_id": "/g/11btmc4gcd",
        "gps_coordinates": {
            "latitude": 48.936335,
            "longitude": 2.4137762
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Groupafret,+6+Rue+Cl%C3%A9ment+Ader,+93120+La+Courneuve/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b80b9f8409b:0x9b72d3e68f852bfe?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Groupafret",
        "type": "Société de transport routier",
        "phone": "01 48 35 66 99",
        "address": "La Courneuve"
    },
    {
        "position": 10,
        "rating": 3.7,
        "reviews_original": "(474)",
        "reviews": 474,
        "description": "\"Mauvaise organisation logistique.\"",
        "place_id": "8950319696301015314",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8950319696301015314&q=logistique+93&start=40",
        "lsig": "AB86z5WeDwSIkrt5wEXb9hbrtf6_",
        "provider_id": "/g/11rxp3h18m",
        "gps_coordinates": {
            "latitude": 48.9603343,
            "longitude": 2.4651585
        },
        "links": {
            "website": "https://gls-group.eu/FR/fr/home",
            "directions": "https://www.google.fr/maps/dir//GLS+GARONOR,+GARONOR+OUEST,+BATIMENT+25,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b496c5e6e77:0x7c35ec57cc344112?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "GLS GARONOR",
        "type": "Service logistique",
        "phone": "09 74 91 09 10",
        "address": "Aulnay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 11,
        "rating": 4.2,
        "reviews_original": "(5)",
        "reviews": 5,
        "description": "\"Collaboration depuis des années, jamais de problèmes.\"",
        "place_id": "3445029517628005754",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3445029517628005754&q=logistique+93&start=40",
        "lsig": "AB86z5Xgln7Cx6w7f0SYC-u0m5EB",
        "provider_id": "/g/1vp6zh6d",
        "gps_coordinates": {
            "latitude": 48.9123899,
            "longitude": 2.4824435
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Isodis,+7+Rue+Eric+Tabarly,+93140+Bondy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6133fbcc5d835:0x2fcf3417fef3dd7a?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Isodis",
        "type": "Société de transport routier",
        "phone": "01 48 49 58 41",
        "address": "Bondy"
    },
    {
        "position": 12,
        "rating": 3.8,
        "reviews_original": "(52)",
        "reviews": 52,
        "place_id": "14886268197256283642",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14886268197256283642&q=logistique+93&start=40",
        "lsig": "AB86z5VJxqc1d1aR5Q7XLuUjNHb6",
        "provider_id": "/g/1tfl8zdg",
        "gps_coordinates": {
            "latitude": 48.9355075,
            "longitude": 2.4419618
        },
        "links": {
            "website": "http://www.viapost.fr/",
            "directions": "https://www.google.fr/maps/dir//P%C3%94LE+AFFR%C3%88TEMENT+IDF+NORD,+Z.I.+du+Commandant+Rolland+Rolland,+51-53+Rue+du+Commandant+Rolland,+93350+Le+Bourget/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c9fa2b4dd6b:0xce96a60df8a7c5fa?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "PÔLE AFFRÈTEMENT IDF NORD",
        "type": "Service de transport",
        "phone": "01 43 11 10 39",
        "address": "Le Bourget",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 13,
        "rating": 3.8,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "18094153721665551077",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18094153721665551077&q=logistique+93&start=40",
        "lsig": "AB86z5UMbWe1tjvRbcqB7nRbC-fh",
        "provider_id": "/g/1q64dnhc0",
        "gps_coordinates": {
            "latitude": 48.97365,
            "longitude": 2.5016249
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//TRANSFLEX,+154+all%C3%A9e+Erables+Zone+Industrielle+Paris+Nord+Ii,+93420+Villepinte/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614fd5e162207:0xfb1b58f1632ffae5?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "TRANSFLEX",
        "type": "Service logistique",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 14,
        "rating": 4.4,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "891416760898671200",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=891416760898671200&q=logistique+93&start=40",
        "lsig": "AB86z5XjSatdC3-D22hysj9gTuob",
        "provider_id": "/g/11btv687xf",
        "gps_coordinates": {
            "latitude": 48.8637619,
            "longitude": 2.4279272
        },
        "links": {
            "website": "http://www.raj-services.com/",
            "directions": "https://www.google.fr/maps/dir//Raj+Services+-+Centre+Logistique+Bagnolet,+57+Rue+Charles+Delescluze,+93170+Bagnolet/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d801a82ceaf:0xc5ef2d23431d260?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Raj Services - Centre Logistique Bagnolet",
        "type": "Service logistique",
        "phone": "01 49 88 76 85",
        "address": "Bagnolet",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 15,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "9967698847106394828",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9967698847106394828&q=logistique+93&start=40",
        "lsig": "AB86z5XgSKZg0Bh7kcYK3jFz9yO-",
        "provider_id": "/g/11jmwbzgpd",
        "gps_coordinates": {
            "latitude": 48.9299665,
            "longitude": 2.4108611
        },
        "links": {
            "website": "http://www.carrefour.fr/",
            "directions": "https://www.google.fr/maps/dir//Logidis+Comptoirs+Modernes+-+La+Courneuve,+51+Rue+de+Verdun,+93120+La+Courneuve/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d90363d2e23:0x8a54614a51d8eacc?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Logidis Comptoirs Modernes - La Courneuve",
        "type": "Service logistique",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 16,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "5124759245906213645",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5124759245906213645&q=logistique+93&start=40",
        "lsig": "AB86z5XTgkOcHamrLwNTOQAL_nNl",
        "provider_id": "/g/11bzz2v3j_",
        "gps_coordinates": {
            "latitude": 48.952632099999995,
            "longitude": 2.4795596
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Id+Logistics/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b85f1a8117:0x471ecd61cba37b0d?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Id Logistics",
        "type": "Service logistique"
    },
    {
        "position": 17,
        "place_id": "6160045913798140579",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6160045913798140579&q=logistique+93&start=40",
        "lsig": "AB86z5WgjIFWfl5V6WUfRE47Q_WX",
        "provider_id": "/g/11f62h2p6j",
        "gps_coordinates": {
            "latitude": 48.9286051,
            "longitude": 2.4294458
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//A.r.i.+Logistique,+10+Cit%C3%A9+du+N,+93700+Drancy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c9b34d9e5d5:0x557ce11f0c08e2a3?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "A.r.i. Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de livraison",
        "address": "Drancy",
        "hours": "Fermé temporairement"
    },
    {
        "position": 18,
        "place_id": "4696549014992938671",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4696549014992938671&q=logistique+93&start=40",
        "lsig": "AB86z5XI1od9M99c0e6y-EsqiVbX",
        "provider_id": "/g/11jd9z_d1c",
        "gps_coordinates": {
            "latitude": 48.9554568,
            "longitude": 2.4421182999999997
        },
        "links": {
            "website": "https://www.partnairsea.com/",
            "directions": "https://www.google.fr/maps/dir//PRODEX+%7C+Agence+du+Bourget,+Zone+de+l%E2%80%99%C3%A9toile,+29+Av.+de+l'Europe,+93350+Le+Bourget/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b014ded1b45:0x412d7e721cdd66af?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "PRODEX | Agence du Bourget",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 85 43 00 12",
        "address": "Le Bourget"
    },
    {
        "position": 19,
        "rating": 2.8,
        "reviews_original": "(15)",
        "reviews": 15,
        "place_id": "7711588599517153622",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7711588599517153622&q=logistique+93&start=40",
        "lsig": "AB86z5VptyrCFH7ux6Izm126njDW",
        "provider_id": "/g/11d_tlkt4_",
        "gps_coordinates": {
            "latitude": 48.9525702,
            "longitude": 2.4529023
        },
        "links": {
            "website": "http://www.tailormade-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//TML+Paris+Nord,+Garonor,+93150+Le+Blanc-Mesnil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614cbdaf9a7b5:0x6b0510f9382c0956?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "TML Paris Nord",
        "type": "Service logistique",
        "phone": "01 45 91 11 71",
        "address": "Le Blanc-Mesnil",
        "hours": "Ouvert ⋅ Ferme à 19:30"
    },
    {
        "position": 20,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "12676455991157778808",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12676455991157778808&q=logistique+93&start=40",
        "lsig": "AB86z5Vn5NvOx4QxKIeqU_3gcceb",
        "provider_id": "/g/11r9vzx9q2",
        "gps_coordinates": {
            "latitude": 48.9553246,
            "longitude": 2.4692144
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STC+IDF,+Garonor,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6151cc3512079:0xafebd18fabd4e978?sa=X&ved=2ahUKEwjKvveCvo6CAxUQv4kEHf0NAXA4KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "STC IDF",
        "type": "Service logistique",
        "phone": "01 83 75 43 34",
        "address": "Aulnay-sous-Bois",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 1,
        "rating": 3.9,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "11898574663176232037",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11898574663176232037&q=logistique+93&start=60",
        "lsig": "AB86z5U9ufkbgS8z1AhOF68Tg3KF",
        "provider_id": "/g/11hbn3h5gx",
        "gps_coordinates": {
            "latitude": 48.9805773,
            "longitude": 2.5181643
        },
        "links": {
            "website": "http://www.op-logistique.com/",
            "directions": "https://www.google.fr/maps/dir//OPL,+181+Av.+des+Nations,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615a9269b774b:0xa5203a9d64151c65?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "OPL",
        "type": "Société de transport international de marchandises",
        "phone": "01 49 89 20 02",
        "address": "Tremblay-en-France",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 2.4,
        "reviews_original": "(137)",
        "reviews": 137,
        "place_id": "3116561922565227068",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3116561922565227068&q=logistique+93&start=60",
        "lsig": "AB86z5VggtGCip92GFTwmphaPn42",
        "provider_id": "/g/11btlwnyft",
        "gps_coordinates": {
            "latitude": 48.900299,
            "longitude": 2.4175977
        },
        "links": {
            "website": "https://www.vertchezvous.com/",
            "directions": "https://www.google.fr/maps/dir//Vert+Chez+Vous+Ile+de+France,+110Bis+Avenue+du+G%C3%A9n%C3%A9ral+Leclerc,+93500+Pantin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66cfbfa36028b:0x2b40408e6b02423c?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Vert Chez Vous Ile de France",
        "type": "Service logistique",
        "phone": "01 57 42 43 05",
        "address": "Pantin"
    },
    {
        "position": 3,
        "rating": 4,
        "reviews_original": "(15)",
        "reviews": 15,
        "description": "\"A première vu société sérieuse qui donne envi de travailler pour eux !\"",
        "place_id": "11751694366350714428",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11751694366350714428&q=logistique+93&start=60",
        "lsig": "AB86z5VpEUg0gT3FCI_jn-G9WkW1",
        "provider_id": "/g/1vtzghz4",
        "gps_coordinates": {
            "latitude": 48.956911899999994,
            "longitude": 2.4690592
        },
        "links": {
            "website": "http://tpslaurent.com/",
            "directions": "https://www.google.fr/maps/dir//Transports+Laurent,+B%C3%A2timent+11,+ZA+Garonor,+93619,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e613a447ca5781:0xa31667c3574b263c?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Transports Laurent",
        "type": "Service logistique",
        "phone": "01 49 47 99 70",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 4,
        "rating": 3,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "2425616594209010598",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2425616594209010598&q=logistique+93&start=60",
        "lsig": "AB86z5WEtmhjrIuF5edLqzOucIlc",
        "provider_id": "/g/11c1xfkhzn",
        "gps_coordinates": {
            "latitude": 48.93385440000001,
            "longitude": 2.4077718
        },
        "links": {
            "website": "https://adrexo.fr/",
            "directions": "https://www.google.fr/maps/dir//ADREXO,+91+Av.+Louis+Bl%C3%A9riot,+93120+La+Courneuve/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c77edbc8aa9:0x21a98570e31ef3a6?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "ADREXO",
        "type": "Service logistique",
        "phone": "01 43 11 86 62",
        "address": "La Courneuve"
    },
    {
        "position": 5,
        "rating": 3.8,
        "reviews_original": "(118)",
        "reviews": 118,
        "description": "\"Un service rapide et un personnel poli.\"",
        "place_id": "16785340790797178113",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16785340790797178113&q=logistique+93&start=60",
        "lsig": "AB86z5UJYf3_QWUiU_KuKuPg7-rf",
        "provider_id": "/g/11cjg8lf8b",
        "gps_coordinates": {
            "latitude": 48.9556019,
            "longitude": 2.4720836
        },
        "links": {
            "website": "http://fast-courses.fr/",
            "directions": "https://www.google.fr/maps/dir//Fast+Courses+:+Transport+-+Coursier+Express+93,+Garonor+Est,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c9205d3ec15:0xe8f1828445571501?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "Fast Courses : Transport - Coursier Express 93",
        "type": "Service de transport",
        "phone": "01 48 30 78 29",
        "address": "Aulnay-sous-Bois",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 6,
        "rating": 3.5,
        "reviews_original": "(19)",
        "reviews": 19,
        "place_id": "14516492531749074202",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14516492531749074202&q=logistique+93&start=60",
        "lsig": "AB86z5XgPDcxJZ3K1ea5TB2YnDke",
        "provider_id": "/g/11p77393nj",
        "gps_coordinates": {
            "latitude": 48.9356994,
            "longitude": 2.4423823
        },
        "links": {
            "website": "http://www.viapost.fr/",
            "directions": "https://www.google.fr/maps/dir//VIAPOST,+51-53+Rue+du+Commandant+Rolland,+93350+Le+Bourget/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b3fb51693ab:0xc974f10bc383b51a?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "VIAPOST",
        "type": "Service logistique",
        "phone": "01 43 11 10 30",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 7,
        "place_id": "9993717453454673306",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9993717453454673306&q=logistique+93&start=60",
        "lsig": "AB86z5UkE18GrKETrTJ1wvcTSsSg",
        "provider_id": "/g/11h818vps9",
        "gps_coordinates": {
            "latitude": 48.892823,
            "longitude": 2.454872
        },
        "links": {
            "website": "https://www.transportpalettes.fr/",
            "directions": "https://www.google.fr/maps/dir//Transport+palette+Paris,+1+Rue+Henri+Barbusse,+93130+Noisy-le-Sec/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d48ef1331a5:0x8ab0d1132ec9859a?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Transport palette Paris",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 47 43 76 78",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 8,
        "place_id": "10173388103277828954",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10173388103277828954&q=logistique+93&start=60",
        "lsig": "AB86z5Vdk0EDs6tOAeRvKYEpg-Hd",
        "provider_id": "/g/11fsmvk1r0",
        "gps_coordinates": {
            "latitude": 48.9478034,
            "longitude": 2.4714809
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Multimodal+Transport+Logistique+Et+Service+M.t.l.s,+2+Rue+Nicolas+Copernic,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b16e4ba429:0x8d2f22943a0f5b5a?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Multimodal Transport Logistique Et Service M.t.l.s",
        "reviews_original": "Aucun avis",
        "type": "Société de livraison",
        "address": "Aulnay-sous-Bois",
        "hours": "Fermé temporairement"
    },
    {
        "position": 9,
        "place_id": "18145230000632794292",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18145230000632794292&q=logistique+93&start=60",
        "lsig": "AB86z5XDvRRyHR78ZDV26fwdOTm0",
        "provider_id": "/g/1vs1r547",
        "gps_coordinates": {
            "latitude": 48.9116762,
            "longitude": 2.4382596
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Service+Transport+Distribution,+22+Av.+Paul+Vaillant+Couturier,+93000+Bobigny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66cea5f3ca093:0xfbd0ce8c4b7a8cb4?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Service Transport Distribution",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "06 12 78 84 82",
        "address": "Bobigny"
    },
    {
        "position": 10,
        "place_id": "13666289663023527338",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13666289663023527338&q=logistique+93&start=60",
        "lsig": "AB86z5U-7hGIpjYi8BrYVuO24Jd6",
        "provider_id": "/g/11jmy60bh0",
        "gps_coordinates": {
            "latitude": 48.948644699999996,
            "longitude": 2.4780699999999998
        },
        "links": {
            "website": "http://www.cls.aero/",
            "directions": "https://www.google.fr/maps/dir//Feesgo+Logistic,+83+Rue+Blaise+Pascal,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615f0c0009315:0xbda86a0a9a1c35aa?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Feesgo Logistic",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "01 43 30 67 96",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 11,
        "rating": 4,
        "reviews_original": "(55)",
        "reviews": 55,
        "place_id": "6193418870149567291",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6193418870149567291&q=logistique+93&start=60",
        "lsig": "AB86z5VjOdGw7Q9JY45dNtzoupeI",
        "provider_id": "/g/1thtnx6_",
        "gps_coordinates": {
            "latitude": 48.997280599999996,
            "longitude": 2.5294081999999998
        },
        "links": {
            "website": "https://www.transport-sctil.fr/",
            "directions": "https://www.google.fr/maps/dir//SCTIL,+Zone+Cargo+6,+2+Rue+des+Voyelles,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61596dc3d6c95:0x55f371a5f477533b?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "SCTIL",
        "type": "Service logistique",
        "phone": "01 48 62 06 57",
        "address": "Tremblay-en-France",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 12,
        "rating": 4.5,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "14574864736341583980",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14574864736341583980&q=logistique+93&start=60",
        "lsig": "AB86z5U7DVPvi5X-wSYZBaYao7A7",
        "provider_id": "/g/11t3c3m067",
        "gps_coordinates": {
            "latitude": 48.9545713,
            "longitude": 2.4554530999999997
        },
        "links": {
            "website": "http://www.axdispro.com/",
            "directions": "https://www.google.fr/maps/dir//AXDIS+PRO+BASE+LOGISTIQUE+DE+BLANC-MESNIL,+2+Rue+des+Fr%C3%A8res+Lumi%C3%A8re,+93150+Le+Blanc-Mesnil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b229dd203dd:0xca445241bb01e86c?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "AXDIS PRO BASE LOGISTIQUE DE BLANC-MESNIL",
        "type": "Dépôt",
        "phone": "01 55 02 10 23",
        "address": "Ouvert actuellement"
    },
    {
        "position": 13,
        "place_id": "10080840403678026285",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10080840403678026285&q=logistique+93&start=60",
        "lsig": "AB86z5XYbMIPAvveOvVc87mRw1Yq",
        "provider_id": "/g/11lkywz910",
        "gps_coordinates": {
            "latitude": 48.9127995,
            "longitude": 2.3573075
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Jbo+Transit,+203+Av.+du+Pr%C3%A9sident+Wilson,+93210+Saint-Denis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f1193c89391:0x8be656efc2a25a2d?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Jbo Transit",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 78 85 27 08",
        "address": "Saint-Denis",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 14,
        "rating": 4.6,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "18076053242438343112",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18076053242438343112&q=logistique+93&start=60",
        "lsig": "AB86z5Vi-VIJwBte5DgEWfewG9IS",
        "provider_id": "/g/1tf69br3",
        "gps_coordinates": {
            "latitude": 48.947410299999994,
            "longitude": 2.4775842
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Flexcite+93,+26+Rue+Alfred+Nobel,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614ba686641ad:0xfadb0aa72895d9c8?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Flexcite 93",
        "type": "Société de transport routier",
        "phone": "01 48 65 50 00",
        "address": "Aulnay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 00:00"
    },
    {
        "position": 15,
        "rating": 4.3,
        "reviews_original": "(52)",
        "reviews": 52,
        "description": "\"Je connais très bien cet endroit\"",
        "place_id": "10587258846890985580",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10587258846890985580&q=logistique+93&start=60",
        "lsig": "AB86z5UMrcV-5FnpHwDSqL9o-5I2",
        "provider_id": "/g/11b7zts7q_",
        "gps_coordinates": {
            "latitude": 48.8892191,
            "longitude": 2.4761745
        },
        "links": {
            "website": "http://www.prevost-transports.com/",
            "directions": "https://www.google.fr/maps/dir//Transports+Prevost,+16+Chem.+des+Carrouges,+93140+Bondy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e612d95bc35bb1:0x92ed7fd3da0c886c?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Transports Prevost",
        "type": "Société de transport routier",
        "phone": "01 48 12 29 99",
        "address": "Bondy"
    },
    {
        "position": 16,
        "rating": 3.8,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "17480069432525710817",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17480069432525710817&q=logistique+93&start=60",
        "lsig": "AB86z5WUfYwQfB7CGCGOxmoi3BEl",
        "provider_id": "/g/11b6d02zmb",
        "gps_coordinates": {
            "latitude": 48.9924185,
            "longitude": 2.5267835
        },
        "links": {
            "website": "http://www.darquelogistics.com/",
            "directions": "https://www.google.fr/maps/dir//Darque+Logistics+France,+7+Rue+du+Te,+93290+Tremblay-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615bd3d05199f:0xf295ae8916dbe5e1?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Darque Logistics France",
        "type": "Société de transport routier",
        "phone": "01 74 25 21 78",
        "address": "Tremblay-en-France"
    },
    {
        "position": 17,
        "rating": 3.1,
        "reviews_original": "(8)",
        "reviews": 8,
        "place_id": "3011427075216489109",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3011427075216489109&q=logistique+93&start=60",
        "lsig": "AB86z5VU6kgxSFiF9E6U-_82tXtJ",
        "provider_id": "/g/11fx86t5zx",
        "gps_coordinates": {
            "latitude": 48.9501194,
            "longitude": 2.4380107
        },
        "links": {
            "website": "http://www.dhl.fr/",
            "directions": "https://www.google.fr/maps/dir//DHL+Global+Forwarding,+A%C3%A9roport+du+Bourget+-+Zone+d'Aviation+d'Affaires,+93350+Le+Bourget/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b6dce95ec05:0x29cabcf83d45ba95?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "DHL Global Forwarding",
        "type": "Service logistique",
        "address": "Le Bourget"
    },
    {
        "position": 18,
        "place_id": "12571188751813535320",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12571188751813535320&q=logistique+93&start=60",
        "lsig": "AB86z5UaL_sR_orx8ZLIXrx7CiHg",
        "provider_id": "/g/11tn59r3qj",
        "gps_coordinates": {
            "latitude": 48.9579453,
            "longitude": 2.4447474
        },
        "links": {
            "website": "https://www.zieglergroup.com/",
            "directions": "https://www.google.fr/maps/dir//Ziegler+France,+1151+Av.+de+l'Europe,+93350+Le+Bourget/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66be23aa4a9af:0xae75d590943b6658?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Ziegler France",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "01 48 16 56 23",
        "address": "Le Bourget"
    },
    {
        "position": 19,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "10295208096402876742",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10295208096402876742&q=logistique+93&start=60",
        "lsig": "AB86z5Ug0ScZU-OeR4bR56GzKQZI",
        "provider_id": "/g/11h929txtv",
        "gps_coordinates": {
            "latitude": 48.894082399999995,
            "longitude": 2.4495153999999997
        },
        "links": {
            "website": "http://www.easservices.fr/",
            "directions": "https://www.google.fr/maps/dir//EAS+SERVICES,+34+Av.+de+Bobigny,+93130+Noisy-le-Sec/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d97dba4e781:0x8edfed37a2d1a946?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "EAS SERVICES",
        "type": "Service logistique",
        "phone": "01 70 24 62 01",
        "address": "Noisy-le-Sec",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 20,
        "rating": 2.5,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "11999902442487314244",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11999902442487314244&q=logistique+93&start=60",
        "lsig": "AB86z5Wo7b38xWS4VkmyPQ4QEqzW",
        "provider_id": "/g/11g8wpzctr",
        "gps_coordinates": {
            "latitude": 48.9582608,
            "longitude": 2.3899135
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Eda+Warehousing+Fr,+34+Av.+Charles+de+Gaulle,+93240+Stains/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66bc256aae001:0xa68837b177cc7744?sa=X&ved=2ahUKEwi6mcyEvo6CAxVtFVkFHR6dBzs4PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Eda Warehousing Fr",
        "type": "Service logistique",
        "phone": "01 55 93 33 44",
        "address": "Stains",
        "hours": "Fermé temporairement"
    },
    {
        "position": 1,
        "rating": 3.8,
        "reviews_original": "(37)",
        "reviews": 37,
        "place_id": "8890683611662675775",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8890683611662675775&q=logistique+93&start=80",
        "lsig": "AB86z5WszRsldp5qD_1CFzoGfJxI",
        "provider_id": "/g/11b6dqfrt2",
        "gps_coordinates": {
            "latitude": 48.9570371,
            "longitude": 2.4675648999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Delcroix+Fils,+Garonor,+93150+Le+Blanc-Mesnil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caf25c77ab:0x7b620da3d38a6f3f?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Transports Delcroix Fils",
        "type": "Société de transport routier",
        "phone": "01 48 65 18 95",
        "address": "Le Blanc-Mesnil"
    },
    {
        "position": 2,
        "place_id": "18011089710739715492",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18011089710739715492&q=logistique+93&start=80",
        "lsig": "AB86z5XyoL5tL44VMb-n7yN20qtX",
        "gps_coordinates": {
            "latitude": 49.0030061,
            "longitude": 2.5050859000000005
        },
        "title": "Ges Logistics",
        "reviews_original": "Aucun avis",
        "type": "Service de transport",
        "phone": "01 30 18 17 93",
        "address": "Roissy-en-France"
    },
    {
        "position": 3,
        "place_id": "12888145076757140765",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12888145076757140765&q=logistique+93&start=80",
        "lsig": "AB86z5XtRatmI8bhF-xC7dEeR7d-",
        "provider_id": "/g/1tnl0q7n",
        "gps_coordinates": {
            "latitude": 48.927171,
            "longitude": 2.4427434
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Gacogne+Sebastien,+93+Rue+Maxime+Gorki,+93700+Drancy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66ca2562c4017:0xb2dbe3a9b9cf151d?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Gacogne Sebastien",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "address": "Drancy",
        "hours": "Fermé temporairement"
    },
    {
        "position": 4,
        "rating": 4,
        "reviews_original": "(25)",
        "reviews": 25,
        "place_id": "11606031773132214436",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11606031773132214436&q=logistique+93&start=80",
        "lsig": "AB86z5Xvo__n3TMHHH3wguTghnFK",
        "provider_id": "/g/11ckvg2xtx",
        "gps_coordinates": {
            "latitude": 48.886987999999995,
            "longitude": 2.3256468
        },
        "links": {
            "website": "https://www.wing.eu/",
            "directions": "https://www.google.fr/maps/dir//Wing,+45+Av.+de+Clichy,+75017+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66e380efbd62b:0xa110e868017150a4?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Wing",
        "type": "Service logistique",
        "address": "Paris"
    },
    {
        "position": 5,
        "rating": 3.7,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "458329474884933612",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=458329474884933612&q=logistique+93&start=80",
        "lsig": "AB86z5U6p-hw-6q3ydvm2vbK0t3j",
        "provider_id": "/g/11j1nv_ddw",
        "gps_coordinates": {
            "latitude": 48.9582724,
            "longitude": 2.3898959
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//GPA+Transport+(GPA+Distribution+Paris),+32+Av.+Charles+de+Gaulle,+93240+Stains/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66bea2cbaa355:0x65c503aa49b97ec?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "GPA Transport (GPA Distribution Paris)",
        "type": "Service logistique",
        "phone": "01 55 93 26 70",
        "address": "Stains",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 6,
        "rating": 3.3,
        "reviews_original": "(119)",
        "reviews": 119,
        "place_id": "9832335810170002886",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9832335810170002886&q=logistique+93&start=80",
        "lsig": "AB86z5V-RmvAR_DYYDbTDwcgyU69",
        "provider_id": "/g/1tf39vhc",
        "gps_coordinates": {
            "latitude": 48.8807243,
            "longitude": 2.4740995
        },
        "links": {
            "website": "https://www.heppner-group.com/",
            "directions": "https://www.google.fr/maps/dir//Heppner+Si%C3%A8ge+social,+14+Rue+de+Lisbonne,+93110+Rosny-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66d2630bf4869:0x887379534d891dc6?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Heppner Siège social",
        "type": "Société de transport international de marchandises",
        "phone": "01 41 83 53 53",
        "address": "Rosny-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 19:15"
    },
    {
        "position": 7,
        "rating": 3.1,
        "reviews_original": "(16)",
        "reviews": 16,
        "place_id": "15267378040961414114",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15267378040961414114&q=logistique+93&start=80",
        "lsig": "AB86z5XAQ5JWLgHS8x8dnmZTBcMd",
        "provider_id": "/g/1tf1n3sw",
        "gps_coordinates": {
            "latitude": 48.956353299999996,
            "longitude": 2.4697535999999998
        },
        "links": {
            "website": "https://www.groussard-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//Transports+Groussard,+11,+POle+Dactivite+Garonor+Est,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caec066783:0xd3e09f702f1ab3e2?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Transports Groussard",
        "type": "Société de transport routier",
        "phone": "01 48 65 23 89",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 8,
        "rating": 1.6,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "15127969130056371899",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15127969130056371899&q=logistique+93&start=80",
        "lsig": "AB86z5U3AFKeilyxOWf7-ZKhZOjl",
        "provider_id": "/g/11cs2w_v6j",
        "gps_coordinates": {
            "latitude": 48.931894299999996,
            "longitude": 2.4044634
        },
        "links": {
            "website": "https://www.dbschenker.com/fr-fr",
            "directions": "https://www.google.fr/maps/dir//DB+Schenker,+58+Av.+Jean+Mermoz,+93120+La+Courneuve/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c771bfcdd1d:0xd1f157c5ba15cebb?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "DB Schenker",
        "type": "Service logistique",
        "phone": "01 48 35 53 30",
        "address": "La Courneuve"
    },
    {
        "position": 9,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "16383710772319994314",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16383710772319994314&q=logistique+93&start=80",
        "lsig": "AB86z5U9nDecS8b7nHcKrYkH71MJ",
        "provider_id": "/g/11gn21w3l7",
        "gps_coordinates": {
            "latitude": 48.9879511,
            "longitude": 2.5249013
        },
        "links": {
            "website": "https://www.bdpinternational.com/",
            "directions": "https://www.google.fr/maps/dir//BDP+International,+14+Rue+de+la+Belle+Borne+CARGO+8+,+Roissy-en-France,+95700+Paris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61526afc2c411:0xe35ea2248edfc1ca?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "BDP International",
        "type": "Service logistique",
        "phone": "01 74 25 39 04",
        "address": "Paris",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 10,
        "rating": 5,
        "reviews_original": "(11)",
        "reviews": 11,
        "place_id": "1711511873023805435",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1711511873023805435&q=logistique+93&start=80",
        "lsig": "AB86z5VRUsGv4_BruDQm6fljBd8l",
        "provider_id": "/g/11t_jdw29h",
        "gps_coordinates": {
            "latitude": 48.8547097,
            "longitude": 2.4761059
        },
        "service_options": {
            "services_sur_place": true,
            "devis_en_ligne": true
        },
        "links": {
            "website": "http://sran-demenagement.com/",
            "directions": "https://www.google.fr/maps/dir//SRAN+D%C3%89M%C3%89NAGEMENT+%26+LOGISTIQUE,+8+Rue+Danielle+Casanova,+94120+Fontenay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6139ad2f1c205:0x17c082fb047287fb?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "SRAN DÉMÉNAGEMENT & LOGISTIQUE",
        "type": "Déménageur",
        "phone": "06 03 92 93 66",
        "address": "Fontenay-sous-Bois",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 11,
        "rating": 4.2,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "17067495528867609770",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17067495528867609770&q=logistique+93&start=80",
        "lsig": "AB86z5V51456HFOvDBl-0pohTgFY",
        "provider_id": "/g/1w3w2brk",
        "gps_coordinates": {
            "latitude": 48.8952179,
            "longitude": 2.4272812
        },
        "links": {
            "website": "http://www.msmcross.fr/",
            "directions": "https://www.google.fr/maps/dir//MSM+CROSS,+14+Route+de+Noisy,+93600+Pantin/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66ce2a5b8ad8b:0xecdbecc18bb8bcaa?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "MSM CROSS",
        "type": "Service de transport",
        "phone": "01 41 50 37 03",
        "address": "Pantin",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 12,
        "rating": 3.9,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "99948419387802302",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=99948419387802302&q=logistique+93&start=80",
        "lsig": "AB86z5WPMgWM8ZYRhmtjSReKhrSw",
        "provider_id": "/g/11dzs_nhkw",
        "gps_coordinates": {
            "latitude": 48.9080611,
            "longitude": 2.3797382
        },
        "links": {
            "website": "http://www.jeanbesson.com/",
            "directions": "https://www.google.fr/maps/dir//Transports+Besson+93,+61+Rue+Sadi+Carnot,+93300+Aubervilliers/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c2507570a91:0x163168ed178c2be?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Transports Besson 93",
        "type": "Société de transport routier",
        "phone": "01 45 73 40 40",
        "address": "Aubervilliers",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 13,
        "rating": 5,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "7897180895639584155",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7897180895639584155&q=logistique+93&start=80",
        "lsig": "AB86z5VbD-2RVFnhUo5n1LL8Blto",
        "provider_id": "/g/1tg5tbz0",
        "gps_coordinates": {
            "latitude": 48.9258282,
            "longitude": 2.4299568
        },
        "links": {
            "website": "http://www.bltransports.fr/",
            "directions": "https://www.google.fr/maps/dir//BL+Transports,+212+Rue+de+la+R%C3%A9publique,+93700+Drancy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c9aba74bed3:0x6d986c2efb993d9b?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "BL Transports",
        "type": "Société de transport routier",
        "phone": "01 48 30 55 49",
        "address": "Drancy"
    },
    {
        "position": 14,
        "rating": 5,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "7157006615306314574",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7157006615306314574&q=logistique+93&start=80",
        "lsig": "AB86z5WKSZuolw5pYgDboN3xzsOS",
        "provider_id": "/g/11s892f7g0",
        "gps_coordinates": {
            "latitude": 48.9474009,
            "longitude": 2.5177385
        },
        "service_options": {
            "services_sur_place_non_disponibles": true
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Livraison+de+Chicha+93,+3+All.+Champlain,+93270+Sevran/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6155426dc156f:0x6352cb98e074234e?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Livraison de Chicha 93",
        "type": "Service de livraison",
        "phone": "07 45 30 90 23",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 15,
        "rating": 1.7,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "3561494060497507637",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3561494060497507637&q=logistique+93&start=80",
        "lsig": "AB86z5Uokv5uwSkXDtn2IIj8TEf9",
        "provider_id": "/g/1vj5zh_9",
        "gps_coordinates": {
            "latitude": 48.887511599999996,
            "longitude": 2.4856813
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Fercam+France,+38+Rue+Marcel+Dassault,+93140+Bondy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e612e73719b4e1:0x316cf7fa799e1535?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Fercam France",
        "type": "Société de transport routier",
        "phone": "01 48 48 06 18",
        "address": "Bondy"
    },
    {
        "position": 16,
        "rating": 4.8,
        "reviews_original": "(4)",
        "reviews": 4,
        "place_id": "15968249866162374688",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15968249866162374688&q=logistique+93&start=80",
        "lsig": "AB86z5UHRvSi6pzZOmP6Ww3L9kCi",
        "provider_id": "/g/11btlnnkrj",
        "gps_coordinates": {
            "latitude": 48.9628508,
            "longitude": 2.5552485
        },
        "links": {
            "website": "https://transatlas.fr/",
            "directions": "https://www.google.fr/maps/dir//Transatlas,+4+All.+du+Cerf,+93420+Villepinte/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6142874e1bde7:0xdd9a9ea65d498820?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Transatlas",
        "type": "Service logistique",
        "phone": "01 48 65 75 80",
        "address": "Villepinte",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 17,
        "rating": 1.7,
        "reviews_original": "(9)",
        "reviews": 9,
        "place_id": "14258826847714880687",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14258826847714880687&q=logistique+93&start=80",
        "lsig": "AB86z5VR-KKNPmkn824q-IOFf3Hv",
        "provider_id": "/g/11flt2jvsn",
        "gps_coordinates": {
            "latitude": 48.965882,
            "longitude": 2.3927396
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Eda+Warehousing+Fr.,+2+Av.+des+Morillons,+95140+Garges-l%C3%A8s-Gonesse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66bc601049af3:0xc5e18778b3d92caf?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Eda Warehousing Fr.",
        "type": "Service logistique",
        "phone": "01 39 93 78 53",
        "address": "Garges-lès-Gonesse",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 18,
        "rating": 4.3,
        "reviews_original": "(23)",
        "reviews": 23,
        "place_id": "6892539829503203550",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6892539829503203550&q=logistique+93&start=80",
        "lsig": "AB86z5UdbjY2zju3b-9Wtd99AS95",
        "provider_id": "/g/11h033h5pr",
        "gps_coordinates": {
            "latitude": 48.943990799999995,
            "longitude": 2.3204396
        },
        "links": {
            "website": "https://www.axdispro.com/",
            "directions": "https://www.google.fr/maps/dir//AXDIS+PRO+-+Base+logistique+Villeneuve,+7+-+9+Av.+de+la+Redoute,+92390+Villeneuve-la-Garenne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6697b317b5aed:0x5fa73874e9c518de?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "AXDIS PRO - Base logistique Villeneuve",
        "type": "Dépôt",
        "phone": "01 55 02 10 23",
        "address": "Villeneuve-la-Garenne",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 19,
        "rating": 4.2,
        "reviews_original": "(29)",
        "reviews": 29,
        "description": "\"Belle entreprise, avec des transports de qualité.\"",
        "place_id": "1086309413908089451",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1086309413908089451&q=logistique+93&start=80",
        "lsig": "AB86z5UVODWGroas1GwgajwuTW60",
        "provider_id": "/g/11qg46j9wc",
        "gps_coordinates": {
            "latitude": 48.94756770000001,
            "longitude": 2.4741637
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Tendron+Quai+aulnay,+206+Rue+Nicolas+Copernic,+93150+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615497fc8d81b:0xf1358a80c278a6b?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Tendron Quai aulnay",
        "type": "Société de transport routier",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 20,
        "place_id": "11945673069098703188",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11945673069098703188&q=logistique+93&start=80",
        "lsig": "AB86z5X2sfQR5IZXlAKiCBXwhUb1",
        "provider_id": "/g/1tjf9kry",
        "gps_coordinates": {
            "latitude": 48.9116152,
            "longitude": 2.4638383
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Fdhila+Transports,+124+Rue+Auguste+Delaune,+93000+Bobigny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61334e1943551:0xa5c78e5d8e941954?sa=X&ved=2ahUKEwjPwdOFvo6CAxXWmYkEHU_yCss4UBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Fdhila Transports",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 48 49 09 80",
        "address": "Bobigny"
    },
    {
        "position": 1,
        "rating": 4,
        "reviews_original": "(20)",
        "reviews": 20,
        "place_id": "1697183528270803755",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1697183528270803755&q=logistique+94",
        "lsig": "AB86z5W47oGykfJ7tRe9wkQhS6i5",
        "provider_id": "/g/11dx9313qv",
        "gps_coordinates": {
            "latitude": 48.749220199999996,
            "longitude": 2.3671697
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Paris+Logistique+Express+P+.+L+.+E+.+SARL,+SOGARIS+Plate-Forme+Logistique,+b%C3%A2timent+B,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6769bffffffff:0x178d9b6d4939b32b?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "Paris Logistique Express P . L . E . SARL",
        "type": "Service logistique",
        "phone": "01 46 86 01 07",
        "address": "Rungis",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 2,
        "place_id": "14861016119904189822",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14861016119904189822&q=logistique+94",
        "lsig": "AB86z5UKe5rcsovy0ZQn3ZvDFO0J",
        "gps_coordinates": {
            "latitude": 48.804464599999996,
            "longitude": 2.4832383
        },
        "title": "ravp logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "06 08 60 86 60",
        "hours": "Fermé ⋅ Ouvre à 08:00 mer."
    },
    {
        "position": 3,
        "rating": 5,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "2969107316305411243",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2969107316305411243&q=logistique+94",
        "lsig": "AB86z5XFidT86-tLL-CAjYTZD0bO",
        "gps_coordinates": {
            "latitude": 48.7537404,
            "longitude": 2.381528
        },
        "title": "Verdun logistique",
        "type": "Société de transport routier",
        "phone": "06 20 68 66 75",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 4,
        "place_id": "3006598718122426627",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3006598718122426627&q=logistique+94",
        "lsig": "AB86z5UuxjIQyEarUWDOfzi13zx1",
        "provider_id": "/g/1v2ppj0q",
        "gps_coordinates": {
            "latitude": 48.786484599999994,
            "longitude": 2.4220984
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistique+Services+Transports,+4+Rue+Edouard+Vallerand,+94100+Saint-Maur-des-Foss%C3%A9s/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60ce5a1144e4d:0x29b9959abfd50103?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "Logistique Services Transports",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 49 76 50 50",
        "address": "Saint-Maur-des-Fossés"
    },
    {
        "position": 5,
        "rating": 3.4,
        "reviews_original": "(232)",
        "reviews": 232,
        "description": "\"Beaucoup d'attente\"",
        "place_id": "16607794330239451948",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16607794330239451948&q=logistique+94",
        "lsig": "AB86z5VZT9Dau9kWNO26qsJcGMBp",
        "provider_id": "/g/1tgd5v96",
        "gps_coordinates": {
            "latitude": 48.777821499999995,
            "longitude": 2.4306402
        },
        "links": {
            "website": "http://www.lactalis.fr/",
            "directions": "https://www.google.fr/maps/dir//Lactalis+Logistique,+11+Rue+des+Alouettes,+94320+Thiais/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6743dd4bb024f:0xe67abcf394ab432c?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "Lactalis Logistique",
        "type": "Service logistique",
        "phone": "01 49 78 59 00",
        "address": "Thiais",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 6,
        "rating": 4.4,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "10257927411458612204",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10257927411458612204&q=logistique+94",
        "lsig": "AB86z5XylqTt1TmarfI11Fq0SX8Q",
        "provider_id": "/g/11f9tpbzm3",
        "gps_coordinates": {
            "latitude": 48.74812,
            "longitude": 2.3543
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//POINT.P+%E2%80%93+Plateforme+logistique+Quai+94+ex+Charenton,+1+Quai+de+la+R%C3%A9volution,+94140+Alfortville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673d76b8c698d:0x8e5b7aa1c3bb9bec?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "POINT.P – Plateforme logistique Quai 94 ex Charenton",
        "type": "Service logistique",
        "phone": "01 43 53 80 81",
        "address": "Alfortville"
    },
    {
        "position": 7,
        "rating": 2.3,
        "reviews_original": "(237)",
        "reviews": 237,
        "description": "\"Personnel très sympathique et serviable.\"",
        "place_id": "2195044791590242944",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2195044791590242944&q=logistique+94",
        "lsig": "AB86z5WuN4T4WhqDI1yRoVXcl7xb",
        "provider_id": "/g/11p5fn975c",
        "gps_coordinates": {
            "latitude": 48.792314999999995,
            "longitude": 2.4088293999999997
        },
        "links": {
            "website": "https://fr.kuehne-nagel.com/?utm_source=GMB&utm_medium=GMB-FRANCE&utm_campaign=GMB-FRANCE",
            "directions": "https://www.google.fr/maps/dir//Kuehne+%2B+Nagel+Road+S.A.S.,+20-22+Chem.+des+Marais,+94000+Cr%C3%A9teil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67322d47fb5d9:0x1e765d9bacceca80?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "Kuehne + Nagel Road S.A.S.",
        "type": "Service logistique",
        "phone": "01 49 80 90 80",
        "address": "Créteil",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 8,
        "place_id": "15645185884707787548",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15645185884707787548&q=logistique+94",
        "lsig": "AB86z5XldDTMqMpt_eo42jGrRau4",
        "provider_id": "/g/11jt3961xv",
        "gps_coordinates": {
            "latitude": 48.809332,
            "longitude": 2.4361964
        },
        "links": {
            "website": "https://atalian.fr/",
            "directions": "https://www.google.fr/maps/dir//ATALIAN+LOGISTIQUE+ILE-DE-FRANCE+SUD,+2+Pl.+Gustave+Eiffel,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e677f7983ad917:0xd91eddab9ef6931c?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIDhAA&hl=fr&gl=fr"
        },
        "title": "ATALIAN LOGISTIQUE ILE-DE-FRANCE SUD",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 46 86 56 55",
        "address": "Rungis",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 9,
        "rating": 3.5,
        "reviews_original": "(433)",
        "reviews": 433,
        "place_id": "14664836865685075144",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14664836865685075144&q=logistique+94",
        "lsig": "AB86z5WCEImNlSiqzaR6DUhsIspx",
        "provider_id": "/g/1tf7lws0",
        "gps_coordinates": {
            "latitude": 48.7582379,
            "longitude": 2.5055321
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+Paris+Vitry,+47+Rue+Charles+Heller,+94400+Vitry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673746006f29b:0xcb83f76e843634c8?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQICxAA&hl=fr&gl=fr"
        },
        "title": "STEF Paris Vitry",
        "type": "Service logistique",
        "phone": "01 47 18 30 00",
        "address": "Vitry-sur-Seine"
    },
    {
        "position": 10,
        "place_id": "17566852353712070147",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17566852353712070147&q=logistique+94",
        "lsig": "AB86z5WZvJ0UKLUZEAhJoBvqkMjj",
        "provider_id": "/g/1tlgx85c",
        "gps_coordinates": {
            "latitude": 48.7450027,
            "longitude": 2.3629819999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Rent+Transports+Logistique,+13+Rue+Chevreul,+94700+Maisons-Alfort/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67326aba047d3:0xf3c9ff247cbe1e03?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "Rent Transports Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "09 81 90 94 44",
        "address": "Maisons-Alfort"
    },
    {
        "position": 11,
        "rating": 4.4,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "7825360473062264839",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7825360473062264839&q=logistique+94",
        "lsig": "AB86z5VS2N0mwkc0Od_xqXxwvbRk",
        "provider_id": "/g/11c60gbgx1",
        "gps_coordinates": {
            "latitude": 48.8110493,
            "longitude": 2.4314519
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Ratp+Plateformes+Logistiques,+1+Rue+des+Sablons,+94470+Boissy-Saint-L%C3%A9ger/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60b90b1fbe7a5:0x6c9943e3c4425007?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIDRAA&hl=fr&gl=fr"
        },
        "title": "Ratp Plateformes Logistiques",
        "type": "Service logistique",
        "address": "Boissy-Saint-Léger",
        "hours": "Ouvert ⋅ Ferme à 20:54"
    },
    {
        "position": 12,
        "rating": 3.9,
        "reviews_original": "(36)",
        "reviews": 36,
        "place_id": "11045071784076248774",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11045071784076248774&q=logistique+94",
        "lsig": "AB86z5XqFagt6lM1z41ezxnABJDL",
        "provider_id": "/g/1tp0c_3b",
        "gps_coordinates": {
            "latitude": 48.747614899999995,
            "longitude": 2.3828942
        },
        "links": {
            "website": "http://www.delanchy.com/",
            "directions": "https://www.google.fr/maps/dir//Delanchy+Prestations+de+Services+94,+1+Av.+de+l'Europe,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6769e67b96a79:0x9947fa44b08e06c6?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIChAA&hl=fr&gl=fr"
        },
        "title": "Delanchy Prestations de Services 94",
        "type": "Service logistique",
        "phone": "01 41 73 21 76",
        "address": "Rungis"
    },
    {
        "position": 13,
        "rating": 4,
        "reviews_original": "(13)",
        "reviews": 13,
        "place_id": "13665684127113881960",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13665684127113881960&q=logistique+94",
        "lsig": "AB86z5VPmh3N5eINSc_RuCmDrrmT",
        "provider_id": "/g/1tg6pfcp",
        "gps_coordinates": {
            "latitude": 48.7840792,
            "longitude": 2.4815624
        },
        "links": {
            "website": "https://transport-logistique-interim-94.fr/",
            "directions": "https://www.google.fr/maps/dir//Transport+Logistique+Interim,+99+Av.+du+G%C3%A9n%C3%A9ral-Leclerc,+94700+Maisons-Alfort/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67321bf0cfcaf:0xbda6434f49512968?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Transport Logistique Interim",
        "type": "Agence de recrutement",
        "phone": "01 41 94 12 57",
        "address": "Maisons-Alfort",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 14,
        "rating": 3.7,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "3317660660949508342",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3317660660949508342&q=logistique+94",
        "lsig": "AB86z5WmsN0PfRoh8TBV09l_MzGO",
        "provider_id": "/g/11gh_fvl08",
        "gps_coordinates": {
            "latitude": 48.8054023,
            "longitude": 2.5467344
        },
        "links": {
            "website": "https://www.snev94.fr/",
            "directions": "https://www.google.fr/maps/dir//Snev+-+transport+et+logistique,+5+Rue+des+15+Arpents,+94310+Orly/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e674393df7332f:0x2e0ab2cb1d2ee0f6?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "Snev - transport et logistique",
        "type": "Service logistique",
        "phone": "01 46 86 08 48",
        "address": "Orly",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 15,
        "rating": 3,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "14366958454695095169",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14366958454695095169&q=logistique+94",
        "lsig": "AB86z5WuOstArHw2Q_KHaV5Yu-gi",
        "provider_id": "/g/11ghpp4092",
        "gps_coordinates": {
            "latitude": 48.7575282,
            "longitude": 2.353455
        },
        "links": {
            "website": "https://agence.aac-globe-express.com/9-aac-globe-express-bonneuil-sur-marne",
            "directions": "https://www.google.fr/maps/dir//AAC+Globe+Express+Bonneuil+sur+Marne,+45+Rte+de+l'%C3%AEle+Barbi%C3%A8re,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60c908ae9662b:0xc761b0985ae56b81?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "AAC Globe Express Bonneuil sur Marne",
        "type": "Service logistique",
        "phone": "01 46 87 87 84",
        "address": "Ouvert actuellement"
    },
    {
        "position": 16,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "11634648870583420058",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11634648870583420058&q=logistique+94",
        "lsig": "AB86z5WHgHhuutFi3t_CZxsrwyDZ",
        "provider_id": "/g/11h2dpz7rk",
        "gps_coordinates": {
            "latitude": 48.807487699999996,
            "longitude": 2.4004223
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//2sd+Transports+Logistique,+6+Sq.+Ronsard,+94500+Champigny-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60e83bf6e5ac5:0xa17693813986449a?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "2sd Transports Logistique",
        "type": "Société de transport routier",
        "address": "Champigny-sur-Marne"
    },
    {
        "position": 17,
        "rating": 3.2,
        "reviews_original": "(19)",
        "reviews": 19,
        "place_id": "11502349287792219323",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11502349287792219323&q=logistique+94",
        "lsig": "AB86z5XV5ZYgrLJ0ca4tiKg99bLS",
        "provider_id": "/g/1tx_5p1s",
        "gps_coordinates": {
            "latitude": 48.716260299999995,
            "longitude": 2.5690768999999998
        },
        "links": {
            "website": "http://www.stef.com/",
            "directions": "https://www.google.fr/maps/dir//STEF+International,+20+Quai+de+Boulogne,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6741e80c1cd25:0x9fa08dbc355294bb?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "STEF International",
        "type": "Service logistique",
        "phone": "01 41 80 13 60",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 18,
        "rating": 3.5,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "1463755758903765624",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1463755758903765624&q=logistique+94",
        "lsig": "AB86z5WjBp_cIk_epu1OycHBIf-C",
        "provider_id": "/g/11fsh92l21",
        "gps_coordinates": {
            "latitude": 48.793589499999996,
            "longitude": 2.3852531999999997
        },
        "links": {
            "website": "http://www.fmlogistic.fr/",
            "directions": "https://www.google.fr/maps/dir//FM+LOGISTIC,+47B+Rue+Ernest+Renan,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673068b3823ff:0x14504e1b7f642a78?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "FM LOGISTIC",
        "type": "Société de transport international de marchandises",
        "address": "Ivry-sur-Seine"
    },
    {
        "position": 19,
        "rating": 3.6,
        "reviews_original": "(238)",
        "reviews": 238,
        "place_id": "10991034725479749229",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10991034725479749229&q=logistique+94",
        "lsig": "AB86z5UwqTOCyzPXeH1ZLNs7gJnf",
        "provider_id": "/g/1w6r7kxj",
        "gps_coordinates": {
            "latitude": 48.71626,
            "longitude": 2.569077
        },
        "links": {
            "website": "https://www.dachser.fr/fr/",
            "directions": "https://www.google.fr/maps/dir//DACHSER+Logistique,+199+Av.+des+%C3%89rables,+94440+Santeny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e609b46701c27d:0x9887ffd98e34166d?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "DACHSER Logistique",
        "type": "Service logistique",
        "phone": "01 45 10 62 91",
        "address": "Santeny",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 20,
        "rating": 4.3,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "14905951296595186757",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14905951296595186757&q=logistique+94",
        "lsig": "AB86z5Vluui1548UFt90R8jKTiwj",
        "provider_id": "/g/1tdm30qb",
        "gps_coordinates": {
            "latitude": 48.79359,
            "longitude": 2.3852532
        },
        "links": {
            "website": "http://www.allofret.fr/",
            "directions": "https://www.google.fr/maps/dir//Allo+Fret,+13+Av.+Eug%C3%A8ne+Pelletan,+94400+Vitry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e670f941d093f5:0xcedc93baa8d45445?sa=X&ved=2ahUKEwi4zpSVvo6CAxWvSjABHbMLBucQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "Allo Fret",
        "type": "Service logistique",
        "phone": "01 46 55 88 80",
        "address": "Vitry-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 1,
        "place_id": "12151304573149060294",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12151304573149060294&q=logistique+94&start=20",
        "lsig": "AB86z5XB7ax0rH9YiFD5b4uc1aCr",
        "provider_id": "/g/11btmb6lt3",
        "gps_coordinates": {
            "latitude": 48.7986004,
            "longitude": 2.4233830999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transpro+94+(Sarl),+2b+Rue+Etienne+Dolet,+94140+Alfortville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67313f07db031:0xa8a21b2100211cc6?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Transpro 94 (Sarl)",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 48 90 46 06",
        "address": "Alfortville"
    },
    {
        "position": 2,
        "rating": 3.6,
        "reviews_original": "(51)",
        "reviews": 51,
        "place_id": "14953364042175362636",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14953364042175362636&q=logistique+94&start=20",
        "lsig": "AB86z5U_E5RaM5heEiQb3ULAQbeT",
        "provider_id": "/g/1tpc78pk",
        "gps_coordinates": {
            "latitude": 48.8123577,
            "longitude": 2.398781
        },
        "links": {
            "website": "http://www.logistiquecitoyenne.com/",
            "directions": "https://www.google.fr/maps/dir//Axelis+Plus,+15+Rue+Pierre+Rigaud,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673ad1ad04863:0xcf85055ebaf6364c?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Axelis Plus",
        "type": "Service logistique",
        "phone": "01 49 59 61 47",
        "address": "Ivry-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 3,
        "rating": 4.2,
        "reviews_original": "(5)",
        "reviews": 5,
        "description": "\"Transporteur je bosse de temps en temps avec eux très pro et sympa\"",
        "place_id": "6963945232894667296",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6963945232894667296&q=logistique+94&start=20",
        "lsig": "AB86z5VJm5-84LR5Jykoh-V7wSvh",
        "provider_id": "/g/11fwjwsxd4",
        "gps_coordinates": {
            "latitude": 48.783988699999995,
            "longitude": 2.4819541
        },
        "links": {
            "website": "http://www.hyper-volume.fr/",
            "directions": "https://www.google.fr/maps/dir//Transports+Cordier+-+Hyper+Log+94,+41+Rte+de+l'%C3%AEle+Barbi%C3%A8re,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60df26a08fe09:0x60a4e74af1f62a20?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Transports Cordier - Hyper Log 94",
        "type": "Société de transport routier",
        "address": "Bonneuil-sur-Marne",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 4,
        "rating": 1.9,
        "reviews_original": "(29)",
        "reviews": 29,
        "description": "\"Malgré une livraison manquée pour cause de retard, je suis satisfaite du service.\"",
        "place_id": "5552776326837207988",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5552776326837207988&q=logistique+94&start=20",
        "lsig": "AB86z5X_FFXA14fDZCo8XKkOt8fP",
        "provider_id": "/g/11fsqdhkn4",
        "gps_coordinates": {
            "latitude": 48.7523184,
            "longitude": 2.3654553
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Urby+Rungis,+1+place+de+la+logistique+SOGARIS,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67768a69f05d7:0x4d0f6ca63e5483b4?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Urby Rungis",
        "type": "Service logistique",
        "phone": "06 98 35 14 29",
        "address": "Rungis",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 5,
        "rating": 3,
        "reviews_original": "(220)",
        "reviews": 220,
        "place_id": "4429772544079146854",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4429772544079146854&q=logistique+94&start=20",
        "lsig": "AB86z5V7j9BpK5ALvt4oZDGCQnOp",
        "provider_id": "/g/11g8h33yp9",
        "gps_coordinates": {
            "latitude": 48.781639,
            "longitude": 2.5024063
        },
        "links": {
            "website": "https://amazon.fr/amzl",
            "directions": "https://www.google.fr/maps/dir//Amazon+DIF2,+36+Rue+du+Moulin+Bateau,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60c63517c8763:0x3d79b6a8ad9daf66?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "Amazon DIF2",
        "type": "Service logistique",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 6,
        "rating": 3.7,
        "reviews_original": "(143)",
        "reviews": 143,
        "place_id": "11014991693445365011",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11014991693445365011&q=logistique+94&start=20",
        "lsig": "AB86z5WpGyZXAtl9SbTnmvoVeICX",
        "provider_id": "/g/11g6nksvrc",
        "gps_coordinates": {
            "latitude": 48.7539332,
            "longitude": 2.4504943
        },
        "links": {
            "website": "https://fr.gefco.net/",
            "directions": "https://www.google.fr/maps/dir//GEFCO+Villeneuve-Saint-Georges,+ZI+des+Graviers,+Rue+des+Pr%C3%A9s+de+l'H%C3%B4pital,+94190+Villeneuve-Saint-Georges/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60b4a5e546639:0x98dd1c95d3b07d13?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "GEFCO Villeneuve-Saint-Georges",
        "type": "Service logistique",
        "phone": "01 56 87 14 60",
        "address": "Villeneuve-Saint-Georges",
        "hours": "Ouvert ⋅ Ferme à 16:30"
    },
    {
        "position": 7,
        "place_id": "7405431734338746102",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7405431734338746102&q=logistique+94&start=20",
        "lsig": "AB86z5Vntk4zMXNzbnL2Tghhq1S-",
        "provider_id": "/g/11ddwv_3zn",
        "gps_coordinates": {
            "latitude": 48.7772794,
            "longitude": 2.4290818
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Sogaris/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6735fcd9c3d01:0x66c560ed3daa76f6?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Sogaris",
        "reviews_original": "Aucun avis",
        "type": "Service logistique"
    },
    {
        "position": 8,
        "rating": 3,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "8813385730979284739",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8813385730979284739&q=logistique+94&start=20",
        "lsig": "AB86z5V6--FFzC1m3M_hfJZovq46",
        "provider_id": "/g/1vg4j2nt",
        "gps_coordinates": {
            "latitude": 48.761217099999996,
            "longitude": 2.4996191000000003
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Euro+Leader+94,+22+Rue+du+8+Mai+1945,+94470+Boissy-Saint-L%C3%A9ger/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60b9b6a23edb5:0x7a4f6fa083844703?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Euro Leader 94",
        "type": "Société de transport routier",
        "phone": "01 45 95 94 94",
        "address": "Boissy-Saint-Léger"
    },
    {
        "position": 9,
        "rating": 5,
        "reviews_original": "(3)",
        "reviews": 3,
        "description": "\"Service transport des vrais professionnels et gentil\"",
        "place_id": "7683814335516289971",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7683814335516289971&q=logistique+94&start=20",
        "lsig": "AB86z5Xh6XIZ3YXoKiu9A68m4xCK",
        "provider_id": "/g/11r_cmhl2j",
        "gps_coordinates": {
            "latitude": 48.7815857,
            "longitude": 2.4993890999999997
        },
        "links": {
            "website": "https://www.viapost.fr/",
            "directions": "https://www.google.fr/maps/dir//VIAPOST,+34+Rue+du+Moulin+Bateau,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60d3eebdaf357:0x6aa2646d7480abb3?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "VIAPOST",
        "type": "Service logistique",
        "phone": "01 57 44 31 60",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 10,
        "rating": 4.1,
        "reviews_original": "(72)",
        "reviews": 72,
        "description": "\"Très bien toujours vidé et chargé rapidement.\"",
        "place_id": "9665256940784777251",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9665256940784777251&q=logistique+94&start=20",
        "lsig": "AB86z5Xzjw_kuIL4R1_jxyZkdre4",
        "provider_id": "/g/1tp_5q3j",
        "gps_coordinates": {
            "latitude": 48.751279,
            "longitude": 2.3562768
        },
        "links": {
            "website": "https://www.delanchy.com/",
            "directions": "https://www.google.fr/maps/dir//DELANCHY+Frigo+Transports+94,+Entrep%C3%B4t+109,+7+Rue+des+Antilles+B%C3%A2timent+I2,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6769e67b96a79:0x8621e3fa9a5af823?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "DELANCHY Frigo Transports 94",
        "type": "Société de transport routier",
        "phone": "01 56 30 00 80",
        "address": "Rungis"
    },
    {
        "position": 11,
        "rating": 3.9,
        "reviews_original": "(18)",
        "reviews": 18,
        "place_id": "9224470553242632710",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9224470553242632710&q=logistique+94&start=20",
        "lsig": "AB86z5XaGZ1f0gRBj3oQn8PQrUE6",
        "provider_id": "/g/11fhy28txl",
        "gps_coordinates": {
            "latitude": 48.734420799999995,
            "longitude": 2.3767044999999998
        },
        "links": {
            "website": "https://www.bollore-logistics.com/",
            "directions": "https://www.google.fr/maps/dir//Bollore+Logistics,+Zone+de+Fret,+Parc+ROMEO,+Rue+de+la+Soie+Batiment+285+Cellule+C1+%26+C2,+94310+Orly/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6755a47593b37:0x8003e71847140206?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Bollore Logistics",
        "type": "Service logistique",
        "phone": "01 41 80 33 72",
        "address": "Orly"
    },
    {
        "position": 12,
        "rating": 3.5,
        "reviews_original": "(115)",
        "reviews": 115,
        "description": "\"Entrepôt de stockage froid négatif\"",
        "place_id": "14288289899086483712",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14288289899086483712&q=logistique+94&start=20",
        "lsig": "AB86z5XKlJYXBEd7cWC9mijTZdyN",
        "provider_id": "/g/1tdyq2ys",
        "gps_coordinates": {
            "latitude": 48.792408599999995,
            "longitude": 2.4111967
        },
        "links": {
            "website": "http://www.sofrilog.com/",
            "directions": "https://www.google.fr/maps/dir//SOFRILOG+VITRY,+42+Rue+Charles+Heller,+94400+Vitry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673740f1c1939:0xc64a33f5eada1100?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "SOFRILOG VITRY",
        "type": "Service logistique",
        "phone": "01 47 18 12 40",
        "address": "Vitry-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 13,
        "rating": 3.3,
        "reviews_original": "(3)",
        "reviews": 3,
        "place_id": "14648835578204143290",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14648835578204143290&q=logistique+94&start=20",
        "lsig": "AB86z5XR-pbWmtyFuhuxDU8SGV2U",
        "provider_id": "/g/11gtg8kzx0",
        "gps_coordinates": {
            "latitude": 48.782188399999995,
            "longitude": 2.4326136
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//JP+Jacky+Perrenot,+Digue+d'Alfortville,+94140+Cr%C3%A9teil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6735d1dcdcb31:0xcb4b1e5873f63eba?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "JP Jacky Perrenot",
        "type": "Service logistique",
        "address": "Créteil"
    },
    {
        "position": 14,
        "place_id": "14093456493441289315",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14093456493441289315&q=logistique+94&start=20",
        "lsig": "AB86z5XEbj8_Mht89vZKPYKPlMb-",
        "provider_id": "/g/11flt2yv0g",
        "gps_coordinates": {
            "latitude": 48.7955778,
            "longitude": 2.5417193000000005
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Va+Logistique,+24+Rue+Gay+Lussac,+94430+Chennevi%C3%A8res-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60c20a0669803:0xc3960402acfd8c63?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Va Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Chennevières-sur-Marne",
        "hours": "Fermé temporairement"
    },
    {
        "position": 15,
        "place_id": "16121510255429521502",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16121510255429521502&q=logistique+94&start=20",
        "lsig": "AB86z5VC-q2cq0e3obZTRprHybaf",
        "provider_id": "/g/11ts46yxpb",
        "gps_coordinates": {
            "latitude": 48.7911229,
            "longitude": 2.5388550999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Prestige+Transport+94,+32+Rue+le+Pr%C3%A9vost,+94490+Ormesson-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60d15952ed97d:0xdfbb1c2971b1905e?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "Prestige Transport 94",
        "reviews_original": "Aucun avis",
        "type": "Service de livraison",
        "phone": "06 16 64 33 38",
        "address": "Ormesson-sur-Marne",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 16,
        "place_id": "4502372252643721238",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4502372252643721238&q=logistique+94&start=20",
        "lsig": "AB86z5U8WZyG4fYI8ofysITSLgvH",
        "provider_id": "/g/11s5sdl70p",
        "gps_coordinates": {
            "latitude": 48.7663895,
            "longitude": 2.4842153
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Log+Express,+2+Rue+Jean+Zay,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xaadcd4d8a6e232eb:0x3e7ba3b58d678016?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Log Express",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "06 68 39 19 65",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 17,
        "rating": 3,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "12084196303612226317",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12084196303612226317&q=logistique+94&start=20",
        "lsig": "AB86z5X9VFbesim4Prve3cqxngHb",
        "provider_id": "/g/11b6dg4k39",
        "gps_coordinates": {
            "latitude": 48.757854599999995,
            "longitude": 2.3603132
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//GL+Logistique+-+Taxi+Froid,+CP+30520,+2+Rue+de+l'Aubrac,+94595+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6741fa7be76bb:0xa7b3b08368e52b0d?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "GL Logistique - Taxi Froid",
        "type": "Société de transport routier",
        "phone": "01 56 34 14 50",
        "address": "Rungis",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 18,
        "rating": 3.3,
        "reviews_original": "(44)",
        "reviews": 44,
        "place_id": "15685721882806753671",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15685721882806753671&q=logistique+94&start=20",
        "lsig": "AB86z5UCP2tkzDw2ri2zychMW0Ux",
        "provider_id": "/g/11btlpnlvf",
        "gps_coordinates": {
            "latitude": 48.748146,
            "longitude": 2.3643096999999997
        },
        "links": {
            "website": "https://www.dbschenker.com/fr-fr",
            "directions": "https://www.google.fr/maps/dir//DB+SCHENKER,+Place+de+la+logistique,+batiment+D,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67423c88fd39d:0xd9aee0f226449987?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "DB SCHENKER",
        "type": "Service logistique",
        "phone": "01 57 02 10 00",
        "address": "Rungis",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 19,
        "place_id": "10406382239432919039",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10406382239432919039&q=logistique+94&start=20",
        "lsig": "AB86z5WFcDuEVDl_Tgr3P2DjOQo2",
        "provider_id": "/g/11fsmvxv0t",
        "gps_coordinates": {
            "latitude": 48.772695899999995,
            "longitude": 2.3421222999999998
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Bac+Pro+Logistique,+17+Av.+du+G%C3%A9n%C3%A9ral+de+Gaulle,+94550+Chevilly-Larue/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e676b465e20195:0x906ae582ea5547ff?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Bac Pro Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Chevilly-Larue",
        "hours": "Fermé temporairement"
    },
    {
        "position": 20,
        "rating": 3,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "9083059511645961237",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9083059511645961237&q=logistique+94&start=20",
        "lsig": "AB86z5WkLdjPpDkuUeQ_iUk-DncU",
        "provider_id": "/g/11bx2ly7f_",
        "gps_coordinates": {
            "latitude": 48.7527371,
            "longitude": 2.361946
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Place+de+La+Logistique/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67421080462a9:0x7e0d82807163fc15?sa=X&ved=2ahUKEwiQuY2Wvo6CAxUzEVkFHaWdBQ44FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Place de La Logistique",
        "type": "Arrêt de tram"
    },
    {
        "position": 1,
        "rating": 4,
        "reviews_original": "(353)",
        "reviews": 353,
        "place_id": "8321007301032757713",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8321007301032757713&q=logistique+94&start=40",
        "lsig": "AB86z5UQ8klEbdq7h2NxauermBsj",
        "provider_id": "/g/1vf9bp59",
        "gps_coordinates": {
            "latitude": 48.7554002,
            "longitude": 2.4772132
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "http://www.dgs-transports.fr/",
            "directions": "https://www.google.fr/maps/dir//DGS+Transports,+75+Rue+Albert+Garry,+94450+Limeil-Br%C3%A9vannes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6769bffffffff:0x737a280dbf7d49d1?sa=X&ved=2ahUKEwjCv6WXvo6CAxUrADQIHaX_B_w4KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "DGS Transports",
        "type": "Service logistique",
        "phone": "01 56 86 31 31",
        "address": "Limeil-Brévannes",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 2,
        "rating": 3.8,
        "reviews_original": "(24)",
        "reviews": 24,
        "place_id": "1976661245146187178",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1976661245146187178&q=logistique+94&start=40",
        "lsig": "AB86z5XQsJrismjiIVG17rNopbFl",
        "provider_id": "/g/11g8bv00qz",
        "gps_coordinates": {
            "latitude": 48.8083898,
            "longitude": 2.3786101
        },
        "links": {
            "website": "http://www.giraphes-services.com/",
            "directions": "https://www.google.fr/maps/dir//Giraphes+Services+Logistique+Ecommerce+Paris,+3+Rue+Michelet,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673cec36f5015:0x1b6e82edfe3845aa?sa=X&ved=2ahUKEwjCv6WXvo6CAxUrADQIHaX_B_w4KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Giraphes Services Logistique Ecommerce Paris",
        "type": "Service logistique",
        "address": "Ivry-sur-Seine"
    },
    {
        "position": 3,
        "rating": 2.8,
        "reviews_original": "(4 k)",
        "reviews": 4000,
        "description": "\"Bravo GLS et à vos employés\"",
        "place_id": "4796668421651876043",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4796668421651876043&q=logistique+94&start=40",
        "lsig": "AB86z5WliSXh_JMH9EL5A7Bj_-Ba",
        "provider_id": "/g/1tr7c3m1",
        "gps_coordinates": {
            "latitude": 48.7986229,
            "longitude": 2.4073181
        },
        "links": {
            "website": "https://gls-group.eu/FR/fr/home",
            "directions": "https://www.google.fr/maps/dir//GLS+Vitry,+60-70+Rue+Berthie+Albrecht,+94400+Vitry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6730a15e98e25:0x4291308401e4c8cb?sa=X&ved=2ahUKEwjCv6WXvo6CAxUrADQIHaX_B_w4KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "GLS Vitry",
        "type": "Service logistique",
        "phone": "09 74 91 09 10",
        "address": "Vitry-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 4,
        "place_id": "5094030465123133616",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5094030465123133616&q=logistique+94&start=40",
        "lsig": "AB86z5XikoRR75fr4qEymvFMSXbN",
        "provider_id": "/g/11j2yqnq2_",
        "gps_coordinates": {
            "latitude": 48.8465306,
            "longitude": 2.4312888999999998
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Bac+Pro+Logistique,+8+Rue+du+Dr+Lebel,+94300+Vincennes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e67298513aaaab:0x46b1a1b7fcaea8b0?sa=X&ved=2ahUKEwjCv6WXvo6CAxUrADQIHaX_B_w4KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Bac Pro Logistique",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Vincennes",
        "hours": "Fermé temporairement"
    },
    {
        "position": 5,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "12314842022116178453",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12314842022116178453&q=logistique+94&start=40",
        "lsig": "AB86z5UTwqPCW-goqoyZ6QY8mb1t",
        "provider_id": "/g/11fj1_3921",
        "gps_coordinates": {
            "latitude": 48.779374499999996,
            "longitude": 2.5049506000000004
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//La+Palette+Logistique+Manutention,+113+Rue+du+Moulin+Bateau,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60c7a5ce6082f:0xaae71b928149ba15?sa=X&ved=2ahUKEwjCv6WXvo6CAxUrADQIHaX_B_w4KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "La Palette Logistique Manutention",
        "type": "Service logistique",
        "address": "Bonneuil-sur-Marne",
        "hours": "Fermé temporairement"
    },
    {
        "position": 6,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "5158839987692077324",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5158839987692077324&q=logistique+94&start=40",
        "lsig": "AB86z5Vp6mWWZTP6-oPtiMUGi2Qa",
        "provider_id": "/g/11b75dsxp0",
        "gps_coordinates": {
            "latitude": 48.7562175,
            "longitude": 2.4149103999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Axair,+127+Av.+Anatole+France,+94600+Choisy-le-Roi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6748d7d6f3e31:0x4797e1a2d777810c?sa=X&ved=2ahUKEwjCv6WXvo6CAxUrADQIHaX_B_w4KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Axair",
        "type": "Service logistique",
        "phone": "01 48 53 71 00",
        "address": "Choisy-le-Roi",
        "hours": "Fermé temporairement"
    },
    {
        "position": 1,
        "rating": 4,
        "reviews_original": "(28)",
        "reviews": 28,
        "description": "\"Je recommande ce transporteur\"",
        "place_id": "6087633734260924152",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6087633734260924152&q=logistique+94&start=60",
        "lsig": "AB86z5WkJ3et8UAbm3fJ2_PRhB0D",
        "provider_id": "/g/1th86fnf",
        "gps_coordinates": {
            "latitude": 48.8127699,
            "longitude": 2.3966857999999998
        },
        "links": {
            "website": "http://www.transports-abbas.fr/",
            "directions": "https://www.google.fr/maps/dir//Transports+%26+d%C3%A9m%C3%A9nagement+Abbas,+10+Rue+Moli%C3%A8re,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673ac6dce4ab7:0x547b9ea0ad4e9ef8?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Transports & déménagement Abbas",
        "type": "Société de transport routier",
        "phone": "01 56 20 31 40",
        "address": "Ivry-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 2,
        "rating": 3.9,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "13868075126922457721",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13868075126922457721&q=logistique+94&start=60",
        "lsig": "AB86z5UJTTQqLwRAdJGQWws1j1mU",
        "provider_id": "/g/11fnrvpt64",
        "gps_coordinates": {
            "latitude": 48.7523183,
            "longitude": 2.3648903
        },
        "service_options": {
            "services_sur_place": true
        },
        "links": {
            "website": "http://www.ecolotrans.com/",
            "directions": "https://www.google.fr/maps/dir//Ecolotrans,+106+PLACE+DE+LA+LOGISTIQUE+,+SOGARIS,+BATIMENT+M32,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6778cfdca9817:0xc0754cda0aa4b279?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "Ecolotrans",
        "type": "Service de livraison",
        "phone": "01 76 35 02 35",
        "address": "Rungis",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 3,
        "rating": 3.6,
        "reviews_original": "(7)",
        "reviews": 7,
        "place_id": "6243687365761005882",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6243687365761005882&q=logistique+94&start=60",
        "lsig": "AB86z5UzNnjZLUaybaattIt_UX3Y",
        "provider_id": "/g/1tgjklbf",
        "gps_coordinates": {
            "latitude": 48.7698195,
            "longitude": 2.4915669
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//ABC+Transport,+6+Av.+des+Bleuets,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60b7fac94c0a1:0x56a6089424c7793a?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "ABC Transport",
        "type": "Société de transport routier",
        "phone": "01 41 94 69 90",
        "address": "Bonneuil-sur-Marne",
        "hours": "Ouvert ⋅ Ferme à 19:30"
    },
    {
        "position": 4,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "13775530275942872730",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13775530275942872730&q=logistique+94&start=60",
        "lsig": "AB86z5WoToRqm-ety3VLFNNoB5fo",
        "provider_id": "/g/11fj1_2jdt",
        "gps_coordinates": {
            "latitude": 48.7840029,
            "longitude": 2.4818876
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Solutions+Transports,+43+Rte+de+l'%C3%AEle+Barbi%C3%A8re,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60c90610328a1:0xbf2c83ccd236b69a?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Solutions Transports",
        "type": "Service de transport",
        "address": "Bonneuil-sur-Marne"
    },
    {
        "position": 5,
        "rating": 1.8,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "17223300202259436261",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17223300202259436261&q=logistique+94&start=60",
        "lsig": "AB86z5UGY2caef6CB4J6FkqmYk0R",
        "provider_id": "/g/11j8lnn70c",
        "gps_coordinates": {
            "latitude": 48.7957833,
            "longitude": 2.4621302
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Hidaya+Transport,+7+Rue+Anatole+France,+94000+Cr%C3%A9teil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60cc862eea007:0xef057447ef9652e5?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Hidaya Transport",
        "type": "Société de transport routier",
        "phone": "06 17 93 36 52",
        "address": "Créteil",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 6,
        "rating": 3.8,
        "reviews_original": "(27)",
        "reviews": 27,
        "description": "\"Agence dynamique où il est facile de trouver du travail.\"",
        "place_id": "2464726900057290391",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2464726900057290391&q=logistique+94&start=60",
        "lsig": "AB86z5W-u-rucpzIc8Lk-xeqvKhZ",
        "provider_id": "/g/1tlc7cbg",
        "gps_coordinates": {
            "latitude": 48.791627999999996,
            "longitude": 2.4623462
        },
        "links": {
            "website": "https://www.adecco.fr/resultats-offres-emploi/?branchcode=ADFR_628",
            "directions": "https://www.google.fr/maps/dir//Adecco+Cr%C3%A9teil+Industrie+Logistique,+33+Av.+Pierre+Brossolette,+94000+Cr%C3%A9teil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60cb78fa6233f:0x2234780e9243b697?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Adecco Créteil Industrie Logistique",
        "type": "Agence d'intérim",
        "phone": "01 43 53 33 00",
        "address": "Créteil",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 7,
        "place_id": "8420807264387299917",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8420807264387299917&q=logistique+94&start=60",
        "lsig": "AB86z5XDBYnA7w3UpGeM44QC7sZk",
        "provider_id": "/g/11r35gl6p8",
        "gps_coordinates": {
            "latitude": 48.8014164,
            "longitude": 2.5406755
        },
        "links": {
            "website": "https://www.ups.com/fr/fr/services/e-commerce/access-point-network.page",
            "directions": "https://www.google.fr/maps/dir//UPS+Access+Point,+34+Rte+de+la+Lib%C3%A9ration,+94430+Chennevi%C3%A8res-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60d235c8b86bf:0x74dcb79773d57a4d?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "UPS Access Point",
        "reviews_original": "Aucun avis",
        "type": "Société de livraison",
        "address": "Chennevières-sur-Marne",
        "hours": "Ouvert ⋅ Ferme à 19:00"
    },
    {
        "position": 8,
        "rating": 4.1,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "2370742487442812341",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2370742487442812341&q=logistique+94&start=60",
        "lsig": "AB86z5XlTeLtmDXaENrrmFmc4eQz",
        "provider_id": "/g/1th7xndx",
        "gps_coordinates": {
            "latitude": 48.784167,
            "longitude": 2.481119
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//PA.ME.CO+Paris+M%C3%A9diterran%C3%A9e+Corse,+51+Rte+de+l'%C3%AEle+Barbi%C3%A8re,+94380+Bonneuil-sur-Marne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60c87e1099735:0x20e691bb49f46db5?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "PA.ME.CO Paris Méditerranée Corse",
        "type": "Société de transport routier",
        "phone": "01 43 99 94 59",
        "address": "Bonneuil-sur-Marne"
    },
    {
        "position": 9,
        "rating": 2.5,
        "reviews_original": "(201)",
        "reviews": 201,
        "place_id": "8063267773637061787",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8063267773637061787&q=logistique+94&start=60",
        "lsig": "AB86z5VtA8K0S3zXqYbOOKrouzu2",
        "provider_id": "/g/11bt_j3hj8",
        "gps_coordinates": {
            "latitude": 48.759048,
            "longitude": 2.4785382
        },
        "links": {
            "website": "https://geodis.com/fr/activite/distribution-et-express",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Distribution+%26+Express,+14+Av.+Jean+Monnet,+94450+Limeil-Br%C3%A9vannes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60b6bea38d965:0x6fe67b51b07dec9b?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Distribution & Express",
        "type": "Service logistique",
        "phone": "0 892 05 28 28",
        "address": "Limeil-Brévannes",
        "hours": "Ouvert ⋅ Ferme à 18:30"
    },
    {
        "position": 10,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "5158839987692077324",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5158839987692077324&q=logistique+94&start=60",
        "lsig": "AB86z5Vp6mWWZTP6-oPtiMUGi2Qa",
        "provider_id": "/g/11b75dsxp0",
        "gps_coordinates": {
            "latitude": 48.7562175,
            "longitude": 2.4149103999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Axair,+127+Av.+Anatole+France,+94600+Choisy-le-Roi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6748d7d6f3e31:0x4797e1a2d777810c?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Axair",
        "type": "Service logistique",
        "phone": "01 48 53 71 00",
        "address": "Choisy-le-Roi",
        "hours": "Fermé temporairement"
    },
    {
        "position": 11,
        "rating": 4,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "2931554528625149437",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2931554528625149437&q=logistique+94&start=60",
        "lsig": "AB86z5X9LRl7QGVbMFupGmFVAegG",
        "provider_id": "/g/11h_bft5lw",
        "gps_coordinates": {
            "latitude": 48.7522873,
            "longitude": 2.3650925
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//%C3%89colotrans+Plateforme+logistique,+A86,+94150+Rungis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e675fd0b1f2ab9:0x28aef94fce63c5fd?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Écolotrans Plateforme logistique",
        "type": "Siège social",
        "address": "Rungis",
        "hours": "Fermé temporairement"
    },
    {
        "position": 12,
        "place_id": "16226073842288385464",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16226073842288385464&q=logistique+94&start=60",
        "lsig": "AB86z5WQLHwuoYINAAKw189trK3s",
        "provider_id": "/g/11flt35098",
        "gps_coordinates": {
            "latitude": 48.8088997,
            "longitude": 2.4004749999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Gpdis,+22+Rue+Robert+Witchitz,+94200+Ivry-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e673ae913a9347:0xe12e9830acdb5db8?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "Gpdis",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "address": "Ivry-sur-Seine",
        "hours": "Fermé temporairement"
    },
    {
        "position": 13,
        "place_id": "4317859991741147591",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4317859991741147591&q=logistique+94&start=60",
        "lsig": "AB86z5UW2vhLZyC2nDeumsE7bzJ4",
        "provider_id": "/g/1hc5pmhrd",
        "gps_coordinates": {
            "latitude": 48.7536184,
            "longitude": 2.4545779
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//360+Medex,+2bis+Rue+d'%C3%8Ele+de+France,+94460+Valenton/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60b49e36f06ed:0x3bec1ec9159a29c7?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "360 Medex",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 43 82 03 09",
        "address": "Valenton",
        "hours": "Fermé temporairement"
    },
    {
        "position": 14,
        "rating": 2,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "15177942127169850411",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15177942127169850411&q=logistique+94&start=60",
        "lsig": "AB86z5UuA-b1mvFa15DAjWNe71Yh",
        "provider_id": "/g/11btmq9dgp",
        "gps_coordinates": {
            "latitude": 48.7760457,
            "longitude": 2.4688124
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Trans+Express,+1+Rue+Edouard+Vuillard,+94000+Cr%C3%A9teil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60ca11a30efe3:0xd2a2e1f2cf654c2b?sa=X&ved=2ahUKEwiu4amYvo6CAxUZHDQIHbM5BtI4PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Trans Express",
        "type": "Société de livraison",
        "phone": "01 77 01 09 68",
        "address": "Créteil",
        "hours": "Fermé temporairement"
    },
    {
        "position": 1,
        "rating": 3.3,
        "reviews_original": "(45)",
        "reviews": 45,
        "place_id": "4146321682031967890",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4146321682031967890&q=logistique+95",
        "lsig": "AB86z5VEAfxkoiLgv2hW9rCh6E-6",
        "provider_id": "/g/11hfht14zw",
        "gps_coordinates": {
            "latitude": 49.0295561,
            "longitude": 2.1200313
        },
        "links": {
            "website": "https://www.stg-logistique.fr/",
            "directions": "https://www.google.fr/maps/dir//STG+logistique+95,+4+Rue+de+la+Patelle,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e675dc13bbec8b:0x398ab19a0603fe92?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIBxAA&hl=fr&gl=fr"
        },
        "title": "STG logistique 95",
        "type": "Service logistique",
        "phone": "01 30 39 45 10",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 2,
        "rating": 3.9,
        "reviews_original": "(171)",
        "reviews": 171,
        "description": "\"C est une usine logistique de produits surgelés\"",
        "place_id": "10345850334763749761",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10345850334763749761&q=logistique+95",
        "lsig": "AB86z5XdZPCjVHgVaQ3OzysWRWLF",
        "provider_id": "/g/1hc5jlcnr",
        "gps_coordinates": {
            "latitude": 49.0380329,
            "longitude": 2.1450491
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+Logistique+Distribution+CERGY,+30+Av.+des+B%C3%A9thunes,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb8b3338335:0x8f93d81096f31181?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIExAA&hl=fr&gl=fr"
        },
        "title": "STEF Logistique Distribution CERGY",
        "type": "Service logistique",
        "phone": "01 39 09 43 70",
        "address": "Saint-Ouen-l'Aumône"
    },
    {
        "position": 3,
        "rating": 3.5,
        "reviews_original": "(15)",
        "reviews": 15,
        "place_id": "3351059039218951322",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3351059039218951322&q=logistique+95",
        "lsig": "AB86z5Xvu3kVpWh73BT2tT84KWOn",
        "gps_coordinates": {
            "latitude": 49.0614151,
            "longitude": 2.141849
        },
        "links": {
            "website": "http://www.h2k.fr/"
        },
        "title": "H2K LOGISTIQUE",
        "type": "Service logistique",
        "phone": "01 34 32 22 11",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 4,
        "rating": 4,
        "reviews_original": "(63)",
        "reviews": 63,
        "place_id": "12428870232578293293",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12428870232578293293&q=logistique+95",
        "lsig": "AB86z5VHBJgXfEWY42nUmh02QIHX",
        "provider_id": "/g/11c3yr63y7",
        "gps_coordinates": {
            "latitude": 49.047289,
            "longitude": 2.1444924999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Atac+Id+Logistic,+6+Av.+du+Fond+de+Vaux,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fa7796bd411:0xac7c37a024417e2d?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIERAA&hl=fr&gl=fr"
        },
        "title": "Atac Id Logistic",
        "type": "Service logistique",
        "address": "Saint-Ouen-l'Aumône"
    },
    {
        "position": 5,
        "rating": 4.1,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "17807243772579478761",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17807243772579478761&q=logistique+95",
        "lsig": "AB86z5UVFucATmwKu8j7ZiUhxZDs",
        "provider_id": "/g/11h1vgc0mm",
        "gps_coordinates": {
            "latitude": 48.979393,
            "longitude": 2.4569712
        },
        "links": {
            "website": "https://www.egetra.com/",
            "directions": "https://www.google.fr/maps/dir//Charvin+Logistics+Saint+Ouen+l'A.+(ex-egetra),+1+Av.+du+Fief,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65ff20620092b:0xf72009dd4562fce9?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIEBAA&hl=fr&gl=fr"
        },
        "title": "Charvin Logistics Saint Ouen l'A. (ex-egetra)",
        "type": "Service logistique",
        "phone": "01 81 34 00 05",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 6,
        "rating": 4,
        "reviews_original": "(101)",
        "reviews": 101,
        "place_id": "7743542891823889781",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7743542891823889781&q=logistique+95",
        "lsig": "AB86z5XOEDdAoiLu5rbAshvNQQ8g",
        "provider_id": "/g/1tgcxc3c",
        "gps_coordinates": {
            "latitude": 49.1077138,
            "longitude": 2.2195644999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Central+Logistique,+4-6+Rue+Amp%C3%A8re,+95500+Gonesse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614caec066783:0x6b76973baa29fd75?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIDxAA&hl=fr&gl=fr"
        },
        "title": "Central Logistique",
        "type": "Société de transport routier",
        "phone": "01 34 04 34 40",
        "address": "Gonesse",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 7,
        "place_id": "1552758557274913921",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1552758557274913921&q=logistique+95",
        "lsig": "AB86z5VvYcYARh7E_jYs_DNBh4S9",
        "gps_coordinates": {
            "latitude": 49.0500695,
            "longitude": 2.134332
        },
        "title": "VITRINEMEDIA CENTRE LOGISTIQUE",
        "reviews_original": "Aucun avis",
        "type": "Service logistique",
        "phone": "01 49 21 00 61",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 8,
        "place_id": "6790879971422294672",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6790879971422294672&q=logistique+95",
        "lsig": "AB86z5VkYzamJBTOwQLU71-926Q7",
        "provider_id": "/g/1tk_j008",
        "gps_coordinates": {
            "latitude": 49.0270449,
            "longitude": 2.1171354
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//MF+Logistique,+4+Bis+Rue+de+Villiers+Adam,+95290+L'Isle-Adam/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65bf3cb62dbcd:0x5e3e0d5ab8f0d290?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIDRAA&hl=fr&gl=fr"
        },
        "title": "MF Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 34 69 11 11",
        "address": "L'Isle-Adam"
    },
    {
        "position": 9,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "description": "\"tres bien comme un logistique\"",
        "place_id": "9750147106307950644",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9750147106307950644&q=logistique+95",
        "lsig": "AB86z5UtCxa0mvnAFw39l7DMdcjy",
        "provider_id": "/g/1th48pxg",
        "gps_coordinates": {
            "latitude": 49.040560299999996,
            "longitude": 2.1470403
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Expo+Trans+Logistique+Internationale,+18+Rue+Paul+Appel,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f97db279453:0x874f7b227b49c834?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIChAA&hl=fr&gl=fr"
        },
        "title": "Expo Trans Logistique Internationale",
        "type": "Société de transport routier",
        "phone": "01 34 30 21 92",
        "address": "Saint-Ouen-l'Aumône"
    },
    {
        "position": 10,
        "rating": 2.9,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "17527300529535419825",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17527300529535419825&q=logistique+95",
        "lsig": "AB86z5Xw_SJKak7kc81N_fgsivdg",
        "provider_id": "/g/11bz07dl1_",
        "gps_coordinates": {
            "latitude": 49.0197588,
            "longitude": 2.4507499999999998
        },
        "links": {
            "website": "https://jep-sa.fr/",
            "directions": "https://www.google.fr/maps/dir//JEP+Eragny,+10%2F+Parc+d+activit%C3%A9+les+bellevues,+12+Av.+des+Bellevues,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65ffbfabdfd17:0xf33d7af7ce7985b1?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIDBAA&hl=fr&gl=fr"
        },
        "title": "JEP Eragny",
        "type": "Société de livraison",
        "phone": "01 69 79 36 50",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 16:30"
    },
    {
        "position": 11,
        "rating": 3.6,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "14645872328095114229",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14645872328095114229&q=logistique+95",
        "lsig": "AB86z5U1SdPETvQkuIvHQVUTOVvm",
        "provider_id": "/g/11c1rt6r4l",
        "gps_coordinates": {
            "latitude": 49.0249743,
            "longitude": 2.1103114
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Id+Logistique,+20+Av.+du+Fief,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fc839357367:0xcb40974905d523f5?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQICxAA&hl=fr&gl=fr"
        },
        "title": "Id Logistique",
        "type": "Service logistique",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 12,
        "rating": 3.3,
        "reviews_original": "(11)",
        "reviews": 11,
        "place_id": "5365893868214770189",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5365893868214770189&q=logistique+95",
        "lsig": "AB86z5X-CykjEiiZthLJbuJMLXO8",
        "provider_id": "/g/11j8lngh85",
        "gps_coordinates": {
            "latitude": 49.009257999999996,
            "longitude": 2.1650297
        },
        "links": {
            "website": "https://logfret.com/?lang=fr",
            "directions": "https://www.google.fr/maps/dir//Logfret,+ZAE+du+pont+de+la+br%C3%A8che,+8+Rue+Robert+Moinon,+95190+Goussainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6401f255e6089:0x4a777c0b1d635a0d?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQICRAA&hl=fr&gl=fr"
        },
        "title": "Logfret",
        "type": "Service logistique",
        "phone": "01 30 18 99 90",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 13,
        "rating": 4,
        "reviews_original": "(20)",
        "reviews": 20,
        "description": "\"Facile à trouver mais site un peu bizarre poste de sécurité plus accueil expédition pas trop compris le principe\"",
        "place_id": "11160102013271964700",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11160102013271964700&q=logistique+95",
        "lsig": "AB86z5XqE48aRA9ZohvQJ95kUzUz",
        "provider_id": "/g/11p5rqgfkg",
        "gps_coordinates": {
            "latitude": 48.9536164,
            "longitude": 2.2804591999999997
        },
        "links": {
            "website": "https://www.id-logistics.com/fr/groupe/",
            "directions": "https://www.google.fr/maps/dir//ID+LOGISTICS,+16+Av.+du+Gros+Ch%C3%AAne,+95610+%C3%89ragny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6f5989ca23fd3:0x9ae0a5a6fe327c1c?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQICBAA&hl=fr&gl=fr"
        },
        "title": "ID LOGISTICS",
        "type": "Entrepôt",
        "phone": "01 34 48 39 00",
        "address": "Éragny",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 14,
        "rating": 3.5,
        "reviews_original": "(6)",
        "reviews": 6,
        "place_id": "2870237131770941757",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2870237131770941757&q=logistique+95",
        "lsig": "AB86z5UqbxglmnRe-ACAhos9evih",
        "provider_id": "/g/11g_qpt7s5",
        "gps_coordinates": {
            "latitude": 49.0522208,
            "longitude": 2.0305028
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//OSL+Logistique,+22+Ave.+Paul+Langevin,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6608fd9337383:0x27d52176d457d13d?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIAhAA&hl=fr&gl=fr"
        },
        "title": "OSL Logistique",
        "type": "Société de transport routier",
        "phone": "01 30 40 95 95",
        "address": "Herblay-sur-Seine"
    },
    {
        "position": 15,
        "place_id": "6816564308057676644",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6816564308057676644&q=logistique+95",
        "lsig": "AB86z5VrTFQa5hOHPtUyq_-_DfrT",
        "provider_id": "/g/11tf2lbk3y",
        "gps_coordinates": {
            "latitude": 49.037990699999995,
            "longitude": 2.1428441
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SAF+LOGISTIQUE,+262+Rue+d'Epinay,+95100+Argenteuil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6671df0d413ed:0x5e994d1f5a625b64?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIEhAA&hl=fr&gl=fr"
        },
        "title": "SAF LOGISTIQUE",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "06 58 62 65 88",
        "address": "Argenteuil",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 16,
        "place_id": "12122864569676837541",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12122864569676837541&q=logistique+95",
        "lsig": "AB86z5UxE8zH4PiyF9tJ3-r2oGgu",
        "provider_id": "/g/1td29nb9",
        "gps_coordinates": {
            "latitude": 49.039428199999996,
            "longitude": 2.1493728
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistique+Moderne+Maitris%C3%A9e+de+Transit,+11+Rue+de+la+Grande+Ourse,+95000+Cergy/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6f49b45e1c087:0xa83d1118afc1b2a5?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIARAA&hl=fr&gl=fr"
        },
        "title": "Logistique Moderne Maitrisée de Transit",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 17 43 80",
        "address": "Cergy"
    },
    {
        "position": 17,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "12252321397512628102",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12252321397512628102&q=logistique+95",
        "lsig": "AB86z5V5xo1tpmLtjFlpMAu051Yy",
        "provider_id": "/g/11tjw4k9rc",
        "gps_coordinates": {
            "latitude": 49.027297399999995,
            "longitude": 2.1226742
        },
        "links": {
            "website": "https://www.sofrilog.com/",
            "directions": "https://www.google.fr/maps/dir//SOFRILOG+CERGY,+2+Rue+du+Palmer,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f4bc4c3ffef:0xaa08fd653ca86786?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIAxAA&hl=fr&gl=fr"
        },
        "title": "SOFRILOG CERGY",
        "type": "Service logistique",
        "phone": "06 31 38 84 53",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 18,
        "rating": 3.7,
        "reviews_original": "(93)",
        "reviews": 93,
        "place_id": "10810884117024290761",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10810884117024290761&q=logistique+95",
        "lsig": "AB86z5ViiJzA9BY7LrJaZPgGTl6V",
        "provider_id": "/g/1v3kgth_",
        "gps_coordinates": {
            "latitude": 49.035689500000004,
            "longitude": 2.0316806
        },
        "links": {
            "website": "https://geodis.com/?utm_campaign=Google%20My%20Business--LG--lpCON--ALL--ALL--CORP--NA--NA--NA--NA--NA--2021-09&utm_source=google&utm_medium=gmb&utm_content=St%20Ouen%20l'Aum%C3%B4ne",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Contract+Logistics+(Healthcare),+26+Av.+du+Fief,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fc98f01f86b:0x9607f9d36f2537c9?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIBRAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Contract Logistics (Healthcare)",
        "type": "Service logistique",
        "phone": "01 34 40 16 81",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 19,
        "rating": 4.7,
        "reviews_original": "(14)",
        "reviews": 14,
        "description": "\"Accueil très sympathiques et débrouillard je reviendrai bon courage à tous\"",
        "place_id": "2132289741918726998",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2132289741918726998&q=logistique+95",
        "lsig": "AB86z5WLBwVrImW8VWuY1JoGxRh8",
        "provider_id": "/g/11h64ftstg",
        "gps_coordinates": {
            "latitude": 49.027298,
            "longitude": 2.1226742
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Fosset,+12+Rue+de+la+Patelle,+Voie+de+l'Olivier,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fe4c179c889:0x1d976a3911466b56?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIBhAA&hl=fr&gl=fr"
        },
        "title": "Transports Fosset",
        "type": "Service logistique",
        "phone": "07 60 20 32 70",
        "address": "Herblay-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 20,
        "place_id": "2691561410895576163",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2691561410895576163&q=logistique+95",
        "lsig": "AB86z5VPJB6hj-fW3B113k4Q1wZm",
        "provider_id": "/g/11btmqfljw",
        "gps_coordinates": {
            "latitude": 49.03569,
            "longitude": 2.0316806
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transport+Logistique+Boulakdam,+18+Rue+de+Puiseux,+95490+Vaur%C3%A9al/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6f4a525e11e4b:0x255a58d7bb947c63?sa=X&ved=2ahUKEwjC6vKkvo6CAxWHOTQIHYU-BiYQ48ADegQIBBAA&hl=fr&gl=fr"
        },
        "title": "Transport Logistique Boulakdam",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "06 75 97 24 89",
        "address": "Vauréal"
    },
    {
        "position": 1,
        "rating": 4.1,
        "reviews_original": "(27)",
        "reviews": 27,
        "place_id": "17416697840273925934",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17416697840273925934&q=logistique+95&start=20",
        "lsig": "AB86z5XBP1_wcE-OnUZQUDAL1SPr",
        "provider_id": "/g/11h2djwsx1",
        "gps_coordinates": {
            "latitude": 49.0400236,
            "longitude": 2.1499334
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Soa+Logistics+Sas+(3M+FRANCE),+21+Av.+du+Fief,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb832155555:0xf1b48a6879d7272e?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Soa Logistics Sas (3M FRANCE)",
        "type": "Service logistique",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 2,
        "rating": 3.7,
        "reviews_original": "(481)",
        "reviews": 481,
        "description": "\"Bâtiment logistique, chargement rapide.\"",
        "place_id": "6616982022134536002",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=6616982022134536002&q=logistique+95&start=20",
        "lsig": "AB86z5V1bGk_zfPp8yIFS1zPGH6I",
        "provider_id": "/g/1w4vj70l",
        "gps_coordinates": {
            "latitude": 49.0658118,
            "longitude": 2.3265914999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//STEF+MONTSOULT,+Route+de,+Rue+du+Pont+de+Baillet,+95560+Montsoult/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6432519ea6c1f:0x5bd43e1742799742?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "STEF MONTSOULT",
        "type": "Service logistique",
        "phone": "01 34 08 31 80",
        "address": "Montsoult"
    },
    {
        "position": 3,
        "rating": 4.2,
        "reviews_original": "(75)",
        "reviews": 75,
        "place_id": "2433514640404434760",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2433514640404434760&q=logistique+95&start=20",
        "lsig": "AB86z5XkVc5ltqxAIBWVkIrZ-Vth",
        "provider_id": "/g/11gnc_7qr9",
        "gps_coordinates": {
            "latitude": 49.0383068,
            "longitude": 2.1466879999999997
        },
        "links": {
            "website": "https://www.veolog.fr/contactez-nous/",
            "directions": "https://www.google.fr/maps/dir//Veolog+Logistique+Saint+Ouen+l'Aum%C3%B4ne,+35+Av.+des+B%C3%A9thunes,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f9d01a7f9bd:0x21c594ac1104cf48?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Veolog Logistique Saint Ouen l'Aumône",
        "type": "Service logistique",
        "phone": "03 26 26 23 08",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 17:45"
    },
    {
        "position": 4,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "17989263959815178542",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17989263959815178542&q=logistique+95&start=20",
        "lsig": "AB86z5Wzl-pOawRt90BG8UuUhjVs",
        "provider_id": "/g/11j3222fr3",
        "gps_coordinates": {
            "latitude": 49.0483623,
            "longitude": 2.4965307
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//20+LOGISTIQUE,+Av.+de+la+Gare,+95380+Louvres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e63f24c637a315:0xf9a6b4429f85492e?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "20 LOGISTIQUE",
        "type": "Société de transport routier",
        "address": "Louvres"
    },
    {
        "position": 5,
        "rating": 3.9,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "13873740645254456519",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13873740645254456519&q=logistique+95&start=20",
        "lsig": "AB86z5WhErZHh9RN8Wk7tZwiGlJL",
        "provider_id": "/g/11mx67826h",
        "gps_coordinates": {
            "latitude": 49.0473338,
            "longitude": 2.4845751
        },
        "links": {
            "website": "https://ba-sh.com/fr/fr/",
            "directions": "https://www.google.fr/maps/dir//ba%26sh+Logistique,+11+AVENUE+DU+NOYER+%C3%80+LA+MALICE+-+ZAC+de+la+Butte+Aux+Bergers,+95380+Louvres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e63ff58f0c65eb:0xc0896d9c524a64c7?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "ba&sh Logistique",
        "type": "Service logistique",
        "phone": "01 49 47 60 21",
        "address": "Louvres",
        "hours": "Ouvert ⋅ Ferme à 21:00"
    },
    {
        "position": 6,
        "rating": 4.4,
        "reviews_original": "(21)",
        "reviews": 21,
        "place_id": "17890204479909119266",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17890204479909119266&q=logistique+95&start=20",
        "lsig": "AB86z5Xj50_0z38FIzpirIfpJv75",
        "provider_id": "/g/11f3c4f9ck",
        "gps_coordinates": {
            "latitude": 49.0351232,
            "longitude": 2.1438577999999997
        },
        "links": {
            "website": "http://www.stef.com/",
            "directions": "https://www.google.fr/maps/dir//Stef+Sld+St+Ouen+Auchan,+Av.+de+la+Haute+Borne,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fc5c7e1ed91:0xf846c6302815c522?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "Stef Sld St Ouen Auchan",
        "type": "Service logistique",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 7,
        "rating": 4.8,
        "reviews_original": "(75)",
        "reviews": 75,
        "place_id": "47260668084108937",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=47260668084108937&q=logistique+95&start=20",
        "lsig": "AB86z5WX8-n9fnbpIjefeMX0OAYq",
        "provider_id": "/g/11j7c8hr1c",
        "gps_coordinates": {
            "latitude": 48.950854199999995,
            "longitude": 2.264561
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "website": "https://www.global-logistique-services.fr/",
            "directions": "https://www.google.fr/maps/dir//Global+logistique+services,+68+Av.+de+Stalingrad,+95100+Argenteuil/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6679c5a8de681:0xa7e753c5003e89?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Global logistique services",
        "type": "Société de transport routier",
        "phone": "06 05 95 83 99",
        "address": "Argenteuil",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 8,
        "rating": 5,
        "reviews_original": "(28)",
        "reviews": 28,
        "description": "\"Intervention ce jour de prologistique.\"",
        "place_id": "11334082412777104339",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11334082412777104339&q=logistique+95&start=20",
        "lsig": "AB86z5VMBeZvCr8MS_v64Erouqde",
        "provider_id": "/g/11gfp2jsf3",
        "gps_coordinates": {
            "latitude": 49.057072000000005,
            "longitude": 2.1181748
        },
        "links": {
            "website": "https://prologistique.fr/",
            "directions": "https://www.google.fr/maps/dir//PROLOGISTIQUE+FRANCE,+17+Rue+d'Epluches,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e60e5f32b77a21:0x9d4abfe76494e3d3?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "PROLOGISTIQUE FRANCE",
        "type": "Services de déménagement et de stockage",
        "phone": "06 58 03 84 74",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 9,
        "rating": 3.9,
        "reviews_original": "(84)",
        "reviews": 84,
        "description": "\"Accueil sympa chargement rapide\"",
        "place_id": "5094747244584701154",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5094747244584701154&q=logistique+95&start=20",
        "lsig": "AB86z5V4Nyv8Z8iEOSEiteIv9YVf",
        "provider_id": "/g/1td600g8",
        "gps_coordinates": {
            "latitude": 49.0252196,
            "longitude": 2.4508247
        },
        "links": {
            "website": "https://www.dachser.fr/fr/",
            "directions": "https://www.google.fr/maps/dir//DACHSER+Logistique,+Av.+des+Fr%C3%A8res+Lumi%C3%A8re,+95190+Goussainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e64019ba59ef01:0x46b42da035df0ce2?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "DACHSER Logistique",
        "type": "Service logistique",
        "phone": "01 39 94 65 84",
        "address": "Goussainville",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 10,
        "rating": 4.3,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "5155136407235586686",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5155136407235586686&q=logistique+95&start=20",
        "lsig": "AB86z5U4ejozA7027v2_zNY7CKJe",
        "provider_id": "/g/11fy4jq6ws",
        "gps_coordinates": {
            "latitude": 49.0294551,
            "longitude": 2.1916943
        },
        "links": {
            "website": "http://www.gt-logistics.fr/",
            "directions": "https://www.google.fr/maps/dir//GT+Logistics,+57+Rue+Condorcet,+95150+Taverny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65e050b34c13f:0x478ab93fd1f5ea7e?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "GT Logistics",
        "type": "Service logistique",
        "address": "Taverny"
    },
    {
        "position": 11,
        "rating": 3.5,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "16838106719600024925",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16838106719600024925&q=logistique+95&start=20",
        "lsig": "AB86z5V7iemMRvIYFHdddvX2ttHi",
        "provider_id": "/g/11hyl5lfp7",
        "gps_coordinates": {
            "latitude": 49.019726299999995,
            "longitude": 2.4486417
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Telima+Logistique,+12+Rue+Robert+Moinon,+95190+Goussainville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6401f41844e4b:0xe9acf8d96fe09d5d?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Telima Logistique",
        "type": "Service logistique",
        "address": "Goussainville"
    },
    {
        "position": 12,
        "rating": 4.2,
        "reviews_original": "(47)",
        "reviews": 47,
        "place_id": "7905814196470163418",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7905814196470163418&q=logistique+95&start=20",
        "lsig": "AB86z5WRh-DuHD8M72cvIq92TGoN",
        "provider_id": "/g/11b6dhk0vj",
        "gps_coordinates": {
            "latitude": 49.009607599999995,
            "longitude": 2.1644441
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Pantos+Logistics+France,+22+Ave.+Paul+Langevin,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6608fd9337383:0x6db7181ff8d827da?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Pantos Logistics France",
        "type": "Service logistique",
        "phone": "01 75 68 02 95",
        "address": "Herblay-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 13,
        "rating": 4.1,
        "reviews_original": "(87)",
        "reviews": 87,
        "description": "\"Plate-forme logistique: énorme surfaces de stockage\"",
        "place_id": "4208175319615266776",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=4208175319615266776&q=logistique+95&start=20",
        "lsig": "AB86z5U9fM2Cmri--g4-bli67piG",
        "provider_id": "/g/1vzv2zwn",
        "gps_coordinates": {
            "latitude": 49.0366283,
            "longitude": 2.150114
        },
        "links": {
            "website": "http://www.staci.com/",
            "directions": "https://www.google.fr/maps/dir//Staci+3,+ZAC+des+B%C3%A9thunes,+39+Av.+des+B%C3%A9thunes,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fcec9baf3f5:0x3a667128463bdfd8?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Staci 3",
        "type": "Service logistique",
        "phone": "01 34 40 29 00",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 14,
        "rating": 5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "8812214908293337391",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8812214908293337391&q=logistique+95&start=20",
        "lsig": "AB86z5X2E81CD2sn5fPEA9AcZI--",
        "provider_id": "/g/11lh4wzvmb",
        "gps_coordinates": {
            "latitude": 49.0287994,
            "longitude": 2.1226593
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//WEELOG,+8+Rue+de+la+Patelle+Cellule+307+308,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65ff92e3def1d:0x7a4b46c51d39d12f?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "WEELOG",
        "type": "Service logistique",
        "address": "Herblay-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 15,
        "rating": 4.5,
        "reviews_original": "(62)",
        "reviews": 62,
        "description": "\"Société sérieuse et efficace\"",
        "place_id": "8092638676372213568",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8092638676372213568&q=logistique+95&start=20",
        "lsig": "AB86z5WaZAoA2rGTD0EOLw6st6bG",
        "provider_id": "/g/1vgqcd37",
        "gps_coordinates": {
            "latitude": 49.040619899999996,
            "longitude": 2.1446414
        },
        "links": {
            "website": "http://www.mondial-express.fr/",
            "directions": "https://www.google.fr/maps/dir//Mondial+Express,+6+Rue+du+Rapporteur,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb8894828bb:0x704ed3ffe0c0cf40?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "Mondial Express",
        "type": "Service logistique",
        "phone": "01 34 40 15 15",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 16,
        "rating": 1,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "11278292490049580169",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11278292490049580169&q=logistique+95&start=20",
        "lsig": "AB86z5Xb0gBlLzTTztxA7yprc6PR",
        "provider_id": "/g/11s4ch9sk5",
        "gps_coordinates": {
            "latitude": 48.985308599999996,
            "longitude": 2.2276374999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//O+Transport+et+Logistique,+15+Bd+Maurice+Berteaux,+95130+Franconville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x20891beb7fd83661:0x9c848b43c65c6c89?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "O Transport et Logistique",
        "type": "Service de livraison",
        "phone": "06 65 12 48 00",
        "address": "Franconville"
    },
    {
        "position": 17,
        "place_id": "16491001732041100799",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=16491001732041100799&q=logistique+95&start=20",
        "lsig": "AB86z5X5rcAQIkcmj5FkpHgQsxSQ",
        "provider_id": "/g/11nckfspyn",
        "gps_coordinates": {
            "latitude": 49.046865,
            "longitude": 2.1407986
        },
        "links": {
            "website": "https://transdistrib.business.site/?utm_source=gmb&utm_medium=referral",
            "directions": "https://www.google.fr/maps/dir//Trans+distrib,+24+Av.+de+l'%C3%8Ele+de+France,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65dea3c7493e5:0xe4dbceb3c4a94dff?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Trans distrib",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 84 60 09 50",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 21:30"
    },
    {
        "position": 18,
        "rating": 4.8,
        "reviews_original": "(8)",
        "reviews": 8,
        "description": "\"Un professionnel des logistiques\"",
        "place_id": "10321660093922787682",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10321660093922787682&q=logistique+95&start=20",
        "lsig": "AB86z5XTMhB_oD4_ACYw0YsJwlh2",
        "provider_id": "/g/11fjs9l_13",
        "gps_coordinates": {
            "latitude": 49.0087027,
            "longitude": 2.1659927
        },
        "links": {
            "website": "http://www.mylog.fr/",
            "directions": "https://www.google.fr/maps/dir//MYLOG,+22+Ave.+Paul+Langevin,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6618dd747645d:0x8f3de72b3e97c162?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "MYLOG",
        "type": "Service logistique",
        "phone": "01 39 60 29 35",
        "address": "Herblay-sur-Seine",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 19,
        "rating": 3.2,
        "reviews_original": "(335)",
        "reviews": 335,
        "place_id": "18231826971487796019",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18231826971487796019&q=logistique+95&start=20",
        "lsig": "AB86z5VnfGTh__oCTKZEQyw-hXGu",
        "provider_id": "/g/1tdfg_fz",
        "gps_coordinates": {
            "latitude": 48.9909335,
            "longitude": 2.4572754
        },
        "links": {
            "website": "https://www.heppner.fr/",
            "directions": "https://www.google.fr/maps/dir//Heppner+Gonesse,+3+Rue+d'Arsonval,+95500+Gonesse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66acf3e232643:0xfd047608c1ea7b33?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Heppner Gonesse",
        "type": "Service logistique",
        "phone": "01 30 11 66 66",
        "address": "Gonesse",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 20,
        "rating": 3.5,
        "reviews_original": "(26)",
        "reviews": 26,
        "description": "\"Bonne équipe et bon logisticien.\"",
        "place_id": "9331519933162514360",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9331519933162514360&q=logistique+95&start=20",
        "lsig": "AB86z5WA9nXujGIQM_aN4mKeNuRZ",
        "provider_id": "/g/11byx8lm9t",
        "gps_coordinates": {
            "latitude": 49.048445799999996,
            "longitude": 2.1470336999999997
        },
        "links": {
            "website": "http://www.staci.com/",
            "directions": "https://www.google.fr/maps/dir//STACI+1,+ZAC+des+B%C3%A9thunes,+36+Av.+du+Fond+de+Vaux,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb08438fd77:0x818037f04ea0e7b8?sa=X&ved=2ahUKEwi4pb2mvo6CAxX6rokEHe2ZD2Y4FBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "STACI 1",
        "type": "Service logistique",
        "phone": "01 34 40 29 00",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 1,
        "rating": 3.7,
        "reviews_original": "(33)",
        "reviews": 33,
        "place_id": "12287510810279045327",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12287510810279045327&q=logistique+95&start=40",
        "lsig": "AB86z5V7ao-lVTIbzYg3PtgIU2Os",
        "provider_id": "/g/1hc193btx",
        "gps_coordinates": {
            "latitude": 48.9891283,
            "longitude": 2.5187969999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Parinord+Logistic+Et+Distribution,+400+Rue+de+la+Belle+%C3%89toile,+95700+Roissy-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615a13f2e898f:0xaa8601fadc7468cf?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Parinord Logistic Et Distribution",
        "type": "Société de transport routier",
        "phone": "01 49 38 95 95",
        "address": "Roissy-en-France"
    },
    {
        "position": 2,
        "rating": 3.1,
        "reviews_original": "(34)",
        "reviews": 34,
        "place_id": "15693784771087777596",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15693784771087777596&q=logistique+95&start=40",
        "lsig": "AB86z5U4m4Xdd7eP__hfiQxo9-JL",
        "provider_id": "/g/11c2092ynt",
        "gps_coordinates": {
            "latitude": 49.0383068,
            "longitude": 2.1466879999999997
        },
        "links": {
            "website": "https://agence.dimotrans.com/757906-dimotrans-group-logistique-btob?utm_source=gmb",
            "directions": "https://www.google.fr/maps/dir//DIMOTRANS+Group+Saint+Ouen+l'Aum%C3%B4ne+-+Logistique+BtoB,+35-37+Av.+des+B%C3%A9thunes,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fc8d62fe459:0xd9cb86199e1f3f3c?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "DIMOTRANS Group Saint Ouen l'Aumône - Logistique BtoB",
        "type": "Service de transport",
        "phone": "01 84 24 09 95",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 3,
        "rating": 3.8,
        "reviews_original": "(100)",
        "reviews": 100,
        "description": "\"Déchargement éclair,5 mn à quai pour 10 palettes et papier signé.\"",
        "place_id": "3770634938114859475",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3770634938114859475&q=logistique+95&start=40",
        "lsig": "AB86z5X4Uc2No9FNaZMu_5MVyai3",
        "provider_id": "/g/1tdjw9qw",
        "gps_coordinates": {
            "latitude": 49.041831699999996,
            "longitude": 2.1561876
        },
        "links": {
            "website": "http://eurodislog.com/",
            "directions": "https://www.google.fr/maps/dir//EURODISLOG,+50+Av.+du+Fond+de+Vaux,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb53feb49ad:0x3453fc7fa00361d3?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "EURODISLOG",
        "type": "Service logistique",
        "phone": "01 34 48 50 00",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 4,
        "rating": 3,
        "reviews_original": "(183)",
        "reviews": 183,
        "description": "\"Petit client de Geodis je suis satisfait de leurs services.\"",
        "place_id": "15053665328674492287",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15053665328674492287&q=logistique+95&start=40",
        "lsig": "AB86z5V0V_h-H2bdQASFv7e9IrVC",
        "provider_id": "/g/1yfprvxpj",
        "gps_coordinates": {
            "latitude": 49.048206,
            "longitude": 2.131822
        },
        "links": {
            "website": "https://geodis.com/fr/activite/distribution-et-express",
            "directions": "https://www.google.fr/maps/dir//GEODIS+%7C+Distribution+%26+Express,+3,+Rue+Des+Oziers,+Z.I.+du+Vert+Galant,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f8618486479:0xd0e95cdbd341cf7f?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "GEODIS | Distribution & Express",
        "type": "Service logistique",
        "phone": "0 892 05 28 28",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 18:45"
    },
    {
        "position": 5,
        "place_id": "18424288874842558765",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18424288874842558765&q=logistique+95&start=40",
        "lsig": "AB86z5ULzwXpY3jJi_jOxs4dcvBp",
        "provider_id": "/g/11btmqm2nd",
        "gps_coordinates": {
            "latitude": 48.9742099,
            "longitude": 2.4343163
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//SDV+Logistique+Internationale,+Rue+du+Pont+Yblon,+95500+Bonneuil-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b1d4130b8a5:0xffb0391d982c112d?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "SDV Logistique Internationale",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 30 11 52 96",
        "address": "Bonneuil-en-France"
    },
    {
        "position": 6,
        "place_id": "13004718232338485248",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13004718232338485248&q=logistique+95&start=40",
        "lsig": "AB86z5W_53TiqrFt_-OnZzcNvF1s",
        "provider_id": "/g/11g0tl4kt3",
        "gps_coordinates": {
            "latitude": 48.98978700000001,
            "longitude": 2.5176862
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//World+Line+Logistic,+385+Rue+de+la+Belle+%C3%89toile,+95700+Roissy-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e615a1242959d5:0xb47a0a549294d000?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "World Line Logistic",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "02 35 13 32 16",
        "address": "Roissy-en-France"
    },
    {
        "position": 7,
        "rating": 3.3,
        "reviews_original": "(21)",
        "reviews": 21,
        "place_id": "3508804397514793231",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3508804397514793231&q=logistique+95&start=40",
        "lsig": "AB86z5VWj00BC6SbawXaXOu2Mw7X",
        "provider_id": "/g/11hl9tmp79",
        "gps_coordinates": {
            "latitude": 49.024636099999995,
            "longitude": 2.1375804
        },
        "links": {
            "website": "http://www.francemedexpress.com/",
            "directions": "https://www.google.fr/maps/dir//FRANCE+MED+EXPRESS,+5+Chemin+de+la+basse,+Rue+de+la+Patelle,+95480+Pierrelaye/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f8f89e9a5c1:0x30b1c7025432a10f?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "FRANCE MED EXPRESS",
        "type": "Société de livraison",
        "phone": "01 30 27 44 20",
        "address": "Pierrelaye",
        "hours": "Ferme bientôt ⋅ 13:00"
    },
    {
        "position": 8,
        "rating": 4.3,
        "reviews_original": "(10)",
        "reviews": 10,
        "place_id": "7536662695625992686",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7536662695625992686&q=logistique+95&start=40",
        "lsig": "AB86z5VLctUCOUqn4pHAHujQFR-8",
        "provider_id": "/g/1v27ttdj",
        "gps_coordinates": {
            "latitude": 48.9798342,
            "longitude": 2.4589288
        },
        "links": {
            "website": "http://www.saltatrans.com/",
            "directions": "https://www.google.fr/maps/dir//Saltatrans,+9+Rue+Amp%C3%A8re,+95500+Gonesse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66ad300f97363:0x68979aca6cb9a9ee?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Saltatrans",
        "type": "Service logistique",
        "phone": "01 30 11 10 00",
        "address": "Gonesse",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 9,
        "place_id": "12990807777787550486",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12990807777787550486&q=logistique+95&start=40",
        "lsig": "AB86z5Ueu9vDZXYTMl_QkAv7HY1p",
        "provider_id": "/g/11h40_06y4",
        "gps_coordinates": {
            "latitude": 49.1079824,
            "longitude": 2.2212513
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Mf+Logistique,+100+Av.+Val%C3%A9ry+Giscard+d'Estaing,+95290+L'Isle-Adam/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65bf103998d4d:0xb4489ed87c689b16?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Mf Logistique",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "address": "L'Isle-Adam",
        "hours": "Fermé temporairement"
    },
    {
        "position": 10,
        "rating": 4,
        "reviews_original": "(69)",
        "reviews": 69,
        "description": "\"Et stricte pour les consignes de livraison\"",
        "place_id": "15381796540298594043",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15381796540298594043&q=logistique+95&start=40",
        "lsig": "AB86z5WQbgNMxULPhwxpw5QWm4xX",
        "provider_id": "/g/11clxmxrg6",
        "gps_coordinates": {
            "latitude": 49.0412726,
            "longitude": 2.1576994
        },
        "links": {
            "website": "http://www.staci.com/",
            "directions": "https://www.google.fr/maps/dir//STACI+5,+2+Av.+du+Fond+de+Vaux,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65e4a9bd4db4b:0xd5771e7507d486fb?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "STACI 5",
        "type": "Service logistique",
        "phone": "01 34 40 29 00",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 11,
        "place_id": "18415407564133404698",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18415407564133404698&q=logistique+95&start=40",
        "lsig": "AB86z5W7ZJ2rtwKSWRYPgCFRi8TO",
        "provider_id": "/g/1hc11m57_",
        "gps_coordinates": {
            "latitude": 49.0252353,
            "longitude": 2.1904124
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Flexcite+Transports+Specialises+Ets+95,+11+Rue+Constantin+Pecqueur,+95150+Taverny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65e035de57821:0xff90ab9c4e36901a?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Flexcite Transports Specialises Ets 95",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 77 02 01 88",
        "address": "Taverny"
    },
    {
        "position": 12,
        "place_id": "7660969616436882164",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=7660969616436882164&q=logistique+95&start=40",
        "lsig": "AB86z5VePhTPtuIUa2fbj1fCroyK",
        "provider_id": "/g/1tfxf_46",
        "gps_coordinates": {
            "latitude": 49.019074499999995,
            "longitude": 2.1785126999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+Merysiens,+21+Rue+Denis+Papin,+95250+Beauchamp/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e660a04167462f:0x6a513b46cec7eaf4?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgLEAA&hl=fr&gl=fr"
        },
        "title": "Transports Merysiens",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 34 18 09 90",
        "address": "Beauchamp"
    },
    {
        "position": 13,
        "rating": 3.6,
        "reviews_original": "(56)",
        "reviews": 56,
        "place_id": "11519297683749754657",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11519297683749754657&q=logistique+95&start=40",
        "lsig": "AB86z5UW7_5lLpFTpJvaADcDUAkT",
        "provider_id": "/g/1tdw2scp",
        "gps_coordinates": {
            "latitude": 49.0540658,
            "longitude": 2.1418383
        },
        "links": {
            "website": "http://www.staci.com/",
            "directions": "https://www.google.fr/maps/dir//Staci+4,+ZI+du+Vert+Galant,+5%2F7+Av.+des+Gros+Chevaux,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fa5ce25ff4f:0x9fdcc43625e25721?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Staci 4",
        "type": "Service logistique",
        "phone": "01 34 40 29 00",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 14,
        "place_id": "1716334211942774949",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1716334211942774949&q=logistique+95&start=40",
        "lsig": "AB86z5XY1nRROpCBkEfIszFZ9sZg",
        "provider_id": "/g/11rfp_8zzt",
        "gps_coordinates": {
            "latitude": 49.0467996,
            "longitude": 2.1294641
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Plateforme+logistique+d%C3%A9partementale+-+sapeurs+pompiers+du+Val+d'Oise,+4+Rue+des+Oziers,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fe5a13a445d:0x17d1a4df4ab2f8a5?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "Plateforme logistique départementale - sapeurs pompiers du Val d'Oise",
        "reviews_original": "Aucun avis",
        "type": "Administration",
        "address": "Saint-Ouen-l'Aumône"
    },
    {
        "position": 15,
        "rating": 4.2,
        "reviews_original": "(26)",
        "reviews": 26,
        "place_id": "18304272317917194056",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18304272317917194056&q=logistique+95&start=40",
        "lsig": "AB86z5VCZXLXyeD97Q3pf7gR2I_y",
        "provider_id": "/g/11c5_p667k",
        "gps_coordinates": {
            "latitude": 49.036057199999995,
            "longitude": 2.1516273
        },
        "links": {
            "website": "http://www.staci.com/",
            "directions": "https://www.google.fr/maps/dir//STACI+6+-+LOGIMAIL,+39+Av.+des+B%C3%A9thunes,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fcea8f0762b:0xfe05d6b165786748?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "STACI 6 - LOGIMAIL",
        "type": "Service logistique",
        "phone": "01 34 40 29 00",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 16,
        "rating": 3.6,
        "reviews_original": "(17)",
        "reviews": 17,
        "place_id": "2305965078812284193",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2305965078812284193&q=logistique+95&start=40",
        "lsig": "AB86z5UHS7UTmGNV7bKZjJL9Hc-g",
        "provider_id": "/g/11c5zx8y4h",
        "gps_coordinates": {
            "latitude": 49.0240985,
            "longitude": 2.1378515
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Dachser,+D14,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fd9316c80bb:0x20006f058b0fd521?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "Dachser",
        "type": "Société de transport routier",
        "phone": "01 34 40 16 10",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 17,
        "rating": 5,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "17103994562884991069",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17103994562884991069&q=logistique+95&start=40",
        "lsig": "AB86z5UTBNO8YQVs-4RTmjZOXR7e",
        "provider_id": "/g/11g0tq50d3",
        "gps_coordinates": {
            "latitude": 49.0432803,
            "longitude": 2.1422852
        },
        "links": {
            "website": "http://www.denyltransport.fr/",
            "directions": "https://www.google.fr/maps/dir//D%C3%A9nyl+Transport,+Parc+des+B%C3%A9thunes,+11+Rue+du+Bois+du+Pont,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb426c91137:0xed5d986f20f8f85d?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "Dényl Transport",
        "type": "Société de transport international de marchandises",
        "phone": "01 75 72 04 60",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 18,
        "rating": 4.2,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "17455582946880679375",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=17455582946880679375&q=logistique+95&start=40",
        "lsig": "AB86z5XujUIsBZn6oBWyZwvzN-de",
        "provider_id": "/g/11b6d93rch",
        "gps_coordinates": {
            "latitude": 49.0282322,
            "longitude": 2.3435829
        },
        "links": {
            "website": "http://www.ibdiffusion.fr/",
            "directions": "https://www.google.fr/maps/dir//I.B+DIFFUSION+SAS,+49+Av.+de+l'Europe,+95330+Domont/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e64264db9a0c55:0xf23eb034e0306dcf?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "I.B DIFFUSION SAS",
        "type": "Service logistique",
        "phone": "01 30 11 17 75",
        "address": "Domont",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 19,
        "rating": 3.4,
        "reviews_original": "(24)",
        "reviews": 24,
        "place_id": "14251310575318774707",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=14251310575318774707&q=logistique+95&start=40",
        "lsig": "AB86z5XMW5NWNZ0ir5q3kbihzCCH",
        "provider_id": "/g/11b6d2vzjf",
        "gps_coordinates": {
            "latitude": 49.02223,
            "longitude": 2.1553162
        },
        "links": {
            "website": "http://www.fr.rhenus.com/",
            "directions": "https://www.google.fr/maps/dir//Rhenus+Logistics+France,+13+Rue+Georges+Boucher,+95480+Pierrelaye/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fd54cc79d35:0xc5c6d37629a4b3b3?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Rhenus Logistics France",
        "type": "Service logistique",
        "address": "Pierrelaye",
        "hours": "Ouvert ⋅ Ferme à 05:00 mer."
    },
    {
        "position": 20,
        "rating": 3.8,
        "reviews_original": "(40)",
        "reviews": 40,
        "place_id": "8642885930237690374",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=8642885930237690374&q=logistique+95&start=40",
        "lsig": "AB86z5VsZKKGuE_JKWK3erBMIoyl",
        "provider_id": "/g/11j7kb2dml",
        "gps_coordinates": {
            "latitude": 49.08520850000001,
            "longitude": 2.5212262
        },
        "links": {
            "website": "https://www.urban-group.com/",
            "directions": "https://www.google.fr/maps/dir//Urban+Logistique,+7+Rue+Eug%C3%A8ne+Pottier,+95670+Marly-la-ville/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e63fd4070f85c9:0x77f1b2f62a0a0206?sa=X&ved=2ahUKEwjZjsGnvo6CAxV1lYkEHchbAuo4KBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Urban Logistique",
        "type": "Service logistique",
        "address": "Marly-la-ville",
        "hours": "Ouvert ⋅ Ferme à 16:00"
    },
    {
        "position": 1,
        "place_id": "12627214288236643966",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12627214288236643966&q=logistique+95&start=60",
        "lsig": "AB86z5VPTT3UYOABbk3ILis6oRlp",
        "provider_id": "/g/11c6cczltd",
        "gps_coordinates": {
            "latitude": 49.004486899999996,
            "longitude": 2.1690465999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logimed+95,+5+Rue+Lavoisier,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66093c04ebd5d:0xaf3ce07e4915067e?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgFEAA&hl=fr&gl=fr"
        },
        "title": "Logimed 95",
        "reviews_original": "Aucun avis",
        "type": "Déménageur",
        "phone": "01 34 18 89 08",
        "address": "Herblay-sur-Seine",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 2,
        "rating": 3.9,
        "reviews_original": "(59)",
        "reviews": 59,
        "place_id": "13124132585877951715",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13124132585877951715&q=logistique+95&start=60",
        "lsig": "AB86z5Uq-18qK7VS4mRVNmQjSjsq",
        "provider_id": "/g/11btm7q1jm",
        "gps_coordinates": {
            "latitude": 48.9817779,
            "longitude": 2.5061896999999997
        },
        "links": {
            "website": "https://www.aac-globe-express.com/",
            "directions": "https://www.google.fr/maps/dir//Globe+Express+%2F+AKACIA,+150+Rue+de+la+Belle+%C3%89toile,+95700+Roissy-en-France/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e61505b137389b:0xb622490d5e6254e3?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgVEAA&hl=fr&gl=fr"
        },
        "title": "Globe Express / AKACIA",
        "type": "Service logistique",
        "phone": "01 34 64 56 32",
        "address": "Roissy-en-France",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 3,
        "rating": 2.8,
        "reviews_original": "(11)",
        "reviews": 11,
        "place_id": "15585659156362421053",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15585659156362421053&q=logistique+95&start=60",
        "lsig": "AB86z5X8wnDDYt_czAKPs6rQtRj3",
        "provider_id": "/g/1vv2rk7g",
        "gps_coordinates": {
            "latitude": 49.0426942,
            "longitude": 2.4896959
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transporteo+International,+1+Avenue+du,+Rue+du+Noyer+%C3%A0+la+Malice,+95380+Louvres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66c4a3638dabb:0xd84b626d254be33d?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgGEAA&hl=fr&gl=fr"
        },
        "title": "Transporteo International",
        "type": "Service logistique",
        "phone": "01 41 83 69 40",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 4,
        "rating": 3.8,
        "reviews_original": "(64)",
        "reviews": 64,
        "place_id": "9814910793291438189",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=9814910793291438189&q=logistique+95&start=60",
        "lsig": "AB86z5U20ZHfGZ-qsHxULD_AOvAY",
        "provider_id": "/g/1tg39dgp",
        "gps_coordinates": {
            "latitude": 49.037830299999996,
            "longitude": 2.1537919
        },
        "links": {
            "website": "https://www.heppner-group.com/",
            "directions": "https://www.google.fr/maps/dir//Heppner+Saint+Ouen,+32+Av.+du+Fief,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb6cdedf387:0x8835915d6848986d?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgTEAA&hl=fr&gl=fr"
        },
        "title": "Heppner Saint Ouen",
        "type": "Société de transport routier",
        "address": "Saint-Ouen-l'Aumône"
    },
    {
        "position": 5,
        "rating": 4,
        "reviews_original": "(14)",
        "reviews": 14,
        "place_id": "716260379203322440",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=716260379203322440&q=logistique+95&start=60",
        "lsig": "AB86z5XIzsgumzAIHcrCYQjwxYLA",
        "provider_id": "/g/1tfpz4fp",
        "gps_coordinates": {
            "latitude": 49.0063318,
            "longitude": 2.1675014999999997
        },
        "links": {
            "website": "https://alcaran.com/",
            "directions": "https://www.google.fr/maps/dir//ALCARAN,+15-17+Ave.+Paul+Langevin,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66f1d55b0660f:0x9f0ab051d19c248?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgSEAA&hl=fr&gl=fr"
        },
        "title": "ALCARAN",
        "type": "Service logistique",
        "phone": "01 49 48 29 29",
        "address": "Herblay-sur-Seine",
        "hours": "Ouvre bientôt ⋅ 13:00"
    },
    {
        "position": 6,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "13308963324061340566",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=13308963324061340566&q=logistique+95&start=60",
        "lsig": "AB86z5Wh7XHPUOfVNuiWBZByGiaa",
        "provider_id": "/g/11qpwnhhkf",
        "gps_coordinates": {
            "latitude": 49.040544999999995,
            "longitude": 2.1407276
        },
        "links": {
            "website": "https://www.sgs-trans.fr/",
            "directions": "https://www.google.fr/maps/dir//SGS+TRANS,+16+Rue+du+Compas,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fab30bb3073:0xb8b2efa11b60d396?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgREAA&hl=fr&gl=fr"
        },
        "title": "SGS TRANS",
        "type": "Service de transport",
        "phone": "01 61 03 17 98",
        "address": "Ouvert 24h/24"
    },
    {
        "position": 7,
        "rating": 3.8,
        "reviews_original": "(170)",
        "reviews": 170,
        "description": "\"Livreur Malek très agréable, serviable et professionnel.\"",
        "place_id": "1487051174003742533",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=1487051174003742533&q=logistique+95&start=60",
        "lsig": "AB86z5X9wUPgTslL6AI0WP21tN0x",
        "provider_id": "/g/1td4cvy3",
        "gps_coordinates": {
            "latitude": 49.0201225,
            "longitude": 2.1417002
        },
        "links": {
            "website": "https://www.dachser.fr/fr/",
            "directions": "https://www.google.fr/maps/dir//DACHSER,+280+Rte+de+Conflans,+95480+Pierrelaye/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66077001e572d:0x14a31129fd521745?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgQEAA&hl=fr&gl=fr"
        },
        "title": "DACHSER",
        "type": "Société de transport routier",
        "phone": "01 34 32 45 00",
        "address": "Pierrelaye",
        "hours": "Ouvert ⋅ Ferme à 17:30"
    },
    {
        "position": 8,
        "place_id": "12506513387301592486",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=12506513387301592486&q=logistique+95&start=60",
        "lsig": "AB86z5XaLyKPqQcTWaRCa4PsX0aV",
        "provider_id": "/g/11cnq514l9",
        "gps_coordinates": {
            "latitude": 49.006230900000006,
            "longitude": 2.2500877999999997
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Transports+ARCE,+3+Rue+Jules+Verne,+95320+Saint-Leu-la-For%C3%AAt/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e6679b85f7729b:0xad900fa9d4c75da6?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgPEAA&hl=fr&gl=fr"
        },
        "title": "Transports ARCE",
        "reviews_original": "Aucun avis",
        "type": "Société de transport international de marchandises",
        "phone": "01 34 17 16 37",
        "address": "Saint-Leu-la-Forêt"
    },
    {
        "position": 9,
        "rating": 3,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "650311026162758321",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=650311026162758321&q=logistique+95&start=60",
        "lsig": "AB86z5Wgf_SdBd8Bo8DafEIQKoZc",
        "provider_id": "/g/1thsf6v4",
        "gps_coordinates": {
            "latitude": 49.0274922,
            "longitude": 2.1868383
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Alpha+Express+International,+69+Av.+des+Ch%C3%A2taigniers,+95150+Taverny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65e1b102d3341:0x9065e6ecbf372b1?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgOEAA&hl=fr&gl=fr"
        },
        "title": "Alpha Express International",
        "type": "Société de transport routier",
        "phone": "01 39 32 90 10",
        "address": "Taverny"
    },
    {
        "position": 10,
        "rating": 4.5,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "2376253688338396670",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2376253688338396670&q=logistique+95&start=60",
        "lsig": "AB86z5XNGKelQD10h6IvSd-TWTT4",
        "provider_id": "/g/11nf_7jxvd",
        "gps_coordinates": {
            "latitude": 49.1541259,
            "longitude": 2.29088
        },
        "links": {
            "website": "http://www.prevote.com/",
            "directions": "https://www.google.fr/maps/dir//PREVOTE+GESTION+SERVICE,+1+Rte+de+Clermont,+95340+Persan/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65b5ae043b3c3:0x20fa2623bd9f35fe?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgNEAA&hl=fr&gl=fr"
        },
        "title": "PREVOTE GESTION SERVICE",
        "type": "Société de transport routier",
        "phone": "01 39 37 40 00",
        "address": "Persan",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 11,
        "rating": 3,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "3166015708425357126",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=3166015708425357126&q=logistique+95&start=60",
        "lsig": "AB86z5WLg5KzulsoxmSUx8UzRiCG",
        "provider_id": "/g/1tkkt4v3",
        "gps_coordinates": {
            "latitude": 49.0534979,
            "longitude": 2.1252609
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Stockage+du+Val+d'Oise,+22+Av.+du+Ch%C3%A2teau,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f9acffa7ce3:0x2beff28336000746?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgMEAA&hl=fr&gl=fr"
        },
        "title": "Stockage du Val d'Oise",
        "type": "Installation de stockage",
        "phone": "01 39 09 18 30",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 13:30"
    },
    {
        "position": 12,
        "rating": 4.3,
        "reviews_original": "(12)",
        "reviews": 12,
        "description": "\"Transporteur très compétent et réactif\"",
        "place_id": "10554699147424636789",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=10554699147424636789&q=logistique+95&start=60",
        "lsig": "AB86z5XHTkAGMoeWBHuogWnYxQxR",
        "provider_id": "/g/11btmq3kph",
        "gps_coordinates": {
            "latitude": 49.0501327,
            "longitude": 2.1347606
        },
        "links": {
            "website": "http://test.info-breizh.net/ATOLL4_WEB/FR/",
            "directions": "https://www.google.fr/maps/dir//Atoll,+18+Rue+Paul+Appel,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f97daf2b77b:0x9279d2f4115d1f75?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgKEAA&hl=fr&gl=fr"
        },
        "title": "Atoll",
        "type": "Service logistique",
        "phone": "01 34 48 84 44",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 13,
        "rating": 4.7,
        "reviews_original": "(12)",
        "reviews": 12,
        "place_id": "2750903319023093517",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2750903319023093517&q=logistique+95&start=60",
        "lsig": "AB86z5Um9Am8FZCAnnLe-99Je7f0",
        "provider_id": "/g/11b6dhk22x",
        "gps_coordinates": {
            "latitude": 49.05813,
            "longitude": 2.1391326
        },
        "links": {
            "website": "http://www.els.biz/",
            "directions": "https://www.google.fr/maps/dir//Expositions+Logistique+Services+ELS,+Rue+de+la+Garenne,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fa16ee1047b:0x262d2bfe65d0870d?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgJEAA&hl=fr&gl=fr"
        },
        "title": "Expositions Logistique Services ELS",
        "type": "Organisateur d'événements",
        "phone": "01 30 37 93 90",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Fermé ⋅ Ouvre à 14:00"
    },
    {
        "position": 14,
        "place_id": "5186770182252442275",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=5186770182252442275&q=logistique+95&start=60",
        "lsig": "AB86z5WSQl7i1aDYuEW_NOjKFtAh",
        "provider_id": "/g/11b6dpryr3",
        "gps_coordinates": {
            "latitude": 48.9477987,
            "longitude": 2.471723
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//Logistique+Holding,+2+Rue+Nicolas+Copernic,+93600+Aulnay-sous-Bois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e614b16bcf24f5:0x47fb1c0004beb2a3?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgBEAA&hl=fr&gl=fr"
        },
        "title": "Logistique Holding",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 49 39 68 54",
        "address": "Aulnay-sous-Bois"
    },
    {
        "position": 15,
        "rating": 2,
        "reviews_original": "(2)",
        "reviews": 2,
        "place_id": "15359978516250819426",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15359978516250819426&q=logistique+95&start=60",
        "lsig": "AB86z5WqsGTfD6DxwCp1RzA-STFy",
        "provider_id": "/g/11g0qcc1zp",
        "gps_coordinates": {
            "latitude": 48.9786717,
            "longitude": 2.4085335
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//A.I.C,+15+Bd+de+la+Muette,+95140+Garges-l%C3%A8s-Gonesse/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66b62b67f3f6b:0xd5299b1472c2fb62?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgUEAA&hl=fr&gl=fr"
        },
        "title": "A.I.C",
        "type": "Service logistique",
        "address": "Garges-lès-Gonesse"
    },
    {
        "position": 16,
        "rating": 3.7,
        "reviews_original": "(31)",
        "reviews": 31,
        "place_id": "2364983868460762938",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=2364983868460762938&q=logistique+95&start=60",
        "lsig": "AB86z5UoGXPQAdVGO2mNy_WFDb5Y",
        "provider_id": "/g/11fqxrc8r2",
        "gps_coordinates": {
            "latitude": 49.0590939,
            "longitude": 2.1420995
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//La+maison+du+whisky,+13+Rue+de+la+Garenne,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65f4d8c20d143:0x20d21c4c5322073a?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgEEAA&hl=fr&gl=fr"
        },
        "title": "La maison du whisky",
        "type": "Service logistique",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 17,
        "rating": 3,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "18426830347697903494",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18426830347697903494&q=logistique+95&start=60",
        "lsig": "AB86z5VHgCkTwipqvl9wKLDZc6k7",
        "provider_id": "/g/11ckvlbvdl",
        "gps_coordinates": {
            "latitude": 49.0452903,
            "longitude": 2.1415224
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//JDD+express,+8+Av.+de+l'%C3%8Ele+de+France,+95310+Saint-Ouen-l'Aum%C3%B4ne/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fb93e218ddd:0xffb940925aebd786?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgHEAA&hl=fr&gl=fr"
        },
        "title": "JDD express",
        "type": "Service logistique",
        "phone": "01 30 27 31 95",
        "address": "Saint-Ouen-l'Aumône",
        "hours": "Ouvert ⋅ Ferme à 18:00"
    },
    {
        "position": 18,
        "rating": 4.6,
        "reviews_original": "(5)",
        "reviews": 5,
        "place_id": "11691827303008271322",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=11691827303008271322&q=logistique+95&start=60",
        "lsig": "AB86z5X0aC_x0MVgRU_otlUTS_al",
        "provider_id": "/g/11gy0s_429",
        "gps_coordinates": {
            "latitude": 49.0310504,
            "longitude": 2.1970273
        },
        "service_options": {
            "services_sur_place": true,
            "rendez_vous_en_ligne": true
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//FY+TRANS,+62+Bd+Henri+Navier+lot.+4.1,+95150+Taverny/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66dd9604ecc57:0xa241b6fc73057bda?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgCEAA&hl=fr&gl=fr"
        },
        "title": "FY TRANS",
        "type": "Service logistique",
        "phone": "01 30 26 36 16",
        "address": "Taverny",
        "hours": "Ouvert ⋅ Ferme à 17:00"
    },
    {
        "position": 19,
        "place_id": "15490395609929099126",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=15490395609929099126&q=logistique+95&start=60",
        "lsig": "AB86z5UN4C-X3IQZrnQIHVKu8Fvr",
        "provider_id": "/g/1tdc4jjq",
        "gps_coordinates": {
            "latitude": 49.0277089,
            "longitude": 2.1235009
        },
        "links": {
            "directions": "https://www.google.fr/maps/dir//International+Fret+France,+12+Rue+de+la+Patelle,+95220+Herblay-sur-Seine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e65fe4ebb7510d:0xd6f8f0bc50182776?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgDEAA&hl=fr&gl=fr"
        },
        "title": "International Fret France",
        "reviews_original": "Aucun avis",
        "type": "Société de transport routier",
        "phone": "01 39 09 15 45",
        "address": "Herblay-sur-Seine"
    },
    {
        "position": 20,
        "rating": 5,
        "reviews_original": "(1)",
        "reviews": 1,
        "place_id": "18023433493994193173",
        "place_id_search": "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=fr&google_domain=google.fr&hl=fr&ludocid=18023433493994193173&q=logistique+95&start=60",
        "lsig": "AB86z5WJrucMp1MlvQSX1NDvUC1F",
        "provider_id": "/g/11t9jg9s73",
        "gps_coordinates": {
            "latitude": 49.0451144,
            "longitude": 2.4856355
        },
        "links": {
            "website": "https://www.jet-logistics.com/en/",
            "directions": "https://www.google.fr/maps/dir//Jet+International+Logistics+France,+9+Avenue+du+Noyer+%C3%A0+la+Malice+Zac+de+la+Butte+aux+Bergers,+95380+Louvres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e63f8a054b00c7:0xfa2019454266c115?sa=X&ved=2ahUKEwjhoOupvo6CAxU5g4kEHeZxB244PBDjwAN6BAgIEAA&hl=fr&gl=fr"
        },
        "title": "Jet International Logistics France",
        "type": "Service logistique",
        "address": "Louvres",
        "hours": "Fermé temporairement"
    }
]

const newArray = transporteur.map(obj => ({
    nom: obj.title,
    ville: obj.address,
    type:obj.type,
    phone:obj.phone
  }));
  

const jsonData = JSON.stringify(newArray, null, 2);

// Write to a JSON file
fs.writeFileSync('logistique.json', jsonData);

console.log('Data has been written to output.json');