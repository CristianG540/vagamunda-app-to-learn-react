export const parsePath = (file: string): string => {
  if (!file || !file.length || typeof file !== 'string') {
    return '';
  }

  const trimmedPath = file.replace('/src/', '').slice(0, -1);
  const filePath = trimmedPath.split('/');

  return filePath.slice(0, filePath.length - 1).join('/') + '/';
};

export function generateStoryTitle(path: string, name: string): string {
  return parsePath(path) + name;
}
