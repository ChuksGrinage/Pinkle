from ariadne import convert_kwargs_to_snake_case
from ariadne_jwt import login_required
from graphql import GraphQLError

from .models import Post


@convert_kwargs_to_snake_case
def resolve_posts(*_):
    return Post.objects.all()


@convert_kwargs_to_snake_case
def resolve_post(self, info, post_id):
    return Post.objects.get(pk=post_id)


@convert_kwargs_to_snake_case
def resolve_create_post(self, info, title, description):
    post = Post.objects.create(title=title, description=description)
    return post


@login_required
def resolve_create_post(self, info, input):
    """Takes inputs consisting of title, body and description and more to creat eand return a post"""
    author = info.context.get("request").user
    post = Post.objects.create(**input, author=author)
    return post


# @login_required
# def resolve_update_post(self, info, id, title, content):
#     author = info.context.get('request').user
#     post = Post.objects.get(id=id)
#     print('------hello-------', post)
#     if post.author.id != author.id:
#         raise GraphQLError('Not permitted to update this post')
#     post.title = title
#     post.content = content
#     post.save()
#     print('---updated post----', post)
#     return post
