import {Component, Output, EventEmitter} from "@angular/core";
/**
 * Created by Hiren on 19-03-2017.
 */

@Component({
  selector:'chat-list',
  templateUrl:'./chat-list.component.html',
  styleUrls:['./chat-list.component.scss']
})
export class ChatListComponent{
  @Output()
  showUserProfile:EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactProfile:EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactConversationEmitter:EventEmitter<any> = new EventEmitter<any>();

  public chatData = [
    {
    
      username : 'Bruno',
      userPhoneNumber: '(11) 99412-1131',
      lastMessage: {
        message: 'Bom dia',
        type: {
          code: '1',
          descrition: 'fromOther'
        } 
      }
    
    
    },
    {
    
      username : 'Pedro',
      userPhoneNumber: '(13) 99798-2188',
      lastMessage: {
        message: 'Digite 1 para...',
        type: {
          code: '2',
          descrition: 'fromMe'
        } 
      }
    
    
    }
  ];

  showContactConversation(data) {
    this.showContactConversationEmitter.emit(data);
  }

  showAvatarClicked(){
    this.showUserProfile.emit(true);
  }
  contactAvatarClicked(){
    this.showContactProfile.emit(true);
  }
}
