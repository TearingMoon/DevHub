export class workingSpaceEntity {
    ID: string;
    Name: string;
    Description: string;
    Image: image;
    constructor(ID: string, Name: string, Description: string, Image: image) {
        this.ID = ID;
        this.Name = Name;
        this.Description = Description;
        this.Image = Image;
    }
}

class image {
    Base64: string;
    Extension: string;

}