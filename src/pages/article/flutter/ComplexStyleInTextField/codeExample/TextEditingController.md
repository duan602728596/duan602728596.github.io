import 'package:flutter/material.dart';

/* 保证输入框tag高亮的控制器 */
class CodeHighlightingController extends TextEditingController {
  /// 代码高亮
  /// @param { String } text: 文字
  List<TextSpan> codeHighlighting(BuildContext context, String text) {
    List<TextSpan> list = [];
    List<int> tagIndex = [];
    int textLength = text.length;

    // 获取"#"的index
    for (int i = 0; i < textLength; i++) {
      if (text[i] == '#') {
        tagIndex.add(tagIndex.length % 2 == 0 ? i : (i + 1));
      }
    }

    // 奇数时删除数组最后一位，保证区间的完整
    if (tagIndex.length % 2 != 0) {
      tagIndex.removeLast();
    }

    if (tagIndex.length == 0) {
      // 没有tag，不需要处理
      list.add(TextSpan(text: text, style: TextStyle(color: Colors.black)));
    } else {
      // 处理tag第一位
      if (tagIndex[0] != 0) {
        list.add(TextSpan(
          text: text.substring(0, tagIndex[0]),
          style: TextStyle(color: Colors.black)
        ));
      }

      for (int i = 0; i < tagIndex.length; i++) {
        int startIndex = tagIndex[i];
        int endIndex = i == (tagIndex.length - 1) ? textLength : tagIndex[i + 1];

        if (startIndex != endIndex) {
          bool isLight = i % 2 == 0;
          String tagText = text.substring(startIndex, endIndex);

          if (tagText != '') {
            String componentText = text.substring(startIndex, endIndex);

            if (isLight) {
              list.add(TextSpan(
                text: componentText,
                style: TextStyle(color: Colors.blue)
              ));
            } else {
              list.add(TextSpan(
                text: componentText,
                style: TextStyle(color: Colors.black)
              ));
            }
          }
        }
      }
    }

    return list;
  }

  @override
  TextSpan buildTextSpan({
    required BuildContext context,
    required bool withComposing,
    TextStyle? style
  }) {
    return TextSpan(children: codeHighlighting(context, text));
  }
}