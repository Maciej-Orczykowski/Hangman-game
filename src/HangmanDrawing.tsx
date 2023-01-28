const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "2px",
      height: "100px",
      background: "black",
      border: "8px solid black",
      position: "absolute",
      top: "115px",
      right: "-3.5px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "2px",
      background: "black",
      border: "8px solid black",
      position: "absolute",
      top: "150px",
      right: "-82px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "2px",
      background: "black",
      border: "8px solid black",
      position: "absolute",
      top: "150px",
      right: "7px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "3px",
      background: "black",
      border: "7px solid black",
      position: "absolute",
      top: "210px",
      right: "-103px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "3px",
      background: "black",
      border: "7px solid black",
      position: "absolute",
      top: "210px",
      right: "-1px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
