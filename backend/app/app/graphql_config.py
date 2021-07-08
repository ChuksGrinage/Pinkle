from ariadne import QueryType, make_executable_schema, load_schema_from_path, MutationType, snake_case_fallback_resolvers
from ariadne.contrib.django.scalars import date_scalar, datetime_scalar
from ariadne_jwt import resolve_verify, resolve_refresh, resolve_token_auth, jwt_schema, GenericScalar
import posts.resolvers
import users.resolvers

type_defs = [
    load_schema_from_path("app/schema.graphql"),
    load_schema_from_path("posts/schema.graphql"),
    load_schema_from_path("users/schema.graphql"),
]

query = QueryType()
query.set_field("posts", posts.resolvers.resolve_posts)
query.set_field("post", posts.resolvers.resolve_post)
query.set_field("users", users.resolvers.resolve_users)
query.set_field("me", users.resolvers.resolve_me)

mutation = MutationType()
mutation.set_field("createPost", posts.resolvers.resolve_create_post)
mutation.set_field('updatePost', posts.resolvers.resolve_update_post)
mutation.set_field('signupUser', users.resolvers.resolve_signup_user)
mutation.set_field('verifyToken', resolve_verify)
mutation.set_field('refreshToken', resolve_refresh)
mutation.set_field('loginUser', users.resolvers.resolve_token_auth)

schema = make_executable_schema([*type_defs, jwt_schema], query, mutation,
                                date_scalar, datetime_scalar, snake_case_fallback_resolvers, GenericScalar)
