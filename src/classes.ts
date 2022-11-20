/* eslint-disable max-classes-per-file */
import { v4 as uuidv4 } from 'uuid';

type ContentType = 'item' | 'media'

interface ApiImage {
    name : string;
}

class Content {
    order! : number;

    id : string;

    title : string;

    constructor() {
        this.title = ''
        this.id = uuidv4()
    }

}

class Item extends Content {
    file : string;

    type : ContentType;
    
    constructor(order : number , file : string){
        super()
        this.order = order
        this.type = 'item'
        this.file = file
    }
}

class Media extends Content {
    type : ContentType;

    media : ApiImage;

    constructor(order : number , media : ApiImage) {
        super()
        this.order = order
        this.type = 'media'
        this.media = media
    }
    
}

export {Content, Item, Media}