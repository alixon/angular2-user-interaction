import { Injectable, Component, Input, EventEmitter } from 'angular2/core';

@Injectable()
@Component({
    selector: 'my-alert',
    templateUrl: './app/alert.component.html',
    styleUrls: ['./app/alert.component.css'],
    directives: [],
})
export class AlertComponent{
    @Input()
    title = "";
    @Input()
    message = "";
    isVisible = true;
    onAccept = new EventEmitter<boolean>();
    
    show(message: string, title:string = 'Alert') {
        
        
        this.message = message;
        this.title = title;
        this.isVisible = true;
    }
    
    hide() {
        this.isVisible = false;
    }
    
    cancel() {
        this.onAccept.emit(false);
        this.hide();
    }
    
    accept() {
        this.onAccept.emit(true);
        this.hide();
    }
}

