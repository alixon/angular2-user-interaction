import { Injectable, Component } from 'angular2/core';

@Injectable()
@Component({
    selector: 'my-modal',
    templateUrl: './app/my-modal/alert.component.html',
    styleUrls: ['./app/my-modal/alert.component.css'],
    directives: [],
})
export class AlertComponent{
    title = "";
    message = "";
    isVisible = false;
    
    show(message: string, title:string = 'Alert', confirmationResult) {
        
        this.isVisible = true;
        this.message = message;
        this.title = title;
        this.confirmationResult = confirmationResult;
    }
    
    hide() {
        this.isVisible = false;
    }
    
    cancel() {
        this.confirmationResult(false);
        this.hide();
    }
    
    accept() {
        this.confirmationResult(true);
        this.hide();
    }
}

