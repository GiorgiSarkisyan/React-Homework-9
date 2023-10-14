import leftSideImage from '../img/left-side.svg';
import box from '../img/box.svg'
import responsiveLeftSide from '../img/responsive-left-side.svg'

function LeftSide() {
    const maxWidth = window.innerWidth;
    return (
        <div className="main-page-content-lSide">
          {maxWidth > 1000 ? (
            <div className="left-side-content">
              <div className="left-side-main-img">
                <img src={leftSideImage} alt="img" />
              </div>
              <div className="left-side-box-img">
                <img src={box} alt="box" />
              </div>
            </div>
          ) : (
            <div className="left-side-responsive-img">
              <img src={responsiveLeftSide} alt="img" />
            </div>
          )}
        </div>
    )
}

export default LeftSide