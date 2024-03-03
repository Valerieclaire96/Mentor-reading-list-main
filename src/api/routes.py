"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Character, Bending_Types,Cities, Furry_Friends, Previous_Avatars
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/character', methods=["POST"])
def add_character():
    request_body = request.get_json(force=True)
    name = request_body.get("name")
    nationality = request_body.get("nationality")
    hair_color = request_body.get("hair_color")
    eye_color = request_body.get("eye_color")
    age = request_body.get("age")
    notable_traits = request_body.get("notable_traits")
    photo = request_body.get("photo")

    return jsonify(request_body), 200

@api.route('/characters', methods=["GET"])
def get_characters():
    characters = Character.query.all()
    all_characters = list(map(lambda x: x.serialize(), characters))
    return jsonify(all_characters), 200

@api.route('/characters/<int:id>', methods=["GET"])
def get_character(id):
    character = Character.query.filter_by(id=id).first()
    return jsonify(character.serialize()), 200

@api.route('/bending_type', methods=["POST"])
def add_bending_types():
    request_body = request.get_json(force=True)
    name = request_body.get("name")
    nation_relation= request_body.get("nation_relation")
    nation_relation_sub= request_body.get("nation_relation_sub")
    notable_benders = request_body.get("notable_benders")
    photo = request_body.get("photo")

    return jsonify(request_body), 200

@api.route('/characters/<int:id>', methods=["DELETE"])
def get_character(id):
    character = Character.query.filter_by(id=id).first()
    db.session.delete(character)
    return jsonify(character.serialize(), "has been deleted), 200

@api.route('/bending_types', methods=["GET"])
def get_bending_types():
    bending_types = Bending_Types.query.all()
    all_bending_types = list(map(lambda x: x.serialize(), bending_types))
    return jsonify(all_bending_types), 200

@api.route('/bending_types/<int:id>', methods=["GET"])
def get_bending_type(id):
    bending_types = Bending_Types.query.filter_by(id=id).first()
    return jsonify(bending_types.serialize()), 200


@api.route('/city', methods=["POST"])
def add_cities():
    request_body = request.get_json(force=True)
    name = request_body.get("name")
    nation= request_body.get("nation")
    leader= request_body.get("leader")
    description = request_body.get("description")
    photo = request_body.get("photo")


    return jsonify(request_body), 200

@api.route('/cities', methods=["GET"])
def get_cities():
    cities = Cities.query.all()
    all_cities = list(map(lambda x: x.serialize(), cities))
    return jsonify(all_cities), 200

@api.route('/cities/<int:id>', methods=["GET"])
def get_city(id):
    cities = Cities.query.filter_by(id=id).first()
    return jsonify(cities.serialize()), 200


@api.route('/furry_friend', methods=["POST"])
def add_furry_friends():
    request_body = request.get_json(force=True)
    name = request_body.get("name")
    species= request_body.get("species")
    description = request_body.get("description")
    photo = request_body.get("photo")


    return jsonify(request_body), 200

@api.route('/furry_friends', methods=["GET"])
def get_furry_friends():
    furry_friends = Furry_Friends.query.all()
    all_furry_friends = list(map(lambda x: x.serialize(), furry_friends))
    return jsonify(all_furry_friends), 200

@api.route('/furry_friends/<int:id>', methods=["GET"])
def get_furry_friend(id):
    furry_friends = Furry_Friends.query.filter_by(id=id).first()
    return jsonify(furry_friends.serialize()), 200

@api.route('/previous_avatar', methods=["POST"])
def add_previous_avatars():
    request_body = request.get_json(force=True)
    name = request_body.get("name")
    nationality = request_body.get("nationality")
    hair_color = request_body.get("hair_color")
    eye_color = request_body.get("eye_color")
    age_at_death = request_body.get("age_at_death")
    notable_traits = request_body.get("notable_traits")
    photo = request_body.get("photo")

    return jsonify(request_body), 200

@api.route('/previous_avatars', methods=["GET"])
def get_previous_avatars():
    previous_avatars = Previous_Avatars.query.all()
    all_previous_avatars = list(map(lambda x: x.serialize(), previous_avatars))
    return jsonify(all_previous_avatars), 200

@api.route('/previous_avatars/<int:id>', methods=["GET"])
def get_previous_avatar(id):
    previous_avatars = Previous_Avatars.query.filter_by(id=id).first()
    return jsonify(previous_avatars.serialize()), 200
