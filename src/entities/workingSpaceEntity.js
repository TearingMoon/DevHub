class workingSpaceEntity {
    constructor(ID, Name, Description, Image, IsFavourite) {
        this.ID = ID;
        this.IsFavourite = IsFavourite;
        this.Name = Name;
        this.Description = Description;
        this.Image = Image;
    }
}
module.exports = workingSpaceEntity;