import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Content from './components/Content';
import Category from './components/Category';
import fetchCategories from './store/categories/actions';
import fetchList from './store/list/actions';
import fetchContentData from './store/contentData/actions';
import './App.css';

const App = ({ getCategories, categories, title, headerLogo, list, getList, getContentData, contentData }) => {
  useEffect(() => {
    getCategories();
    getList();
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contentDisplay, setContentDisplay] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [content, setContent] = useState(null); 
  const [searchInput, setSearchInput] = useState(null); 
  const [searchContent, setSearchContent] = useState(null);
  const [downloadContent, setDownloadContent] = useState([]);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
    setContentDisplay(contentDisplay ? '' : 'content-wrapper')
  }

  const handleContentChange = (name) => {
    const content = list.filter(data => data.catName === name);
    setContent(...content);
    setCategoryName(name);
    setSearchInput(null);
    setSearchContent(null);
  }

  const handleSearch = (input) => {
    const content = [];
    list.map(data => data.contentInf.map(item => {
      if (item.name.toLowerCase().split(' ').includes(input.toLowerCase())) {
        content.push(item);
      };
    }));
    setSearchContent(content);
    setSearchInput(input);
  }

  const viewContent = (id) => {
    getContentData(id);
    setDownloadContent({
      ...downloadContent,
      contentData,
    })
  }

  return (
    <div className="app">
      <Header handleSidebar={handleSidebarOpen} logo={headerLogo} title={title} handleSearch={handleSearch} />
      {sidebarOpen && (
        <div className="sidenav">
          {categories.legnth !== 0 && categories.map(category => (
            <Category 
              key={category.name} 
              name={category.name} 
              handleClick={() => handleContentChange(category.name)} 
            />
          ))}
        </div>
      )}
      <div className={contentDisplay}>
        {searchContent ? (
          <div className='flexbox'>
            {searchContent.map(item => (
              <Content
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description} 
                image={item.image}
              />
            ))}
          </div>
          ) : (
          <>
            <h1 className="title">{categoryName}</h1>
            {content && (
              <div>
                <p>{content.description}</p>
                <div className='flexbox'>
                  {content.contentInf.map(item => (
                    <Content
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description} 
                      image={item.image}
                      viewContent={() => viewContent(item.id)}
                    />
                  ))}
                </div>  
              </div>  
            )}
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ categories, title, headerLogo, list, contentData }) => {
  return {
    ...categories,
    ...title,
    ...headerLogo,
    ...list,
    ...contentData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories()),
    getList: () => dispatch(fetchList()),
    getContentData: (id) => dispatch(fetchContentData(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
