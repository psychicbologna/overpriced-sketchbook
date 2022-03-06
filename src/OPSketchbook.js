import React from 'react';
import './OPSketchbook.css';
import Post from './components/Post/Post';
import { STORE } from './STORE';

const Utils = {
  postsList(posts) {
    return posts.map((post, i) =>
      <Post key={i} {...post} />
    )
  },
}

function OPSketchbook() {
  return (
    <div className="OPSketchbook">
      <header className="Header">
        <h1>OP Sketchbook</h1>
      </header>
      <div className="Sidebar">
        <h2>Sidebar</h2>
        <nav className="Sidebar-nav">
          <h2>Navigation</h2>
          <ul className="Sidebar-nav-ul">
            <li className="Sidebar-nav-li">
              Link 1
            </li>
            <li className="Sidebar-nav-li">
              Link 2
            </li>
            <li className="Sidebar-nav-li">
              Link 3
            </li>
          </ul>
        </nav>
      </div>
      <div className="Content">
        {STORE.posts.length ? Utils.postsList(STORE.posts) : null}
      </div>
      <div className="Footer">
        <h2>Footer</h2>
        <ul className="Footer-ul">
          <li className="Footer-li">
            Link to Contact
          </li>
          <li className="Footer-li">
            <a href="https://www.buymeacoffee.com/alexanderfn">Link to Tip Jar</a>
          </li>
          <li className="Footer-li">
            Link to Legal
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OPSketchbook;
