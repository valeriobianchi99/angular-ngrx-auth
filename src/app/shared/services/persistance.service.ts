import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {

    constructor(){}

    public set(key: string, data: any) : void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (error) {
            console.error(`Error saving ${key} to locaStorage`, error); 
        }
    }

    public get(key: string, data: any) : any {
        try {
            return JSON.parse(JSON.stringify(localStorage.getItem(key)))
        } catch (error) {
            console.error(`Error reading ${key} from locaStorage`, error); 
            return null
        }
    }

}