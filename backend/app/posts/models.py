from users.yearinschool import YEAR_IN_SCHOOL
from users.models import Profile
from .statechoices import STATE_CHOICES
from django.db import models
import uuid

# Create your models here.


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    body = models.TextField()
    grade = models.CharField(
        max_length=3,
        choices=YEAR_IN_SCHOOL
    )
    city = models.CharField(max_length=50)
    state = models.CharField(
        max_length=2,
        choices=STATE_CHOICES
    )
    zip_code = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField()
    ups = models.IntegerField(default=0)
    downs = models.IntegerField(default=0)
    score = models.IntegerField(default=0)
    author = models.ForeignKey(
        Profile, on_delete=models.CASCADE)


class Comment(models.Model):
    author = models.ForeignKey(
        Profile, on_delete=models.CASCADE)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField()
    ups = models.IntegerField(default=0)
    downs = models.IntegerField(default=0)
    score = models.IntegerField(default=0)


# class Vote(models.Model):
#     user = models.ForeignKey(
#         get_user_model(), null=True, on_delete=models.CASCADE)
#     submission = models.ForeignKey(Submission)
#     vote_object_type = models.ForeignKey(ContentType)
#     vote_object_id = models.PositiveIntegerField()
#     vote_object = GenericForeignKey('vote_object_type', 'vote_object_id')
#     value = models.IntegerField(default=0)

    # @classmethod
    # def create(cls, user, vote_object, vote_value):
    #     """
    #     Create a new vote object and return it.
    #     It will also update the ups/downs/score fields in the
    #     vote_object instance and save it.
    #     :param user: RedditUser instance
    #     :type user: RedditUser
    #     :param vote_object: Instance of the object the vote is cast on
    #     :type vote_object: Comment | Submission
    #     :param vote_value: Value of the vote
    #     :type vote_value: int
    #     :return: new Vote instance
    #     :rtype: Vote
    #     """

    #     if isinstance(vote_object, Submission):
    #         submission = vote_object
    #         vote_object.author.link_karma += vote_value
    #     else:
    #         submission = vote_object.submission
    #         vote_object.author.comment_karma += vote_value

    #     vote = cls(user=user,
    #                vote_object=vote_object,
    #                value=vote_value)

    #     vote.submission = submission
    #     # the value for new vote will never be 0
    #     # that can happen only when removing up/down vote.
    #     vote_object.score += vote_value
    #     if vote_value == 1:
    #         vote_object.ups += 1
    #     elif vote_value == -1:
    #         vote_object.downs += 1

    #     vote_object.save()
    #     vote_object.author.save()

    #     return vote

    # def change_vote(self, new_vote_value):
    #     if self.value == -1 and new_vote_value == 1:  # down to up
    #         vote_diff = 2
    #         self.vote_object.score += 2
    #         self.vote_object.ups += 1
    #         self.vote_object.downs -= 1
    #     elif self.value == 1 and new_vote_value == -1:  # up to down
    #         vote_diff = -2
    #         self.vote_object.score -= 2
    #         self.vote_object.ups -= 1
    #         self.vote_object.downs += 1
    #     elif self.value == 0 and new_vote_value == 1:  # canceled vote to up
    #         vote_diff = 1
    #         self.vote_object.ups += 1
    #         self.vote_object.score += 1
    #     elif self.value == 0 and new_vote_value == -1:  # canceled vote to down
    #         vote_diff = -1
    #         self.vote_object.downs += 1
    #         self.vote_object.score -= 1
    #     else:
    #         return None

    #     if isinstance(self.vote_object, Submission):
    #         self.vote_object.author.link_karma += vote_diff
    #     else:
    #         self.vote_object.author.comment_karma += vote_diff

    #     self.value = new_vote_value
    #     self.vote_object.save()
    #     self.vote_object.author.save()
    #     self.save()

    #     return vote_diff

    # def cancel_vote(self):
    #     if self.value == 1:
    #         vote_diff = -1
    #         self.vote_object.ups -= 1
    #         self.vote_object.score -= 1
    #     elif self.value == -1:
    #         vote_diff = 1
    #         self.vote_object.downs -= 1
    #         self.vote_object.score += 1
    #     else:
    #         return None

    #     if isinstance(self.vote_object, Submission):
    #         self.vote_object.author.link_karma += vote_diff
    #     else:
    #         self.vote_object.author.comment_karma += vote_diff

    #     self.value = 0
    #     self.save()
    #     self.vote_object.save()
    #     self.vote_object.author.save()
    #     return vote_diff
