export interface Note {
    title: String;
    description: String;
    orderIndex: Number;
    status: String;
    remind: String;
    color: String;
    createdAt: String;
    updatedAt: String;
    _id: String;
    __v: String;
}

export function createNote(title: String, description: String): Note {
    const newNote = {
      title: title,
      description: description,
      orderIndex: 9999,
      status: 'Active',
      remind: '',
      color: '',
      createdAt: '',
      updatedAt: '',
      _id: '',
      __v: ''
    };
    return newNote;
}
