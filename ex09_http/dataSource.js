export default class DataSource {
   
    dbFile = null;

    constructor(dbFile) {
        this.dbFile = dbFile;
        const dbDir = dirname (this.dbFile);

        if (!existsSync(dbDir)){
            mkdirSync(dbDir, {recursive: true});
        }

        if (existsSync(this.dbFile)){
          this.deserialize();
           //???
        } else {
            this.serialize();
        }
    }
    
    serialize(){
        const dbJSON = JSON.stringify(this.storage);
        writeFileSync(this.dbFile, dbJSON);

    }

    deserialize(){
        const dbJSON = readFileSync

    }



    debug() {
        console.log('debug: this.dbFile', this.dbFile);
    }
}