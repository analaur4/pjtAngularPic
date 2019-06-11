import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root' // Quando o Angular criar o photo.service será na raiz. > Todos os componentes terão acesso a ele.
})
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(API + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString()); // método de paginação
        return this.http.get<Photo[]>(API + '/' + userName + '/photos', { params });
    }
}
