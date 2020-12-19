import React, { useEffect, useState } from 'react';

import ReactQuill from 'react-quill';
import '../../../../../../node_modules/react-quill/dist/quill.snow.css';


const TextEditor = ({ handleArticleBody, value = 'Write something amazing' }) => {

    const QuillModules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
            ['code-block']
        ]
    };

    const QuillFormats = [
        'header',
        'font',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'video',
        'code-block'
    ];

    const [articleBody, setArticleBody] = useState(value);

    useEffect(() => {
        setArticleBody(value)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        handleArticleBody(articleBody)
        // eslint-disable-next-line
    }, [articleBody])

    const handleBody = e => {
        setArticleBody(e)
    };

    return (
        < div className='editor-body'>
            <ReactQuill
                modules={QuillModules}
                formats={QuillFormats}
                value={articleBody}
                onChange={handleBody}
            />

        </div>
    );
}


export default TextEditor;


