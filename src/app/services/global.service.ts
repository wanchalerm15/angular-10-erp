import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalService {
    title: string = "My Global";

    constructor() { }

    /** 
     * get local storage 
     * you can study in https://getbootstrap.com/docs/4.0/components/forms/#validation */
    setStorage(val: string): void {
        sessionStorage.setItem('myKey', val);
    }

    /** get local storage */
    get getStorage() {
        return sessionStorage.getItem('myKey');
    }
}