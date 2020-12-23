import React, { useState, useContext, useEffect } from "react";

import Preloader from "../../../../0_1_layout/Preloader";

import Input from "../../../../0_0_uiElements/forms/Input";
import Textarea from "../../../../0_0_uiElements/forms/Textarea";
import Button from "../../../../0_0_uiElements/forms/Button";

import BackTo from "../../../../0_0_uiElements/button/BackTo"

import SectionContext from '../../../../../context/section/sectionContext';

const AddSection = () => {

  // section items
  const [title, setTitle] = useState();
  const [slug, setSlug] = useState();
  const [description, setDescription] = useState();

  // Build article object
  const sectionFields = {};
  // submit button is on
  const [submitButton, setSubmitButton] = useState(false);
  // section is added 
  const [sectionIsAdded, setSectionIsAdded] = useState(false);

  const sectionContext = useContext(SectionContext)
  const { addSection, getSections, loadingSection, error } = sectionContext;


  useEffect(() => {
    getSections();
    // eslint-disable-next-line
  }, [])

  //turn submit Button on
  useEffect(() => {
    //If all fields are filled
    if (title &&
      description) {
      setSubmitButton(true)
    }
    // eslint-disable-next-line
  }, [title, description])

  //add input values
  const onChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break;
      case 'slug':
        setSlug(e.target.value)
        break;
      default:
      case 'description':
        setDescription(e.target.value)
        break;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!submitButton) return

    if (title) sectionFields.title = title;
    if (slug) sectionFields.slug = slug;
    if (description) sectionFields.description = description;


    addSection(sectionFields);
    if (!loadingSection) setSectionIsAdded(true)

    if (error !== null) {
      console.log(error);
    }
  };


  if (loadingSection) {
    return <Preloader />
  } else {
    return (
      <div className="container ">
        <BackTo to='/section' title='Zurück zum Sctions' />
        <h2 className="title_add-article">Neuer Section {sectionIsAdded && 'hinzugefügt'}</h2>
        {sectionIsAdded ? null :
          (
            <form onSubmit={onSubmit} className='add-article' >

              <div className='add-article_side'>
                <div className="message-item">
                  <Input
                    id='title'
                    type='text'
                    name='title'
                    value={title}
                    onChange={onChange}
                    placeholder='title*'
                    required='required'
                    classs=' message-item_input_1 '
                  />
                </div>
                <div className="message-item">
                  <Input
                    id='slug'
                    type='text'
                    name='slug'
                    value={slug}
                    onChange={onChange}
                    placeholder='slug*'
                    required='required'
                    classs=' message-item_input_1 '
                  />
                </div>

                <div className="message-item">
                  <Textarea
                    id='description'
                    name='description'
                    value={description}
                    onChange={onChange}
                    placeholder='description...'
                    classs='  message-item_input_5 '
                  />
                </div>

                <Button
                  type='submit'
                  value='SECTION VERÖFFENTLICHEN'
                  className={submitButton ? 'add-article_button-publishing' : 'add-article_button-publishing_disable'}
                />
              </div>

            </form >
          )}


      </div>
    )
  }


};

export default AddSection;
