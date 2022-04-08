/**
 * 获取类型
 * @param { string } filename: 文件名
 */
export function mimeType(filename) {
  const ext = filename.match(/\.[a-zA-Z0-9]+$/);

  if (!ext) {
    return null;
  }

  switch (ext[0]) {
    case '.png':
      return 'image/png';

    case '.jpg':
    case '.jpeg':
      return 'image/png';

    case '.webp':
      return 'image/webp';

    case '.avif':
      return 'image/avif';
  }
}

export const accept = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpeg', '.jpg'],
  'image/webp': ['.webp'],
  'image/avif': ['.avif']
};

export const openFileOptions = {
  types: [{
    description: '图片',
    accept
  }]
};