import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

class MyEditor extends React.Component {
    constructor(props) {
      super(props)
      this.state = { text: '' } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(value) {
      this.setState({ text: value })
    }
  
    render() {
      return (
        <ReactQuill 
            value={this.state.text}
            onChange={this.handleChange}
        />
      )
    }
  }
  
/* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
*/

  MyEditor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  MyEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  

export default MyEditor;