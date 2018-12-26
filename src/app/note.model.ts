export class Note {
    public title: String;
    public description: String;
    public status: String;
    public remind: String;
    public color: String;
    constructor(title: String, description: String) {
      this.title = title;
      this.description = description;
      this.status = 'Active';
      this.remind = '';
      this.color = '';
    }
}