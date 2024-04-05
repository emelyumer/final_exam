from django.urls import path
from final_exam.base.views import getRoutes, getProducts, getProduct

urlpatterns = [
    path('', getRoutes, name='routes'),
    path('products/', getProducts, name='products'),
    path('products/<str:pk>/', getProduct, name='product'),
]