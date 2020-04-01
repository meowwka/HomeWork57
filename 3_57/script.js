
'use strict';

class User {
  constructor(id, name, email, isAuthorised) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.isAuthorised = isAuthorised;
  }
};

class Comment {
  constructor(user,post, comment, date) {
    this.user = user,
    this.post = post,
    this.comment = comment,
    this.date = date
  }
};

class Post {
  constructor(id, userId,  descriprtion, likes) {
    this.id = id,
    this.userId = userId,
    // так можно обращаться к конкретному юзеру
    this.descriprtion = descriprtion,
    this.likes = likes;
  }
};

