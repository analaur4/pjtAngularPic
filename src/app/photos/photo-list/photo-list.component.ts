import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'alpic-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(private activatedRoute: ActivatedRoute, // rota ativada naquele momento
              private photoService: PhotoService) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  // ngOnDestroy() {}  é chamado toda vez que um objeto é destruído
  
  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos); // pega a lista de fotos e concatena com a outra lista de fotos
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
