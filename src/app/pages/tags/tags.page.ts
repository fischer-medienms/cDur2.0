import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService, TagGroup } from 'src/app/services/database.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {
  groups: Observable<TagGroup[]>;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  this.groups = this.databaseService.getTagGroups();
  }

}
