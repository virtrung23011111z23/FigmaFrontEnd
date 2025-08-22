
import './App.css'
import '../public/main.css'
import { Header } from './compoment/Header'
import { Footer } from './compoment/Footer'
function App() {
  return (
    <>
      <Header />
        <div className="landing-page">
          <h1>Landing page title</h1>
          <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling. </p>
          <button>Button</button>
        </div>
      <div className="wrapper">
        <div className="imgHero">
          <img src="../src/assets/img/HeroImage.png" />
        </div>
      </div>
      <div className="wrapprGird3">
        <div className="section-heading">
          <h2>Section heading</h2>
          <div className="section_grid">
            <div className="section_grid_items">
              <img src="../src/assets/img/selection2.png" />
              <div className="section_gird_items_info">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to add more to the subheading. </p>
              </div>
            </div>
            <div className="section_grid_items">
              <img src="../src/assets/img/selection1.png" />
              <div className="section_gird_items_info">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to expand on the main point. </p>
              </div>
            </div>
            <div className="section_grid_items">
              <img src="../src/assets/img/selection3.png" />
              <div className="section_gird_items_info">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to share more. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className='home-about'>
          <div className="home-about_content">
            <h2>Section heading</h2>
            <div className="home-about_content_container">
              <div className="home-about_content_des">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to expand on the main point. </p>
              </div>
              <div className="home-about_content_des">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes. </p>
              </div>
              <div className="home-about_content_des">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to add more to the main point. It provides details, explanations, and context. </p>
              </div>
            </div>
            <div className="home-about_content_button">
              <button className='btn-main'>Button</button>
              <button className='btn-secondary'>Secondary button</button>
            </div>
          </div>
          <div className="home-about_img">
            <img src='../src/assets/img/AboutImage.png' alt="About Us" />
          </div>
        </div>
      </div>
      <div className="wrapprGird3">
        <div className="home-news">
          <h2>Section heading</h2>
          <div className="home-news_list">
            <div className="home-news_list_items">
              <img src='../src/assets/img/HomeNews1.png' alt='Img-news' />
              <div className="home-news_list_item_content">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to add more to the subheading. </p>
              </div>
            </div>
            <div className="home-news_list_items">
              <img src='../src/assets/img/HomeNews2.png' alt='Img-news' />
              <div className="home-news_list_item_content">
                <h4>Subheading</h4>
                <p>Body text for whatever you’d like to expand on the main point. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-feedback">
          <h2>Section heading</h2>
          <div className="home-feedback_list">
            <div className="home-feedback_list_item">
              <span>“A terrific piece of praise”</span>
              <div className="home-feedback_list_item_client">
                <img src='../src/assets/img/Avatar1.png' alt="avatar client" />
                <div className="home-feedback_list_item_client_info">
                  <h5>Name</h5>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="home-feedback_list_item">
              <span>“A fantastic bit of feedback”</span>
              <div className="home-feedback_list_item_client">
                <img src='../src/assets/img/Avatar.png' alt="avatar client" />
                <div className="home-feedback_list_item_client_info">
                  <h5>Name</h5>
                  <p>Description</p>
                </div>
              </div>
            </div>
            <div className="home-feedback_list_item">
              <span>“A genuinely glowing review”</span>
              <div className="home-feedback_list_item_client">
                <img src='../src/assets/img/Avatar2.png' alt="avatar client" />
                <div className="home-feedback_list_item_client_info">
                  <h5>Name</h5>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-button">
        <div className="section-button_container">
          <h2>Section heading</h2>
          <div className="Section-button_box">
            <button className='btn-main'>Button</button>
            <button className='btn-secondary'>Secondary button</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
