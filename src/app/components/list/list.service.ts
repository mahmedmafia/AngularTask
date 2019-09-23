import { Injectable } from '@angular/core';
import { Doctor } from './Doctor.model';

@Injectable({ providedIn: 'root' })
export class ListService {
    private Docs: Doctor[] = [];

    getDocs() {
        let i = 0;
        while (i < 200) {
            let rating = (Math.random() * 5);
            rating = +rating.toFixed(1);

            const newDoc = new Doctor(i, 'Magdy Yacoub', rating, 'Heart Speciallist', 'Broklin',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiwRkOYw2G5ijkWaiUD424HhD9FoxEw4fHvwSJ5Qc04q1hten');

            this.Docs.push(newDoc);
            i++;
        }
        return this.Docs.slice();
    }
}
