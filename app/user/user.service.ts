import { Injectable } from '@angular/core';

export class User {
  constructor(public id: number,
              public name: string,
              public email:string,
              public password:string,
              public gender:string) { }
}

let HEROES = [
  new User(11, 'Mr. Ali','ali@gmail.com','123','male'),
  new User(12, 'Hasan','Hasan@gmail.com','321','male')
];

let usersPromise = Promise.resolve(HEROES);

@Injectable()
export class UserService {
  getUsers() { return usersPromise; }

  getUser(id: number | string) {
    return usersPromise
      .then(users => users.filter(user => user.id === +id)[0]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/