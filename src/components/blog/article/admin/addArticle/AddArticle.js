import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Preloader from "../../../../0_1_layout/Preloader";

import Input from "../../../../0_0_uiElements/forms/Input";
import Select from "../../../../0_0_uiElements/forms/Select";
import Button from "../../../../0_0_uiElements/forms/Button";

import AddImage from "./AddImage";
import TextEditor from "../editor/TextEditor";

import BackTo from "../../../../0_0_uiElements/button/BackTo"

import SectionContext from '../../../../../context/section/sectionContext';
import ArticleContext from '../../../../../context/article/articleContext';

import { API } from '../../../../../utils/variables';

const AddArticle = () => {

  // article items
  const [section, setSection] = useState('');
  const [title, setTitle] = useState();
  const [slug, setSlug] = useState();
  const [subtitle, setSubtitle] = useState();
  const [articleBody, setArticleBody] = useState('');

  // // image items
  const [image, setImage] = useState({});
  const [imageAlt, setImageAlt] = useState({});
  const [imageCopyright, setImageCopyright] = useState({});

  const [tag, setTag] = useState(null);
  const [socialMedia, setSocialMedia] = useState({ youtube: '', spotify: '' });

  const { youtube, spotify } = socialMedia;

  // Build article object
  const articleFields = {};
  // submit button is on
  const [submitButton, setSubmitButton] = useState(false);
  // child componant Upload Image 
  const [childEditImage, setChildEditImage] = useState();
  // Article is added 
  const [articleIsAdded, setArticleIsAdded] = useState(false);

  const sectionContext = useContext(SectionContext)
  const { getSections, loadingSection, sections } = sectionContext;

  const articleContext = useContext(ArticleContext)
  const { addArticle, loadingArticle, error } = articleContext;

  useEffect(() => {
    getSections();
    // eslint-disable-next-line
  }, [])

  //turn submit Button on
  useEffect(() => {
    //If all fields are filled
    if (title &&
      slug &&
      subtitle &&
      articleBody &&
      section &&
      image &&
      imageAlt &&
      imageCopyright) {
      setSubmitButton(true)
    }
    // eslint-disable-next-line
  }, [title, slug, subtitle, articleBody, section, image, imageAlt, imageCopyright])

  //add input values
  const onChange = e => {
    switch (e.target.name) {
      case 'section':
        setSection(e.target.value)
        break;
      case 'tag':
        if (section) {
          section === e.target.value ? setTag(null) : setTag(e.target.value)
        }
        break;
      case 'youtube':
      case 'spotify':
        setSocialMedia({ ...socialMedia, [e.target.name]: e.target.value })
        break;
      case 'title':
        setTitle(e.target.value)
        break;
      case 'slug':
        setSlug(e.target.value)
        break;
      default:
      case 'subtitle':
        setSubtitle(e.target.value)
        break;
    }
  }

  // add image values
  const handleCallbackImage = (type, vallue) => {
    switch (type) {
      case 'image':
        setImage(vallue);
        break;
      case 'alt':
        setImageAlt(vallue);
        break;
      default:
      case 'copyright':
        setImageCopyright(vallue);
        break;
    }
  }

  const handlChildEditImage = (file) => { setChildEditImage(file) }

  const handleEditImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post(`${API}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { fileId } = res.data;
      return fileId
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }

  }

  const handleArticleBody = (articleBodyChild) => { setArticleBody(articleBodyChild) }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!submitButton) return

    // upload the image and then the rest of the article opject items
    handleEditImage(childEditImage).then((fileId) => {
      // have we the image id?

      articleFields.tags = new Array([]);
      if (section) {
        articleFields.section = section;
        articleFields.tags[0] = section;
      }
      if (section !== tag) articleFields.tags[1] = tag;
      if (socialMedia) articleFields.socialMedia = socialMedia;
      if (title) articleFields.title = title;
      if (slug) articleFields.slug = slug;
      if (subtitle) articleFields.subtitle = subtitle;
      if (articleBody) articleFields.articleBody = articleBody;
      articleFields.likes = 0;
      articleFields.views = 0;
      //  image opject
      articleFields.heroImage = {};
      if (fileId) articleFields.heroImage.image = fileId;
      if (imageAlt) articleFields.heroImage.alt = imageAlt;
      if (imageCopyright) articleFields.heroImage.copyright = imageCopyright;

      addArticle(articleFields);
      if (!loadingArticle) setArticleIsAdded(true)
    })

    if (error !== null) {
      console.log(error);
    }
  };

  const sectionOptions = sections

  if (loadingSection) {
    return <Preloader />
  } else {
    return (
      <div className="container ">
        <BackTo to='/article' title='Zurück zum Artikel' />
        <h2 className="title_add-article">Neuer Artikel {articleIsAdded && 'hinzugefügt'}</h2>
        {articleIsAdded ? null :
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
                  <Input
                    id='subtitle'
                    type='text'
                    name='subtitle'
                    value={subtitle}
                    onChange={onChange}
                    placeholder='subtitle*'
                    required='required'
                    classs=' message-item_input_1 '
                  />
                </div>
                <div className="message-item">
                  <TextEditor
                    handleArticleBody={handleArticleBody}
                  />
                </div>
              </div>

              <div className='add-article_side'>

                < AddImage handleCallbackImage={handleCallbackImage} handlChildEditImage={handlChildEditImage} />
                <br />
                <div className="message-item">
                  <Select
                    id='section'
                    name='section'
                    value={section}
                    onChange={onChange}
                    placeholder='Wahl section aus'
                    required='required'
                    classs='  message-item_input_3 '
                    options={sectionOptions && sectionOptions}
                  />
                </div>
                <div className="message-item">
                  <Select
                    name='tag'
                    value={tag}
                    onChange={onChange}
                    placeholder='Wahl tag aus'
                    classs='  message-item_input_3 '
                    options={sectionOptions && sectionOptions}
                  />
                </div>
                <div className="message-item">
                  <Input
                    id='youtube'
                    type='text'
                    name='youtube'
                    placeholder='youtube Link'
                    value={youtube}
                    onChange={onChange}
                    classs=' message-item_input_1 '
                  />
                </div>
                <div className="message-item">
                  <Input
                    id='spotify'
                    type='text'
                    name='spotify'
                    placeholder='spotify Link'
                    value={spotify}
                    onChange={onChange}
                    classs=' message-item_input_1 '
                  />
                </div>

                <Button
                  type='submit'
                  value='ARTIKEL VERÖFFENTLICHEN'
                  className={submitButton ? 'add-article_button-publishing' : 'add-article_button-publishing_disable'}
                />
              </div>

            </form >
          )}


      </div>
    )
  }


};

export default AddArticle;
