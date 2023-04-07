import Icons from '../../images/sprite.svg';

const CustomIcon = ({ name, color, size }) => {
  return (
    <svg width={size} viewBox="0 0 32 32" fill={color}>
      <use href={Icons + `#${name}`} />
    </svg>
  );
};

export default CustomIcon;
