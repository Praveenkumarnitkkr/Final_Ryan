import  { useState } from "react";
import "./about.css";

function About() {
  const [topLeftContent, setTopLeftContent] = useState(
    <div>
      <h2 style={{ fontSize: "30px", position: "absolute" }}>
        Biologoy
        <hr style={{ width: "50%" }} />
      </h2>
      <p style={{paddingTop:'50px', marginTop: "50px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur fugiat quasi enim, sequi culpa eius illum
        ipsum ratione ullam, quaerat magnam magni assumenda dolorem corrupti necessitatibus modi temporibus possimus! Id
        enim totam aspernatur. Expedita voluptatem sunt exercitationem pariatur, perspiciatis vero alias. Incidunt
        repellendus totam illo consectetur alias commodi dignissimos animi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Consequatur fugiat quasi enim, sequi culpa eius illum ipsum ratione ullam, quaerat magnam magni
        assumenda dolorem corrupti necessitatibus modi temporibus possimus! Id enim totam aspernatur. Expedita
        voluptatem sunt exercitationem pariatur, perspiciatis vero alias. Incidunt repellendus totam illo consectetur
        alias commodi dignissimos animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur fugiat
        quasi enim, sequi culpa eius illum ipsum ratione ullam, quaerat magnam magni assumenda dolorem corrupti
        necessitatibus modi temporibus possimus! Id enim totam aspernatur. Expedita voluptatem sunt exercitationem
        pariatur, perspiciatis vero alias. Incidunt repellendus totam illo consectetur alias commodi dignissimos animi.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur fugiat quasi enim, sequi culpa eius illum
        ipsum ratione ullam, quaerat magnam magni assumenda dolorem corrupti necessitatibus modi temporibus possimus! Id
        enim totam aspernatur. Expedita voluptatem sunt exercitationem pariatur, perspiciatis vero alias. Incidunt
        repellendus totam illo consectetur alias commodi dignissimos animi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Consequatur fugiat quasi enim, sequi culpa eius illum ipsum ratione ullam, quaerat magnam magni
        assumenda dolorem corrupti necessitatibus modi temporibus possimus! Id enim totam aspernatur. Expedita
        voluptatem sunt exercitationem pariatur, perspiciatis vero alias. Incidunt repellendus totam illo consectetur
        alias commodi dignissimos animi.
      </p>
    </div>
  );

  const [bottomRightContent, setBottomRightContent] = useState(
    <div>
      <h2 style={{ fontSize: "30px", position: "absolute"}}>Phiolosphy
      <hr style={{ width: "50%" }} /></h2>
      <p style={{paddingTop:'50px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt ad voluptatem cum modi at nam, iste quos
        laudantium sunt sapiente repellat voluptas hic ipsa magni fugiat quis dolore perspiciatis. Enim autem aliquid
        placeat doloremque voluptatibus mollitia at eos excepturi, corporis, accusantium, accusamus dolores error optio
        iste commodi? Enim, commodi officiis! Sequi, voluptates! Officiis tempore nihil quam natus, iste voluptatibus
        debitis ad tenetur at illo, quidem incidunt tempora similique hic aspernatur molestiae voluptates eos vitae velit,
        molestias accusantium nisi reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt ad
        voluptatem cum modi at nam, iste quos laudantium sunt sapiente repellat voluptas hic ipsa magni fugiat quis
        dolore perspiciatis. Enim autem aliquid placeat doloremque voluptatibus mollitia at eos excepturi, corporis,
        accusantium, accusamus dolores error optio iste commodi? Enim, commodi officiis! Sequi, voluptates! Officiis
        tempore nihil quam natus, iste voluptatibus debitis ad tenetur at illo, quidem incidunt tempora similique hic
        aspernatur molestiae voluptates eos vitae velit, molestias accusantium nisi reprehenderit?
      </p>
    </div>
  );

  const handleClick = () => {
    // Swap content
    const temp = topLeftContent;
    setTopLeftContent(bottomRightContent);
    setBottomRightContent(temp);
  };

  return (
    <div className="full-height">
      <div>
        <h1
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontSize: "25px",
          }}
        >
          ABOUT RYAN FERNANDO
        </h1>
        <hr style={{ width: "80%", margin: "auto" }} />
      </div>

      <div className="full-content">
        <div className="top-left-content">{topLeftContent}</div>
        <div className="bottom-right-content" onClick={handleClick}>
          {bottomRightContent}
        </div>
      </div>
    </div>
  );
}

export default About;
