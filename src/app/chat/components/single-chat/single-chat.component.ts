import {Component, Output, EventEmitter, Input} from "@angular/core";
/**
 * Created by Hiren on 19-03-2017.
 */

@Component({
  selector:'single-chat',
  templateUrl:'./single-chat.component.html',
  styleUrls:['./single-chat.component.css']
})
export class SingleChatComponent{
  @Input() first: boolean = false;
  @Input() infos:any
  @Input() header: boolean = false;

  @Output()
  showContactProfile:EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactConversationEmitter:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (this.first)
      this.showContactConversation();
  }
  contactAvatarClicked(){
    this.showContactProfile.emit(true);
  }

  showContactConversation() {
    this.showContactConversationEmitter.emit(this.infos);
  }
}
