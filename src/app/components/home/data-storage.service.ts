import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient) { }
    public userChange = new Subject<any>();
    private users = [];
    reqUrl = 'https://jsonplaceholder.typicode.com/users';
    getUsers() {
        this.http
            .get<User[]>(this.reqUrl).subscribe(users => {
                this.users = users;
                this.userChange.next(this.users.slice());
                console.log(users);
            });
        return this.users.slice();
    }
    postUser(value) {
        const user = { name: value };
        this.http.post(this.reqUrl, user).subscribe((response) => {
            // tslint:disable-next-line: no-string-literal
            user['id'] = response['id'];
            this.users.push(user);
            this.userChange.next(this.users.slice());
        });

    }
    deleteUser(id) {
        this.http.delete(this.reqUrl + '/' + id).subscribe(() => {
            const index = this.users.findIndex((user) => {
                if (user.id === +id) {
                    return user.id;
                }

            });
            this.users.splice(index, 1);
            this.userChange.next(this.users.slice());
        });
    }
    EditUser(id, value) {
        this.http.patch<User>(this.reqUrl + '/' + id, {
            name: value,
        }).subscribe(response => {
            const index = this.users.findIndex(user => {
                if (user.id === +id) {
                    return user.id;
                }
            });
            console.log(index);
            this.users[index] = response;
            this.userChange.next(this.users.slice());
        });
    }

    // private handleResponse(res) {
    //     const users = [];
    //     // tslint:disable-next-line: forin
    //     for (let key in res) {
    //         users.push(res[key]);
    //     }
    //     this.users = users;
    //     return users;
    // }
}
