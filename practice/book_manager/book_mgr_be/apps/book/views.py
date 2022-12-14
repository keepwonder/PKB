from rest_framework.viewsets import ModelViewSet

from book.models import Book, Author, Publisher, Producer
from book.serializers import BookSerializer, AuthorSerializer, PublisherSerializer, ProducerSerializer

# from django_filters.rest_framework import DjangoFilterBackend  # 实现筛选的后台模块
from book.filters import AuthorFilter, BookFilter, PublisherFilter, ProducerFilter

from rest_framework.filters import SearchFilter

from book.paginations import MyPageNumberPagination

# Create your views here.

class AuthorViewSet(ModelViewSet):
    """
        create:
        添加作者信息
        retrieve:
        获取作者信息详情数据
        update:
        完整更新作者信息
        partial_update:
        部分更新作者信息
        destroy:
        删除作者信息
        list:
        获取所有作者信息
    """
    queryset = Author.objects.all()
    # print(queryset)
    serializer_class = AuthorSerializer

    # 分页
    pagination_class = MyPageNumberPagination

    # 设置筛选后台
    # filter_backends = [DjangoFilterBackend, ]
    filter_class = AuthorFilter


class BookViewSet(ModelViewSet):
    """
        create:
        添加图书信息
        retrieve:
        获取图书信息详情数据
        update:
        完整更新图书信息
        partial_update:
        部分更新图书信息
        destroy:
        删除图书信息
        list:
        获取所有图书信息
    """

    queryset = Book.objects.all()
    serializer_class = BookSerializer

    # filter_backends = [DjangoFilterBackend, ]
    filter_class = BookFilter

    # 设置查找的后台功能
    # filter_backends = [SearchFilter, ]  # 优先级比全局设置高，因此导致 filter功能失效， 所以search也设置成全局
    search_fields = ['name', 'author', 'translator']



class PublisherViewSet(ModelViewSet):
    """
        create:
        添加出版社信息
        retrieve:
        获取出版社信息详情数据
        update:
        完整更新出版社信息
        partial_update:
        部分更新出版社信息
        destroy:
        删除出版社信息
        list:
        获取所有出版社信息
    """
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer
    
    # filter_backends = [DjangoFilterBackend, ]
    filter_class = PublisherFilter


class ProducerViewSet(ModelViewSet):
    """
        create:
        添加出品方信息
        retrieve:
        获取出品方信息详情数据
        update:
        完整更新出品方信息
        partial_update:
        部分更新出品方信息
        destroy:
        删除出品方信息
        list:
        获取所有出品方信息
    """
    queryset = Producer.objects.all()
    serializer_class = ProducerSerializer
    
    # filter_backends = [DjangoFilterBackend, ]
    filter_class = ProducerFilter

    
