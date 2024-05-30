import "./podcast.css";
import MainLayout from "../../components/MainLayout";

const Podcast = () => {
  const podcastItems = Array.from({ length: 6 }, (_, index) => (
    <div className="podcast-container" key={index}>
      <img src={"https://picsum.photos/200/300"} alt={`Podcast ${index + 1}`} />
      <p className="pd-description">
        Description for podcast Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sequi omnis culpa voluptates. {index + 1}
      </p>
      <p>June 24,2024</p>
      <p className="pd-description2">Another description Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, debitis!</p>
      <button className="pd-button">Read More</button>
    </div>
  ));

  return (
    <MainLayout>
      <div>
        <h1 className="podcast-article">ARTICLE</h1>
      </div>
      <div className="podcast-page">
        {podcastItems}
        <div className="pd-navigation">
          <a href="/page/2">1</a>
          <a href="/page/3">2</a>
          <a href="/page/4">3</a>
        </div>
      </div>
    </MainLayout>
  );
};

export default Podcast;
