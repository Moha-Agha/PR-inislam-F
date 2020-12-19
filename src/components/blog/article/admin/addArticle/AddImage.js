import React, { useState, useEffect } from 'react';

import Input from "../../../../0_0_uiElements/forms/Input";

function AddImage({ handleCallbackImage, handlChildEditImage }) {

    const [imageAltChild, setImageAltChild] = useState();
    const [imageCopyrightChild, setImageCopyrightChild] = useState();

    // dispaly imag
    const [fileSrc, setFileSrc] = useState();

    //image stuff
    useEffect(() => {
        handleCallbackImage('alt', imageAltChild)
        // eslint-disable-next-line
    }, [imageAltChild])
    useEffect(() => {
        handleCallbackImage('copyright', imageCopyrightChild)
        // eslint-disable-next-line
    }, [imageCopyrightChild])

    //send file target info to prossen and display image after selected
    const onChange = e => {
        handlChildEditImage(e.target.files[0]);
        if (e.target.files[0] && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setFileSrc(e.target.result)
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    const onChangeImage = e => {
        switch (e.target.name) {
            case 'image-alt':
                setImageAltChild(e.target.value)
                break;
            default:
            case 'image-copyright':
                setImageCopyrightChild(e.target.value)
                break;
        }
    };

    return (
        <>

            <form  >
                <div class="add-image">
                    <input
                        type='file'
                        name="images"
                        id="images"
                        required="required"
                        onChange={onChange}
                    />
                    <div class="add-image_file-dummy">

                        {fileSrc && <img class="add-image_success" src={fileSrc} alt='blog hero' />}

                        <div class="add-image_default">
                            <p>Please select Hero image</p>
                            <p className="add-image_default_note">Empfohlen W 900px - H 557</p>
                        </div>
                    </div>
                </div>
            </form>


            <div className="message-item">
                <Input
                    id='image-alt'
                    type='text'
                    name='image-alt'
                    value={imageAltChild}
                    onChange={onChangeImage}
                    placeholder='Hero image alt*'
                    required='required'
                    classs=' message-item_input_1 '
                />
            </div>

            <div className="message-item">
                <Input
                    id='image-copyright'
                    type='text'
                    name='image-copyright'
                    value={imageCopyrightChild}
                    onChange={onChangeImage}
                    placeholder='Hero image Quelle*'
                    required='required'
                    classs=' message-item_input_1 '
                />
            </div>
        </>
    )
}

export default AddImage
