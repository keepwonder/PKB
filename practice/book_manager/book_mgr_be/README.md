# 图书管理系统后端项目

## 1. 创建项目及应用
1. 创建项目 book_mgr_be
   `django-admin startproject book_mgr_be`
2. 创建应用
   `python manage.py startapp book`

## 2. 初始化环境

1. 新建apps目录，用来存放app应用，修改settings.BASE_DIR
   `sys.path.append(os.path.join(BASE_DIR, 'apps'))`

2. 修改默认数据库为mysql数据库
    ```
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'personal_library',
            'USER': 'root',
            'PASSWORD': '********',
            'HOST': 'localhost',
            'PORT': '3306'

        }
    ```

3. 分离开发和生产配置文件
   1. 新建settings目录，新建base.py, dev.py, product.py三个配置文件, 默认配置base.py
   2. `python manage.py runserver --settings=settings.dev` 通过命令中使用--settings上来指定使用哪个配置文件


## 3. 创建模型
### 3.1 图书管理 
      1. Author 作者
      2. Publisehr 出版社
      3. Producer  出品方
      4. Book 书籍

      book 和 auhtor publisher producer 都是多对一的关系
      详情字段请见 book/models.py

## 4. DRF安装以及实现

### 4.0 RESTful风格, 常用方法
   1. get （所有信息 | 一个信息）
   2. post
   3. delete
   4. put (更新时需要携带所有字段信息)
   5. patch (更新时只需要携带需要更新的字段)

### 4.1 DRF安装，使用豆瓣源
   1. `pip install djangorestframework -i https://pypi.douban.com/simple`
   2. 修改settings配置文件， INSTALLED_APPS 中添加 `rest_framework`
### 4.2 实现
   1. 序列化：负责对象和json格式数据的相互转换
      1. 获取数据：对象->json 返回给前端
      2. 添加，修改：json->对象存储在数据库中
   2. 视图：实现后台功能的核心
      1. 早期: 视图基于函数 FBV
      2. DRF: 视图基于类 CBV
   3. 路由: 路由的匹配
### 4.3 自带DRF API接口展示
![drf_api](https://s1.ax1x.com/2022/12/14/zIYhwQ.png)

## 5. DRF筛选
### 5.1 安装django-filter,并j将`django_filters`添加进INSTALLED_APPS
   `pip install django-filter -i https://pypi.douban.com/simple`
   1. 新建filters.py，详情见代码

   2. (方法一)views.py中导入 
      ```
      from django_filters.rest_framework import DjangoFilterBackend

      filter_backends = [DjangoFilterBackend, ]
      filter_class = AuthorFilter
      ````

   3. (方法二)seetings中设置全局过滤, 
      ```
      REST_FRAMEWORK = {
      'DEFAULT_FILTER_BACKENDS': [
         'django_filters.rest_framework.DjangoFilterBackend',
         ],
      }
      # views.py
      filter_class = AuthorFilter
      ```

## 6. DRF搜索 
   1. (方法一)views.py中导入 
      ```
      from rest_framework.filters import SearchFilter

      filter_backends = [SearchFilter, ]
      search_fields = ['name', 'author', 'translator']
      ````

   2. (方法二)seetings中设置全局搜索, 
      ```
      REST_FRAMEWORK = {
      'DEFAULT_FILTER_BACKENDS': [
         'rest_framework.filters.SearchFilter',
         ],
      }
      # views.py
      search_fields = ['name', 'author', 'translator']
      ```

## 7. DRF分页
   1. settings中设置全局分页
      ``` 
      'DEFAULT_PAGINATION_CLASS':'rest_framework.pagination.PageNumberPagination',
      'PAGE_SIZE':10,
      ```
   2. 自定义类继承PageNumberPagination
      ```
      from rest_framework.pagination import PageNumberPagination

      class MyPageNumberPagination(PageNumberPagination):
         page_size = 2
         page_query_param = 'page'
         page_size_query_param = 'size'
         max_page_size=10
      ```

## 8. Swagger自动化生成API文档
### 8.1 安装drf-yasg
   `pip install drf-yasg -i https://pypi.douban.com/simple`

### 8.2 全局urls.py中添加相关配置
   详情见urls.py

### 8.3 给每个api添加注释
   ```
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
   ```
   create 对应 post <br>
   retrieve 对应 get 某一个信息 <br>
   update 对应 put <br>
   partial_update 对应 patch <br>
   destroy 对应 delete <br>
   list 对应 get 所有信息 <br>

### 8.4 swagger界面展示
   ![swagger](https://s1.ax1x.com/2022/12/14/zIsYrR.png)

