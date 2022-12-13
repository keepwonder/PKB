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


