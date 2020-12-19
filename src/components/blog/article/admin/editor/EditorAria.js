import React, { useRef } from 'react';

const EditorAria = (props) => {

    const editorAria = useRef(null);

    const modifyingSelection = () => {

        if (editorAria.current.selectionStart === editorAria.current.selectionEnd) return; // nothing is selected

        let selected = editorAria.current.value.slice(editorAria.current.selectionStart, editorAria.current.selectionEnd);
        editorAria.current.setRangeText(`*${selected}*`);
    };

    return (
        <>
            <div
                id='editor-aria'
                ref={editorAria}
                className="editor-aria"
                contentEditable="true">
            </div >

            <button type='button' onClick={modifyingSelection}>Wrap selection</button>
        </>
    );
}





function transform() {
    document.execCommand("bold");
    // "backColor" "bold" "createLink" "copy"
    // "cut" "defaultParagraphSeparator" "delete" "fontName"
    // "fontSize" "foreColor" "formatBlock" "forwardDelete"
    // "insertHorizontalRule" "insertHTML" "insertImage"
    // "insertLineBreak" "insertOrderedList" "insertParagraph"
    // "insertText" "insertUnorderedList" "justifyCenter"
    // "justifyFull" "justifyLeft" "justifyRight"
    // "outdent" "paste" "redo" "selectAll"
    // "strikethrough" "styleWithCss" "subscript"
    // "superscript" "undo" "unlink""useCSS"
}


function randWord() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const chars = (new Array(26)).fill(0).map((e, i) => String.fromCharCode(alphabets.charCodeAt(i)))
    const len = Math.floor(Math.random() * 10) + 1
    const word = (new Array(len)).fill(0).map((e, i) => alphabets[Math.floor(Math.random() * alphabets.length)])
    return word.join('')
}

export default EditorAria;