"use client";
const randomLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

const FuturisticNavbar = () => {
  return (
    <>
      <main>
        <div className="menu">
          <div className="hover__div">
            <div className="top__left"></div>
            <div className="top__right"></div>
            <div className="bottom__right"></div>
            <div className="bottom__left"></div>
          </div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </main>

      <script src="/app.js"></script>
    </>
  );
};

export default FuturisticNavbar;
