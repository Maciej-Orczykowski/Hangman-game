import styles from "./HangmanDrawing.module.css";

const HEAD = <div className={`${styles.Head}`} />;

const BODY = <div className={`${styles.Body}`} />;

const RIGHT_ARM = <div className={`${styles.RightArm}`} />;

const LEFT_ARM = <div className={`${styles.LeftArm}`} />;

const RIGHT_LEG = <div className={`${styles.RightLeg}`} />;

const LEFT_LEG = <div className={`${styles.LeftLeg}`} />;

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
          marginRight: "75px",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "100px",
          background: "black",
          marginLeft: "73px",
        }}
      />
      <div
        style={{
          height: "280px",
          width: "10px",
          background: "black",
          marginLeft: "73px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "150px",
          background: "black",
          marginRight: "100px",
        }}
      />
    </div>
  );
}
