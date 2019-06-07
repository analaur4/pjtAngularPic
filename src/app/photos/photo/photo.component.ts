import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alpic-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  // Com o @Input() as propriedades podem receber valores diferentes
  @Input() url = '';
  @Input() description = '';

  constructor() { }

  ngOnInit() {
  }

}
