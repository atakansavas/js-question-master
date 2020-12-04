import File from './file';

interface Folder {
  id: string;
  name: string;
  files: File[];
}

export default Folder;
