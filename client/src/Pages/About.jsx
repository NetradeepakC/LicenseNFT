import React from "react";
import CircularGradient from "../Components/HomePage/CircularGradient";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/HomePage/NavBar";
const About = (props) => {
  return (
    <div className="bg-mainBg flex flex-wrap flex-col">
      <CircularGradient />
      <NavBar at="about" typeOfUser={props.typeOfUser}></NavBar>
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white font-poppins self-center">
        Who Are We ?
      </h1>
      <div className="text-white w-2/3 self-center font-poppins">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, velit
        dolorum! Consequuntur, eaque impedit esse est deleniti nulla facilis ea
        dolore quidem numquam explicabo fugit similique voluptatum, odio quis
        consequatur. Officiis tempore molestias blanditiis eius in modi nulla
        odit quam? Autem alias quidem amet distinctio voluptatem quisquam
        accusantium voluptate animi, minus fuga. Rem veritatis, laborum nobis
        eius eaque enim corrupti nisi consectetur quam neque at aperiam culpa
        expedita deleniti consequuntur ipsam dolores facere saepe accusamus
        autem rerum nesciunt quia doloremque? Beatae at doloremque repellat
        soluta vitae, ratione repudiandae dolorem, vel cum eveniet qui
        perferendis dicta rerum accusamus, cupiditate similique aperiam
        consequuntur recusandae est possimus molestiae alias nisi provident!
        Quos natus cupiditate nesciunt provident esse molestiae eius magnam!
        Dolore nemo maxime quos ex id nisi in. Dignissimos, magni aspernatur
        quod, earum illo repellat, iusto et soluta praesentium quia tempore!
        Provident nulla soluta amet eius corrupti neque earum quo dolorum fugiat
        dolorem mollitia repellat expedita voluptates animi quibusdam illo
        nostrum dolor at eos placeat ex accusantium harum, quia ratione! Autem
        eos quidem ratione doloremque laborum accusantium nostrum rem illo
        quaerat aliquam! Dolorum minima expedita consequatur nemo facilis, nobis
        nam dignissimos reprehenderit ab, sint magni aliquam, asperiores
        veritatis repudiandae quas sunt ex quaerat.
      </div>
    </div>
  );
};

export default About;
