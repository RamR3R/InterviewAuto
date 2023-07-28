import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { Scrollbars } from "react-custom-scrollbars";
import { FaAngular, FaReact } from "react-icons/fa";
import { LiaJava } from "react-icons/lia";
import { DiNodejs } from "react-icons/di";

const SideBar1 = ({ add }) => {
  const [text, setText] = useState("");

  let course = localStorage.getItem("course") || []

  const handleClick = () => {
    add(text);
    setText("");
  };

  return (
    <div className="sidebar1-main-cont">
      <div>
      <div>
        {course==="React" ? <FaReact className="seticon" style={{ color: "#7ddfff" }} /> : course==="Java" ? <LiaJava className="seticon" style={{ color: "white" }} /> : course==="Node" ? <DiNodejs className="seticon" style={{ color: "white" }} /> : course==="Angular" ? <FaAngular className="seticon" style={{ color: "white" }} /> : ""}   
      </div>
        <div className="img-div">
          <img
            src="https://www.shutterstock.com/shutterstock/videos/1063759960/thumb/6.jpg?ip=x480"
            alt=""
            style={{ width: "150%", height: "55%" }}
          />
        </div>
      </div>
      <div>
        <div>
          <Scrollbars>
            <div className="scroll-div">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                minus asperiores reiciendis, commodi quia quidem ab, repellat
                quasi incidunt quas est? Quisquam similique repellat quae,
                expedita minima ut ipsum. Eligendi. At voluptatem ut quisquam
                repellendus consequuntur quasi dignissimos, nulla totam mollitia
                sed! Facilis cupiditate earum, similique, impedit provident
                laboriosam dolores natus libero molestiae possimus ipsam quidem
                fuga perspiciatis animi explicabo. maxime nam sit! Facilis fuga
                odio repellat voluptate eius excepturi dolore omnis atque
                libero? pturi ad! Hic, voluptatibus aut. Dolores, ab earum?
                Voluptas vero dolore, voluptate distinctio Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Iste minus asperiores
                reiciendis, commodi quia quidem ab, repellat quasi incidunt quas
                est? Quisquam similique repellat quae, expedita minima ut ipsum.
                Eligendi. At voluptatem ut quisquam repellendus consequuntur
                quasi dignissimos, nulla totam mollitia sed! Facilis cupiditate
                earum, similique, impedit provident laboriosam dolores natus
                libero molestiae possimus ipsam quidem fuga perspiciatis animi
                explicabo. maxime nam sit! Facilis fuga odio repellat voluptate
                eius excepturi dolore omnis atque libero? pturi ad! Hic,
                voluptatibus aut. Dolores, ab earum? Voluptas vero dolore,
                voluptate distinctioLorem ipsum dolor, sit amet consectetur
                adipisicing elit. Iste minus asperiores reiciendis, commodi quia
                quidem ab, repellat quasi incidunt quas est? Quisquam similique
                repellat quae, expedita minima ut ipsum. Eligendi. At voluptatem
                ut quisquam repellendus consequuntur quasi dignissimos, nulla
                totam mollitia sed! Facilis cupiditate earum, similique, impedit
                provident laboriosam dolores natus libero molestiae possimus
                ipsam quidem fuga perspiciatis animi explicabo. maxime nam sit!
                Facilis fuga odio repellat voluptate eius excepturi dolore omnis
                atque libero? pturi ad! Hic, voluptatibus aut. Dolores, ab
                earum? Voluptas vero dolore, voluptate distinctio
              </p>
            </div>
          </Scrollbars>
        </div>
        <div className="screen-input-div">
          <input
            type="text"
            placeholder="send a message"
            name="text"
            value={text}
            onChange={(e) => handleClick(e.target.value)}
          />
          <button>
            <RiSendPlane2Fill
              style={{ marginLeft: "1rem", fontSize: "25px", color: "grey" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar1;
