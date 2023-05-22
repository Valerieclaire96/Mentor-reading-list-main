from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    nationality = db.Column(db.String(180), unique=False, nullable=False)
    hair_color = db.Column(db.String(180), unique=False, nullable=False)
    eye_color = db.Column(db.String(180), unique=False, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=False)
    notable_traits = db.Column(db.String(380), unique=False, nullable=False)
    bending_abilities = db.Column(db.String(180), unique=False, nullable=False)
    photo = db.Column(db.String(1580), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<Character {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "nationality": self.nationality,
            "hair_color": self.hair_color,
            "eye_color": self.eye_color,
            "age": self.age,
            "notable_traits": self.notable_traits,
            "photo": self.photo,
            "bending_abilities" : self.bending_abilities
            # do not serialize the password, its a security breach
        }

class Bending_Types(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nation_relation = db.Column(db.String(120), nullable=False)
    nation_relation_sub = db.Column(db.String(120), nullable=True)
    abilities = db.Column(db.String(180), nullable=False)
    notable_benders = db.Column(db.String(80), nullable=False)
    photo = db.Column(db.String(580), unique=False, nullable=False)

    def __repr__(self):
        return f'<Character {self.nation_relation_sub}>'

    def serialize(self):
        return {
            "id": self.id,
            "nation_relation": self.nation_relation,
            "nation_relation_sub": self.nation_relation_sub,
            "notable_benders": self.notable_benders,
            "photo": self.photo
            # do not serialize the password, its a security breach
        }

class Cities(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    nation = db.Column(db.String(120), nullable=True)
    leader = db.Column(db.String(180), unique=False, nullable=False)
    description = db.Column(db.String(580), unique=False, nullable=False)
    photo = db.Column(db.String(580), unique=False, nullable=False)

    def __repr__(self):
        return f'<Character {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "nation": self.nation,
            "leader": self.leader,
            "photo": self.photo,
            "description": self.descriptio
            # do not serialize the password, its a security breach
        }

class Furry_Friends(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    species = db.Column(db.String(120), unique=True, nullable=True)
    description = db.Column(db.String(580), unique=False, nullable=False)
    photo = db.Column(db.String(580), unique=False, nullable=False)

    def __repr__(self):
        return f'<Character {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "species": self.species,
            "description": self.description,
            "photo": self.photo,

            # do not serialize the password, its a security breach
        }

class Previous_Avatars(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    nation = db.Column(db.String(120), unique=True, nullable=True)
    hair_color = db.Column(db.String(180), unique=False, nullable=False)
    eye_color = db.Column(db.String(180), unique=False, nullable=False)
    age_at_death = db.Column(db.Integer, unique=False, nullable=False)
    notable_traits = db.Column(db.String(380), unique=False, nullable=False)
    photo = db.Column(db.String(580), unique=False, nullable=False)


    def __repr__(self):
        return f'<Character {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "nation": self.nation,
            "hair_color": self.hair_color,
            "eye_color": self.eye_color,
            "age_at_death": self.age_at_death,
            "notable_traits": self.notable_traits,
            "photo": self.photo,

            # do not serialize the password, its a security breach
        }