from django.urls import path
from rest_framework.routers import DefaultRouter
from book.views import AuthorViewSet, BookViewSet, PublisherViewSet,ProducerViewSet

# 1. 实例化一个DefaultRouter

router = DefaultRouter()

# 2. 注册相应的url
router.register('authors', AuthorViewSet, basename='authors')  # http://127.0.0.1:8000/api/v1/authors/
router.register('books',BookViewSet, basename='books')  # http://127.0.0.1:8000/api/v1/books/
router.register('publishers', PublisherViewSet, basename='publishers')  # http://127.0.0.1:8000/api/v1/publishers/
router.register('producers', ProducerViewSet, basename='producers')  # http://127.0.0.1:8000/api/v1/producers/

urlpatterns = [

]

# 3. 附加到urlpatterns集合中
urlpatterns += router.urls