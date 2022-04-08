import { useState } from 'react';
import { Button } from 'antd';
import { mimeType, accept, openFileOptions } from './utils';

/* Demo */
function Demo(props) {
  const [image, setImage] = useState(null);

  // 点击加载图片
  async function handleLoadFileClick(event) {
    try {
      const [fileHandle] = await window.showOpenFilePicker(openFileOptions);
      const file = await fileHandle.getFile();
      const content = await file.arrayBuffer();
      const mime = mimeType(file.name);
      const blob = new Blob([content], { type: mime });

      setImage({
        src: URL.createObjectURL(blob),
        content,
        mime
      });
    } catch (err) {
      console.error(err);
    }
  }

  // 点击保存图片
  async function handleSaveFileClick(event) {
    if (!image) return;

    try {
      const handle = await window.showSaveFilePicker({
        types: [{
          description: '图片',
          accept: {
            [image.mime]: accept[image.mime]
          }
        }]
      });
      const writable = await handle.createWritable();

      await writable.write(image.content);
      await writable.close();
    } catch (err) {
      console.error(err);
    }
  }

  return [
    <Button.Group key="button-group">
      <Button onClick={ handleLoadFileClick }>加载图片</Button>
      <Button onClick={ handleSaveFileClick }>保存图片</Button>
    </Button.Group>,
    <div key="image" className="my-[16px]">
      { image?.src ? <img className="block max-w-full" src={ image.src } /> : null }
    </div>
  ];
}

export default Demo;