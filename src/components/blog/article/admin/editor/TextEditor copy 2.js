import React, { useEffect, useState } from 'react';

import EditorAria from './EditorAria';

const TextEditor = ({ handleArticleBody }) => {

    const [articleBody, setArticleBody] = useState('');

    const onChange = (e) => {
        setArticleBody(e.currentTarget.textContent)
    }

    useEffect(() => {
        handleArticleBody(articleBody)
    }, [articleBody])

    return (
        <div className="text-editor_container">
            <div className='text-editor_tools'>

                <div className='text-editor_tools-block'>
                    <i className='aicon-header ' />
                    <select id="header-size" className=''>
                        <option value="header-one">1</option>
                        <option value="header-two">2</option>
                        <option value="header-three">3</option>
                        <option value="header-four">4</option>
                        <option value="header-five">5</option>
                        <option value="header-six">6</option>
                    </select>
                </div>

                <div className='text-editor_tools-block'>
                    <button type="button" className='editor_tool' data-command="bold"><i className='aicon-bold' /></button>
                    <button type="button" className='editor_tool' data-command="italic"><i className='aicon-italicize-text' /></button>
                    <button type="button" className='editor_tool' data-command="strikethrough"><i className='aicon-strikethrough' /></button>
                    <button type="button" className='editor_tool' data-command="underline"><i className='aicon-underline-text-option' /></button>
                </div>

                <div className='text-editor_tools-block'>

                    <button type="button" className='editor_tool' data-command='justifyLeft' ><i className='aicon-align-to-left' /></button>
                    <button type="button" className='editor_tool' data-command='justifyCenter' ><i className='aicon-center-align' /></button>
                    <button type="button" className='right editor_tool' data-command='justifyRight' ><i className='aicon-align-to-left' /></button>

                </div>

                <div className='text-editor_tools-block'>
                    <button type="button" className='editor_tool' data-command="insertOrderedList" ><i className='aicon-list' /></button>
                    <button type="button" className='editor_tool' data-command="insertUnorderedList" ><i className='aicon-listing-option' /></button>
                </div>

                <div className='text-editor_tools-block'>
                    <button type="button" className='editor_tool' data-command="createlink" ><i className='aicon-link' /></button>
                    <button type="button" className='editor_tool' data-command="quotationMark" ><i className='aicon-right-quotation-mark' /></button>
                    <button type="button" className='editor_tool' data-command="image" ><i className='aicon-image' /></button>
                </div>

            </div>

            <div
                id='editor-aria'
                value={articleBody}
                onInput={onChange}
                className="editor-aria"
                contentEditable="true"
                suppressContentEditableWarning={true}
            />


        </div>
    );
}


export default TextEditor;