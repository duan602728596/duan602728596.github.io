import 'dart:io';
import 'dart:async';
import 'package:flutter/material.dart';

/// 获取图片的尺寸
class ImageSize {
  final String imagePath;
  late ImageStream imageStream;
  late ImageStreamListener listener;

  ImageSize({ required String this.imagePath }) {}

  // 获取尺寸
  Future<Map<String, int>> getSize() {
    Completer<Map<String, int>> completer = Completer();
    late Image image = Image.file(File(imagePath));

    // 监听图片的加载
    listener = ImageStreamListener(
      (ImageInfo info, bool synchronousCall) {
        imageStream.removeListener(listener);

        if (!completer.isCompleted) {
          completer.complete({
            'width': info.image.width,
            'height': info.image.height
          });
        }
      },
      onError: (dynamic exception, StackTrace? stackTrace) {
        imageStream.removeListener(listener);

        if (!completer.isCompleted) {
          completer.completeError(exception, stackTrace);
        }
      });

    imageStream = image.image.resolve(ImageConfiguration());

    imageStream.addListener(listener);

    return completer.future;
  }
}