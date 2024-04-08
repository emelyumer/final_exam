from rest_framework import serializers
from django.contrib.auth import get_user_model
# from rest_framework_simplejwt.tokens import RefreshToken
from final_exam.base.models import Product, Order, OrderItem, ShippingAddress, Review
UserModel = get_user_model()


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data