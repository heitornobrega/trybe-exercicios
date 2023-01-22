import json

# import random

with open("pokemons.json", "r") as file:
    pokemons = json.load(file)["results"]

# random_pokemon = random.choice(pokemons)["name"]

random_pokemon = "Bulbassauro"

guested_pokemon = input("Adivinhe o pokemon: ")

c = 0
tip = ""

while (guested_pokemon != random_pokemon) or (
    len(tip) - 1 == len(random_pokemon)
):
    tip += random_pokemon[c]
    print(f"Você errou, dica: {tip}")
    guested_pokemon = input("Tente novamente: ")
    c += 1

print("Parabéns! Você Conseguiu!")

if guested_pokemon != random_pokemon:
    print("Errou feio, errou rude.")
