from ariadne import convert_kwargs_to_snake_case
from ariadne.objects import MutationType, QueryType
from graphql import GraphQLError

from .models import Post

query = QueryType()
mutation = MutationType()

@query.field("posts")
@convert_kwargs_to_snake_case
def resolve_posts(*_):
    return Post.objects.all()

@mutation.field("createPost")
def resolve_create_post(self, info, title, description):
    post = Post.objects.create(title=title, description=description)
    return post
