import click
from api.models import db, User, Character, Bending_Types, Cities, Furry_Friends,Previous_Avatars

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

        ### Insert the code to populate others tables if needed

    @app.cli.command("populate-character-table")
    def generate_character_list():
            character_list = [
            {
                    "name":"Aang",
                    "nationality": "Air Nation",
                    "hair_color": "Bald",
                    "eye_color": "Grey",
                    "age": 14,
                    "notable_traits":"Fun-Loving, Goofy, and Compassionate",
                    "bending_abilities": "Water, Fire, Earth, Air",
                    "photo": "https://sportshub.cbsistatic.com/i/2022/02/18/8449731a-9cd3-4b95-9d71-8368829d0771/avatar-the-last-airbender.png",
            },
                {
                    "name":"Katara",
                    "nationality": "Southern Water Tribe",
                    "hair_color": "Brown",
                    "eye_color": "Blue",
                    "age": 12,
                    "notable_traits":"Caring, Protective, and Strong-Willed",
                    "bending_abilities": "Water",
                    "photo": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Katara.Avatar-The-Last-Airbender.webp"


                },
                {
                    "name":"Sokka",
                    "nationality": "Southern Water Tribe",
                    "hair_color": "Brown",
                    "eye_color": "Blue",
                    "age": 15,
                    "notable_traits":"Sarcastic, Resourceful, and Loyal",
                    "bending_abilities": "None",
                    "photo": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sokka.Avatar-The-Last-Airbender.webp"
                },
                {
                    "name":"Toph",
                    "nationality": "Earth Nation",
                    "hair_color": "Black",
                    "eye_color": "Cloudy Green",
                    "age": 12,
                    "notable_traits":"Tough, Independent, and views her blindess as a strength",
                    "bending_abilities": "Earth and Metal",
                    "photo": "https://m.media-amazon.com/images/M/MV5BZGE2ZmE0MjAtMWU0OS00M2U0LThiMzUtZDc0MjVkODllYTQyXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_FMjpg_UX1000_.jpg"
                },
                {
                    "name":"Gram Gram",
                    "nationality": "Southern Water Tribe",
                    "hair_color": "Grey",
                    "eye_color": "Blue",
                    "age": 80,
                    "notable_traits":"Wise, Understading, and King-hearted",
                    "bending_abilities": "None",
                    "photo": "https://i.redd.it/o0wq4tcb82651.jpg"
                },
                {
                    "name":"Zuko",
                    "nationality": "Fire Nation",
                    "hair_color": "Black",
                    "eye_color": "Brown",
                    "age": 16,
                    "notable_traits":"Hot-headed, Impulsive, and Looking to regain his honor",            
                    "bending_abilities": "Fire",
                    "photo": "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2022%2F05%2FScreen-Shot-2022-05-26-at-10.43.45-AM.jpg"
                },
                {
                    "name":"Iroh",
                    "nationality": "Fire Nation",
                    "hair_color": "Grey",
                    "eye_color": "Brown",
                    "age": 60,
                    "notable_traits":"Wise, Compassionate, and Lover of Tea",
                    "bending_abilities": "Fire",
                    "photo": "https://media.comicbook.com/2020/06/uncle-iroh-avatar-1223074.jpeg?auto=webp"

                },
                {
                    "name":"Azula",
                    "nationality": "Fire Nation",
                    "hair_color": "Black",
                    "eye_color": "Brown",
                    "age": 14,
                    "notable_traits":"Unhinged, Powerful, and Manpulative",
                    "bending_abilities": "Fire, Lightening",
                    "photo": "https://static.wixstatic.com/media/f0b58f_08e4963c9ac34b7b8eb223504387c28a~mv2.jpg/v1/fill/w_640,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0b58f_08e4963c9ac34b7b8eb223504387c28a~mv2.jpg"
                },
                {
                    "name":"Fire Lord Ozai",
                    "nationality": "Fire Nation",
                    "hair_color": "Black",
                    "eye_color": "Brown",
                    "age": 45,
                    "notable_traits":"Powerful, Uncaring, and Determined",
                    "bending_abilities": "Fire, Lightening",
                    "photo": "https://www.looper.com/img/gallery/the-surprising-actor-who-voices-firelord-ozai-in-avatar/l-intro-1633473525.jpg"
                },
                {
                    "name":"Suki",
                    "nationality": "Earth Nation",
                    "hair_color": "Brown",
                    "eye_color": "Green",
                    "age": 16,
                    "notable_traits":"Supportive, Strong, and a Leader",
                    "bending_abilities": "None",
                    "photo": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/suki-kyoshi-fire-header-e1612366908421.jpg",
                },
                {
                    "name":"Cabbage Merchant",
                    "nationality": "Earth Nation",
                    "hair_color": "Grey",
                    "eye_color": "Brown",
                    "age": 50,
                    "notable_traits":"Unlucky",
                    "bending_abilities": "None",
                    "photo": "https://compote.slate.com/images/8feec7a3-bb0f-42be-bfc7-257757840f9b.png?width=780&height=520&rect=899x599&offset=0x28"
                }
                ]
            for character in character_list:
                    new_character = Character(
                        name = character['name'],
                        nationality = character["nationality"],
                        hair_color = character["hair_color"],
                        eye_color = character["eye_color"],
                        age = character["age"],
                        notable_traits = character["notable_traits"],
                        bending_abilities = character["bending_abilities"],
                        photo = character['photo']
                    )
                    db.session.add(new_character)
                    db.session.commit()

    @app.cli.command("populate-bending-types-table")
    def generate_bending_types_list():
        bending_types_list = [
            {
                "nation_relation":"Fire",
                "nation_relation_sub": "",
                "abilities": "Fire benders can create fire at will from their hands, feet, and amoung the most skilled can even breathe fire.",
                "notable_benders": "Zuko, Iroh, and Azula",
                "photo": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/Zuko-Fire-bending.jpg"
            },
            {
                "nation_relation":"Fire",
                "nation_relation_sub": "Lightening",
                "abilities": "Some skilled benders are able to create lightening which is blue.",
                "notable_benders": "Azula and Oazi",
                "photo": "https://mythcreants.com/wp-content/uploads/2021/07/Lightning-e1627237200520.jpg"
            },
            {
                "nation_relation":"Air",
                "nation_relation_sub": "",
                "abilities": "Air benders are able to manipulate the air around them and with the help of a glider can even fly.",
                "notable_benders": "Aang",
                "photo": "https://superherojacked.b-cdn.net/wp-content/uploads/2020/02/Avatar-Workout-1-1024x819.jpg"
            },
            {
                "nation_relation":"Earth",
                "nation_relation_sub": "",
                "abilities": "Earth benders are able to move the ground under their feet to either build or fight.",
                "notable_benders": "Toph",
                "photo": "https://static.wikia.nocookie.net/avatar/images/0/0c/Toph_slides.png/revision/latest?cb=20140517113731"
            },
            {
                "nation_relation":"Earth",
                "nation_relation_sub": "Sand",
                "abilities": "Many Earth benders in deserts regions and learned to bend the sand.",
                "notable_benders": "N/A",
                "photo": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/Avatar-Sandbending.jpg"
            },
            {
                "nation_relation":"Earth",
                "nation_relation_sub": "Metal",
                "abilities": "A form of bending founded by Toph and allows her to bend metal.",
                "notable_benders": "Toph",
                "photo": "https://qph.cf2.quoracdn.net/main-qimg-8fd324ec60ed5d7a8e0f5da70fdae64e-lq"
            },
            {
                "nation_relation":"Earth",
                "nation_relation_sub": "Lava",
                "abilities": "Rumored about during the time of Aang's mission.",
                "notable_benders": "N/a",
                "photo": "https://external-preview.redd.it/DiltnRijkMemvDmVMSMYFQsaGp_AyvGexDdWXhQsmpQ.jpg?auto=webp&s=dac04ad7b46913310fbf030e33a0f17183f5e725"
            },
                {
                "nation_relation":"Water",
                "nation_relation_sub": "",
                "abilities": "Water benders are able to move water from nearby sources and can freeze water to ice and vice versa.",
                "notable_benders": "Katara",
                "photo": "https://m.media-amazon.com/images/M/MV5BM2ZjYTI5YmEtZmQxMy00YTcwLWJkMDMtZGVlMjg5ZDE5ZjE4XkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_.jpg"
            },
            {
                "nation_relation":"Water",
                "nation_relation_sub": "Blood",
                "abilities": "Skilled Water benders can manipulate the blood with in the bodies of others and animals. *only possible during a full moon.",
                "notable_benders": "Katara",
                "photo": "https://preview.redd.it/9zicw63771a51.jpg?auto=webp&s=342853c9a43ad46126c0183a434d8823900eb408"
            },
            ]
        for bending_type in bending_types_list:
                    new_bending_type = Bending_Types(
                        nation_relation = bending_type["nation_relation"],
                        nation_relation_sub = bending_type["nation_relation_sub"],
                        abilities = bending_type["abilities"],
                        notable_benders = bending_type["notable_benders"],
                        photo = bending_type['photo']
                    )
                    db.session.add(new_bending_type)
                    db.session.commit()
                    
                    
    @app.cli.command("populate-cities-table")
    def generate_cities_list():
        cities_list = [
            {
                "name": "Southern Air Temple",
                "nation": "Air Nation",
                "leader": "none",
                "description":"Home to Avatar Aang and sadly left in ruins by the fire nation",
                "photo":"https://i.redd.it/gkbik1bs3d551.jpg"
            },
            {
                "name": "Agna Qel'a",
                "nation": "Water Tribe",
                "leader": "Chief Arnook",
                "description":"The largest city in the water tribe. Located in the Northern Water Tribe",
                "photo": "https://img.wattpad.com/cover/243722160-256-k251960.jpg",
            },
            {
                "name": "Southern Water Tribe",
                "nation": "Water Tribe",
                "leader": "None",
                "description":"The Southen Water Tribe is composed of small villages, left without a leader due to the men leaving to fight in the war.",
                "photo":"https://i.pinimg.com/originals/13/33/78/1333784e16a284e2bf871a5b91856325.jpg"
            },
            {
                "name": "Ba Sing Se",
                "nation": "Earth Nation",
                "leader": "Earth King",
                "description":"Ba Sing Se is capital of the Earth Nation, and the name translates to impenetrable city.",
                "photo":"https://imgix.ranker.com/list_img_v2/4819/3064819/original/3064819"
            },
            {
                "name": "Kyoshi Island",
                "nation": "Earth Nation",
                "leader": "Oyaji",
                "description":"This small island was home to Avatar Kyoshi and is also known for it's elephant koi",
                "photo":"https://64.media.tumblr.com/3ab423cde2d3526736ec70e55b844eba/88d557d930392bf4-aa/s540x810/a4bcb8d1e58d75261a790d8adaf536166f33eed9.jpg"
            },
            {
                "name": "Ohamshu",
                "nation": "Earth Nation",
                "leader": "King Bumi",
                "description":"The second largest city in the Earth Nation.",
                "photo":"https://64.media.tumblr.com/9076886390dda7e48239d58e4b9ec810/34209b11d4917661-e7/s1280x1920/777310bb47dcbb34a28e4979b51f9a1148b2a537.png"
            },
            {
                "name": "Ember Island",
                "nation": "Fire Nation",
                "leader": "unknown",
                "description":"A resort town on the beaches of the fire nation outer islands.",
                "photo":"https://64.media.tumblr.com/01002ef7496286c15dbee7e76511440f/tumblr_n5l0ezdh7d1tt691go3_1280.jpg"
            },    
            {
                "name": "Fire Nation Capital",
                "nation": "Fire Nation",
                "leader": "Fire Lord Oazi",
                "description":"Located on Capital Island and home to the Fire Nation's royal family.",
                "photo":"https://i.redd.it/mqr12b0n9vw41.jpg"
            },
        ]
        for cities in cities_list:
                    new_cities = Cities(
                        name = cities['name'],
                        nation = cities["nation"],
                        leader = cities["leader"],
                        description = cities["description"],
                        photo = cities['photo']
                    )
                    db.session.add(new_cities)
                    db.session.commit()
                    

    @app.cli.command("populate-furry_friends-table")
    def generate_furry_friends_list():
        furry_friends_list = [
            {
                "name": "Appa",
                "species": "Sky Bison",
                "description": "Aang's long time companion and fellow Air bender",
                "photo":"https://i.redd.it/6o0sz49wyzp31.png"
            },
            {
                "name": "Momo",
                "species": "Lemur",
                "description": "Found by Aang at the Southern Air Temple and a total sweetie",
                "photo":"https://imgix.bustle.com/uploads/image/2020/12/29/dc2a8521-674e-44af-8fb8-243fc5c65a03-momo-avatar.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
            },
            {
                "name": "Bosco",
                "species": "Bear",
                "description": "The Earth King's compainion and just a bear",
                "photo":"https://preview.redd.it/where-did-kuei-get-bosco-only-wrong-answers-need-apply-v0-5106695iquia1.png?auto=webp&s=69a5471b31222cc3ebc153de5e46eb189d790f20"
            },
            {
                "name": "Flopsie",
                "species": "unknown",
                "description": "King Bumis companion",
                "photo":"https://i.redd.it/hj91lsez78451.png"
            },
        ]
        for furry_friends in furry_friends_list:
                    new_furry_friends = Furry_Friends(
                        name = furry_friends['name'],
                        species = furry_friends["species"],
                        description = furry_friends["description"],
                        photo = furry_friends['photo']
                    )
                    db.session.add(new_furry_friends)
                    db.session.commit()
                    

    @app.cli.command("populate-previous_avatars-table")
    def generate_previous_avatars_list():
        previous_avatars_list = [
            {
                "name": "Roku",
                "nation": "Fire Nation",
                "hair_color": "White",
                "eye_color": "Brown",
                "age_at_death": 70,
                "notable_traits":"Loyal",
                "photo":"https://comicvine.gamespot.com/a/uploads/scale_medium/1/10390/334974-141642-avatar-roku.jpg",
            },
            {
                "name": "Kyoshi",
                "nation": "Earth Nation",
                "hair_color": "Black",
                "eye_color": "Green",
                "age_at_death": 230,
                "notable_traits":"Strong",
                "photo":"https://www.pride.com/media-library/kyoshi.jpg?id=33487244&width=980&quality=85",
            },
            {
                "name": "Kuruk",
                "nation": "Water Nation",
                "hair_color": "Brown",
                "eye_color": "Blue",
                "age_at_death": 33,
                "notable_traits":"A Romantic",
                "photo":"https://imgix.ranker.com/user_node_img/50111/1002214662/original/1002214662-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
            },
            {
                "name": "Yangchen",
                "nation": "Air Nation",
                "hair_color": "Brown",
                "eye_color": "Grey",
                "age_at_death": 155,
                "notable_traits":"Smart",
                "photo":"https://www.latercera.com/resizer/pzc9lB5-cQq54CXbHXMH7PJUX4A=/arc-anglerfish-arc2-prod-copesa/public/XANVBM4UOZEOFMUEQFMOFB2OXY.jpg",
            },
        ]
        for previous_avatars in previous_avatars_list:
                    new_previous_avatar = Previous_Avatars(
                        name = previous_avatars['name'],
                        nation = previous_avatars["nation"],
                        hair_color = previous_avatars["hair_color"],
                        eye_color = previous_avatars["eye_color"],
                        age_at_death = previous_avatars["age_at_death"],
                        notable_traits = previous_avatars["notable_traits"],
                        photo = previous_avatars['photo']
                    )
                    db.session.add(new_previous_avatar)
                    db.session.commit()