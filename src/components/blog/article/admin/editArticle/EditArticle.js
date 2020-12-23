import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Preloader from "../../../../0_1_layout/Preloader";

import Input from "../../../../0_0_uiElements/forms/Input";
import Select from "../../../../0_0_uiElements/forms/Select";
import Button from "../../../../0_0_uiElements/forms/Button";

import EditImage from "./EditImage";
import TextEditor from "../editor/TextEditor";

import BackTo from "../../../../0_0_uiElements/button/BackTo"

import SectionContext from '../../../../../context/section/sectionContext';
import ArticleContext from '../../../../../context/article/articleContext';

import { API } from '../../../../../utils/variables';

const EditArticle = () => {
  let history = useHistory();
  const sectionContext = useContext(SectionContext)
  const { getSections, loadingSection, sections } = sectionContext;

  const articleContext = useContext(ArticleContext)
  const { updateArticle, loadingArticle, clearCurrentArticle, currentArticle, error } = articleContext;

  // article items
  const [id, setId] = useState('');
  const [section, setSection] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [articleBody, setArticleBody] = useState('');
  // // image items
  const [image, setImage] = useState({});
  const [imageAlt, setImageAlt] = useState({});
  const [imageCopyright, setImageCopyright] = useState({});

  const [tag, setTag] = useState('');

  const [socialMedia, setSocialMedia] = useState({ youtube: '', spotify: '' });
  const { youtube, spotify } = socialMedia;

  // set article items from current article
  useEffect(() => {
    if (currentArticle !== null) {
      setId(currentArticle._id)
      setSection(currentArticle.section);
      setTitle(currentArticle.title);
      setSubtitle(currentArticle.subtitle);
      setArticleBody(currentArticle.articleBody);

      setImage(currentArticle.heroImage.image);
      setImageAlt(currentArticle.heroImage.alt);
      setImageCopyright(currentArticle.heroImage.copyright);

      setTag(currentArticle.tags[1]);
      setSocialMedia(currentArticle.socialMedia);

      getSections();

      setLoading(true)
    } else {
      history.push(`article`)
    }
    // eslint-disable-next-line
  }, []);

  // article object
  const articleFields = {};

  // child componant Upload Image 
  const [childEditImage, setChildEditImage] = useState();
  // Article is added 
  const [articleIsAdded, setArticleIsAdded] = useState(false);
  // if set Article item is done
  const [loading, setLoading] = useState(false);

  // input handel
  const onChange = e => {
    switch (e.target.name) {
      case 'section':
        setSection(e.target.value)
        break;
      case 'tags':
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
      default:
      case 'subtitle':
        setSubtitle(e.target.value)
        break;
    }
  }

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
      // chanch heroImage.image 
      setImage(fileId);
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
    // if user update hero image.
    handleEditImage(childEditImage).then((fileId) => {

      // Build article object
      if (id) articleFields.id = id;

      articleFields.tags = new Array([]);
      if (section) {
        articleFields.section = section;
        articleFields.tags[0] = section;
      }
      if (section !== tag) articleFields.tags[1] = tag;

      if (socialMedia) articleFields.socialMedia = socialMedia;
      if (title) articleFields.title = title;
      if (subtitle) articleFields.subtitle = subtitle;
      if (articleBody) articleFields.articleBody = articleBody;
      articleFields.likes = currentArticle.likes;
      articleFields.views = currentArticle.views;
      //  image opject
      articleFields.heroImage = {};
      if (fileId) { articleFields.heroImage.image = fileId } else {
        if (image) articleFields.heroImage.image = image;
      }
      if (imageAlt) articleFields.heroImage.alt = imageAlt;
      if (imageCopyright) articleFields.heroImage.copyright = imageCopyright;

      updateArticle(articleFields);

      if (!loadingArticle) setArticleIsAdded(true)
      clearCurrentArticle()
    }).catch((err) => {
      console.log(err);
    })

    if (error !== null) {
      console.log(error);
    }
  };

  const sectionOptions = sections

  if (loading && loadingSection !== true) {
    return (
      <div className="container ">
        <BackTo to='/article' title='Zurück zum Artikel' />
        <h2 className="title_add-article">Edit Artikel {articleIsAdded && 'hinzugefügt'}</h2>
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
                    value={articleBody}
                  />
                </div>
              </div>

              <div className='add-article_side'>
                < EditImage handleCallbackImage={handleCallbackImage} handlChildEditImage={handlChildEditImage} image={image} imageAlt={imageAlt} imageCopyright={imageCopyright} />
                <br />
                <div className="message-item">
                  <Select
                    id='section'
                    name='section'
                    value={section}
                    currentValue={section}
                    onChange={onChange}
                    placeholder='Section*'
                    required='required'
                    classs='  message-item_input_3 '
                    options={sectionOptions && sectionOptions}
                  />
                </div>
                <div className="message-item">
                  <Select
                    id='tags'
                    name='tags'
                    value={tag}
                    currentValue={tag}
                    onChange={onChange}
                    placeholder='Tag*'
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
