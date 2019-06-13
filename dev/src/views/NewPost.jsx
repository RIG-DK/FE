import React, {useState}from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const NewPost = () => {

    const [body, setBody] = useState("");
    const [title] = useState("Add from app test");
    const [summary] = useState("testing 12345");
    const handleChange = (value) =>  {setBody(value)};

    let makeNew = () => {
        axios.post('http://localhost:3000/posts', {title, summary, body})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err)
        })
    }
  
    return (
        <>
            <ReactQuill 
                value={body}
                onChange={handleChange}
                modules={NewPost.modules}
                formats={NewPost.formats}
                placeholder="what's on your mind?"
            />
            <button onClick={makeNew}>Submit</button>
        </>
    )
}

NewPost.modules = {
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

NewPost.formats = [
'header', 'font', 'size',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image', 'video'
]
  

export default NewPost;