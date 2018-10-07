import {Component, Output, EventEmitter, Input} from "@angular/core";
/**
 * Created by Hiren on 19-03-2017.
 */

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
  @Input() conversationData: any;
  @Output()
  showOptions:EventEmitter<any> = new EventEmitter<any>();

  btnOptionsClicked() {
    this.showOptions.emit(true);
  }
}
