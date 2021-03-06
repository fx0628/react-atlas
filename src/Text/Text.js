import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import CSSModules from "react-css-modules";
import styles from "./Text.css";

export class Text extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { as, body, children, className, ...other } = this.props;

    // Not all available elements are included below, only the ones needing custom styling.
    const textStyles = cx({
      blockquote: as === "blockquote",
      bodyFont: body,
      code: as === "code",
      defaultFont: !body && as !== "label",
      h1: as === "h1",
      h2: as === "h2",
      h3: as === "h3",
      h4: as === "h4",
      h5: as === "h5",
      h6: as === "h6",
      label: as === "label",
      link: as === "a",
      small: as === "small"
    });

    const TextElement = `${this.props.as}`;

    let element = (
      <TextElement className={cx(className)} styleName={textStyles} {...other}>
        {children}
      </TextElement>
    );

    return element;
  }
}

Text.propTypes = {
  /** Defines what HTML element to render the Text component as. Possibilities include, but are not limited to b, body, del, em, h1, h2, h3, h4, h5, h6, i, ins, label, mark, p, small, strong, sub, and sup. */
  as: PropTypes.string,
  /** Allows theme to differentiate font-family between default font and body copy in variables.css */
  body: PropTypes.bool,
  /**
   * Text, any HTML element, or React Component.
   */
  children: PropTypes.node,
  /** An Object, array, or string of CSS classes to apply to Input. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

Text.defaultProps = {
  as: "span"
};

export default CSSModules(Text, styles, { allowMultiple: true });
