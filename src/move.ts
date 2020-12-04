import Folder from './models/entities/folder/folder';
import MoveError from './models/error/moveError';

export default function move(list: Folder[], source: string, destination: string): Folder[] {
  // find folder by given source.
  const selectedFolder = list.find((p) => p.files.some((v) => v.id === source));
  //* If selectedFile is null, then throw an error.
  if (selectedFolder === undefined) {
    throw new MoveError('You cannot move a folder');
  }

  // find destination folder.
  const destinationFolder = list.find((p) => p.id === destination);
  //* If destination is null, then throw an error.
  if (destinationFolder === undefined) {
    throw new MoveError('You cannot specify a file as the destination');
  }

  // find source file.
  const selectedFileIndex = selectedFolder.files.findIndex((p) => p.id === source);
  const selectedFile = selectedFolder?.files[selectedFileIndex];

  destinationFolder.files.push(selectedFile);

  selectedFolder.files.splice(selectedFileIndex, 1);

  return list;
}
