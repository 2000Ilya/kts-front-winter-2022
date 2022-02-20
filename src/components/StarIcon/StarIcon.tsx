import React from "react";
import "./StarIcon.css";

type StarIconProps = {
  currentColor: string;
  className: string;
};

const StarIcon: React.FC<StarIconProps> = ({ currentColor }) => {
  return (
    <svg
      className="star-icon"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg"
      fill={currentColor}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 0.25C8.13999 0.24991 8.27724 0.289014 8.39618 0.362887C8.51512 0.43676 8.611 0.542452 8.67298 0.668L10.555 4.483L14.765 5.095C14.9034 5.11511 15.0335 5.17355 15.1405 5.26372C15.2475 5.35388 15.3271 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.3519 6.1525 15.2811 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8623 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L7.99998 12.347L4.23398 14.327C4.11017 14.392 3.97065 14.4211 3.83117 14.411C3.6917 14.4009 3.55782 14.352 3.44466 14.2699C3.33151 14.1877 3.24357 14.0755 3.19079 13.946C3.13802 13.8165 3.12249 13.6749 3.14598 13.537L3.86598 9.343L0.817981 6.374C0.717548 6.27632 0.646481 6.15247 0.612833 6.01647C0.579186 5.88047 0.584303 5.73777 0.627606 5.60453C0.670908 5.47129 0.750665 5.35284 0.857837 5.26261C0.96501 5.17238 1.09531 5.11397 1.23398 5.094L5.44398 4.483L7.32698 0.668C7.38896 0.542452 7.48485 0.43676 7.60379 0.362887C7.72272 0.289014 7.85997 0.24991 7.99998 0.25ZM7.99998 2.695L6.61498 5.5C6.5612 5.6089 6.48177 5.70311 6.38353 5.77453C6.28528 5.84595 6.17116 5.89244 6.05098 5.91L2.95398 6.36L5.19398 8.544C5.28113 8.62886 5.34634 8.73365 5.38397 8.84933C5.4216 8.96501 5.43052 9.0881 5.40998 9.208L4.88198 12.292L7.65098 10.836C7.75861 10.7794 7.87838 10.7499 7.99998 10.7499C8.12158 10.7499 8.24135 10.7794 8.34898 10.836L11.119 12.292L10.589 9.208C10.5684 9.0881 10.5774 8.96501 10.615 8.84933C10.6526 8.73365 10.7178 8.62886 10.805 8.544L13.045 6.361L9.94898 5.911C9.8288 5.89344 9.71468 5.84695 9.61644 5.77553C9.51819 5.70411 9.43877 5.6099 9.38498 5.501L7.99998 2.694V2.695Z"
      />
    </svg>
  );
};

export default StarIcon;
