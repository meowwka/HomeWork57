
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
