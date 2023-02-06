from abc import ABC, abstractclassmethod
from datetime import datetime

class ManipuladorDeLog(ABC):
    @abstractclassmethod
    def log(cls, msg):
        raise NotImplementedError

class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'a') as arquivo:
            print(msg, file=arquivo)

class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)

class Log():
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)
    
    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log("INFO", msg)         
