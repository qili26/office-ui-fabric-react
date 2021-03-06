import * as React from 'react';
import { BaseButton } from '../BaseButton';
import { BaseComponent, customizable, nullRender } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
import { getStyles } from './IconButton.styles';

@customizable('IconButton', ['theme', 'styles'])
export class IconButton extends BaseComponent<IButtonProps, {}> {
  /**
   * Tell BaseComponent to bypass resolution of componentRef.
   */
  protected _shouldUpdateComponentRef = false;

  public render(): JSX.Element {
    const { styles, theme } = this.props;

    return (
      <BaseButton
        {...this.props}
        variantClassName="ms-Button--icon"
        styles={getStyles(theme!, styles)}
        onRenderText={nullRender}
        onRenderDescription={nullRender}
      />
    );
  }
}
