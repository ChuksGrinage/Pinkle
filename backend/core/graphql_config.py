from ariadne import QueryType, make_executable_schema, load_schema_from_path, MutationType, snake_case_fallback_resolvers
from pinkle.resolvers import query, mutation

type_defs = [
    load_schema_from_path("pinkle/schema.graphql"),
]

schema = make_executable_schema(type_defs, query, mutation, snake_case_fallback_resolvers)
