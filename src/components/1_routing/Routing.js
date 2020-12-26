import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../0_1_layout/navbar/Navbar';
import Footer from '../0_1_layout/footer/Footer';

import PageNotFound from '../0_1_layout/errorPages/PageNotFound';

import Blog from '../blog/Blog';
import Sections from '../blog/section/Sections';
import Section from '../blog/section/Section';
import Article from '../blog/article/Article';

import NewMuslim from '../blog/newMuslim/NewMuslim';

import Alerts from '../0_1_layout/Alerts';
import ScrollToTopButton from '../0_0_uiElements/button/ScrollToTopButton';

import PrivateRoute from '../1_routing/PrivateRoute';

//other pages
import Privacy from '../privacy/Privacy';
import Imprint from '../imprint/Imprint';
import Conditions from '../conditions/Conditions';

// admin
import Messages from '../messages/Messages';
import AdminSection from '../blog/section/admin/AdminSection';
import AddSection from '../blog/section/admin/addSection/AddSection';
import EditSection from '../blog/section/admin/editSection/EditSection';
import AdminArticle from '../blog/article/admin/AdminArticle';
import AddArticle from '../blog/article/admin/addArticle/AddArticle';
import EditArticle from '../blog/article/admin/editArticle/EditArticle';
import AdminImages from '../blog/images/admin/AdminImages';

const Routing = () => {


  return (
    <Router>
      <ScrollToTopButton />
      <div className="container">
        <Navbar />
      </div>

      <Alerts />

      <Switch>

        <Route exact path='/' component={Blog} />
        <Route exact path='/new-muslim' component={NewMuslim} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/section/:name' component={Section} />
        <Route exact path='/sections' component={Sections} />
        <Route exact path='/article/:slug' component={Article} />
        {/* other pages */}
        <Route exact path='/privacy' component={Privacy} />
        <Route exact path='/imprint' component={Imprint} />
        <Route exact path='/conditions' component={Conditions} />
        {/* Admin */}
        <PrivateRoute exact path='/messages' component={Messages} />
        <PrivateRoute exact path='/section' component={AdminSection} />
        <PrivateRoute exact path='/new-section' component={AddSection} />
        <PrivateRoute exact path='/edit-section' component={EditSection} />
        <PrivateRoute exact path='/article' component={AdminArticle} />
        <PrivateRoute exact path='/new-article' component={AddArticle} />
        <PrivateRoute exact path='/edit-article' component={EditArticle} />
        <PrivateRoute exact path='/images' component={AdminImages} />

        <Route path='*' component={PageNotFound} />
      </Switch>

      <div className="container">
        <Footer />
      </div>
    </Router>
  );
};

export default Routing;
