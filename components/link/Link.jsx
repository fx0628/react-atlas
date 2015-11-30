import React from 'react';
import ClassNames from 'classnames';
import style from './style';
import FontIcon from '../font_icon';

const Link = (props) => {
  const className = ClassNames(style.root, props.className);
  return (
    <a {...props} data-react-toolbox='link'className={className}>
      {props.icon ? <FontIcon className={style.icon} value={props.icon} /> : null}
      {props.label ? <abbr>{props.label}</abbr> : null}
      {props.count && parseInt(props.count) !== 0 ? <small>{props.count}</small> : null}
    </a>
  );
};

Link.propTypes = {
  className: React.PropTypes.string,
  count: React.PropTypes.number,
  icon: React.PropTypes.string,
  label: React.PropTypes.string
};

Link.defaultProps = {
  className: ''
};

export default Link;
