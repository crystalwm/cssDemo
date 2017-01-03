# 上传并显示图片

## FileReader
用来把文件读入内存，并且读取文件中的数据。
FileReader接口提供了一个异步API，使用该API可以在浏览器主线程中异步访问文件系统，读取文件中的数据。

| 方法名       |     参数 |   描述   |
| :-------- | :--------| :------ |
| readAsBinaryString    |   file | 将文件读取为二进制编码  |
| readAsText    |   file,[encoding] |  将文件读取为文本  |
| readAsDataURL    |   file |  	将文件读取为DataURL  |
| abort    |   (none) |  终端读取操作  |


| 事件       |     描述 |
| :-------- | :--------|
| onabort    |   中断 |
| onerror    |   出错 |
| onloadstart    |   开始 |
| onprogress    |  正在读取 |
| onload    |  成功读取 |
| onloadend    |  读取完成，无论成功失败 |



[API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)


## elementNode.insertBefore

insertBefore() 方法在您指定的已有子节点之前插入新的子节点。



