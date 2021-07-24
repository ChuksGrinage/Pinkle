import graphene
from graphene_django import DjangoObjectType

from .models import Post


class PostType(DjangoObjectType):
    class Meta:
        model = Post
        field = ("id", "title", "description")


class Query(graphene.ObjectType):
    all_posts = graphene.List(PostType)

    def resolve_all_Posts(root, info):
        return Post.objects.filter(level=1)
