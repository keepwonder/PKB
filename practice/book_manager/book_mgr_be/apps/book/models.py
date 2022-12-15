from django.db import models

# Create your models here.

# book, author, publis, porducer

class Author(models.Model):
    name = models.CharField(verbose_name='姓名', max_length=100,null=False, blank=False)
    gender = models.CharField(verbose_name='性别', max_length=100, null=True, blank=True, default=None)

    class Meta:
        managed = True
        app_label = 'book'
        db_table = 'pkb_author'

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(verbose_name='名称', unique=True, max_length=100,null=False, blank=False)
    
    class Meta:
        managed = True
        app_label = 'book'
        db_table = 'pkb_publisher'

    def __str__(self):
        return self.name


class Producer(models.Model):
    name = models.CharField(verbose_name='名称',unique=True, max_length=100,null=False, blank=False)

    class Meta:
        managed = True
        app_label = 'book'
        db_table = 'pkb_producer'

    def __str__(self):
        return self.name


class Book(models.Model):
    isbn = models.CharField(max_length=50, verbose_name='ISBN', null=False,blank=False)
    name = models.CharField(max_length=50,verbose_name='书名', null=False, blank=False)
    bk_type = models.CharField(max_length=10, verbose_name='类型', null=False, blank=False)
    cover = models.CharField(max_length=100, verbose_name='封面', null=True, blank=True)
    author = models.ForeignKey(verbose_name='作者', to=Author, related_name='write', on_delete=models.SET_NULL, null=True, blank=True)
    translator = models.CharField(max_length=50, verbose_name='译者', null=True, blank=True)
    page_read = models.IntegerField(verbose_name='已读页数', null=True, blank=True, default=0)
    page_total = models.IntegerField(verbose_name='总页数', null=True, blank=True)
    commnets = models.TextField(verbose_name='评论', max_length=1000, null=True, blank=True)
    publisher = models.ForeignKey(verbose_name='出版社', to=Publisher, related_name='publish', on_delete=models.SET_NULL, null=True, blank=True)
    producer = models.ForeignKey(verbose_name='出品方', to=Producer, related_name='produce', on_delete=models.SET_NULL, null=True, blank=True)
    start_date = models.DateField(verbose_name='阅读开始日期', null=True, blank=True,default=None)
    finish_date = models.DateField(verbose_name='阅读完成日期', null=True, blank=True,default=None)

    class Meta:
        managed = True
        app_label = 'book'
        db_table = 'pkb_book'

    def __str__(self):
        return self.name




