import account.schema
import graphene
import pinkle.schema


class Query(pinkle.schema.Query, account.schema.Query, graphene.ObjectType):
    pass


class Mutation(account.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
