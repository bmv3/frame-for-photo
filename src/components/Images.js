const Images = ({ration, horizontalOffset, verticalOffset, height, img}) => {
  // console.log(Number((window.innerWidth - img.width) / 2) + Number(horizontalOffset));
  
  const x = Number(img.width - (img.width) / 2);
  
  console.log(x, horizontalOffset);
  return (
        <div className="images">
        <img
          src="img/frame.png"
          width="320"
          height="320"
          alt="frame"
          id="frame"
          style={{
            "border": "1px black solid"
          }} />

        <img src={img.src}
          alt="foto"
          id="photo"
          style={{
            "left": `${x + Number(horizontalOffset)}px`,
            "top": `${verticalOffset}px`,
            "height": `${height + (height * ration / 100)}px`
          }} />
      </div>
    );
}

export default Images;
