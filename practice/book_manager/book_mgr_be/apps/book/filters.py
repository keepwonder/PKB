from django_filters import FilterSet, filters
from book.models import Author, Book, Publisher, Producer

class AuthorFilter(FilterSet):

    # 重写需要模糊匹配的字段
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = Author
        fields = ('name', )


class BookFilter(FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')
    author = filters.CharFilter(field_name='author', lookup_expr='icontains')
    translator = filters.CharFilter(field_name='translator', lookup_expr='icontains')

    class Meta:
        model = Book
        fields = ('name', 'author', 'translator', 'publisher', 'producer')


class PublisherFilter(FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = Publisher
        fields = ('name', )

class ProducerFilter(FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = Producer
        fields = ('name', )
