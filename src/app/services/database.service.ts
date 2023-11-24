import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { BehaviorSubject} from 'rxjs';
import { environment } from 'src/environments/environment';

const CAPTIONS_DB = 'captions';
const TAGS_DB = 'tags';
const LIST_TABLE = 'termine_anmeldungen';
const USER_LIST_TABLE = 'user_lists';
const ITEMS_TABLE = 'items';

export interface Caption {
  id: number;
  created_at?: string;
  user_id?: string;
  caption?: string;
  tags?: string;
}

export interface TagGroup{
  id: number;
  created_at?: string;
  user_id?: string;  
  tags?: string;
  name?: string;
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private supabase: SupabaseClient; 
 private tagGroups: BehaviorSubject<TagGroup[]> = new BehaviorSubject([]);
  
   
  
  constructor() {
     this.supabase = createClient (
      environment.supabaseUrl,
      environment.supabaseKey
     );
     
     this.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN'){
        this.loadTagGroups();
        this.handleTagGroupsChanged();
      }
    });
 
   }

async addTagGroup(data: TagGroup) {
  const group = {
   
    user_id: (await this.supabase.auth.getUser()).data.user.id,
    name: data.name,
    tags: data.tags
  }; 

 await this.supabase.from(TAGS_DB).insert(group);
}
  

async loadTagGroups() {
      const query = await this.supabase
      .from(TAGS_DB)
      .select('*')
      .order('created_at');
      
      this.tagGroups.next(query.data);
    }

 getTagGroups() {
    return this.tagGroups.asObservable();
    }

async loadTagGroup(id): Promise<TagGroup> {
  const query = await this.supabase
    .from(TAGS_DB)
    .select('*')
    .eq('id', id)
    .single();
  return query.data;
  console.log('query daten: ', query.data);
  }


async updateTagGroup(group: TagGroup) {
         return this.supabase.from(TAGS_DB).update(group).match({id: group.id});
    }


 handleTagGroupsChanged() {
 /* this.supabase
        .from(TAGS_DB)
        .on('*', (payload) => {
          console.log('TAGS CHANGED: ', payload);
   
          if (payload.eventType === 'INSERT') {
            const newItem: TagGroup = payload.new;
            this.tagGroups.next([...this.tagGroups.value, newItem]);
          } else if (payload.eventType === 'UPDATE') {
            const updatedItem: TagGroup = payload.new;
            const newValue = this.tagGroups.value.map((item) => {
              if (updatedItem.id === item.id) {
                item = updatedItem;
              }
              return item;
            });
            this.tagGroups.next(newValue);
          }
        })
        .subscribe();*/
}


async startList(title){
    return this.supabase.from(LIST_TABLE).insert({title});
  }

async getLists(){
    return (await this.supabase.from(USER_LIST_TABLE).select('dates:list_id(title, id)')).data;
  }
  
  async getListsInfo(id: string){
    return await this.supabase
      .from(LIST_TABLE)
      .select('*')
      .match({ id })
      .single();
  }
  
  async updateList(list: any){
    return await this.supabase
      .from(LIST_TABLE)   
      .update(list)
      .match({id: list.id});
  }

  async deleteList(list: any){
    return await this.supabase
      .from(LIST_TABLE)   
      .delete()
      .match({id: list.id});
  }

  async getListItems(id: string){
   const lists = await this.supabase
      .from(ITEMS_TABLE)
      .select('*')
      .eq('list_id', id )
      .order('position');

      return lists.data || [];
  }

  async addListItem(id: string,title, position = 0){
    return await this.supabase
       .from(ITEMS_TABLE)
       .insert({list_id: id, position, title})
       .select('*')
       .single (); 
   }

   async deleteItem(id: any){
    return await this.supabase
       .from(ITEMS_TABLE)
       .delete()
       .match({id})
       .single (); 
   }

}



