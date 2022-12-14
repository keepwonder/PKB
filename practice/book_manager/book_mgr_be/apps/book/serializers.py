from rest_framework import serializers

from book.models import Author, Publisher, Producer, Book

# Author序列化
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


# Publisher序列化
class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = '__all__'


# Porducer序列化
class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producer
        fields = '__all__'


# Book序列化
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'