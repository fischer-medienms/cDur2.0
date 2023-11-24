import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService, TagGroup } from 'src/app/services/database.service';

@Component({
  selector: 'app-tag-group',
  templateUrl: './tag-group.page.html',
  styleUrls: ['./tag-group.page.scss'],
})
export class TagGroupPage implements OnInit {
  group: FormGroup;

  constructor(private databaseService: DatabaseService,private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.group = this.fb.group({
      id: null,
      created_at: null,
      user_id: null,
      tags: null,
      name: null,
    });

    if (groupId && groupId !=='null') {
      this.databaseService.loadTagGroup(groupId).then(data => {
     
        this.group.patchValue(data);
      })
    }
  }


  save() {  
    const group = this.group.value as TagGroup;

    if (group.id) {
      this.databaseService.updateTagGroup(group);

    } else if (group.name && group.tags) {
          this.databaseService.addTagGroup(group);
         }
  }

  
}
