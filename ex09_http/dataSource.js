import {existsSync, writeFileSync, mkdirSync, readFileSync} from "node:fs";
import{dirname} from "node:path"
export default class DataSource {
    storage = [{id: 1}, {id: 2}];
    dbFile = null;

    constructor(dbFile) {
        this.dbFile = dbFile;
        const dbDir = dirname (this.dbFile);
        if (!existsSync(dbDir)){
            mkdirSync(dbDir, {recursive: true});
        }
        if (existsSync(this.dbFile)){
          this.deserialize();
        } else {
            this.serialize();
        }
    }

    serialize(){
        const dbJSON = JSON.stringify(this.storage);
        writeFileSync(this.dbFile, dbJSON);
    }

    deserialize(){
        const dbJSON = readFileSync(this.dbFile);
        this.storage = JSON.parse(dbJSON);

    }
    getAll() {
        return this.storage;
    }

    create(payload){

        if(!(
            payload.hasOwnProperty('title')
            && payload.hasOwnProperty('author')
            && payload.hasOwnProperty('description'))){
            throw new Error('DB:Create - Whong Payload');
        }

        let id = 1 + Math.max(...this.storage.map((itm) => itm.id));

        const found = this.storage.find((itm) => {
            return itm.id === id;
        });
        
        if(found) {
            throw new Error('DB - Incosistent database!');
        }
        
        this.storage.push({
            id,
            title: payload.name,
            author: payload.author,
            description: payload.description
        });
        this.serialize();
    }
    
    update(id,payload ){

        if(!(
            payload.hasOwnProperty('title')
            || payload.hasOwnProperty('author')
            || payload.hasOwnProperty('description'))){
            throw new Error('DB:Update - Whong Payload');
        }

        const found = this.storage.find((itm) => {
            return itm.id === id;
        });
        
        if(!found) {
            throw new Error('DB:Update - Not Found!');
        }

        const idx = this.storage.indexOf(found);

        const validKeys = ['title', 'author', 'description'];
        const keys = Object.keys(payload);

        for (const key of keys) {
            if(validKeys.includes(key)){
                found[key] = payload[key];
            }
        }

        this.storage[idx] = found;
        this.serialize();
    }

    getOne(id) {
        const found = this.storage.find((itm) => {
            return itm.id === id;
        });
        
        if(!found) {
            throw new Error('DB:GetOne - Not Found!');
        }

        return found;
    }

    delete(id){
        const found = this.storage.find((itm) => {
            return itm.id === id;
        });

        if(!found) {
            throw new Error('DB:Delete - Item not found!');
        }
        const idx = this.storage.indexOf(found);
        this.storage.splice(idx, 1);
        this.serialize();
    }

}