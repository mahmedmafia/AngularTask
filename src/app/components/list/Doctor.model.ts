export class Doctor {
    public id: number;
    public name: string;
    public rating: number;
    public jobTitle: string;
    public address: string;
    public imagePath: string
    constructor(id: number, name: string, rating: number, jobTitle: string, address: string, imgPath: string) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.jobTitle = jobTitle;
        this.address = address;
        this.imagePath = imgPath;
    }
}