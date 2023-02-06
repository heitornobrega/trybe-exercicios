class Estatistica:
    _lista = []
    _media = []
    _soma = 0

    @classmethod
    def set_media(cls, lista: list):
        cls._lista = lista
        cls._soma = sum(lista) 
        cls._media = cls._soma / len(lista)
     

print(Estatistica._lista)
Estatistica.set_media([3,3,3,3,3,3,3])
print(Estatistica._media)