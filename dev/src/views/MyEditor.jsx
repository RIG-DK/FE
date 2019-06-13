import React, {useState}from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const MyEditor = () => {

    const [text, setText] = useState("");
    const handleChange = (value) =>  {setText(value)};
  
    return (
        <ReactQuill 
            value={text}
            onChange={handleChange}
            modules={MyEditor.modules}
            formats={MyEditor.formats}
            placeholder="what's on your mind, Don?"
        />
    )
}

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
        matchVisual: true,
    }
}

MyEditor.formats = [
'header', 'font', 'size',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image', 'video'
]
  

export default MyEditor;