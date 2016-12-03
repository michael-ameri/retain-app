import {Component} from '@angular/core'

@Component({
    selector: 'notes-container',
    styles: [`
        .notes {
          padding-top: 50px;
        }
        .creator {
          margin-bottom: 40px; 
        }
    `],
    template: `
        <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            [note]="aNote"
            *ngFor="let aNote of notes let i = index"
            (checked)="onNoteChecked(i)"
          >
          </note-card>
          <!-- todo alternative (could also use aNote instead of $event)-->
          <!--<note-card-->
            <!--[note]="aNote"-->
            <!--*ngFor="let aNote of notes"-->
            <!--(checked)="onNoteChecked($event)"-->
          <!--&gt;-->
          <!--</note-card>-->
        </div>
      </div>
    </div>
    `
})

export class Notes{
    notes = [
        {
            title: 'Chore',
            value: 'eat some food',
            color: 'lightblue'
        },
        {
            title: 'Cook',
            value: 'cook some food',
            color: 'red'
        },
        {
            title: 'Dog',
            value: 'walk it',
            color: 'yellow'
        }
    ];

    // todo use Note type
    onCreateNote(note) {
        this.notes.push(note);
    }

    onNoteChecked(i: number){
        this.notes.splice(i, 1);
    }

    // todo alternative...
    // onNoteChecked(note: any){
    //     this.notes.splice(this.notes.indexOf(note), 1);
    // }
}