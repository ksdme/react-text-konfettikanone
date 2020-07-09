import { css, keyframes } from "emotion";

export const wrapper = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

export const particle = css`
  position: absolute;
  top: 0;
  will-change: transform;
  transform: translateY(-100%);
`;

export const Slow = (height: string) => {
  return keyframes`
    0% {
      opacity: 0.5;
      transform: translate3d(0, 0, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(-25px, ${height}, 0);
    }
  `;
};

export const Medium = (height: string) => {
  return keyframes`
    0% {
      opacity: 0.5;
      transform: translate3d(0, 0, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(100px, ${height}, 0);
    }
  `;
};

export const Fast = (height: string) => {
  keyframes`
    0% {
      opacity: 0.5;
      transform: translate3d(0, 0, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(-50px, ${height}, 0);
    }
  `;
};
