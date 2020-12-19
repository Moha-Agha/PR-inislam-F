import React, { useEffect, useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = ({ handleArticleBody }) => {

    const [articleBody, setArticleBody] = useState('');

    const onChange = (event, editor) => {
        setArticleBody(editor.getData())
    }

    useEffect(() => {
        handleArticleBody(articleBody)
    }, [articleBody])

    return (
        < div className='editor-body'>
            <CKEditor
                editor={ClassicEditor}
                data={articleBody}
                onChange={onChange}
            />

            <div>{articleBody}</div>
        </div>
    );
}


export default TextEditor;