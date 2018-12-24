import { Injectable} from "@angular/core";
import { BehaviorSubject} from 'rxjs';


@Injectable()
export class ShareUserService{

    private messageSource = new BehaviorSubject<string>("");
    currentMessage  = this.messageSource.asObservable();

    private uiState = new BehaviorSubject<boolean>(false);
    currentUiState  = this.uiState.asObservable();

    constructor(){

    }

    changeMessage(message:string){
        this.messageSource.next(message);
    }

    synchronizeUI(state:boolean){
        this.uiState.next(state);
    }

}
