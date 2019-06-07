import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root' // Quando o Angular criar o photo.service será na raiz. > Todos os componentes terão acesso a ele.
})
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http.get<Object[]>(API + '/' + userName + '/photos');
    }
}
