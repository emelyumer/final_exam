from django.contrib import admin
from django.contrib.auth import admin as auth_admin, get_user_model
from final_exam.base.models import Product, Review, Order, OrderItem, ShippingAddress
UserModel = get_user_model()


@admin.register(UserModel)
class AppUserAdmin(auth_admin.UserAdmin):
    model = UserModel

    list_display = ('pk', 'email', 'is_staff', 'is_superuser')
    search_fields = ('email',)
    ordering = ('pk',)


@admin.register(Product)
class AdminProduct(admin.ModelAdmin):
    pass

@admin.register(Review)
class AdminReview(admin.ModelAdmin):
    pass

@admin.register(Order)
class AdminOrder(admin.ModelAdmin):
    pass

@admin.register(OrderItem)
class AdminOrderItem(admin.ModelAdmin):
    pass

@admin.register(ShippingAddress)
class AdminShippingAddress(admin.ModelAdmin):
    pass
