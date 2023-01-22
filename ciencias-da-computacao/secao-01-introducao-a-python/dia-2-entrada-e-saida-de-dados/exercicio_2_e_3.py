import random
with open('random_words.txt', 'r') as file:
    palavras = file.read()

lista_de_palavras = palavras.split()

palavra_escolhida = random.choice(lista_de_palavras)

scrambled_word = "".join(random.sample(palavra_escolhida, len(palavra_escolhida)))

print(f"A palavra embaralhada é: {scrambled_word}")

resposta = input("Você sabe que palavra é essa? Você tem 3 chances! Digite aqui a sua resposta:")

c = 1

while (resposta != palavra_escolhida) and (c != 3):
    c += 1
    resposta = input(f"Errou! Essa é a tentativa {c}/3. Tente novamente: ")

if(resposta == palavra_escolhida):
    print("Parabéns, você acertou!")
else:
    print("Você perdeu!")
