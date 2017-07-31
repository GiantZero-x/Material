import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
// import './RaisedButton.css';
 
class RaisedButtonPage extends Component {
 
  render() {
    const raisedBntCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
);

export default RaisedButtonExampleSimple;`;
    const complexBtnCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const RaisedButtonExampleComplex = () => (
  <div>
    <RaisedButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
    >
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
    <RaisedButton
      label="Label before"
      labelPosition="before"
      primary={true}
      icon={<ActionAndroid />}
      style={styles.button}
    />
    <RaisedButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      label="Github Link"
      secondary={true}
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
);

export default RaisedButtonExampleComplex;`;
   const iconBtnCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const style = {
  margin: 12,
};

const RaisedButtonExampleIcon = () => (
  <div>
    <RaisedButton
      icon={<ActionAndroid />}
      style={style}
    />
    <RaisedButton
      backgroundColor="#a4c639"
      icon={<ActionAndroid color={fullWhite} />}
      style={style}
    />
    <RaisedButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />
  </div>
);

export default RaisedButtonExampleIcon;`;
    const styles = {
      button: {
        margin: 12,
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
    };
		const style = {
      margin: 12,
    };
    const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'backgroundColor',
      	'string',
      	'',
      	'覆盖按钮的默认背景颜色，但不是默认的禁用背景颜色（使用disabledBackgroundColor为此）。',
      ], [
      	'buttonStyle',
      	'object',
      	'',
      	'覆盖按钮元素的内联样式。',
      ], [
      	'children',
      	'node',
      	'',
      	'按钮的内容。 如果通过标签支架提供标签，除了此处提供的内容之外，还将显示标签内的文本。',
      ], [
      	'className',
      	'string',
      	'',
      	'根元素的CSS类名称。',
      ], [
      	'containerElement',
      	'union: string element',
      	'',
      	'用作RaisedButton的容器的元素。 使用DOM元素或ReactElement的字符串。 这对于将RaisedButton包装在自定义的Link组件中很有用。 如果给出了一个ReactElement，请确保它将所有给定的道具传递到基础的DOM元素，并使其子进程正确集成。',
      ], [
      	'disableTouchRipple',
      	'bool',
      	'',
      	'如果为true，则元素的纹波效果将被禁用。',
      ], [
      	'disabled',
      	'string',
      	'false',
      	'如果为true，该按钮将被禁用。',
      ], [
      	'disabledBackgroundColor',
      	'string',
      	'',
      	'覆盖按钮禁用时的默认背景颜色。',
      ], [
        'disabledLabelColor',
        'string',
        '',
        '当按钮被禁用时，按钮的标签的颜色。',
      ], [
        'fullWidth',
        'bool',
        'false',
        '如果为true，按钮将占据其容器的全部宽度。',
      ], [
        'href',
        'string',
        '',
        '当点击按钮时只想这个URL的链接',
      ], [
        'icon',
        'node',
        '',
        '在按钮内显示的图标。',
      ], [
        'label',
        'validateLabel',
        '',
        '要在按钮中显示的标签。 如果通过child props提供内容，除了此处提供的标签之外，还将显示该内容。',
      ], [
        'labelColor',
        'string',
        '',
        '按钮的标签颜色。',
      ], [
        'labelPosition',
        'string',
        "enum: 'before' 'after' 'after'",
        '按钮的标签相对于按钮的child的位置。',
      ], [
        'labelStyle',
        'object',
        '',
        '覆盖按钮的标签元素的内联样式。',
      ], [
        'onTouchTap',
        'function',
        '',
        <div>触摸按钮时触发回调功能。<br />
          Signature:
          function(event: object) => void
          event: TouchTap事件定位按钮。
        </div>,
      ], [
        'overlayStyle',
        'object',
        '',
        '覆盖按钮叠加层的内联样式。',
      ], [
        'primary',
        'bool',
        'false',
        '如果为真,该按钮将使用主题的primary颜色。',
      ], [
        'rippleStyle',
        'object',
        '',
        '覆盖波纹元素的内联样式。',
      ], [
        'secondary',
        'bool',
        '',
        '如果为true，按钮将使用主题的secondary颜色。 如果secondary和primary都是true，按钮将使用主题的primary颜色。',
      ], [
        'style',
        'object',
        '',
        '覆盖根元素的内联样式。',
      ]]
		};
    return (<div>
	    <div className="markdown-body">
	      <h2>Raised Button</h2>
	      <p>此<a href="https://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons">按钮</a>用于将维度添加到大多数平面布局，并强调页面上的重要功能。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={raisedBntCode} />
          <div className="show-examples">
	          <p>RaisedButton 默认颜色, primary, secondary and and disabled.</p>
            <RaisedButton label="Default" style={style} />
            <RaisedButton label="Primary" primary={true} style={style} />
            <RaisedButton label="Secondary" secondary={true} style={style} />
            <RaisedButton label="Disabled" disabled={true} style={style} />
            <br />
            <br />
            <RaisedButton label="Full width" fullWidth={true} />
	        </div>
	      </ContainerPreCode>
        <ContainerPreCode title="Complex examples">
          <PrintCode code={complexBtnCode} />
          <div className="show-examples">
            <p>第一个示例使用<span className="code">input</span>作为子元素。 第二个例子有一个<span className="code">SVG Icon</span>，标签位于后面。 最后一个例子使用<span className="code">Font Icon</span>，并被包裹在一个锚标签中。</p>
            <RaisedButton
              label="Choose an Image"
              labelPosition="before"
              style={styles.button}
              containerElement="label"
            >
              <input type="file" style={styles.exampleImageInput} />
            </RaisedButton>
            <RaisedButton
              label="Label before"
              labelPosition="before"
              primary={true}
              icon={<ActionAndroid />}
              style={styles.button}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              label="Github Link"
              secondary={true}
              style={styles.button}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        </ContainerPreCode>
        <ContainerPreCode title="Icon examples">
          <PrintCode code={iconBtnCode} />
          <div className="show-examples">
            <p>使用没有标签的图标的提升按钮的示例。 第一个示例使用SVG图标，并具有默认颜色。 第二个例子显示如何改变图标和背景颜色。 最后一个例子使用字体图标，并被包裹在一个锚标签中。</p>
            <RaisedButton
              icon={<ActionAndroid />}
              style={style}
            />
            <RaisedButton
              backgroundColor="#a4c639"
              icon={<ActionAndroid color={fullWhite} />}
              style={style}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
              style={style}
            />
          </div>
        </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	     </div>
	    <FooterBanner />            
  </div>);
  }
}

export default RaisedButtonPage;
