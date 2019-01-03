export class Note {
    public title: String;
    public description: String;
    public status: String;
    public remind: String;
    public color: String;
    public createdAt: String;
    public updatedAt: String;
    public orderIndex: Number;
    public _id: String;
    public __v: String;
    constructor(title: String, description: String) {
      this.title = title;
      this.description = description;
      this.status = 'Active';
      this.remind = '';
      this.color = '';
      this.orderIndex = 9999;
    }
}
