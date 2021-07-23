from ariadne import convert_kwargs_to_snake_case
from ariadne.objects import MutationType, QueryType
from ariadne_jwt.decorators import login_required
from graphql import GraphQLError
from .models import Post

query = QueryType()
mutation = MutationType()

@query.field("posts")
@convert_kwargs_to_snake_case
def resolve_posts(*_):
    return Post.objects.all()

@mutation.set_field("createPost")
def resolve_create_post(self, info, title, description):
    post = Post.objects.create(title=title, description=description)
    return post