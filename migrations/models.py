from django.db import models
from django.db.models import F
from django.contrib.auth.models import User

# Create your models here.
class Comentario(models.Model):
    conteudoComentario = models.CharField(max_length=255)
    autor = models.ForeignKey(User , on_delete=models.PROTECT , related_name="comentarios" )
    def __str__(self):
        return self.conteudoComentario 

class Categoria(models.Model):
    descricao = models.CharField(max_length=255)

    def __str__(self):
        return self.descricao

class Editora(models.Model):
    nome = models.CharField(max_length=255)
    site = models.URLField()

    def __str__(self):
        return self.nome

class Autor(models.Model):
    class Meta:
        verbose_name_plural = "Autores"
    nome = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

class Livro(models.Model):
    titulo = models.CharField(max_length=255)
    ISBN = models.CharField(max_length=32)
    quantidade = models.IntegerField()
    preco = models.FloatField()
    categoria = models.ForeignKey(Categoria , on_delete= models.PROTECT , related_name="livros")
    editora= models.ForeignKey(Editora , on_delete= models.PROTECT , related_name="livros")
    autores= models.ManyToManyField(Autor , related_name="livros")

    def __str__(self):
        return f'{self.titulo} ({self.editora})'

class StatusCompra(models.Model):
    tipo = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.tipo}'

    

def get_StatusCompra_user():
    return StatusCompra().objects.all()[0]
class Compra(models.Model):

    usuario = models.ForeignKey(User, on_delete=models.PROTECT, related_name="compras")
    status = models.ForeignKey(StatusCompra, on_delete=models.PROTECT , default=1, related_name="compra")

    def __str__(self):
        return f'({self.status}) {self.usuario}'
    @property
    def total(self):
        queryset = self.itens.all().aggregate(total=models.Sum(F('livro__preco') * F('quantidade')))
        return queryset['total']

class ItensCompra(models.Model):
    compra = models.ForeignKey(Compra , on_delete=models.CASCADE, related_name="itens")
    livro = models.ForeignKey(Livro , on_delete=models.PROTECT, related_name="+")
    quantidade = models.IntegerField()