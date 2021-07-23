from ariadne import QueryType, make_executable_schema, load_schema_from_path, MutationType, snake_case_fallback_resolvers
from ariadne.contrib.django.scalars import date_scalar, datetime_scalar
from pinkle.resolvers import query, mutation

type_defs = [
    load_schema_from_path("pinkle/schema.graphql"),
]

schema = make_executable_schema(type_defs, query, mutation,
                                date_scalar, datetime_scalar, snake_case_fallback_resolvers)
