import 'package:flutter/material.dart';
import './code_highlighting_controller.dart';

final CodeHighlightingController _controller = CodeHighlightingController();

class Form extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: _controller,
      autofocus: true,
      minLines: 5,
      maxLines: null,
      keyboardType: TextInputType.multiline,
      textInputAction: TextInputAction.newline,
      decoration: InputDecoration.collapsed(hintText: '请输入...'),
    );
  }
}