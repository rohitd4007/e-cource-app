import "./account.css";
function Account() {
  return (
    <div class="chessboard">
      <div class="row">
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
      </div>

      <div class="row">
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
      </div>

      <div class="row">
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
      </div>

      <div class="row">
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
      </div>

      <div class="row">
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
      </div>

      <div class="row">
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
      </div>

      <div class="row">
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
      </div>

      <div class="row">
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
        <div class="black-box"></div>
        <div class="white-box"></div>
      </div>
    </div>
  );
}

const Row = () => {
  return (
    <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
};

export default Account;
