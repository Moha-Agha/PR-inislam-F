import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Preloader from "../../../../0_1_layout/Preloader";

import Input from "../../../../0_0_uiElements/forms/Input";
import Textarea from "../../../../0_0_uiElements/forms/Textarea";
import Button from "../../../../0_0_uiElements/forms/Button";


import BackTo from "../../../../0_0_uiElements/button/BackTo"

import SectionContext from '../../../../../context/section/sectionContext';


const EditArticle = () => {
  let history = useHistory();
  const sectionContext = useContext(SectionContext)
  const { clearCurrentSection, currentSection, updateSection, loadingSection, error } = sectionContext;

  // article items
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  // set article items from current article
  useEffect(() => {
    if (currentSection !== null) {
      setId(currentSection._id)
      setTitle(currentSection.title);
      setDescription(currentSection.description);
    } else {
      history.push(`section`)
    }
    // eslint-disable-next-line
  }, []);

  // section object
  const sectionFields = {};
  // section is added 
  const [sectionIsAdded, setSectionIsAdded] = useState(false);

  // input handel
  const onChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break;
      default:
      case 'description':
        setDescription(e.target.value)
        break;
    }
  }

  const onSubmit = (e) => {

    e.preventDefault();

    // Build section object
    if (id) sectionFields.id = id;
    if (title) sectionFields.title = title;
    if (description) sectionFields.description = description;

    updateSection(sectionFields);
    console.log(loadingSection);
    if (!loadingSection) setSectionIsAdded(true)
    clearCurrentSection()

    if (error !== null) {
      console.log(error);
    }
  };


  if (loadingSection !== true) {
    return (
      <div className="container ">
        <BackTo to='/section' title='Zurück zum Artikel' />
        <h2 className="title_add-article">Edit Section {sectionIsAdded && 'hinzugefügt'}</h2>
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
                  value='SECTION EDIT'
                  className={'add-article_button-publishing'}
                />
              </div>
            </form >
          )}
      </div>
    )
  } else {
    return <Preloader />
  }


};

export default EditArticle;
