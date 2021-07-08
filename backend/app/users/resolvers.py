from users.models import Profile
from ariadne import convert_kwargs_to_snake_case
from graphql import GraphQLError
from ariadne_jwt.decorators import login_required, token_auth


# @convert_kwargs_to_snake_case
@token_auth
def resolve_token_auth(obj, info, **kwargs):
    user = info.context.get('request').user
    return {'user': user}


@convert_kwargs_to_snake_case
def resolve_users(*_):
    return User.objects.all()


@convert_kwargs_to_snake_case
def resolve_signup_user(*_, first_name, last_name, username, email, password):
    if User.objects.filter(email=email).exists():
        raise GraphQLError(
            'This email already exists please try another email')
    user = User.objects.create_user(
        username=username,
        first_name=first_name,
        last_name=last_name,
        email=email
    )
    user.set_password(password)
    user.save()
    return user


@login_required
def resolve_me(self, info):
    user = info.context.get('request').user
    return user
