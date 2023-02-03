class Tv:
    def __init__(self, tamanho):
        self._volume = 50
        self._canal = 1
        self._tamanho = tamanho
        self._ligada = False
    
    def aumentar_volume(self):
        if(self._volume <= 99):
            self._volume += 1
        else:
            self._volume = 99
    
    def diminuir_volume(self):
        if(self > 0 ):
            self._volume -= 1
        else:
            self._volume = 0

    def modificar_canal(self, canal):
        if(canal <= 1 or canal >= 99 ):
            raise ValueError('O canal deve estar entre 0 e 99')
        else:
            self._canal = canal
    
    def ligar_desligar(self):
        self._ligada = not self._ligada
