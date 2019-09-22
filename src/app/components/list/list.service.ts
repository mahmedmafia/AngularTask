import { Injectable } from '@angular/core';
import { Doctor } from './Doctor.model';

@Injectable({ providedIn: 'root' })
export class listService {
    private Docs: Doctor[] = [];

    getDocs() {
        let i = 0;
        while (i < 200) {

            const newDoc = new Doctor(i, 'Magdy Yacoub', 3.5, 'Heart Speciallist', 'Broklin',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiwRkOYw2G5ijkWaiUD424HhD9FoxEw4fHvwSJ5Qc04q1hten');

            this.Docs.push(newDoc);
            i++;
        }
        return this.Docs.slice();
    }
}
